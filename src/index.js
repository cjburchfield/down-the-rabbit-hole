import { chapter1 } from "./chapter-objects/chapterOne";
import { chapter2 } from "./chapter-objects/chapterTwo";
import { chapter3 } from "./chapter-objects/chapterThree";
import { chapter4 } from "./chapter-objects/chapterFour";
import { chapter5 } from "./chapter-objects/chapterFive";
import { chapter6 } from "./chapter-objects/chapterSix";
import { chapter7 } from "./chapter-objects/chapterSeven";
import { chapter8 } from "./chapter-objects/chapterEight";
import { chapter9 } from "./chapter-objects/chapterNine";
import { chapter10 } from "./chapter-objects/chapterTen";
import { chapter11 } from "./chapter-objects/chapterEleven";
import { chapter12 } from "./chapter-objects/chapterTwelve";
import Invented from "./scripts/example";
import { combineChapters, createTopWordsList, createLongestWordsList, createAdverbList } from "./scripts/combined-chapters";


const API_KEY = "4d51c794-eeb0-40fb-bef2-8b0605824280";


document.addEventListener("DOMContentLoaded", () => {
  let selectedWord = '';
  let selectedAdverb = '';
  let selectedLongWord = '';
  let selectedFrequent = '';

  // const wordDefinitionBox = document.getElementById("word-definition-box");
  // wordDefinitionBox.setAttribute('id', 'word-definition-box');
  // wordDefinitionBox.textContent = 'Curiouser and curiouser';
  // document.body.appendChild(wordDefinitionBox);
  const wordDefinitionBox = document.getElementById("word-definition-box");
  wordDefinitionBox.innerHTML = `<span class="long-word">Curiouser and curiouser</span><span class="definition"> - a phrase used to describe a situation that is becoming increasingly strange or difficult to understand.</span>`;
  document.body.appendChild(wordDefinitionBox);
  
  const invdef = document.getElementById("invented-definition");
  new Invented(invdef);


  const chapters = [chapter1, chapter2, chapter3, chapter4, chapter5, chapter6, chapter7, chapter8, chapter9, chapter10, chapter11, chapter12];
  const combinedData = combineChapters(chapters);



  const numPairsElement = document.getElementById("num-pairs");
  const totalWordsElement = document.getElementById("total-words");
  const tenElement = document.getElementById("ten-words");
  const adverbElement = document.getElementById("ly-words");

  adverbElement.textContent = combinedData.lyWords;
  tenElement.textContent = combinedData.tenWords;
  totalWordsElement.textContent = combinedData.totalWords;
  numPairsElement.textContent = combinedData.numPairs;

  const longestWordsList = createLongestWordsList(combinedData.longestWords);
  const longestWordElement = document.getElementById("longest-word");
  if (longestWordElement) {
    longestWordElement.appendChild(longestWordsList.longestWordsList);
  }
  
      
  const frequentWords = document.getElementById("frequent-words");
  const topWordsList = createTopWordsList(combinedData.topWords);
  frequentWords.appendChild(topWordsList.topWordsList);




const longestWordsListItems = document.querySelectorAll("#longest-word li");


longestWordsListItems.forEach((longestWords) => {
  longestWords.addEventListener("click", async () => {
    if (selectedLongWord) {
      selectedLongWord.classList.remove("selected-longword");
    }
    selectedLongWord = longestWords;
    selectedLongWord.classList.add("selected-longword");
    const longWordText = selectedLongWord.textContent;

    try {
      const response = await fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${longWordText}?key=${API_KEY}`);
      const data = await response.json();
          
      if (data.length > 0 && data[0].shortdef.length > 0) {
        const definition = data[0].shortdef[0];
        // wordDefinitionBox.textContent = `${longWordText}: ${definition}`;
        wordDefinitionBox.innerHTML = `<span class="long-word">${longWordText}:</span><span class="definition"> ${definition}</span>`;

      }
    } catch (error) {
      console.error(error);
    }
  });
});
 
  const topWordsListItems = document.querySelectorAll("#frequent-words li");

  topWordsListItems.forEach((topWords) => {  
    topWords.addEventListener("click", async () => {
      if (selectedFrequent) {
        selectedFrequent.classList.remove("selected-topword");
      }
      selectedFrequent = topWords;
      selectedFrequent.classList.add("selected-topword");
      const topWordText = selectedFrequent.textContent;
  
      try {
        const response = await fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${topWordText}?key=${API_KEY}`);
        const data = await response.json();
            
        if (data.length > 0 && data[0].shortdef.length > 0) {
          const definition = data[0].shortdef[0];
          wordDefinitionBox.textContent = `${topWordText}: ${definition}`;
        }
      } catch (error) {
        console.error(error);
      }
    });
  });
});

//Catch error info: 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch

  // const wordDefinitionBox = document.createElement('div');
  // wordDefinitionBox.classList.add('word-definition-box');
  // wordDefinitionBox.textContent = 'Curiouser and curiouser...';
  // document.body.appendChild(wordDefinitionBox);

  // const adverbsElement = document.getElementById("adverbs");
  // const adverbsList = createAdverbList(combinedData.adverbs);
  // adverbsElement.appendChild(adverbsList.adverbsList);


///
// const adverbsListItems = document.querySelectorAll("#adverbs li");

//   adverbsListItems.forEach((adverb) => {
//     adverb.addEventListener("click", () => {
//       if (selectedAdverb) {
//         selectedAdverb.classList.remove("selected-adverb");
//       }
//       selectedAdverb = adverb;
//       selectedAdverb.classList.add("selected-adverb");
//       const adverbText = selectedAdverb.textContent;

//       fetch(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${adverbText}`)
//       .then(response => response.json())
//       .then(data => {
//         const definition = data[0].meanings[0].definitions[0].definition;
//         wordDefinitionBox.textContent = `${adverbText}: ${definition}`;
//       })
//       .catch(error => {
//         wordDefinitionBox.textContent = `Error: ${error.message}`;
//       });
//     });
//   });



//   const selectedWords = document.querySelectorAll(".word");
//   selectedWords.forEach((word) => {
//     word.addEventListener("click", () => {
//       if (selectedWord) {
//         selectedWord.classList.remove("selected-word");
//       }
//       selectedWord = word;
//       selectedWord.classList.add("selected-word");
//       const wordText = selectedWord.textContent;
      
//       fetch(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${wordText}`)
//         .then(response => response.json())
//         .then(data => {
//           const definition = data[0].meanings[0].definitions[0].definition;
//           wordDefinitionBox.textContent = `${wordText}: ${definition}`;
//         })
//         .catch(error => {
//           wordDefinitionBox.textContent = `Error: ${error.message}`;
//         });
//     });
//   });
// });