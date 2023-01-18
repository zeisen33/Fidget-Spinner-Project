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

eval("const target = __webpack_require__(/*! ./scripts/target.js */ \"./src/scripts/target.js\");\nconst spnr = __webpack_require__(/*! ./scripts/spinner.js */ \"./src/scripts/spinner.js\");\n// const Game = require(\"./scripts/game.js\");\n// const GameView = require(\"./scripts/game_view.js\")\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  const canvasEl = document.getElementById(\"background\");\n  canvasEl.width = window.innerWidth;\n  canvasEl.height = window.innerHeight;\n  const targ = new target();\n  const ctxx = canvasEl.getContext(\"2d\");\n  targ.drawTarget(ctxx);\n  function animate(i) {\n    const ctx = canvasEl.getContext(\"2d\");\n    requestAnimationFrame(animate);\n    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);\n    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);\n    const img = document.getElementById(\"bground\");\n    ctx.drawImage(img, 0, 0);\n    targ.x += 1;\n    targ.animate(ctx);\n    if (i < 400) {\n      setTimeout(function () {\n        animate(i + 1);\n      }, 100);\n    }\n  }\n  animate(0);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsTUFBTSxHQUFHQyxtQkFBTyxDQUFDLG9EQUFxQixDQUFDO0FBQzdDLE1BQU1DLElBQUksR0FBR0QsbUJBQU8sQ0FBQyxzREFBc0IsQ0FBQztBQUM1QztBQUNBOztBQUVBRSxRQUFRLENBQUNDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFlBQVU7RUFDcEQsTUFBTUMsUUFBUSxHQUFHRixRQUFRLENBQUNHLGNBQWMsQ0FBQyxZQUFZLENBQUM7RUFDdERELFFBQVEsQ0FBQ0UsS0FBSyxHQUFHQyxNQUFNLENBQUNDLFVBQVU7RUFDbENKLFFBQVEsQ0FBQ0ssTUFBTSxHQUFHRixNQUFNLENBQUNHLFdBQVc7RUFHcEMsTUFBTUMsSUFBSSxHQUFHLElBQUlaLE1BQU07RUFDdkIsTUFBTWEsSUFBSSxHQUFHUixRQUFRLENBQUNTLFVBQVUsQ0FBQyxJQUFJLENBQUM7RUFDdENGLElBQUksQ0FBQ0csVUFBVSxDQUFDRixJQUFJLENBQUM7RUFFckIsU0FBU0csT0FBTyxDQUFDQyxDQUFDLEVBQUU7SUFDaEIsTUFBTUMsR0FBRyxHQUFHYixRQUFRLENBQUNTLFVBQVUsQ0FBQyxJQUFJLENBQUM7SUFDckNLLHFCQUFxQixDQUFDSCxPQUFPLENBQUM7SUFDOUJFLEdBQUcsQ0FBQ0UsU0FBUyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUNaLE1BQU0sQ0FBQ0MsVUFBVSxFQUFDRCxNQUFNLENBQUNHLFdBQVcsQ0FBQztJQUd2RE8sR0FBRyxDQUFDRyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRWIsTUFBTSxDQUFDQyxVQUFVLEVBQUVELE1BQU0sQ0FBQ0csV0FBVyxDQUFDO0lBRXpELE1BQU1XLEdBQUcsR0FBR25CLFFBQVEsQ0FBQ0csY0FBYyxDQUFDLFNBQVMsQ0FBQztJQUM5Q1ksR0FBRyxDQUFDSyxTQUFTLENBQUNELEdBQUcsRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBRXZCVixJQUFJLENBQUNZLENBQUMsSUFBSSxDQUFDO0lBQ1haLElBQUksQ0FBQ0ksT0FBTyxDQUFDRSxHQUFHLENBQUM7SUFDakIsSUFBSUQsQ0FBQyxHQUFHLEdBQUcsRUFBRTtNQUNUUSxVQUFVLENBQUMsWUFBWTtRQUNuQlQsT0FBTyxDQUFDQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO01BQ2xCLENBQUMsRUFBRSxHQUFHLENBQUM7SUFDWDtFQUNKO0VBQ0FELE9BQU8sQ0FBQyxDQUFDLENBQUM7QUFDWixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maWRnZXQtc3Bpbm5lci1wcm9qZWN0Ly4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdGFyZ2V0ID0gcmVxdWlyZShcIi4vc2NyaXB0cy90YXJnZXQuanNcIilcbmNvbnN0IHNwbnIgPSByZXF1aXJlKFwiLi9zY3JpcHRzL3NwaW5uZXIuanNcIilcbi8vIGNvbnN0IEdhbWUgPSByZXF1aXJlKFwiLi9zY3JpcHRzL2dhbWUuanNcIik7XG4vLyBjb25zdCBHYW1lVmlldyA9IHJlcXVpcmUoXCIuL3NjcmlwdHMvZ2FtZV92aWV3LmpzXCIpXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKCl7XG4gICAgY29uc3QgY2FudmFzRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhY2tncm91bmRcIik7XG4gICAgY2FudmFzRWwud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICBjYW52YXNFbC5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbiBcbiAgICBjb25zdCB0YXJnID0gbmV3IHRhcmdldFxuICAgIGNvbnN0IGN0eHggPSBjYW52YXNFbC5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgdGFyZy5kcmF3VGFyZ2V0KGN0eHgpXG4gICAgXG4gICAgZnVuY3Rpb24gYW5pbWF0ZShpKSB7XG4gICAgICAgIGNvbnN0IGN0eCA9IGNhbnZhc0VsLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuICAgICAgICBjdHguY2xlYXJSZWN0KDAsMCx3aW5kb3cuaW5uZXJXaWR0aCx3aW5kb3cuaW5uZXJIZWlnaHQpXG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuXG4gICAgICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmdyb3VuZFwiKVxuICAgICAgICBjdHguZHJhd0ltYWdlKGltZywgMCwwKVxuXG4gICAgICAgIHRhcmcueCArPSAxXG4gICAgICAgIHRhcmcuYW5pbWF0ZShjdHgpXG4gICAgICAgIGlmIChpIDwgNDAwKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBhbmltYXRlKGkgKyAxKVxuICAgICAgICAgICAgfSwgMTAwKVxuICAgICAgICB9XG4gICAgfVxuICAgIGFuaW1hdGUoMCk7XG4gIH0pOyBcblxuXG4gICJdLCJuYW1lcyI6WyJ0YXJnZXQiLCJyZXF1aXJlIiwic3BuciIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbnZhc0VsIiwiZ2V0RWxlbWVudEJ5SWQiLCJ3aWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsInRhcmciLCJjdHh4IiwiZ2V0Q29udGV4dCIsImRyYXdUYXJnZXQiLCJhbmltYXRlIiwiaSIsImN0eCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNsZWFyUmVjdCIsImZpbGxSZWN0IiwiaW1nIiwiZHJhd0ltYWdlIiwieCIsInNldFRpbWVvdXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/spinner.js":
/*!********************************!*\
  !*** ./src/scripts/spinner.js ***!
  \********************************/
/***/ (function(module) {

eval("class Spinner {\n  constructor(context) {\n    this.context = context;\n    this.x = 200;\n    this.y = 200;\n    this.animate = this.animate.bind(this);\n    this.move = this.move.bind(this);\n    this.rotate = this.rotate.bind(this);\n    this.rads = 0;\n  }\n  drawSpinner(ctx) {\n    ctx.fillStyle = \"red\";\n    //x, y, width, height\n    ctx.fillRect(this.x, this.y, 40, 50);\n    ctx.rotate(this.rads / 360.0);\n  }\n  animate(ctx) {\n    this.drawSpinner(ctx);\n  }\n  move() {\n    this.x += 10;\n    this.y += 10;\n    this.animate(this.context);\n  }\n  rotate() {\n    this.rads += 60;\n    this.animate(this.context);\n  }\n}\nmodule.exports = Spinner;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9zcGlubmVyLmpzLmpzIiwibmFtZXMiOlsiU3Bpbm5lciIsImNvbnN0cnVjdG9yIiwiY29udGV4dCIsIngiLCJ5IiwiYW5pbWF0ZSIsImJpbmQiLCJtb3ZlIiwicm90YXRlIiwicmFkcyIsImRyYXdTcGlubmVyIiwiY3R4IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maWRnZXQtc3Bpbm5lci1wcm9qZWN0Ly4vc3JjL3NjcmlwdHMvc3Bpbm5lci5qcz84YzVjIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFNwaW5uZXIge1xuICAgIGNvbnN0cnVjdG9yIChjb250ZXh0KXtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dFxuICAgICAgICB0aGlzLnggPSAyMDBcbiAgICAgICAgdGhpcy55ID0gMjAwXG4gICAgICAgIHRoaXMuYW5pbWF0ZSA9IHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMubW92ZSA9IHRoaXMubW92ZS5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMucm90YXRlID0gdGhpcy5yb3RhdGUuYmluZCh0aGlzKVxuICAgICAgICB0aGlzLnJhZHMgPSAwXG4gICAgfVxuICAgIFxuICAgIGRyYXdTcGlubmVyIChjdHgpe1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJyZWRcIjtcbiAgICAgICAgLy94LCB5LCB3aWR0aCwgaGVpZ2h0XG4gICAgICAgIGN0eC5maWxsUmVjdCh0aGlzLngsdGhpcy55LDQwLDUwKTtcbiAgICAgICAgY3R4LnJvdGF0ZSh0aGlzLnJhZHMgLyAzNjAuMClcbiAgICB9XG5cbiAgICBhbmltYXRlIChjdHgpIHtcbiAgICAgICAgdGhpcy5kcmF3U3Bpbm5lcihjdHgpXG4gICAgfVxuXG4gICAgbW92ZSAoKSB7XG4gICAgICAgIHRoaXMueCArPSAxMDtcbiAgICAgICAgdGhpcy55ICs9IDEwO1xuICAgICAgICB0aGlzLmFuaW1hdGUodGhpcy5jb250ZXh0KVxuICAgIH1cblxuICAgIHJvdGF0ZSAoKSB7XG4gICAgICAgIHRoaXMucmFkcyArPSA2MFxuICAgICAgICB0aGlzLmFuaW1hdGUodGhpcy5jb250ZXh0KVxuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTcGlubmVyXG4gICJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsT0FBTyxDQUFDO0VBQ1ZDLFdBQVcsQ0FBRUMsT0FBTyxFQUFDO0lBQ2pCLElBQUksQ0FBQ0EsT0FBTyxHQUFHQSxPQUFPO0lBQ3RCLElBQUksQ0FBQ0MsQ0FBQyxHQUFHLEdBQUc7SUFDWixJQUFJLENBQUNDLENBQUMsR0FBRyxHQUFHO0lBQ1osSUFBSSxDQUFDQyxPQUFPLEdBQUcsSUFBSSxDQUFDQSxPQUFPLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDdEMsSUFBSSxDQUFDQyxJQUFJLEdBQUcsSUFBSSxDQUFDQSxJQUFJLENBQUNELElBQUksQ0FBQyxJQUFJLENBQUM7SUFDaEMsSUFBSSxDQUFDRSxNQUFNLEdBQUcsSUFBSSxDQUFDQSxNQUFNLENBQUNGLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDcEMsSUFBSSxDQUFDRyxJQUFJLEdBQUcsQ0FBQztFQUNqQjtFQUVBQyxXQUFXLENBQUVDLEdBQUcsRUFBQztJQUNiQSxHQUFHLENBQUNDLFNBQVMsR0FBRyxLQUFLO0lBQ3JCO0lBQ0FELEdBQUcsQ0FBQ0UsUUFBUSxDQUFDLElBQUksQ0FBQ1YsQ0FBQyxFQUFDLElBQUksQ0FBQ0MsQ0FBQyxFQUFDLEVBQUUsRUFBQyxFQUFFLENBQUM7SUFDakNPLEdBQUcsQ0FBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQ0MsSUFBSSxHQUFHLEtBQUssQ0FBQztFQUNqQztFQUVBSixPQUFPLENBQUVNLEdBQUcsRUFBRTtJQUNWLElBQUksQ0FBQ0QsV0FBVyxDQUFDQyxHQUFHLENBQUM7RUFDekI7RUFFQUosSUFBSSxHQUFJO0lBQ0osSUFBSSxDQUFDSixDQUFDLElBQUksRUFBRTtJQUNaLElBQUksQ0FBQ0MsQ0FBQyxJQUFJLEVBQUU7SUFDWixJQUFJLENBQUNDLE9BQU8sQ0FBQyxJQUFJLENBQUNILE9BQU8sQ0FBQztFQUM5QjtFQUVBTSxNQUFNLEdBQUk7SUFDTixJQUFJLENBQUNDLElBQUksSUFBSSxFQUFFO0lBQ2YsSUFBSSxDQUFDSixPQUFPLENBQUMsSUFBSSxDQUFDSCxPQUFPLENBQUM7RUFDOUI7QUFDSjtBQUVBWSxNQUFNLENBQUNDLE9BQU8sR0FBR2YsT0FBTyJ9\n//# sourceURL=webpack-internal:///./src/scripts/spinner.js\n");

/***/ }),

/***/ "./src/scripts/target.js":
/*!*******************************!*\
  !*** ./src/scripts/target.js ***!
  \*******************************/
/***/ (function(module) {

eval("class Target {\n  constructor() {\n    this.x = 100;\n    this.y = 100;\n    this.animate = this.animate.bind(this);\n    this.move = this.move.bind(this);\n    this.radius = 25;\n  }\n  drawTarget(ctx) {\n    const targImg = document.getElementById(\"targetImg\");\n    ctx.drawImage(targImg, this.x, this.y, 50, 50);\n  }\n  animate(ctx) {\n    this.drawTarget(ctx);\n  }\n  move() {\n    this.x += 10;\n    this.y += 10;\n    this.animate(this.context);\n  }\n}\nmodule.exports = Target;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy90YXJnZXQuanMuanMiLCJuYW1lcyI6WyJUYXJnZXQiLCJjb25zdHJ1Y3RvciIsIngiLCJ5IiwiYW5pbWF0ZSIsImJpbmQiLCJtb3ZlIiwicmFkaXVzIiwiZHJhd1RhcmdldCIsImN0eCIsInRhcmdJbWciLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZHJhd0ltYWdlIiwiY29udGV4dCIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2VicGFjazovL2ZpZGdldC1zcGlubmVyLXByb2plY3QvLi9zcmMvc2NyaXB0cy90YXJnZXQuanM/ZTI5YyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBUYXJnZXQge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgdGhpcy54ID0gMTAwXG4gICAgICAgIHRoaXMueSA9IDEwMFxuICAgICAgICB0aGlzLmFuaW1hdGUgPSB0aGlzLmFuaW1hdGUuYmluZCh0aGlzKVxuICAgICAgICB0aGlzLm1vdmUgPSB0aGlzLm1vdmUuYmluZCh0aGlzKVxuICAgICAgICB0aGlzLnJhZGl1cyA9IDI1XG4gICAgfVxuICAgICBcbiAgICBkcmF3VGFyZ2V0IChjdHgpe1xuICAgICAgICBjb25zdCB0YXJnSW1nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXJnZXRJbWdcIilcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0YXJnSW1nLCB0aGlzLngsIHRoaXMueSwgNTAsIDUwKVxuICAgIH1cblxuICAgIGFuaW1hdGUgKGN0eCkge1xuICAgICAgICB0aGlzLmRyYXdUYXJnZXQoY3R4KVxuICAgIH1cblxuICAgIG1vdmUgKCkge1xuICAgICAgICB0aGlzLnggKz0gMTA7XG4gICAgICAgIHRoaXMueSArPSAxMDtcbiAgICAgICAgdGhpcy5hbmltYXRlKHRoaXMuY29udGV4dClcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGFyZ2V0XG4gICJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsTUFBTSxDQUFDO0VBQ1RDLFdBQVcsR0FBSTtJQUNYLElBQUksQ0FBQ0MsQ0FBQyxHQUFHLEdBQUc7SUFDWixJQUFJLENBQUNDLENBQUMsR0FBRyxHQUFHO0lBQ1osSUFBSSxDQUFDQyxPQUFPLEdBQUcsSUFBSSxDQUFDQSxPQUFPLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDdEMsSUFBSSxDQUFDQyxJQUFJLEdBQUcsSUFBSSxDQUFDQSxJQUFJLENBQUNELElBQUksQ0FBQyxJQUFJLENBQUM7SUFDaEMsSUFBSSxDQUFDRSxNQUFNLEdBQUcsRUFBRTtFQUNwQjtFQUVBQyxVQUFVLENBQUVDLEdBQUcsRUFBQztJQUNaLE1BQU1DLE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsV0FBVyxDQUFDO0lBQ3BESCxHQUFHLENBQUNJLFNBQVMsQ0FBQ0gsT0FBTyxFQUFFLElBQUksQ0FBQ1IsQ0FBQyxFQUFFLElBQUksQ0FBQ0MsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7RUFDbEQ7RUFFQUMsT0FBTyxDQUFFSyxHQUFHLEVBQUU7SUFDVixJQUFJLENBQUNELFVBQVUsQ0FBQ0MsR0FBRyxDQUFDO0VBQ3hCO0VBRUFILElBQUksR0FBSTtJQUNKLElBQUksQ0FBQ0osQ0FBQyxJQUFJLEVBQUU7SUFDWixJQUFJLENBQUNDLENBQUMsSUFBSSxFQUFFO0lBQ1osSUFBSSxDQUFDQyxPQUFPLENBQUMsSUFBSSxDQUFDVSxPQUFPLENBQUM7RUFDOUI7QUFDSjtBQUVBQyxNQUFNLENBQUNDLE9BQU8sR0FBR2hCLE1BQU0ifQ==\n//# sourceURL=webpack-internal:///./src/scripts/target.js\n");

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