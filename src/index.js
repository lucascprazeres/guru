const puppeteer = require("puppeteer");
const options = require("./options");

// arg1-> filename, arg2-> searchterm, [arg3]-> --limit + (number of results)
const arguments = process.argv;
const question = arguments[2] + ' stack overflow';
const longOptions = [];
const shortOptions = [];

if (arguments.length > 3) {
  for (arg of arguments.splice(3,)) {
    if (arg.includes('--')) {
      longOptions.push(arg);
    }
    else {
      shortOptions.push(arg);
    }
  }
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

  const allStackoverflowLinks = await mainPage.evaluate(() => {
    const hyperlinks = [];

    for (a of document.querySelectorAll('.rc a')) {
      if (a.href.includes('stackoverflow.com')) {
        hyperlinks.push(a.href);
      }
    }

    return hyperlinks;
  });

  const linksWithoutWebCache = allStackoverflowLinks.filter(link => 
    !link.includes('webcache'),
  );
  const linksWithoutTaggedPostPages = linksWithoutWebCache.filter(link => 
    !link.includes('/tagged'),
  );

  let linksAfterOptions = [...linksWithoutTaggedPostPages];

  // for long options
  let key;
  let value;
  for (opt of longOptions) {
    [key, value] = opt.split('=');
    linksAfterOptions = options.long[key](linksAfterOptions, value);
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

  // for short options
  let resultsAfterOptions;
  for (opt of shortOptions) {
    resultsAfterOptions = options.short[opt](result);
  }

  resultsAfterOptions.forEach(answer => {
    answer.forEach(p => console.log(`${p}\n`));
    console.log('='.repeat(50));
  });

  await browser.close();
})();
