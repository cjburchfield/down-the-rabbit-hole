//Merging all 12 chapters into one object
export const combineChapters = (chapters) => {  
  const combinedBook = {};
  let totalWords = 0;

  for (const chapter of chapters) {
    for (const [word, count] of Object.entries(chapter)) { // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
        totalWords += count;
      if (combinedBook.hasOwnProperty(word)) { // https://stackoverflow.com/questions/9396569/what-is-property-in-hasownproperty-in-javascript
        combinedBook[word] += count;
      } else {
        combinedBook[word] = count;
      }
    }
  }
  
  //Gathering data points
  const sortedBook = Object.entries(combinedBook).sort((a, b) => b[1] - a[1]); //https://forum.freecodecamp.org/t/arr-sort-a-b-a-b-explanation/167677
  const filteredBook = sortedBook.filter(([word, count]) => word.length > 5);
  const sixWords = sortedBook.filter(([word, count]) => word.length > 5).length;
  const tenWords = sortedBook.filter(([word, count]) => word.length > 9).length;
  const lyWords = sortedBook.filter(([word, count]) => word.endsWith("ly")).length;
  const adverbs = filteredBook.filter(([word, count]) => word.endsWith("ly")).slice(0,10);

  //Longest word data 
  let longestWord = ''
  let longestWords = [];
  
  for (const [word, count] of sortedBook) {
    if (word.length > longestWord.length) {
      longestWord = word;
      longestWords = [word];
    } else if (word.length === longestWord.length) {
      longestWords.push(word)
    }
  }

  const topWords = filteredBook.slice(0, 10);
  const numPairs = sortedBook.length;
  return { topWords, numPairs, longestWords, totalWords, tenWords, sixWords, lyWords, adverbs };
}

//Top Word List
export const createTopWordsList = (topWords) => {
  const topWordsList = document.createElement("ul");
  
  for (const [word, count] of topWords) {
    const listItem = document.createElement("li");
    listItem.textContent = `${word}: ${count} apperances`;
    listItem.setAttribute("data-word", word)
    topWordsList.appendChild(listItem);
  }
  return { topWordsList };
};




//Creating the adverb list
// export const createAdverbList = (adverbs) => {
//     const adverbsList = document.createElement("ul");
//     const adverbWords = adverbs.map(([word, count]) => word);

    
//     for (const word of adverbWords) {
//       const listItem = document.createElement("li");
//       listItem.textContent = word;
//       listItem.setAttribute("data-word", word);
//       adverbsList.appendChild(listItem);
//     }

//   return { adverbsList };
// };
    
export const createAdverbList = (adverbs) => {
  const adverbsList = document.createElement("div");
  const adverbWords = adverbs.map(([word, count]) => word);

  const adverbsRow1 = document.createElement("ul");
  for (let i = 0; i < 5; i++) {
    const word = adverbWords[i];
    const listItem = document.createElement("li");
    listItem.textContent = word;
    listItem.setAttribute("data-word", word);
    adverbsRow1.appendChild(listItem);
  }
  adverbsList.appendChild(adverbsRow1);

  const adverbsRow2 = document.createElement("ul");
  for (let i = 5; i < 10; i++) {
    const word = adverbWords[i];
    const listItem = document.createElement("li");
    listItem.textContent = word;
    listItem.setAttribute("data-word", word);
    adverbsRow2.appendChild(listItem);
  }
  adverbsList.appendChild(adverbsRow2);

  return { adverbsList };
};


//Creating the longest word list
export const createLongestWordsList = (longestWords) => {
  const longestWordsList = document.createElement("ul");


      
  for (const word of longestWords.slice(-3)) {
    const listItem = document.createElement("li");
    listItem.textContent = word;
    listItem.setAttribute("data-word", word);
    longestWordsList.appendChild(listItem);
  }

  return { longestWordsList };
};

