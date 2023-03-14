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

//Preparing data and definitions for most frequent words
export const createTopWordsList = (topWords) => {  //https://developer.mozilla.org/en-US/docs/Web/API/Node
  const topWordsList = document.createElement("ul");
  
  for (const [word, count] of topWords) {
    const listItem = document.createElement("li"); // https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
    listItem.textContent = `${word}: ${count}`; // https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent 
    listItem.setAttribute("data-word", word) // https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute
    topWordsList.appendChild(listItem); //https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
  }
  
      topWordsList.addEventListener("click", async (event) => {
        const API_KEY = "4d51c794-eeb0-40fb-bef2-8b0605824280";
        const word = event.target.getAttribute("data-word");

        if (event.target.tagName === "LI") {
          const response = await fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${API_KEY}`);
          const data = await response.json();
          if (data.length > 0 && data[0].shortdef.length > 0) {
            const definition = data[0].shortdef[0];
            event.target.title = definition;
          }
        }
      });
  
      return { topWordsList };
    };

    //Preparing data for "adverbs"
    export const createLongestWordsList = (longestWords) => {
      const longestWordsList = document.createElement("ul");
      for (const word of longestWords) {
        const listItem = document.createElement("li");
        listItem.textContent = word;
        longestWordsList.appendChild(listItem);
      }
      return { longestWordsList };
    };

    export const createAdverbList = (adverbs) => {
      const adverbsList = document.createElement("ul");
      const adverbWords = adverbs.map(([word, count]) => word);
      for (const word of adverbWords) {
        const listItem = document.createElement("li");
        listItem.textContent = word;
        adverbsList.appendChild(listItem);
      }
      return { adverbsList };
    };