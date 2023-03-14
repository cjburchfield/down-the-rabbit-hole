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
  const definitions = document.getElementById("definitions");
  new Word(definitions);

  const chapters = [chapter1, chapter2, chapter3, chapter4, chapter5, chapter6, chapter7, chapter8, chapter9, chapter10, chapter11, chapter12];
  const combinedData = combineChapters(chapters);

  const combinedChaptersContainer = document.getElementById("combined-chapters-container");
  const topWordsList = createTopWordsList(combinedData.topWords);
  combinedChaptersContainer.appendChild(topWordsList.topWordsList);

  const numPairsElement = document.getElementById("num-pairs");
  const totalWordsElement = document.getElementById("total-words");
  const tenElement = document.getElementById("ten-words");
  const sixElement = document.getElementById("six-words");
  const adverbElement = document.getElementById("ly-words");

  adverbElement.textContent = combinedData.lyWords;
  sixElement.textContent = combinedData.sixWords;
  tenElement.textContent = combinedData.tenWords;
  totalWordsElement.textContent = combinedData.totalWords;
  numPairsElement.textContent = combinedData.numPairs;

  const longestWordElement = document.getElementById("longest-word");
  const longestWordsList = createLongestWordsList(combinedData.longestWords);
  longestWordElement.appendChild(longestWordsList.longestWordsList);

  const adverbsElement = document.getElementById("adverbs");
  const adverbsList = createAdverbList(combinedData.adverbs);
  adverbsElement.appendChild(adverbsList.adverbsList);
});

