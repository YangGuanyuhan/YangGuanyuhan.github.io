import sharp from 'sharp'
import { mkdir } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'

// Generate web copies without changing the original photographs.
const destination = new URL('../public/images/', import.meta.url)
await mkdir(destination, { recursive: true })
for (const name of ['diving', 'ski']) {
  const source = fileURLToPath(new URL(`../assets/originals/${name}.jpg`, import.meta.url))
  for (const width of [480, 960]) {
    const suffix = width === 480 ? '-small' : ''
    const target = fileURLToPath(new URL(`${name}${suffix}.webp`, destination))
    const result = await sharp(source)
      .rotate()
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 84 })
      .toFile(target)
    console.log(
      `${name}${suffix}.webp: ${result.width}×${result.height}, ${Math.round(result.size / 1024)} KB`,
    )
  }
}
