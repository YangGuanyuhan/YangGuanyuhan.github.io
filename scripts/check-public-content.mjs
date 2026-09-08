import { readdir, readFile } from 'node:fs/promises'
import { extname, join, relative } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const root = fileURLToPath(new URL('../', import.meta.url))
const textExtensions = new Set(['.ts', '.tsx', '.js', '.css', '.html', '.svg', '.txt', '.xml'])
const imageExtensions = new Set(['.jpg', '.jpeg', '.png', '.webp'])
const failures = []
const patterns = [
  ['possible identity number', /\b[1-9]\d{5}(?:18|19|20)\d{9}[\dXx]\b/],
  ['private phone number', /(?<![\d.])(?:\+?86[\s-]?)?1[3-9]\d[\s-]?\d{4}[\s-]?\d{4}(?![\d.])/],
  ['telephone link', /tel:/i],
  [
    'access credential',
    /\b(?:sk-[A-Za-z0-9_-]{20,}|gh[pousr]_[A-Za-z0-9]{20,}|github_pat_[A-Za-z0-9_]{20,})/,
  ],
  ['private key', /-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/],
  ['local absolute path', /\b[A-Z]:\\/i],
]

async function inspect(path, isPublic = false) {
  const name = relative(root, path)
  const extension = extname(path).toLowerCase()
  if (textExtensions.has(extension)) {
    const contents = await readFile(path, 'utf8')
    for (const [label, pattern] of patterns) {
      if (pattern.test(contents)) failures.push(`${name}: ${label}`)
    }
  }
  if (isPublic && imageExtensions.has(extension)) {
    const metadata = await sharp(path).metadata()
    if (metadata.exif || metadata.xmp || metadata.iptc)
      failures.push(`${name}: embedded photo metadata`)
  }
  if (isPublic && ['.pdf', '.doc', '.docx', '.xlsx', '.zip', '.env', '.log'].includes(extension)) {
    failures.push(`${name}: private document or archive requires explicit review`)
  }
}

async function walk(folder, isPublic) {
  for (const entry of await readdir(folder, { withFileTypes: true })) {
    const path = join(folder, entry.name)
    if (entry.isDirectory()) await walk(path, isPublic)
    else await inspect(path, isPublic)
  }
}

await walk(join(root, 'src'), false)
await walk(join(root, 'public'), true)
await inspect(join(root, 'index.html'))
if (failures.length) {
  // Report file and category only, never print a suspected sensitive value.
  console.error(failures.join('\n'))
  process.exitCode = 1
} else {
  console.log(
    'Public content checks passed: no matching sensitive patterns or embedded photo metadata.',
  )
}
