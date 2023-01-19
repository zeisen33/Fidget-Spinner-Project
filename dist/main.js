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

eval("const target = __webpack_require__(/*! ./scripts/target.js */ \"./src/scripts/target.js\");\nconst spinner = __webpack_require__(/*! ./scripts/spinner.js */ \"./src/scripts/spinner.js\");\nconst bullet = __webpack_require__(/*! ./scripts/bullet.js */ \"./src/scripts/bullet.js\");\n// const Game = require(\"./scripts/game.js\");\n// const GameView = require(\"./scripts/game_view.js\")\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  const canvasEl = document.getElementById(\"background\");\n  canvasEl.width = window.innerWidth;\n  canvasEl.height = window.innerHeight;\n  const targ = new target();\n  const spnr = new spinner();\n  const bllt = new bullet();\n  const ctxx = canvasEl.getContext(\"2d\");\n  const backing = ctxx.createPattern(canvasEl, \"repeat\");\n  targ.drawTarget(ctxx);\n  spnr.drawSpinner(ctxx);\n  bllt.drawBullet(ctxx);\n  function animate(i) {\n    const ctx = canvasEl.getContext(\"2d\");\n    requestAnimationFrame(animate);\n    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);\n    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);\n    const img = document.getElementById(\"bground\");\n    ctx.drawImage(img, 0, 0);\n    targ.x += 1;\n    // debugger\n    targ.animate(ctx);\n    spnr.animate(ctx);\n  }\n  animate(0);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsTUFBTSxHQUFHQyxtQkFBTyxDQUFDLG9EQUFxQixDQUFDO0FBQzdDLE1BQU1DLE9BQU8sR0FBR0QsbUJBQU8sQ0FBQyxzREFBc0IsQ0FBQztBQUMvQyxNQUFNRSxNQUFNLEdBQUdGLG1CQUFPLENBQUMsb0RBQXFCLENBQUM7QUFDN0M7QUFDQTs7QUFFQUcsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxZQUFVO0VBQ3BELE1BQU1DLFFBQVEsR0FBR0YsUUFBUSxDQUFDRyxjQUFjLENBQUMsWUFBWSxDQUFDO0VBQ3RERCxRQUFRLENBQUNFLEtBQUssR0FBR0MsTUFBTSxDQUFDQyxVQUFVO0VBQ2xDSixRQUFRLENBQUNLLE1BQU0sR0FBR0YsTUFBTSxDQUFDRyxXQUFXO0VBR3BDLE1BQU1DLElBQUksR0FBRyxJQUFJYixNQUFNO0VBQ3ZCLE1BQU1jLElBQUksR0FBRyxJQUFJWixPQUFPO0VBQ3hCLE1BQU1hLElBQUksR0FBRyxJQUFJWixNQUFNO0VBQ3ZCLE1BQU1hLElBQUksR0FBR1YsUUFBUSxDQUFDVyxVQUFVLENBQUMsSUFBSSxDQUFDO0VBQ3RDLE1BQU1DLE9BQU8sR0FBR0YsSUFBSSxDQUFDRyxhQUFhLENBQUNiLFFBQVEsRUFBRSxRQUFRLENBQUM7RUFFdERPLElBQUksQ0FBQ08sVUFBVSxDQUFDSixJQUFJLENBQUM7RUFDckJGLElBQUksQ0FBQ08sV0FBVyxDQUFDTCxJQUFJLENBQUM7RUFDdEJELElBQUksQ0FBQ08sVUFBVSxDQUFDTixJQUFJLENBQUM7RUFFckIsU0FBU08sT0FBTyxDQUFDQyxDQUFDLEVBQUU7SUFDaEIsTUFBTUMsR0FBRyxHQUFHbkIsUUFBUSxDQUFDVyxVQUFVLENBQUMsSUFBSSxDQUFDO0lBQ3JDUyxxQkFBcUIsQ0FBQ0gsT0FBTyxDQUFDO0lBQzlCRSxHQUFHLENBQUNFLFNBQVMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDbEIsTUFBTSxDQUFDQyxVQUFVLEVBQUNELE1BQU0sQ0FBQ0csV0FBVyxDQUFDO0lBR3ZEYSxHQUFHLENBQUNHLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFbkIsTUFBTSxDQUFDQyxVQUFVLEVBQUVELE1BQU0sQ0FBQ0csV0FBVyxDQUFDO0lBRXpELE1BQU1pQixHQUFHLEdBQUd6QixRQUFRLENBQUNHLGNBQWMsQ0FBQyxTQUFTLENBQUM7SUFDOUNrQixHQUFHLENBQUNLLFNBQVMsQ0FBQ0QsR0FBRyxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUM7SUFFdkJoQixJQUFJLENBQUNrQixDQUFDLElBQUksQ0FBQztJQUNYO0lBQ0FsQixJQUFJLENBQUNVLE9BQU8sQ0FBQ0UsR0FBRyxDQUFDO0lBQ2pCWCxJQUFJLENBQUNTLE9BQU8sQ0FBQ0UsR0FBRyxDQUFDO0VBQ3JCO0VBQ0FGLE9BQU8sQ0FBQyxDQUFDLENBQUM7QUFDWixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maWRnZXQtc3Bpbm5lci1wcm9qZWN0Ly4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdGFyZ2V0ID0gcmVxdWlyZShcIi4vc2NyaXB0cy90YXJnZXQuanNcIilcbmNvbnN0IHNwaW5uZXIgPSByZXF1aXJlKFwiLi9zY3JpcHRzL3NwaW5uZXIuanNcIilcbmNvbnN0IGJ1bGxldCA9IHJlcXVpcmUoXCIuL3NjcmlwdHMvYnVsbGV0LmpzXCIpXG4vLyBjb25zdCBHYW1lID0gcmVxdWlyZShcIi4vc2NyaXB0cy9nYW1lLmpzXCIpO1xuLy8gY29uc3QgR2FtZVZpZXcgPSByZXF1aXJlKFwiLi9zY3JpcHRzL2dhbWVfdmlldy5qc1wiKVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbigpe1xuICAgIGNvbnN0IGNhbnZhc0VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYWNrZ3JvdW5kXCIpO1xuICAgIGNhbnZhc0VsLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgY2FudmFzRWwuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuXG4gXG4gICAgY29uc3QgdGFyZyA9IG5ldyB0YXJnZXRcbiAgICBjb25zdCBzcG5yID0gbmV3IHNwaW5uZXJcbiAgICBjb25zdCBibGx0ID0gbmV3IGJ1bGxldFxuICAgIGNvbnN0IGN0eHggPSBjYW52YXNFbC5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgY29uc3QgYmFja2luZyA9IGN0eHguY3JlYXRlUGF0dGVybihjYW52YXNFbCwgXCJyZXBlYXRcIilcblxuICAgIHRhcmcuZHJhd1RhcmdldChjdHh4KVxuICAgIHNwbnIuZHJhd1NwaW5uZXIoY3R4eClcbiAgICBibGx0LmRyYXdCdWxsZXQoY3R4eClcbiAgICBcbiAgICBmdW5jdGlvbiBhbmltYXRlKGkpIHtcbiAgICAgICAgY29uc3QgY3R4ID0gY2FudmFzRWwuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4gICAgICAgIGN0eC5jbGVhclJlY3QoMCwwLHdpbmRvdy5pbm5lcldpZHRoLHdpbmRvdy5pbm5lckhlaWdodClcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBjdHguZmlsbFJlY3QoMCwgMCwgd2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XG5cbiAgICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiZ3JvdW5kXCIpXG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1nLCAwLDApXG5cbiAgICAgICAgdGFyZy54ICs9IDFcbiAgICAgICAgLy8gZGVidWdnZXJcbiAgICAgICAgdGFyZy5hbmltYXRlKGN0eClcbiAgICAgICAgc3Buci5hbmltYXRlKGN0eClcbiAgICB9XG4gICAgYW5pbWF0ZSgwKTtcbiAgfSk7IFxuXG5cbiAgIl0sIm5hbWVzIjpbInRhcmdldCIsInJlcXVpcmUiLCJzcGlubmVyIiwiYnVsbGV0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzRWwiLCJnZXRFbGVtZW50QnlJZCIsIndpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0IiwidGFyZyIsInNwbnIiLCJibGx0IiwiY3R4eCIsImdldENvbnRleHQiLCJiYWNraW5nIiwiY3JlYXRlUGF0dGVybiIsImRyYXdUYXJnZXQiLCJkcmF3U3Bpbm5lciIsImRyYXdCdWxsZXQiLCJhbmltYXRlIiwiaSIsImN0eCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNsZWFyUmVjdCIsImZpbGxSZWN0IiwiaW1nIiwiZHJhd0ltYWdlIiwieCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/bullet.js":
/*!*******************************!*\
  !*** ./src/scripts/bullet.js ***!
  \*******************************/
/***/ (function(module) {

eval("class Bullet {\n  constructor() {\n    this.x = 200;\n    this.y = 200;\n    this.animate = this.animate.bind(this);\n    this.move = this.move.bind(this);\n    this.radius = 10;\n    this.xSpeed = 1;\n  }\n  drawBullet(ctx) {\n    // debugger\n    const blltImg = document.getElementById(\"bulletImg\");\n    // debugger\n    ctx.drawImg(blltImg, this.x, this.y, 50, 50);\n  }\n  animate(ctx) {\n    this.drawBullet(ctx);\n  }\n  move() {\n    this.x += this.xSpeed;\n    this.y += this.ySpeed;\n    this.animate(ctx);\n  }\n}\nmodule.exports = Bullet;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9idWxsZXQuanMuanMiLCJuYW1lcyI6WyJCdWxsZXQiLCJjb25zdHJ1Y3RvciIsIngiLCJ5IiwiYW5pbWF0ZSIsImJpbmQiLCJtb3ZlIiwicmFkaXVzIiwieFNwZWVkIiwiZHJhd0J1bGxldCIsImN0eCIsImJsbHRJbWciLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZHJhd0ltZyIsInlTcGVlZCIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2VicGFjazovL2ZpZGdldC1zcGlubmVyLXByb2plY3QvLi9zcmMvc2NyaXB0cy9idWxsZXQuanM/MzZiYyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBCdWxsZXQge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgdGhpcy54ID0gMjAwXG4gICAgICAgIHRoaXMueSA9IDIwMFxuICAgICAgICB0aGlzLmFuaW1hdGUgPSB0aGlzLmFuaW1hdGUuYmluZCh0aGlzKVxuICAgICAgICB0aGlzLm1vdmUgPSB0aGlzLm1vdmUuYmluZCh0aGlzKVxuICAgICAgICB0aGlzLnJhZGl1cyA9IDEwXG4gICAgICAgIHRoaXMueFNwZWVkID0gMVxuICAgIH1cblxuICAgIGRyYXdCdWxsZXQgKGN0eCkge1xuICAgICAgICAvLyBkZWJ1Z2dlclxuICAgICAgICBjb25zdCBibGx0SW1nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidWxsZXRJbWdcIik7XG4gICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICAgIGN0eC5kcmF3SW1nKGJsbHRJbWcsIHRoaXMueCwgdGhpcy55LCA1MCwgNTApO1xuICAgIH1cblxuICAgIGFuaW1hdGUgKGN0eCkge1xuICAgICAgICB0aGlzLmRyYXdCdWxsZXQoY3R4KVxuICAgIH1cblxuICAgIG1vdmUgKCkge1xuICAgICAgICB0aGlzLnggKz0gdGhpcy54U3BlZWRcbiAgICAgICAgdGhpcy55ICs9IHRoaXMueVNwZWVkXG4gICAgICAgIHRoaXMuYW5pbWF0ZShjdHgpXG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEJ1bGxldCJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsTUFBTSxDQUFDO0VBQ1RDLFdBQVcsR0FBSTtJQUNYLElBQUksQ0FBQ0MsQ0FBQyxHQUFHLEdBQUc7SUFDWixJQUFJLENBQUNDLENBQUMsR0FBRyxHQUFHO0lBQ1osSUFBSSxDQUFDQyxPQUFPLEdBQUcsSUFBSSxDQUFDQSxPQUFPLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDdEMsSUFBSSxDQUFDQyxJQUFJLEdBQUcsSUFBSSxDQUFDQSxJQUFJLENBQUNELElBQUksQ0FBQyxJQUFJLENBQUM7SUFDaEMsSUFBSSxDQUFDRSxNQUFNLEdBQUcsRUFBRTtJQUNoQixJQUFJLENBQUNDLE1BQU0sR0FBRyxDQUFDO0VBQ25CO0VBRUFDLFVBQVUsQ0FBRUMsR0FBRyxFQUFFO0lBQ2I7SUFDQSxNQUFNQyxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFdBQVcsQ0FBQztJQUNwRDtJQUNBSCxHQUFHLENBQUNJLE9BQU8sQ0FBQ0gsT0FBTyxFQUFFLElBQUksQ0FBQ1QsQ0FBQyxFQUFFLElBQUksQ0FBQ0MsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7RUFDaEQ7RUFFQUMsT0FBTyxDQUFFTSxHQUFHLEVBQUU7SUFDVixJQUFJLENBQUNELFVBQVUsQ0FBQ0MsR0FBRyxDQUFDO0VBQ3hCO0VBRUFKLElBQUksR0FBSTtJQUNKLElBQUksQ0FBQ0osQ0FBQyxJQUFJLElBQUksQ0FBQ00sTUFBTTtJQUNyQixJQUFJLENBQUNMLENBQUMsSUFBSSxJQUFJLENBQUNZLE1BQU07SUFDckIsSUFBSSxDQUFDWCxPQUFPLENBQUNNLEdBQUcsQ0FBQztFQUNyQjtBQUNKO0FBRUFNLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHakIsTUFBTSJ9\n//# sourceURL=webpack-internal:///./src/scripts/bullet.js\n");

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