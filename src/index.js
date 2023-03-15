import Word from "./scripts/example";
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
import { combineChapters, createTopWordsList, createLongestWordsList, createAdverbList } from "./scripts/combined-chapters";
 
document.addEventListener("DOMContentLoaded", () => {
  let selectedWord = '';
  let selectedAdverb = '';
  const wordDefinitionBox = document.createElement('div');
  wordDefinitionBox.classList.add('word-definition-box');
  wordDefinitionBox.textContent = 'Loading definition...';
  document.body.appendChild(wordDefinitionBox);

  
  const definitions = document.getElementById("definitions");
  new Word(definitions);


  const chapters = [chapter1, chapter2, chapter3, chapter4, chapter5, chapter6, chapter7, chapter8, chapter9, chapter10, chapter11, chapter12];
  const combinedData = combineChapters(chapters);

  const frequentWords = document.getElementById("frequent-words");
  const topWordsList = createTopWordsList(combinedData.topWords);
  frequentWords.appendChild(topWordsList.topWordsList);

  const numPairsElement = document.getElementById("num-pairs");
  const totalWordsElement = document.getElementById("total-words");
  const tenElement = document.getElementById("ten-words");
  const sixElement = document.getElementById("six-words");
  const adverbElement = document.getElementById("ly-words");

  adverbElement.textContent = combinedData.lyWords;
  // sixElement.textContent = combinedData.sixWords;
  tenElement.textContent = combinedData.tenWords;
  totalWordsElement.textContent = combinedData.totalWords;
  numPairsElement.textContent = combinedData.numPairs;

  const longestWordElement = document.getElementById("longest-word");
  const longestWordsList = createLongestWordsList(combinedData.longestWords);
  longestWordElement.appendChild(longestWordsList.longestWordsList);

  const adverbsElement = document.getElementById("adverbs");
  const adverbsList = createAdverbList(combinedData.adverbs);
  adverbsElement.appendChild(adverbsList.adverbsList);


  const adverbsListItems = document.querySelectorAll("#adverbs li");

  adverbsListItems.forEach((adverb) => {
    adverb.addEventListener("click", () => {
      if (selectedAdverb) {
        selectedAdverb.classList.remove("selected-adverb");
      }
      selectedAdverb = adverb;
      selectedAdverb.classList.add("selected-adverb");
      const adverbText = selectedAdverb.textContent;
      console.log(`Selected adverb: ${adverbText}`);

      // const wordDefinitionBox = document.createElement('div');
      // wordDefinitionBox.classList.add('word-definition-box');
      // wordDefinitionBox.textContent = 'Loading definition...';
      // document.body.appendChild(wordDefinitionBox);
  

      fetch(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${adverbText}`)
      .then(response => response.json())
      .then(data => {
        const definition = data[0].meanings[0].definitions[0].definition;
        wordDefinitionBox.textContent = `${adverbText}: ${definition}`;
      })
      .catch(error => {
        wordDefinitionBox.textContent = `Error: ${error.message}`;
      });
    });
  });

  
  const selectedWords = document.querySelectorAll(".word");
  selectedWords.forEach((word) => {
    word.addEventListener("click", () => {
      if (selectedWord) {
        selectedWord.classList.remove("selected-word");
      }
      selectedWord = word;
      selectedWord.classList.add("selected-word");
      const wordText = selectedWord.textContent;
      console.log(`Selected word: ${wordText}`);
      
      // create and show word definition box
      // const wordDefinitionBox = document.createElement('div');
      // wordDefinitionBox.classList.add('word-definition-box');
      // wordDefinitionBox.textContent = 'Loading definition...';
      // document.body.appendChild(wordDefinitionBox);
  
      // get the word definition from the API
      fetch(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${wordText}`)
        .then(response => response.json())
        .then(data => {
          const definition = data[0].meanings[0].definitions[0].definition;
          wordDefinitionBox.textContent = `${wordText}: ${definition}`;
        })
        .catch(error => {
          wordDefinitionBox.textContent = `Error: ${error.message}`;
        });
    });
  });
});