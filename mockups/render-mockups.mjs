import { chromium } from 'playwright';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const cwd = process.cwd();
const targets = [
  { html: 'mockups/mockup-1.html', png: 'mockups/mockup-1.png' },
  { html: 'mockups/mockup-2.html', png: 'mockups/mockup-2.png' },
  { html: 'mockups/mockup-3.html', png: 'mockups/mockup-3.png' },
];

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({
  viewport: { width: 1600, height: 1000 },
  deviceScaleFactor: 2,
});

for (const target of targets) {
  const page = await context.newPage();
  const filePath = path.join(cwd, target.html);
  await page.goto(pathToFileURL(filePath).href, { waitUntil: 'networkidle' });
  await page.waitForTimeout(800);
  await page.screenshot({ path: target.png, fullPage: true });
  await page.close();
}

await context.close();
await browser.close();
