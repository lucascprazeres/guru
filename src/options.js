module.exports = {
  '--limit': (linksArray, selectedNumberOfResults=1) => {
    const filteredArrayOfLinks = [];
    let counter = 0;
    while (filteredArrayOfLinks.length < selectedNumberOfResults) {
      if (linksArray[counter].includes('stackoverflow.com') && 
        !linksArray[counter].includes('/tagged')
        ) {
          filteredArrayOfLinks.push(linksArray[counter])
      }
      counter++;
    }

    return filteredArrayOfLinks;
  }
}