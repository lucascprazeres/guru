module.exports = {
  '--limit': (linksArray, selectedNumberOfResults = 1) => {
    return linksArray.splice(0, selectedNumberOfResults);
  }
}