const puppeteer = require("puppeteer");

const arguments = process.argv;
const question = arguments[2] + ' stack overflow';

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto('https://google.com/');
  await page.type('input[type="text"]', question);
  
  await Promise.all([
    page.keyboard.press('Enter'),
    page.waitForNavigation(),
  ]);

  const allLinks = await page.evaluate(() => {
    const anchorList = [];

    for (a of document.querySelectorAll('.rc a')) {
      anchorList.push(a.href);
    }

    return anchorList;
  });

  let correctLink;

  for (link of allLinks) {
    if (link.includes('stackoverflow.com') && !link.includes('/tagged')) {
      correctLink = link;
      break;
    }
  }

  await page.goto(correctLink);

  await page.waitForSelector('a.question-hyperlink');

  const questionTitle = await page.evaluate(el => el.innerText,
    await page.$('a.question-hyperlink')
  )

  console.log(`\ngetting answer to: ${questionTitle}...\n`);

  await page.waitForSelector('.answer');
  const answerParagraphs = await page.evaluate(() => {
    const answerElements = document.querySelectorAll('.answer .js-post-body p');
    
    const paragraphList = [];

    for (p of answerElements) {
      paragraphList.push(p.innerText);
    }

    return paragraphList;
  });

  answerParagraphs.forEach(p => console.log(p+'\n'));

  await browser.close();
})();