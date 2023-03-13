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
import { combineChapters, createTopWordsList } from "./scripts/combined-chapters";
 
document.addEventListener("DOMContentLoaded", () => {
  const definitions = document.getElementById("definitions");
  new Word(definitions);

  const chapters = [chapter1, chapter2, chapter3, chapter4, chapter5, chapter6, chapter7, chapter8, chapter9, chapter10, chapter11, chapter12];
  const combinedData = combineChapters(chapters);

  const combinedChaptersContainer = document.getElementById("combined-chapters-container");
  const topWordsList = createTopWordsList(combinedData.topWords);
  combinedChaptersContainer.appendChild(topWordsList.topWordsList);
});