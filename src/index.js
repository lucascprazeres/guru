const puppeteer = require("puppeteer");
const options = require("./options");

// arg1-> filename, arg2-> searchterm, [arg3]-> --limit + (number of results)
const arguments = process.argv;
const question = arguments[2] + ' stack overflow';
const optionsAndValues = {};

if (arguments.length > 3) {
  let key, value;
  for (let i = 3; i < arguments.length; i++) {
    [key, value] = arguments[i].split('=');
    optionsAndValues[key] = value;
  }
} else {
  optionsAndValues['--limit'] = 1;
}

const scrappPageAndReturnAnswerParagraphs = async (pageInstance, link) => {
  await pageInstance.goto(link);

  await pageInstance.waitForSelector('a.question-hyperlink');

  const questionTitle = await pageInstance.evaluate(el => el.innerText,
    await pageInstance.$('a.question-hyperlink')
  )

  console.log(`\ngetting answer to: ${questionTitle}...\n`);

  await pageInstance.waitForSelector('.answer');
  const answerParagraphs = await pageInstance.evaluate(() => {
    const answerElements = document.querySelectorAll('.answer .js-post-body p');

    const paragraphList = [];

    for (p of answerElements) {
      paragraphList.push(p.innerText);
    }

    return paragraphList;
  });

  return answerParagraphs;
}

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const mainPage = await browser.newPage();

  await mainPage.goto('https://google.com/');
  await mainPage.type('input[type="text"]', question);

  await Promise.all([
    mainPage.keyboard.press('Enter'),
    mainPage.waitForNavigation(),
  ]);

  const allLinks = await mainPage.evaluate(() => {
    const anchorList = [];

    for (a of document.querySelectorAll('.rc a')) {
      anchorList.push(a.href);
    }

    return anchorList;
  });

  let linksAfterOptions = [...allLinks];

  for (opt of Object.keys(optionsAndValues)) {
    linksAfterOptions = options[opt](linksAfterOptions, optionsAndValues[opt]);
  }

  const pageArray = [];
  for (link of linksAfterOptions) {
    pageArray.push(await browser.newPage());
  }

  const result = await Promise.all([
    ...linksAfterOptions.map((link, index) => {
      return scrappPageAndReturnAnswerParagraphs(pageArray[index], link);
    })
  ]);

  result.forEach(answer => {
    answer.forEach(p => console.log(`${p}\n`));
    console.log('='.repeat(50));
  })

  await browser.close();
})();
