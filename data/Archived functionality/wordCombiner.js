import { chapter1 } from "../../src/chapter-objects/chapterOne";
import { chapter2 } from "../../src/chapter-objects/chapterTwo";
import { chapter3 } from "../../src/chapter-objects/chapterThree";
import { chapter4 } from "../../src/chapter-objects/chapterFour";
import { chapter5 } from "../../src/chapter-objects/chapterFive";
import { chapter6 } from "../../src/chapter-objects/chapterSix";
import { chapter7 } from "../../src/chapter-objects/chapterSeven";
import { chapter8 } from "../../src/chapter-objects/chapterEight";
import { chapter9 } from "../../src/chapter-objects/chapterNine";
import { chapter10 } from "../../src/chapter-objects/chapterTen";
import { chapter11 } from "../../src/chapter-objects/chapterEleven";
import { chapter12 } from "../../src/chapter-objects/chapterTwelve";



const chapters2 = ([chapter1, chapter2, chapter3, chapter4, chapter5, chapter6, 
    chapter7, chapter8, chapter9, chapter10, chapter11, chapter12]);

    function combineChapters(chapters) {
      const combinedBook = {};
      for (const chapter of chapters) {
        for (const [word, count] of Object.entries(chapter)) {
          if (combinedBook.hasOwnProperty(word)) {
            combinedBook[word] += count;
          } else {
            combinedBook[word] = count;
          }
        }
      }
      
      const sortedBook = Object.entries(combinedBook).sort((a, b) => b[1] - a[1]);
      const filteredBook = sortedBook.filter(([word, count]) => word.length > 6)

      const sortedBookObj = {};
        for (const [word, count] of sortedBook) {
          sortedBookObj[word] = count;
        }


      const topWords = filteredBook.slice(0, 10);
      const numPairs = filteredBook.length;
      
      return { topWords, numPairs }
    }

      // const filteredBook = sortedBook.filter(([word, count]) => word.endsWith('ly'));




          // const adverbs = Object.entries(mergedChapter)
        //   .filter(([word, count]) => word.endsWith('ly'));
                // console.log(util.inspect(adverbs, {showHidden: false, depth: null}));

      
      // adverbs = Object.entries(result).filter(([word, count]) => word.endsWith('ly'));

      // console.log(JSON.stringify(adverbs, null, 2));

