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
import {
  combineChapters,
  createTopWordsList,
  createLongestWordsList,
  createAdverbList,
} from "./scripts/combined-chapters";

const API_KEY = "4d51c794-eeb0-40fb-bef2-8b0605824280";

document.addEventListener("DOMContentLoaded", () => {
  setupMenuToggle();

  const clickWordElement = document.getElementById("click-word");
  clickWordElement.addEventListener("click", () => {
    getDefinition(clickWordElement, "selected-word", API_KEY);
  });

  const chapters = [
    chapter1,
    chapter2,
    chapter3,
    chapter4,
    chapter5,
    chapter6,
    chapter7,
    chapter8,
    chapter9,
    chapter10,
    chapter11,
    chapter12,
  ];
  const combinedData = combineChapters(chapters);
  displayCombinedData(combinedData);

  createLongestWordsListUI(combinedData.longestWords);
  createFrequentWordsUI(combinedData.topWords);
  createAdverbsUI(combinedData.adverbs);
});

function setupMenuToggle() {
  const menuToggle = document.getElementById("menu-toggle");
  const sidebarMenu = document.querySelector(".sidebar-menu");

  menuToggle.addEventListener("click", () => {
    sidebarMenu.classList.toggle("show");
  });
}

function displayCombinedData(combinedData) {
  const numPairsElement = document.getElementById("num-pairs");
  const totalWordsElement = document.getElementById("total-words");
  const tenElement = document.getElementById("ten-words");
  const adverbElement = document.getElementById("ly-words");

  adverbElement.textContent = combinedData.lyWords;
  tenElement.textContent = combinedData.tenWords;
  totalWordsElement.textContent = combinedData.totalWords;
  numPairsElement.textContent = combinedData.numPairs;
}

function createLongestWordsListUI(longestWords) {
  const longestWordsList = createLongestWordsList(longestWords);
  const longestWordElement = document.getElementById("longest-word");
  if (longestWordElement) {
    longestWordElement.appendChild(longestWordsList.longestWordsList);
  }

  const longestWordsListItems = document.querySelectorAll("#longest-word li");
  longestWordsListItems.forEach((longestWord) => {
    longestWord.addEventListener("click", () => {
      getDefinition(longestWord, "selected-longword", API_KEY);
    });
  });
}

function createFrequentWordsUI(topWords) {
  const frequentWords = document.getElementById("frequent-words");
  const topWordsList = createTopWordsList(topWords);
  frequentWords.appendChild(topWordsList.topWordsList);

  const topWordsListItems = document.querySelectorAll("#frequent-words li");
  topWordsListItems.forEach((topWord) => {
    topWord.addEventListener("click", () => {
      getDefinition(topWord, "selected-topword", API_KEY);
    });
  });
}

function createAdverbsUI(adverbs) {
const adverbsElement = document.getElementById("adverbs");
const adverbsList = createAdverbList(adverbs);
adverbsElement.appendChild(adverbsList.adverbsList);

const adverbsListItems = document.querySelectorAll("#adverbs li");

adverbsListItems.forEach((adverb) => {
adverb.addEventListener("click", () => {
getDefinition(adverb, "selected-adverb", undefined, true);
});
});
}

let selectedElement = "";

async function getDefinition(element, cssClass, apiKey) {
  if (selectedElement) {
    selectedElement.classList.remove(cssClass);
  }
  selectedElement = element;
  selectedElement.classList.add(cssClass);

  const wordText = selectedElement.getAttribute("data-word") || selectedElement.textContent;
  const wordDefinitionBox = document.getElementById("word-definition-box");
  const spareBox = document.querySelector(".spare-box");

  spareBox.style.display = "block";
  wordDefinitionBox.style.display = "block";

  setTimeout(() => {
    spareBox.style.display = "none";
    wordDefinitionBox.style.display = "none";
  }, 5000);

  try {
    let definition = "";
    const response = await fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${wordText}?key=${apiKey}`);
    const data = await response.json();

    if (data && data.length > 0 && data[0] && data[0].shortdef && data[0].shortdef.length > 0) {
      definition = data[0].shortdef[0];
    } else {
      definition = "Definition not found";
    }

    wordDefinitionBox.innerHTML = `<span class="long-word">${wordText}:</span><span class="definition"> ${definition}</span>`;
  } catch (error) {
    console.error(error);
  }
}

