const puppeteer = require('puppeteer')
const slugify = require('@sindresorhus/slugify')

module.exports = async url => {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  })
  const page = await browser.newPage()
  page.setViewport({
    width: 1024,
    height: 900,
  })
  await page.goto(url)
  const title = await page.title()
  const filename = `${slugify(title)}-screenshot.png`
  await page.screenshot({
    path: filename,
  })

  await browser.close()
  return filename
}
