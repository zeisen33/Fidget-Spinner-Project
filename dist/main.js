/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("const crc = __webpack_require__(/*! ./scripts/circle.js */ \"./src/scripts/circle.js\");\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  const canvasEl = document.getElementById(\"circle\");\n  canvasEl.width = 500;\n  canvasEl.height = 500;\n  const ctx = canvasEl.getContext(\"2d\");\n  ctx.fillStyle = \"purple\";\n  ctx.fillRect(0, 0, 500, 500);\n\n  // ctx.beginPath();\n  // ctx.arc(100, 100, 20, 0, 2*Math.PI, true);\n  // ctx.strokeStyle = \"green\";\n  // ctx.lineWidth = 5;\n  // ctx.stroke();\n  // ctx.fillStyle = \"blue\";\n  // ctx.fill();\n\n  const circle = new crc(ctx);\n  circle.animate(circle.context);\n  setTimeout(circle.move, 5000);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsR0FBRyxHQUFHQyxtQkFBTyxDQUFDLG9EQUFxQixDQUFDO0FBRTFDQyxRQUFRLENBQUNDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFlBQVU7RUFDcEQsTUFBTUMsUUFBUSxHQUFHRixRQUFRLENBQUNHLGNBQWMsQ0FBQyxRQUFRLENBQUM7RUFDbERELFFBQVEsQ0FBQ0UsS0FBSyxHQUFHLEdBQUc7RUFDcEJGLFFBQVEsQ0FBQ0csTUFBTSxHQUFHLEdBQUc7RUFFckIsTUFBTUMsR0FBRyxHQUFHSixRQUFRLENBQUNLLFVBQVUsQ0FBQyxJQUFJLENBQUM7RUFDckNELEdBQUcsQ0FBQ0UsU0FBUyxHQUFHLFFBQVE7RUFDeEJGLEdBQUcsQ0FBQ0csUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQzs7RUFFNUI7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0VBRUEsTUFBTUMsTUFBTSxHQUFHLElBQUlaLEdBQUcsQ0FBQ1EsR0FBRyxDQUFDO0VBQzNCSSxNQUFNLENBQUNDLE9BQU8sQ0FBQ0QsTUFBTSxDQUFDRSxPQUFPLENBQUM7RUFDOUJDLFVBQVUsQ0FBQ0gsTUFBTSxDQUFDSSxJQUFJLEVBQUUsSUFBSSxDQUFDO0FBQy9CLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ZpZGdldC1zcGlubmVyLXByb2plY3QvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjcmMgPSByZXF1aXJlKFwiLi9zY3JpcHRzL2NpcmNsZS5qc1wiKVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbigpe1xuICAgIGNvbnN0IGNhbnZhc0VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaXJjbGVcIik7XG4gICAgY2FudmFzRWwud2lkdGggPSA1MDA7XG4gICAgY2FudmFzRWwuaGVpZ2h0ID0gNTAwO1xuICBcbiAgICBjb25zdCBjdHggPSBjYW52YXNFbC5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwicHVycGxlXCI7XG4gICAgY3R4LmZpbGxSZWN0KDAsIDAsIDUwMCwgNTAwKTtcbiAgXG4gICAgLy8gY3R4LmJlZ2luUGF0aCgpO1xuICAgIC8vIGN0eC5hcmMoMTAwLCAxMDAsIDIwLCAwLCAyKk1hdGguUEksIHRydWUpO1xuICAgIC8vIGN0eC5zdHJva2VTdHlsZSA9IFwiZ3JlZW5cIjtcbiAgICAvLyBjdHgubGluZVdpZHRoID0gNTtcbiAgICAvLyBjdHguc3Ryb2tlKCk7XG4gICAgLy8gY3R4LmZpbGxTdHlsZSA9IFwiYmx1ZVwiO1xuICAgIC8vIGN0eC5maWxsKCk7XG5cbiAgICBjb25zdCBjaXJjbGUgPSBuZXcgY3JjKGN0eClcbiAgICBjaXJjbGUuYW5pbWF0ZShjaXJjbGUuY29udGV4dClcbiAgICBzZXRUaW1lb3V0KGNpcmNsZS5tb3ZlLCA1MDAwKVxuICB9KTtcblxuXG4gICJdLCJuYW1lcyI6WyJjcmMiLCJyZXF1aXJlIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzRWwiLCJnZXRFbGVtZW50QnlJZCIsIndpZHRoIiwiaGVpZ2h0IiwiY3R4IiwiZ2V0Q29udGV4dCIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiY2lyY2xlIiwiYW5pbWF0ZSIsImNvbnRleHQiLCJzZXRUaW1lb3V0IiwibW92ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/circle.js":
/*!*******************************!*\
  !*** ./src/scripts/circle.js ***!
  \*******************************/
/***/ (function(module) {

eval("class Circle {\n  constructor(context) {\n    this.context = context;\n    this.x = 100;\n    this.y = 100;\n    this.animate = this.animate.bind(this);\n    this.move = this.move.bind(this);\n  }\n  drawCircle(ctx) {\n    ctx.beginPath();\n    ctx.arc(this.x, this.y, 20, 0, 2 * Math.PI, true);\n    ctx.strokeStyle = \"green\";\n    ctx.lineWidth = 5;\n    ctx.stroke();\n    ctx.fillStyle = \"blue\";\n    ctx.fill();\n  }\n  animate(ctx) {\n    this.drawCircle(ctx);\n  }\n  move() {\n    this.x += 10;\n    this.y += 10;\n    this.animate(this.context);\n  }\n}\nmodule.exports = Circle;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9jaXJjbGUuanMuanMiLCJuYW1lcyI6WyJDaXJjbGUiLCJjb25zdHJ1Y3RvciIsImNvbnRleHQiLCJ4IiwieSIsImFuaW1hdGUiLCJiaW5kIiwibW92ZSIsImRyYXdDaXJjbGUiLCJjdHgiLCJiZWdpblBhdGgiLCJhcmMiLCJNYXRoIiwiUEkiLCJzdHJva2VTdHlsZSIsImxpbmVXaWR0aCIsInN0cm9rZSIsImZpbGxTdHlsZSIsImZpbGwiLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maWRnZXQtc3Bpbm5lci1wcm9qZWN0Ly4vc3JjL3NjcmlwdHMvY2lyY2xlLmpzP2M0NzkiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQ2lyY2xlIHtcbiAgICBjb25zdHJ1Y3RvciAoY29udGV4dCl7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHRcbiAgICAgICAgdGhpcy54ID0gMTAwXG4gICAgICAgIHRoaXMueSA9IDEwMFxuICAgICAgICB0aGlzLmFuaW1hdGUgPSB0aGlzLmFuaW1hdGUuYmluZCh0aGlzKVxuICAgICAgICB0aGlzLm1vdmUgPSB0aGlzLm1vdmUuYmluZCh0aGlzKVxuICAgIH1cbiAgICBcbiAgICBkcmF3Q2lyY2xlIChjdHgpe1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5hcmModGhpcy54LCB0aGlzLnksIDIwLCAwLCAyKk1hdGguUEksIHRydWUpO1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImdyZWVuXCI7XG4gICAgICAgIGN0eC5saW5lV2lkdGggPSA1O1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcImJsdWVcIjtcbiAgICAgICAgY3R4LmZpbGwoKTtcbiAgICB9XG5cbiAgICBhbmltYXRlIChjdHgpIHtcbiAgICAgICAgdGhpcy5kcmF3Q2lyY2xlKGN0eClcbiAgICB9XG5cbiAgICBtb3ZlICgpIHtcbiAgICAgICAgdGhpcy54ICs9IDEwO1xuICAgICAgICB0aGlzLnkgKz0gMTA7XG4gICAgICAgIHRoaXMuYW5pbWF0ZSh0aGlzLmNvbnRleHQpXG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENpcmNsZVxuICAiXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLE1BQU0sQ0FBQztFQUNUQyxXQUFXLENBQUVDLE9BQU8sRUFBQztJQUNqQixJQUFJLENBQUNBLE9BQU8sR0FBR0EsT0FBTztJQUN0QixJQUFJLENBQUNDLENBQUMsR0FBRyxHQUFHO0lBQ1osSUFBSSxDQUFDQyxDQUFDLEdBQUcsR0FBRztJQUNaLElBQUksQ0FBQ0MsT0FBTyxHQUFHLElBQUksQ0FBQ0EsT0FBTyxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ3RDLElBQUksQ0FBQ0MsSUFBSSxHQUFHLElBQUksQ0FBQ0EsSUFBSSxDQUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDO0VBQ3BDO0VBRUFFLFVBQVUsQ0FBRUMsR0FBRyxFQUFDO0lBQ1pBLEdBQUcsQ0FBQ0MsU0FBUyxFQUFFO0lBQ2ZELEdBQUcsQ0FBQ0UsR0FBRyxDQUFDLElBQUksQ0FBQ1IsQ0FBQyxFQUFFLElBQUksQ0FBQ0MsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFDUSxJQUFJLENBQUNDLEVBQUUsRUFBRSxJQUFJLENBQUM7SUFDL0NKLEdBQUcsQ0FBQ0ssV0FBVyxHQUFHLE9BQU87SUFDekJMLEdBQUcsQ0FBQ00sU0FBUyxHQUFHLENBQUM7SUFDakJOLEdBQUcsQ0FBQ08sTUFBTSxFQUFFO0lBQ1pQLEdBQUcsQ0FBQ1EsU0FBUyxHQUFHLE1BQU07SUFDdEJSLEdBQUcsQ0FBQ1MsSUFBSSxFQUFFO0VBQ2Q7RUFFQWIsT0FBTyxDQUFFSSxHQUFHLEVBQUU7SUFDVixJQUFJLENBQUNELFVBQVUsQ0FBQ0MsR0FBRyxDQUFDO0VBQ3hCO0VBRUFGLElBQUksR0FBSTtJQUNKLElBQUksQ0FBQ0osQ0FBQyxJQUFJLEVBQUU7SUFDWixJQUFJLENBQUNDLENBQUMsSUFBSSxFQUFFO0lBQ1osSUFBSSxDQUFDQyxPQUFPLENBQUMsSUFBSSxDQUFDSCxPQUFPLENBQUM7RUFDOUI7QUFDSjtBQUVBaUIsTUFBTSxDQUFDQyxPQUFPLEdBQUdwQixNQUFNIn0=\n//# sourceURL=webpack-internal:///./src/scripts/circle.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maWRnZXQtc3Bpbm5lci1wcm9qZWN0Ly4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

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