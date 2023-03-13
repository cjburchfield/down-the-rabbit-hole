// import { chapter1 } from "../chapter-objects/chapterOne"
// import { chapter2 } from "../chapter-objects/chapterTwo";
// import { chapter3 } from "../chapter-objects/chapterThree";
// import { chapter4 } from "../chapter-objects/chapterFour";
// import { chapter5 } from "../chapter-objects/chapterFive";
// import { chapter6 } from "../chapter-objects/chapterSix";
// import { chapter7 } from "../chapter-objects/chapterSeven";
// import { chapter8 } from "../chapter-objects/chapterEight";
// import { chapter9 } from "../chapter-objects/chapterNine";
// import { chapter10 } from "../chapter-objects/chapterTen";
// import { chapter11 } from "../chapter-objects/chapterEleven";
// import { chapter12 } from "../chapter-objects/chapterTwelve";



// const chapters = ([chapter1, chapter2, chapter3, chapter4, chapter5, chapter6, 
//     chapter7, chapter8, chapter9, chapter10, chapter11, chapter12]);

export const combineChapters = (chapters) => {
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

    //   const sortedBookObj = {};
    //     for (const [word, count] of sortedBook) {
    //       sortedBookObj[word] = count;
    //     }


      const topWords = filteredBook.slice(0, 10);
      const numPairs = filteredBook.length;
      
    //   return { topWords, numPairs }
    // };

    const topWordsList = document.createElement("ul");
    for (const [word, count] of topWords) {
      const listItem = document.createElement("li");
      listItem.textContent = `${word}: ${count}`;
      topWordsList.appendChild(listItem);
    }
  
    return topWordsList;
  };
