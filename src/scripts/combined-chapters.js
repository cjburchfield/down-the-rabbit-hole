export const combineChapters = (chapters) => {  
  const combinedBook = {};
  let totalWords = 0;

  for (const chapter of chapters) {
    for (const [word, count] of Object.entries(chapter)) { 
        totalWords += count;
      if (combinedBook.hasOwnProperty(word)) { 
        combinedBook[word] += count;
      } else {
        combinedBook[word] = count;
      }
    }
  }
    const sortedBook = Object.entries(combinedBook).sort((a, b) => b[1] - a[1]);
  const filteredBook = sortedBook.filter(([word, count]) => word.length > 5);
  const sixWords = sortedBook.filter(([word, count]) => word.length > 5).length;
  const tenWords = sortedBook.filter(([word, count]) => word.length > 9).length;
  const lyWords = sortedBook.filter(([word, count]) => word.endsWith("ly")).length;
  const adverbs = filteredBook.filter(([word, count]) => word.endsWith("ly")).slice(0,10);

  
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

export const createTopWordsList = (topWords) => {
  const topWordsList = document.createElement("ul");
  
  for (const [word, count] of topWords) {
    const listItem = document.createElement("li");
    listItem.setAttribute("data-word", word);

    const wordContainer = document.createElement("div");

    const spanElement = document.createElement("span");
    spanElement.classList.add("top-word-subscript");
    spanElement.textContent = word;

    wordContainer.appendChild(spanElement);
    wordContainer.appendChild(document.createTextNode(` ${count} appearances`));

    listItem.appendChild(wordContainer);
    topWordsList.appendChild(listItem);
  }
  return { topWordsList };
};

export const createAdverbList = (adverbs) => {
  const adverbsList = document.createElement("div");
  const adverbWords = adverbs.map(([word, count]) => word);

  const adverbsRow1 = document.createElement("ul");
  for (let i = 0; i < 5; i++) {
    const word = adverbWords[i];
    const listItem = document.createElement("li");
    listItem.setAttribute("data-word", word);

    const spanElement = document.createElement("span");
    spanElement.classList.add("clickable");
    spanElement.classList.add("subscript");
    spanElement.textContent = word;

    listItem.appendChild(spanElement);
    adverbsRow1.appendChild(listItem);
  }
  adverbsList.appendChild(adverbsRow1);

  const adverbsRow2 = document.createElement("ul");
  for (let i = 5; i < 10; i++) {
    const word = adverbWords[i];
    const listItem = document.createElement("li");
    listItem.setAttribute("data-word", word);

    const spanElement = document.createElement("span");
    spanElement.classList.add("clickable");
    spanElement.classList.add("subscript");
    spanElement.textContent = word;

    listItem.appendChild(spanElement);
    adverbsRow2.appendChild(listItem);
  }
  adverbsList.appendChild(adverbsRow2);

  return { adverbsList };
};


export const createLongestWordsList = (longestWords) => {
  const longestWordsList = document.createElement("ul");

  for (const word of longestWords.slice(-3)) {
    const listItem = document.createElement("li");
    listItem.setAttribute("data-word", word);

    const spanElement = document.createElement("span");
    spanElement.classList.add("clickable");
    spanElement.classList.add("subscript");
    spanElement.textContent = word;

    listItem.appendChild(spanElement);
    longestWordsList.appendChild(listItem);
  }

  return { longestWordsList };
};
