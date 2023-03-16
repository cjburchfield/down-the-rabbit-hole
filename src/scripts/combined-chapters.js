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

// //Creating the frequent favorite words & definitions - NOT in box yet
// export const createTopWordsList = (topWords) => {
//   const topWordsList = document.createElement("ul");

//   for (const [word, count] of topWords) {
//     const listItem = document.createElement("li");
//     listItem.textContent = `${word}: ${count}`;
//     listItem.setAttribute("data-word", word)
//     topWordsList.appendChild(listItem);
//   }

//   topWordsList.addEventListener("click", async (event) => {
//     const API_KEY = "4d51c794-eeb0-40fb-bef2-8b0605824280";
//     selectedWord = event.target.getAttribute("data-word");

//     const response = await fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${selectedWord}?key=${API_KEY}`);
//     const data = await response.json();
//     if (data.length > 0 && data[0].shortdef.length > 0) {
//       const definition = data[0].shortdef[0];
//       document.getElementById("word-definition").textContent = definition;
//     }
//     }
//   );

//   return { topWordsList };
// };

export const createTopWordsList = (topWords) => {
  const topWordsList = document.createElement("ul");
  
  for (const [word, count] of topWords) {
    const listItem = document.createElement("li");
    listItem.textContent = `${word}: ${count}`;
    listItem.setAttribute("data-word", word)
    topWordsList.appendChild(listItem);
  }

  

  topWordsList.addEventListener("click", async (event) => {
    const API_KEY = "4d51c794-eeb0-40fb-bef2-8b0605824280";
    let selectedWord = event.target.getAttribute("data-word");
  
    const response = await fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${selectedWord}?key=${API_KEY}`);
    const data = await response.json();
    
    if (data.length > 0 && data[0].shortdef.length > 0) {
      const definition = data[0].shortdef[0];
      document.getElementById("word-definition").textContent = definition;
    }
  });
  
return { topWordsList };
};


//Creating the adverb words & definitions
export const createAdverbList = (adverbs) => {
    const adverbsList = document.createElement("ul");
    const adverbWords = adverbs.map(([word, count]) => word);
    
    for (const word of adverbWords) {
      const listItem = document.createElement("li");
      listItem.textContent = word;
      listItem.setAttribute("data-word", word);
      adverbsList.appendChild(listItem);
    }
    
    adverbsList.addEventListener("click", async (event) => {
      const API_KEY = "4d51c794-eeb0-40fb-bef2-8b0605824280";
      let selectedAdverb = event.target.getAttribute("data-word");
    
      const response = await fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${selectedAdverb}?key=${API_KEY}`);
      const data = await response.json();
      
      if (data.length > 0 && data[0].shortdef.length > 0) {
        const definition = data[0].shortdef[0];
        document.getElementById("word-definition").textContent = definition;
      }
    });
    
  return { adverbsList };
};
    


    export const createLongestWordsList = (longestWords) => {
      const longestWordsList = document.createElement("ul");
      
      for (const word of longestWords) {
        const listItem = document.createElement("li");
        listItem.textContent = word;
        listItem.setAttribute("data-word", word);
        longestWordsList.appendChild(listItem);
      }
      
      longestWordsList.addEventListener("click", async (event) => {
        const API_KEY = "4d51c794-eeb0-40fb-bef2-8b0605824280";
        let selectedLongWord = event.target.getAttribute("data-word");
      
        const response = await fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${selectedLongWord}?key=${API_KEY}`);
        const data = await response.json();
        
        if (data.length > 0 && data[0].shortdef.length > 0) {
          const definition = data[0].shortdef[0];
          document.getElementById("word-definition").textContent = definition;
        }
      });
      
    return { longestWordsList };
  };