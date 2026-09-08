import sharp from 'sharp'
import { mkdir } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'

// Generate web copies without changing the original photographs.
const destination = new URL('../public/images/', import.meta.url)
await mkdir(destination, { recursive: true })
const photographs = [
  { name: 'diving', path: '../assets/originals/diving.jpg' },
  { name: 'ski', path: '../assets/originals/ski.jpg' },
  { name: 'portrait', path: '../images/mmexport1736986253924.jpg' },
  { name: 'ocean', path: '../images/1788859614467.jpg' },
  { name: 'exhibition', path: '../images/1788859614490.jpg' },
]
for (const { name, path } of photographs) {
  const source = fileURLToPath(new URL(path, import.meta.url))
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
