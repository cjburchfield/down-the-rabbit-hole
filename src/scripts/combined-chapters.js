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
  
    // let longestWord = '';
    // for (const [word, count] of sortedBook) {
    //   if (word.length > longestWord.length) {
    //     longestWord = word;
    //   }
    // }

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
    return { topWords, numPairs, longestWords, totalWords, tenWords, sixWords };

}
    export const createTopWordsList = (topWords) => {
      const topWordsList = document.createElement("ul");
      for (const [word, count] of topWords) {
        const listItem = document.createElement("li");
        listItem.textContent = `${word}: ${count}`;
        listItem.setAttribute("data-word", word)
        topWordsList.appendChild(listItem);
      }
  
      topWordsList.addEventListener("mouseover", async (event) => {
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

    export const createLongestWordsList = (longestWords) => {
      const longestWordsList = document.createElement("ul");
      for (const word of longestWords) {
        const listItem = document.createElement("li");
        listItem.textContent = word;
        longestWordsList.appendChild(listItem);
      }
      return { longestWordsList };
    };

