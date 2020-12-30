const puppeteer = require("puppeteer");

const arguments = process.argv;
const question = arguments[2] + ' stack overflow';

async function main() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto('https://google.com/');
  await page.type('input[type="text"]', question);
  
  await Promise.all([
    page.keyboard.press('Enter'),
    page.waitForNavigation(),
  ]);

  await Promise.all([
    page.click('h3'),
    page.waitForNavigation()
  ])

  const titleHandle = await page.$('.question-hyperlink');
  console.log(titleHandle);

  // await browser.close();

}

main();