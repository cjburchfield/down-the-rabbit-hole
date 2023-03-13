/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_example__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/example */ \"./src/scripts/example.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const main = document.getElementById(\"main\");\n  new _scripts_example__WEBPACK_IMPORTED_MODULE_0__[\"default\"](main);\n});\n\n// https://github.com/appacademy/2023-01-09-NYC-Lecture-Notes/blob/main/w9d5-es6-syntax/slides.md//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBcUM7QUFFckNDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBTTtFQUNoRCxNQUFNQyxJQUFJLEdBQUdGLFFBQVEsQ0FBQ0csY0FBYyxDQUFDLE1BQU0sQ0FBQztFQUM1QyxJQUFJSix3REFBSSxDQUFDRyxJQUFJLENBQUM7QUFDbEIsQ0FBQyxDQUFDOztBQUVGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmFiYml0LWhvbGUvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgV29yZCBmcm9tIFwiLi9zY3JpcHRzL2V4YW1wbGVcIjtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG4gICAgbmV3IFdvcmQobWFpbik7XG59KTtcblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2FwcGFjYWRlbXkvMjAyMy0wMS0wOS1OWUMtTGVjdHVyZS1Ob3Rlcy9ibG9iL21haW4vdzlkNS1lczYtc3ludGF4L3NsaWRlcy5tZCJdLCJuYW1lcyI6WyJXb3JkIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwibWFpbiIsImdldEVsZW1lbnRCeUlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/example.js":
/*!********************************!*\
  !*** ./src/scripts/example.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Word {\n  constructor(ele) {\n    this.ele = ele;\n    this.words = [\"tap\", \"each\", \"word\"];\n    this.ele.innerHTML = `\n      <div class=\"word-box\">\n        <div class=\"word\"><h1>${this.words[0]}</h1></div>\n        <div class=\"word\"><h1>${this.words[1]}</h1></div>\n        <div class=\"word\"><h1>${this.words[2]}</h1></div>\n      </div>\n    `;\n    //     this.ele.innerHTML = `\n    //       <div class=\"word-box\">\n    //         <div class=\"word\"><h1 class=\"header\">${this.words[0]}</h1></div>\n    //         <div class=\"word\"><h1 class=\"header\">${this.words[1]}</h1></div>\n    //         <div class=\"word\"><h1 class=\"header\">${this.words[2]}</h1></div>\n    //    </div>\n    // `;\n    this.wordBoxes = Array.from(this.ele.querySelectorAll(\".word > h1\"));\n    this.handleClick = this.handleClick.bind(this);\n    this.ele.addEventListener(\"click\", this.handleClick);\n    this.wordBoxes.forEach(wordBox => {\n      wordBox.addEventListener(\"click\", () => {\n        wordBox.innerText = this.words[this.wordBoxes.indexOf(wordBox)];\n      });\n    });\n  }\n  async handleClick(event) {\n    const target = event.target;\n    if (this.wordBoxes.includes(target)) {\n      const wordIndex = Array.from(this.wordBoxes).indexOf(target);\n      const definition = await this.getDefinition(this.words[wordIndex]);\n      if (target.innerText === this.words[wordIndex]) {\n        target.innerText = definition;\n      } else {\n        target.innerText = this.words[wordIndex];\n      }\n    } else if (this.wordBoxes[0].innerText !== this.words[0]) {\n      this.wordBoxes.forEach((wordBox, index) => {\n        wordBox.innerText = this.words[index];\n      });\n    }\n  }\n  async getDefinition(word) {\n    const apiKey = \"4d51c794-eeb0-40fb-bef2-8b0605824280\";\n    const url = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${apiKey}`;\n    const response = await fetch(url);\n    const data = await response.json();\n    if (Array.isArray(data)) {\n      //Checking to see if the word is in the dictionary as array expected response\n      return data[0].shortdef[0]; //Pulled shortdef from MW'S JSON Response documentation (https://dictionaryapi.com/products/api-collegiate-dictionary)\n    } else {\n      return \"This is a made up word!\";\n    }\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Word);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFHLENBQUM7SUFDakMsTUFBTUcsSUFBSSxHQUFHLE1BQU1GLFFBQVEsQ0FBQ0csSUFBSSxFQUFFO0lBQ2xDLElBQUl2QixLQUFLLENBQUN3QixPQUFPLENBQUNGLElBQUksQ0FBQyxFQUFFO01BQUU7TUFDekIsT0FBT0EsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM5QixDQUFDLE1BQU07TUFDTCxPQUFPLHlCQUF5QjtJQUNsQztFQUNGO0FBQ0Y7QUFFQSwrREFBZS9CLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yYWJiaXQtaG9sZS8uL3NyYy9zY3JpcHRzL2V4YW1wbGUuanM/ZmNlZSJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBXb3JkIHtcbiAgY29uc3RydWN0b3IoZWxlKSB7XG4gICAgdGhpcy5lbGUgPSBlbGU7XG4gICAgdGhpcy53b3JkcyA9IFtcInRhcFwiLCBcImVhY2hcIiwgXCJ3b3JkXCJdO1xuICAgIHRoaXMuZWxlLmlubmVySFRNTCA9IGBcbiAgICAgIDxkaXYgY2xhc3M9XCJ3b3JkLWJveFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwid29yZFwiPjxoMT4ke3RoaXMud29yZHNbMF19PC9oMT48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIndvcmRcIj48aDE+JHt0aGlzLndvcmRzWzFdfTwvaDE+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ3b3JkXCI+PGgxPiR7dGhpcy53b3Jkc1syXX08L2gxPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgYDtcbi8vICAgICB0aGlzLmVsZS5pbm5lckhUTUwgPSBgXG4vLyAgICAgICA8ZGl2IGNsYXNzPVwid29yZC1ib3hcIj5cbi8vICAgICAgICAgPGRpdiBjbGFzcz1cIndvcmRcIj48aDEgY2xhc3M9XCJoZWFkZXJcIj4ke3RoaXMud29yZHNbMF19PC9oMT48L2Rpdj5cbi8vICAgICAgICAgPGRpdiBjbGFzcz1cIndvcmRcIj48aDEgY2xhc3M9XCJoZWFkZXJcIj4ke3RoaXMud29yZHNbMV19PC9oMT48L2Rpdj5cbi8vICAgICAgICAgPGRpdiBjbGFzcz1cIndvcmRcIj48aDEgY2xhc3M9XCJoZWFkZXJcIj4ke3RoaXMud29yZHNbMl19PC9oMT48L2Rpdj5cbi8vICAgIDwvZGl2PlxuLy8gYDtcbiAgICB0aGlzLndvcmRCb3hlcyA9IEFycmF5LmZyb20odGhpcy5lbGUucXVlcnlTZWxlY3RvckFsbChcIi53b3JkID4gaDFcIikpO1xuXG4gICAgdGhpcy5oYW5kbGVDbGljayA9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLmVsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5oYW5kbGVDbGljayk7XG5cbiAgICB0aGlzLndvcmRCb3hlcy5mb3JFYWNoKCh3b3JkQm94KSA9PiB7XG4gICAgICB3b3JkQm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHdvcmRCb3guaW5uZXJUZXh0ID0gdGhpcy53b3Jkc1t0aGlzLndvcmRCb3hlcy5pbmRleE9mKHdvcmRCb3gpXTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgaGFuZGxlQ2xpY2soZXZlbnQpIHtcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG5cbiAgICBpZiAodGhpcy53b3JkQm94ZXMuaW5jbHVkZXModGFyZ2V0KSkge1xuICAgICAgY29uc3Qgd29yZEluZGV4ID0gQXJyYXkuZnJvbSh0aGlzLndvcmRCb3hlcykuaW5kZXhPZih0YXJnZXQpO1xuICAgICAgY29uc3QgZGVmaW5pdGlvbiA9IGF3YWl0IHRoaXMuZ2V0RGVmaW5pdGlvbih0aGlzLndvcmRzW3dvcmRJbmRleF0pO1xuICAgICAgaWYgKHRhcmdldC5pbm5lclRleHQgPT09IHRoaXMud29yZHNbd29yZEluZGV4XSkge1xuICAgICAgICB0YXJnZXQuaW5uZXJUZXh0ID0gZGVmaW5pdGlvbjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRhcmdldC5pbm5lclRleHQgPSB0aGlzLndvcmRzW3dvcmRJbmRleF07XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLndvcmRCb3hlc1swXS5pbm5lclRleHQgIT09IHRoaXMud29yZHNbMF0pIHtcbiAgICAgIHRoaXMud29yZEJveGVzLmZvckVhY2goKHdvcmRCb3gsIGluZGV4KSA9PiB7XG4gICAgICAgIHdvcmRCb3guaW5uZXJUZXh0ID0gdGhpcy53b3Jkc1tpbmRleF07XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXREZWZpbml0aW9uKHdvcmQpIHtcbiAgICBjb25zdCBhcGlLZXkgPSBcIjRkNTFjNzk0LWVlYjAtNDBmYi1iZWYyLThiMDYwNTgyNDI4MFwiO1xuICAgIGNvbnN0IHVybCA9IGBodHRwczovL3d3dy5kaWN0aW9uYXJ5YXBpLmNvbS9hcGkvdjMvcmVmZXJlbmNlcy9jb2xsZWdpYXRlL2pzb24vJHt3b3JkfT9rZXk9JHthcGlLZXl9YDtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSkgeyAvL0NoZWNraW5nIHRvIHNlZSBpZiB0aGUgd29yZCBpcyBpbiB0aGUgZGljdGlvbmFyeSBhcyBhcnJheSBleHBlY3RlZCByZXNwb25zZVxuICAgICAgcmV0dXJuIGRhdGFbMF0uc2hvcnRkZWZbMF07IC8vUHVsbGVkIHNob3J0ZGVmIGZyb20gTVcnUyBKU09OIFJlc3BvbnNlIGRvY3VtZW50YXRpb24gKGh0dHBzOi8vZGljdGlvbmFyeWFwaS5jb20vcHJvZHVjdHMvYXBpLWNvbGxlZ2lhdGUtZGljdGlvbmFyeSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFwiVGhpcyBpcyBhIG1hZGUgdXAgd29yZCFcIjtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgV29yZDtcblxuIl0sIm5hbWVzIjpbIldvcmQiLCJjb25zdHJ1Y3RvciIsImVsZSIsIndvcmRzIiwiaW5uZXJIVE1MIiwid29yZEJveGVzIiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsImhhbmRsZUNsaWNrIiwiYmluZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJmb3JFYWNoIiwid29yZEJveCIsImlubmVyVGV4dCIsImluZGV4T2YiLCJldmVudCIsInRhcmdldCIsImluY2x1ZGVzIiwid29yZEluZGV4IiwiZGVmaW5pdGlvbiIsImdldERlZmluaXRpb24iLCJpbmRleCIsIndvcmQiLCJhcGlLZXkiLCJ1cmwiLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsImpzb24iLCJpc0FycmF5Iiwic2hvcnRkZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/example.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yYWJiaXQtaG9sZS8uL3NyYy9pbmRleC5zY3NzPzk3NDUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;