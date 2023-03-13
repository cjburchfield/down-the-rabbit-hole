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



const chapters = [chapter1, chapter2, chapter3, chapter4, chapter5, chapter6, 
    chapter7, chapter8, chapter9, chapter10, chapter11, chapter12];

    function mergeChapters(...chapters) {
        const mergedChapter = Object.assign({}, ...chapters);
      
        const sortedWords = Object.entries(mergedChapter)
          .filter(([word, count]) => word.length > 3)
          .sort((a, b) => b[1] - a[1]);
      
        const topWords = sortedWords.slice(0, 3);
        const numPairs = sortedWords.length;
        const longestKey = Object.keys(mergedChapter).reduce((a, b) => a.length > b.length ? a : b);
      
        return { topWords, numPairs, longestKey };
      }


          // const adverbs = Object.entries(mergedChapter)
        //   .filter(([word, count]) => word.endsWith('ly'));
                // console.log(util.inspect(adverbs, {showHidden: false, depth: null}));

      
      adverbs = Object.entries(result).filter(([word, count]) => word.endsWith('ly'));

      console.log(JSON.stringify(adverbs, null, 2));

