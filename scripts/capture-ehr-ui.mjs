import { chromium } from 'playwright'
import { mkdirSync } from 'fs'
import { dirname, join, resolve } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')
const html = join(root, 'public/ehr-ui/screens.html')
const outDir = join(root, 'public/media/images')
mkdirSync(outDir, { recursive: true })

const names = ['dashboard', 'chart', 'schedule', 'billing', 'telehealth', 'interop']

const browser = await chromium.launch({ headless: true })
const page = await browser.newPage({
  viewport: { width: 1400, height: 900 },
  deviceScaleFactor: 2,
})

await page.goto(`file:///${html.replace(/\\/g, '/')}`, { waitUntil: 'networkidle' })

for (const name of names) {
  const el = page.locator(`#${name}`)
  await el.scrollIntoViewIfNeeded()
  // Exact product frame — fixed 1280×720 in HTML
  await el.screenshot({
    path: join(outDir, `ehr-soft-${name}.jpg`),
    type: 'jpeg',
    quality: 94,
    animations: 'disabled',
  })
  console.log('captured', name, '1280x720 @2x')
}

await browser.close()
console.log('done')
