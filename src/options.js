module.exports = {
  long: {
    '--limit': (linksArray, selectedNumberOfResults = 1) => {
      return linksArray.splice(0, selectedNumberOfResults);
    },
  },
  short: {
    '-l': (answerParagraphsOfAllPages) => {
      return answerParagraphsOfAllPages.map(pageParaphs => {
        return pageParaphs.map(p => p.toLowerCase())
      });
    },
    '-u': (answerParagraphsOfAllPages) => {
      return answerParagraphsOfAllPages.map(pageParaphs => {
        return pageParaphs.map(p => p.toUpperCase())
      });
  }
  }
}