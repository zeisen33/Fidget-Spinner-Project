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

eval("const target = __webpack_require__(/*! ./scripts/target.js */ \"./src/scripts/target.js\");\nconst spinner = __webpack_require__(/*! ./scripts/spinner.js */ \"./src/scripts/spinner.js\");\nconst bullet = __webpack_require__(/*! ./scripts/bullet.js */ \"./src/scripts/bullet.js\");\n// const Game = require(\"./scripts/game.js\");\n// const GameView = require(\"./scripts/game_view.js\")\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  const canvasEl = document.getElementById(\"background\");\n  canvasEl.width = window.innerWidth;\n  canvasEl.height = window.innerHeight;\n  const targ = new target();\n  const spnr = new spinner();\n  const bllt = new bullet();\n  const ctxx = canvasEl.getContext(\"2d\");\n  const backing = ctxx.createPattern(canvasEl, \"repeat\");\n  targ.drawTarget(ctxx);\n  spnr.drawSpinner(ctxx);\n  // bllt.drawBullet(ctxx)\n\n  function animate(i) {\n    const ctx = canvasEl.getContext(\"2d\");\n    requestAnimationFrame(animate);\n    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);\n    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);\n    const img = document.getElementById(\"bground\");\n    ctx.drawImage(img, 0, 0);\n    targ.x += 1;\n    // debugger\n    targ.animate(ctx);\n    spnr.animate(ctx);\n  }\n  animate(0);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsTUFBTSxHQUFHQyxtQkFBTyxDQUFDLG9EQUFxQixDQUFDO0FBQzdDLE1BQU1DLE9BQU8sR0FBR0QsbUJBQU8sQ0FBQyxzREFBc0IsQ0FBQztBQUMvQyxNQUFNRSxNQUFNLEdBQUdGLG1CQUFPLENBQUMsb0RBQXFCLENBQUM7QUFDN0M7QUFDQTs7QUFFQUcsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxZQUFVO0VBQ3BELE1BQU1DLFFBQVEsR0FBR0YsUUFBUSxDQUFDRyxjQUFjLENBQUMsWUFBWSxDQUFDO0VBQ3RERCxRQUFRLENBQUNFLEtBQUssR0FBR0MsTUFBTSxDQUFDQyxVQUFVO0VBQ2xDSixRQUFRLENBQUNLLE1BQU0sR0FBR0YsTUFBTSxDQUFDRyxXQUFXO0VBR3BDLE1BQU1DLElBQUksR0FBRyxJQUFJYixNQUFNO0VBQ3ZCLE1BQU1jLElBQUksR0FBRyxJQUFJWixPQUFPO0VBQ3hCLE1BQU1hLElBQUksR0FBRyxJQUFJWixNQUFNO0VBQ3ZCLE1BQU1hLElBQUksR0FBR1YsUUFBUSxDQUFDVyxVQUFVLENBQUMsSUFBSSxDQUFDO0VBQ3RDLE1BQU1DLE9BQU8sR0FBR0YsSUFBSSxDQUFDRyxhQUFhLENBQUNiLFFBQVEsRUFBRSxRQUFRLENBQUM7RUFFdERPLElBQUksQ0FBQ08sVUFBVSxDQUFDSixJQUFJLENBQUM7RUFDckJGLElBQUksQ0FBQ08sV0FBVyxDQUFDTCxJQUFJLENBQUM7RUFDdEI7O0VBRUEsU0FBU00sT0FBTyxDQUFDQyxDQUFDLEVBQUU7SUFDaEIsTUFBTUMsR0FBRyxHQUFHbEIsUUFBUSxDQUFDVyxVQUFVLENBQUMsSUFBSSxDQUFDO0lBQ3JDUSxxQkFBcUIsQ0FBQ0gsT0FBTyxDQUFDO0lBQzlCRSxHQUFHLENBQUNFLFNBQVMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDakIsTUFBTSxDQUFDQyxVQUFVLEVBQUNELE1BQU0sQ0FBQ0csV0FBVyxDQUFDO0lBR3ZEWSxHQUFHLENBQUNHLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFbEIsTUFBTSxDQUFDQyxVQUFVLEVBQUVELE1BQU0sQ0FBQ0csV0FBVyxDQUFDO0lBRXpELE1BQU1nQixHQUFHLEdBQUd4QixRQUFRLENBQUNHLGNBQWMsQ0FBQyxTQUFTLENBQUM7SUFDOUNpQixHQUFHLENBQUNLLFNBQVMsQ0FBQ0QsR0FBRyxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUM7SUFFdkJmLElBQUksQ0FBQ2lCLENBQUMsSUFBSSxDQUFDO0lBQ1g7SUFDQWpCLElBQUksQ0FBQ1MsT0FBTyxDQUFDRSxHQUFHLENBQUM7SUFDakJWLElBQUksQ0FBQ1EsT0FBTyxDQUFDRSxHQUFHLENBQUM7RUFDckI7RUFDQUYsT0FBTyxDQUFDLENBQUMsQ0FBQztBQUNaLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ZpZGdldC1zcGlubmVyLXByb2plY3QvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB0YXJnZXQgPSByZXF1aXJlKFwiLi9zY3JpcHRzL3RhcmdldC5qc1wiKVxuY29uc3Qgc3Bpbm5lciA9IHJlcXVpcmUoXCIuL3NjcmlwdHMvc3Bpbm5lci5qc1wiKVxuY29uc3QgYnVsbGV0ID0gcmVxdWlyZShcIi4vc2NyaXB0cy9idWxsZXQuanNcIilcbi8vIGNvbnN0IEdhbWUgPSByZXF1aXJlKFwiLi9zY3JpcHRzL2dhbWUuanNcIik7XG4vLyBjb25zdCBHYW1lVmlldyA9IHJlcXVpcmUoXCIuL3NjcmlwdHMvZ2FtZV92aWV3LmpzXCIpXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKCl7XG4gICAgY29uc3QgY2FudmFzRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhY2tncm91bmRcIik7XG4gICAgY2FudmFzRWwud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICBjYW52YXNFbC5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbiBcbiAgICBjb25zdCB0YXJnID0gbmV3IHRhcmdldFxuICAgIGNvbnN0IHNwbnIgPSBuZXcgc3Bpbm5lclxuICAgIGNvbnN0IGJsbHQgPSBuZXcgYnVsbGV0XG4gICAgY29uc3QgY3R4eCA9IGNhbnZhc0VsLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBjb25zdCBiYWNraW5nID0gY3R4eC5jcmVhdGVQYXR0ZXJuKGNhbnZhc0VsLCBcInJlcGVhdFwiKVxuXG4gICAgdGFyZy5kcmF3VGFyZ2V0KGN0eHgpXG4gICAgc3Buci5kcmF3U3Bpbm5lcihjdHh4KVxuICAgIC8vIGJsbHQuZHJhd0J1bGxldChjdHh4KVxuICAgIFxuICAgIGZ1bmN0aW9uIGFuaW1hdGUoaSkge1xuICAgICAgICBjb25zdCBjdHggPSBjYW52YXNFbC5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcbiAgICAgICAgY3R4LmNsZWFyUmVjdCgwLDAsd2luZG93LmlubmVyV2lkdGgsd2luZG93LmlubmVySGVpZ2h0KVxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCB3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcblxuICAgICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJncm91bmRcIilcbiAgICAgICAgY3R4LmRyYXdJbWFnZShpbWcsIDAsMClcblxuICAgICAgICB0YXJnLnggKz0gMVxuICAgICAgICAvLyBkZWJ1Z2dlclxuICAgICAgICB0YXJnLmFuaW1hdGUoY3R4KVxuICAgICAgICBzcG5yLmFuaW1hdGUoY3R4KVxuICAgIH1cbiAgICBhbmltYXRlKDApO1xuICB9KTsgXG5cblxuICAiXSwibmFtZXMiOlsidGFyZ2V0IiwicmVxdWlyZSIsInNwaW5uZXIiLCJidWxsZXQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXNFbCIsImdldEVsZW1lbnRCeUlkIiwid2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJ0YXJnIiwic3BuciIsImJsbHQiLCJjdHh4IiwiZ2V0Q29udGV4dCIsImJhY2tpbmciLCJjcmVhdGVQYXR0ZXJuIiwiZHJhd1RhcmdldCIsImRyYXdTcGlubmVyIiwiYW5pbWF0ZSIsImkiLCJjdHgiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjbGVhclJlY3QiLCJmaWxsUmVjdCIsImltZyIsImRyYXdJbWFnZSIsIngiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/bullet.js":
/*!*******************************!*\
  !*** ./src/scripts/bullet.js ***!
  \*******************************/
/***/ (function(module) {

eval("class Bullet {\n  constructor() {\n    this.x = 200;\n    this.y = 200;\n    this.animate = this.animate.bind(this);\n    this.move = this.move.bind(this);\n    this.radius = 10;\n    this.xSpeed = 1;\n    this.ySpeed = 1;\n  }\n  drawBullet(ctx) {\n    // debugger\n    const blltImg = document.getElementById(\"bulletImg\");\n    // debugger\n    ctx.drawImg(blltImg, this.x, this.y, 50, 50);\n  }\n  animate(ctx) {\n    this.move();\n    this.drawBullet(ctx);\n  }\n  move() {\n    this.x += this.xSpeed;\n    this.y += this.ySpeed;\n    this.drawBullet(ctx);\n  }\n\n  // hitTarget () {\n  //     this.remove()\n  //     targ.hit\n  // }\n}\n\nmodule.exports = Bullet;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9idWxsZXQuanMuanMiLCJuYW1lcyI6WyJCdWxsZXQiLCJjb25zdHJ1Y3RvciIsIngiLCJ5IiwiYW5pbWF0ZSIsImJpbmQiLCJtb3ZlIiwicmFkaXVzIiwieFNwZWVkIiwieVNwZWVkIiwiZHJhd0J1bGxldCIsImN0eCIsImJsbHRJbWciLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZHJhd0ltZyIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2VicGFjazovL2ZpZGdldC1zcGlubmVyLXByb2plY3QvLi9zcmMvc2NyaXB0cy9idWxsZXQuanM/MzZiYyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBCdWxsZXQge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgdGhpcy54ID0gMjAwXG4gICAgICAgIHRoaXMueSA9IDIwMFxuICAgICAgICB0aGlzLmFuaW1hdGUgPSB0aGlzLmFuaW1hdGUuYmluZCh0aGlzKVxuICAgICAgICB0aGlzLm1vdmUgPSB0aGlzLm1vdmUuYmluZCh0aGlzKVxuICAgICAgICB0aGlzLnJhZGl1cyA9IDEwXG4gICAgICAgIHRoaXMueFNwZWVkID0gMVxuICAgICAgICB0aGlzLnlTcGVlZCA9IDFcbiAgICB9XG5cbiAgICBkcmF3QnVsbGV0IChjdHgpIHtcbiAgICAgICAgLy8gZGVidWdnZXJcbiAgICAgICAgY29uc3QgYmxsdEltZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnVsbGV0SW1nXCIpO1xuICAgICAgICAvLyBkZWJ1Z2dlclxuICAgICAgICBjdHguZHJhd0ltZyhibGx0SW1nLCB0aGlzLngsIHRoaXMueSwgNTAsIDUwKTtcbiAgICB9XG5cbiAgICBhbmltYXRlIChjdHgpIHtcbiAgICAgICAgdGhpcy5tb3ZlKClcbiAgICAgICAgdGhpcy5kcmF3QnVsbGV0KGN0eClcbiAgICB9XG5cbiAgICBtb3ZlICgpIHtcbiAgICAgICAgdGhpcy54ICs9IHRoaXMueFNwZWVkXG4gICAgICAgIHRoaXMueSArPSB0aGlzLnlTcGVlZFxuICAgICAgICB0aGlzLmRyYXdCdWxsZXQoY3R4KVxuICAgIH1cblxuICAgIC8vIGhpdFRhcmdldCAoKSB7XG4gICAgLy8gICAgIHRoaXMucmVtb3ZlKClcbiAgICAvLyAgICAgdGFyZy5oaXRcbiAgICAvLyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQnVsbGV0Il0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxNQUFNLENBQUM7RUFDVEMsV0FBVyxHQUFJO0lBQ1gsSUFBSSxDQUFDQyxDQUFDLEdBQUcsR0FBRztJQUNaLElBQUksQ0FBQ0MsQ0FBQyxHQUFHLEdBQUc7SUFDWixJQUFJLENBQUNDLE9BQU8sR0FBRyxJQUFJLENBQUNBLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQztJQUN0QyxJQUFJLENBQUNDLElBQUksR0FBRyxJQUFJLENBQUNBLElBQUksQ0FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQztJQUNoQyxJQUFJLENBQUNFLE1BQU0sR0FBRyxFQUFFO0lBQ2hCLElBQUksQ0FBQ0MsTUFBTSxHQUFHLENBQUM7SUFDZixJQUFJLENBQUNDLE1BQU0sR0FBRyxDQUFDO0VBQ25CO0VBRUFDLFVBQVUsQ0FBRUMsR0FBRyxFQUFFO0lBQ2I7SUFDQSxNQUFNQyxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFdBQVcsQ0FBQztJQUNwRDtJQUNBSCxHQUFHLENBQUNJLE9BQU8sQ0FBQ0gsT0FBTyxFQUFFLElBQUksQ0FBQ1YsQ0FBQyxFQUFFLElBQUksQ0FBQ0MsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7RUFDaEQ7RUFFQUMsT0FBTyxDQUFFTyxHQUFHLEVBQUU7SUFDVixJQUFJLENBQUNMLElBQUksRUFBRTtJQUNYLElBQUksQ0FBQ0ksVUFBVSxDQUFDQyxHQUFHLENBQUM7RUFDeEI7RUFFQUwsSUFBSSxHQUFJO0lBQ0osSUFBSSxDQUFDSixDQUFDLElBQUksSUFBSSxDQUFDTSxNQUFNO0lBQ3JCLElBQUksQ0FBQ0wsQ0FBQyxJQUFJLElBQUksQ0FBQ00sTUFBTTtJQUNyQixJQUFJLENBQUNDLFVBQVUsQ0FBQ0MsR0FBRyxDQUFDO0VBQ3hCOztFQUVBO0VBQ0E7RUFDQTtFQUNBO0FBQ0o7O0FBRUFLLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHakIsTUFBTSJ9\n//# sourceURL=webpack-internal:///./src/scripts/bullet.js\n");

/***/ }),

/***/ "./src/scripts/spinner.js":
/*!********************************!*\
  !*** ./src/scripts/spinner.js ***!
  \********************************/
/***/ (function(module) {

eval("class Spinner {\n  constructor(context) {\n    this.context = context;\n    this.size = 150;\n    this.width = this.size;\n    this.height = this.size;\n    this.x = innerWidth / 2.0 - this.width / 2.0;\n    this.y = innerHeight / 2.0 - this.height / 2.0;\n    this.animate = this.animate.bind(this);\n    this.move = this.move.bind(this);\n    this.rotate = this.rotate.bind(this);\n    this.rads = 0;\n    this.center = [innerWidth / 2.0, innerHeight / 2.0];\n    this.angularSpd = 5.0;\n  }\n  drawSpinner(ctx) {\n    const spinnerImg = document.getElementById(\"spinnerImg\");\n    ctx.drawImage(spinnerImg, this.x, this.y, this.width, this.height);\n  }\n  animate(ctx) {\n    this.rotate(ctx);\n    // this.drawSpinner(ctx)\n  }\n\n  move() {\n    this.x += 10;\n    this.y += 10;\n    this.animate(ctx);\n  }\n  rotate(ctx) {\n    ctx.save();\n    ctx.translate(this.center[0], this.center[1]);\n    ctx.rotate(this.rads + Math.PI / 64.0);\n    this.rads -= this.angularSpd * Math.PI / 640.0;\n    ctx.translate(-1.0 * this.center[0], -1.0 * this.center[1]);\n    this.drawSpinner(ctx);\n    ctx.restore();\n    // this.animate(this.context)\n  }\n}\n\nmodule.exports = Spinner;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9zcGlubmVyLmpzLmpzIiwibmFtZXMiOlsiU3Bpbm5lciIsImNvbnN0cnVjdG9yIiwiY29udGV4dCIsInNpemUiLCJ3aWR0aCIsImhlaWdodCIsIngiLCJpbm5lcldpZHRoIiwieSIsImlubmVySGVpZ2h0IiwiYW5pbWF0ZSIsImJpbmQiLCJtb3ZlIiwicm90YXRlIiwicmFkcyIsImNlbnRlciIsImFuZ3VsYXJTcGQiLCJkcmF3U3Bpbm5lciIsImN0eCIsInNwaW5uZXJJbWciLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZHJhd0ltYWdlIiwic2F2ZSIsInRyYW5zbGF0ZSIsIk1hdGgiLCJQSSIsInJlc3RvcmUiLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maWRnZXQtc3Bpbm5lci1wcm9qZWN0Ly4vc3JjL3NjcmlwdHMvc3Bpbm5lci5qcz84YzVjIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFNwaW5uZXIge1xuICAgIGNvbnN0cnVjdG9yIChjb250ZXh0KXtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dFxuICAgICAgICB0aGlzLnNpemUgPSAxNTBcbiAgICAgICAgdGhpcy53aWR0aCA9IHRoaXMuc2l6ZVxuICAgICAgICB0aGlzLmhlaWdodCA9IHRoaXMuc2l6ZVxuICAgICAgICB0aGlzLnggPSBpbm5lcldpZHRoLzIuMCAtIHRoaXMud2lkdGgvMi4wXG4gICAgICAgIHRoaXMueSA9IGlubmVySGVpZ2h0LzIuMCAtIHRoaXMuaGVpZ2h0LzIuMFxuICAgICAgICB0aGlzLmFuaW1hdGUgPSB0aGlzLmFuaW1hdGUuYmluZCh0aGlzKVxuICAgICAgICB0aGlzLm1vdmUgPSB0aGlzLm1vdmUuYmluZCh0aGlzKVxuICAgICAgICB0aGlzLnJvdGF0ZSA9IHRoaXMucm90YXRlLmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5yYWRzID0gMFxuICAgICAgICB0aGlzLmNlbnRlciA9IFtpbm5lcldpZHRoLzIuMCwgaW5uZXJIZWlnaHQvMi4wXVxuICAgICAgICB0aGlzLmFuZ3VsYXJTcGQgPSA1LjBcbiAgICB9XG4gICAgXG4gICAgZHJhd1NwaW5uZXIgKGN0eCl7XG4gICAgICAgIGNvbnN0IHNwaW5uZXJJbWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNwaW5uZXJJbWdcIilcbiAgICAgICAgY3R4LmRyYXdJbWFnZShzcGlubmVySW1nLCB0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpXG4gICAgfVxuXG4gICAgYW5pbWF0ZSAoY3R4KSB7XG4gICAgICAgIHRoaXMucm90YXRlKGN0eClcbiAgICAgICAgLy8gdGhpcy5kcmF3U3Bpbm5lcihjdHgpXG4gICAgfVxuXG4gICAgbW92ZSAoKSB7XG4gICAgICAgIHRoaXMueCArPSAxMDtcbiAgICAgICAgdGhpcy55ICs9IDEwO1xuICAgICAgICB0aGlzLmFuaW1hdGUoY3R4KVxuICAgIH1cblxuICAgIHJvdGF0ZSAoY3R4KSB7XG4gICAgICAgIGN0eC5zYXZlKClcbiAgICAgICAgY3R4LnRyYW5zbGF0ZSh0aGlzLmNlbnRlclswXSwgdGhpcy5jZW50ZXJbMV0pXG4gICAgICAgIGN0eC5yb3RhdGUodGhpcy5yYWRzICsgTWF0aC5QSS82NC4wKVxuICAgICAgICB0aGlzLnJhZHMgLT0gdGhpcy5hbmd1bGFyU3BkICogTWF0aC5QSS82NDAuMFxuICAgICAgICBjdHgudHJhbnNsYXRlKC0xLjAgKiB0aGlzLmNlbnRlclswXSwgLTEuMCAqIHRoaXMuY2VudGVyWzFdKVxuICAgICAgICB0aGlzLmRyYXdTcGlubmVyKGN0eClcbiAgICAgICAgY3R4LnJlc3RvcmUoKVxuICAgICAgICAvLyB0aGlzLmFuaW1hdGUodGhpcy5jb250ZXh0KVxuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTcGlubmVyXG4gICJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsT0FBTyxDQUFDO0VBQ1ZDLFdBQVcsQ0FB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\n//# sourceURL=webpack-internal:///./src/scripts/spinner.js\n");

/***/ }),

/***/ "./src/scripts/target.js":
/*!*******************************!*\
  !*** ./src/scripts/target.js ***!
  \*******************************/
/***/ (function(module) {

eval("class Target {\n  constructor() {\n    this.x = 100;\n    this.y = 100;\n    this.animate = this.animate.bind(this);\n    this.move = this.move.bind(this);\n    this.radius = 25;\n  }\n  drawTarget(ctx) {\n    const targImg = document.getElementById(\"targetImg\");\n    ctx.drawImage(targImg, this.x, this.y, 50, 50);\n  }\n  animate(ctx) {\n    this.drawTarget(ctx);\n  }\n  move() {\n    this.x += 10;\n    this.y += 10;\n    this.animate(this.context);\n  }\n}\nmodule.exports = Target;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy90YXJnZXQuanMuanMiLCJuYW1lcyI6WyJUYXJnZXQiLCJjb25zdHJ1Y3RvciIsIngiLCJ5IiwiYW5pbWF0ZSIsImJpbmQiLCJtb3ZlIiwicmFkaXVzIiwiZHJhd1RhcmdldCIsImN0eCIsInRhcmdJbWciLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZHJhd0ltYWdlIiwiY29udGV4dCIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2VicGFjazovL2ZpZGdldC1zcGlubmVyLXByb2plY3QvLi9zcmMvc2NyaXB0cy90YXJnZXQuanM/ZTI5YyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBUYXJnZXQge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgdGhpcy54ID0gMTAwXG4gICAgICAgIHRoaXMueSA9IDEwMFxuICAgICAgICB0aGlzLmFuaW1hdGUgPSB0aGlzLmFuaW1hdGUuYmluZCh0aGlzKVxuICAgICAgICB0aGlzLm1vdmUgPSB0aGlzLm1vdmUuYmluZCh0aGlzKVxuICAgICAgICB0aGlzLnJhZGl1cyA9IDI1XG4gICAgfVxuICAgICBcbiAgICBkcmF3VGFyZ2V0IChjdHgpe1xuICAgICAgICBjb25zdCB0YXJnSW1nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXJnZXRJbWdcIilcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0YXJnSW1nLCB0aGlzLngsIHRoaXMueSwgNTAsIDUwKVxuICAgIH1cblxuICAgIGFuaW1hdGUgKGN0eCkge1xuICAgICAgICB0aGlzLmRyYXdUYXJnZXQoY3R4KVxuICAgIH1cblxuICAgIG1vdmUgKCkge1xuICAgICAgICB0aGlzLnggKz0gMTA7XG4gICAgICAgIHRoaXMueSArPSAxMDtcbiAgICAgICAgdGhpcy5hbmltYXRlKHRoaXMuY29udGV4dClcbiAgICB9XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUYXJnZXRcbiAgIl0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxNQUFNLENBQUM7RUFDVEMsV0FBVyxHQUFJO0lBQ1gsSUFBSSxDQUFDQyxDQUFDLEdBQUcsR0FBRztJQUNaLElBQUksQ0FBQ0MsQ0FBQyxHQUFHLEdBQUc7SUFDWixJQUFJLENBQUNDLE9BQU8sR0FBRyxJQUFJLENBQUNBLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQztJQUN0QyxJQUFJLENBQUNDLElBQUksR0FBRyxJQUFJLENBQUNBLElBQUksQ0FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQztJQUNoQyxJQUFJLENBQUNFLE1BQU0sR0FBRyxFQUFFO0VBQ3BCO0VBRUFDLFVBQVUsQ0FBRUMsR0FBRyxFQUFDO0lBQ1osTUFBTUMsT0FBTyxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxXQUFXLENBQUM7SUFDcERILEdBQUcsQ0FBQ0ksU0FBUyxDQUFDSCxPQUFPLEVBQUUsSUFBSSxDQUFDUixDQUFDLEVBQUUsSUFBSSxDQUFDQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztFQUNsRDtFQUVBQyxPQUFPLENBQUVLLEdBQUcsRUFBRTtJQUNWLElBQUksQ0FBQ0QsVUFBVSxDQUFDQyxHQUFHLENBQUM7RUFDeEI7RUFFQUgsSUFBSSxHQUFJO0lBQ0osSUFBSSxDQUFDSixDQUFDLElBQUksRUFBRTtJQUNaLElBQUksQ0FBQ0MsQ0FBQyxJQUFJLEVBQUU7SUFDWixJQUFJLENBQUNDLE9BQU8sQ0FBQyxJQUFJLENBQUNVLE9BQU8sQ0FBQztFQUM5QjtBQUVKO0FBRUFDLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHaEIsTUFBTSJ9\n//# sourceURL=webpack-internal:///./src/scripts/target.js\n");

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