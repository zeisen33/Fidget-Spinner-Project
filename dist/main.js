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

eval("const crc = __webpack_require__(/*! ./scripts/target.js */ \"./src/scripts/target.js\");\nconst spnr = __webpack_require__(/*! ./scripts/spinner.js */ \"./src/scripts/spinner.js\");\nconst Game = __webpack_require__(/*! ./scripts/game.js */ \"./src/scripts/game.js\");\nconst GameView = __webpack_require__(/*! ./scripts/game_view.js */ \"./src/scripts/game_view.js\");\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  const canvasEl = document.getElementById(\"background\");\n  canvasEl.width = window.innerWidth;\n  canvasEl.height = window.innerHeight;\n\n  // const canvasSpinner = document.getElementById(\"spinner\");\n  // canvasSpinner.width = 500;\n  // canvasSpinner.height = 500\n\n  const ctx = canvasEl.getContext(\"2d\");\n  // ctx.fillStyle = \"purple\";\n  ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);\n  const img = document.getElementById(\"bground\");\n  ctx.drawImage(img, 0, 0);\n  const game = new Game();\n  new GameView(game, ctx).start();\n\n  // ctx.beginPath();\n  // ctx.arc(100, 100, 20, 0, 2*Math.PI, true);\n  // ctx.strokeStyle = \"green\";\n  // ctx.lineWidth = 5;\n  // ctx.stroke();\n  // ctx.fillStyle = \"blue\";\n  // ctx.fill();\n\n  // const spinner = new spnr(ctx)\n  // spinner.animate(spinner.context)\n  // // ctx.clearRect(0, 0, canvasEl.width, canvasEl.height)\n  // ctx.fillStyle = \"red\";\n  // // ctx.fillRect(300, 300, 100, 100);\n  // // debugger\n  // setTimeout(spinner.move, 5000)\n  // // debugger\n  // setTimeout(spinner.rotate, 4000)\n\n  // debugger\n  // const circle = new crc(ctx)\n  // circle.animate(circle.context)\n  // setTimeout(circle.move, 5000)\n  // debugger\n  // let x = 200;\n  // function animate() {\n  //     requestAnimationFrame(animate);\n  //     ctx.clearRect(0,0,window.innerWidth,window.innerHeight)\n  //     const spinner = new spnr(ctx)\n  //     spinner.animate(spinner.context)\n  //     ctx.fillStyle = \"red\";\n  // }\n  // animate();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsR0FBRyxHQUFHQyxtQkFBTyxDQUFDLG9EQUFxQixDQUFDO0FBQzFDLE1BQU1DLElBQUksR0FBR0QsbUJBQU8sQ0FBQyxzREFBc0IsQ0FBQztBQUM1QyxNQUFNRSxJQUFJLEdBQUdGLG1CQUFPLENBQUMsZ0RBQW1CLENBQUM7QUFDekMsTUFBTUcsUUFBUSxHQUFHSCxtQkFBTyxDQUFDLDBEQUF3QixDQUFDO0FBRWxESSxRQUFRLENBQUNDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFlBQVU7RUFDcEQsTUFBTUMsUUFBUSxHQUFHRixRQUFRLENBQUNHLGNBQWMsQ0FBQyxZQUFZLENBQUM7RUFDdERELFFBQVEsQ0FBQ0UsS0FBSyxHQUFHQyxNQUFNLENBQUNDLFVBQVU7RUFDbENKLFFBQVEsQ0FBQ0ssTUFBTSxHQUFHRixNQUFNLENBQUNHLFdBQVc7O0VBRXBDO0VBQ0E7RUFDQTs7RUFFQSxNQUFNQyxHQUFHLEdBQUdQLFFBQVEsQ0FBQ1EsVUFBVSxDQUFDLElBQUksQ0FBQztFQUNyQztFQUNBRCxHQUFHLENBQUNFLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFTixNQUFNLENBQUNDLFVBQVUsRUFBRUQsTUFBTSxDQUFDRyxXQUFXLENBQUM7RUFFekQsTUFBTUksR0FBRyxHQUFHWixRQUFRLENBQUNHLGNBQWMsQ0FBQyxTQUFTLENBQUM7RUFDOUNNLEdBQUcsQ0FBQ0ksU0FBUyxDQUFDRCxHQUFHLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQztFQUV2QixNQUFNRSxJQUFJLEdBQUcsSUFBSWhCLElBQUksRUFBRTtFQUN2QixJQUFJQyxRQUFRLENBQUNlLElBQUksRUFBRUwsR0FBRyxDQUFDLENBQUNNLEtBQUssRUFBRTs7RUFFL0I7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztFQUVBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7QUFDRixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maWRnZXQtc3Bpbm5lci1wcm9qZWN0Ly4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY3JjID0gcmVxdWlyZShcIi4vc2NyaXB0cy90YXJnZXQuanNcIilcbmNvbnN0IHNwbnIgPSByZXF1aXJlKFwiLi9zY3JpcHRzL3NwaW5uZXIuanNcIilcbmNvbnN0IEdhbWUgPSByZXF1aXJlKFwiLi9zY3JpcHRzL2dhbWUuanNcIik7XG5jb25zdCBHYW1lVmlldyA9IHJlcXVpcmUoXCIuL3NjcmlwdHMvZ2FtZV92aWV3LmpzXCIpXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKCl7XG4gICAgY29uc3QgY2FudmFzRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhY2tncm91bmRcIik7XG4gICAgY2FudmFzRWwud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICBjYW52YXNFbC5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbiAgICAvLyBjb25zdCBjYW52YXNTcGlubmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzcGlubmVyXCIpO1xuICAgIC8vIGNhbnZhc1NwaW5uZXIud2lkdGggPSA1MDA7XG4gICAgLy8gY2FudmFzU3Bpbm5lci5oZWlnaHQgPSA1MDBcbiAgXG4gICAgY29uc3QgY3R4ID0gY2FudmFzRWwuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIC8vIGN0eC5maWxsU3R5bGUgPSBcInB1cnBsZVwiO1xuICAgIGN0eC5maWxsUmVjdCgwLCAwLCB3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcblxuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmdyb3VuZFwiKVxuICAgIGN0eC5kcmF3SW1hZ2UoaW1nLCAwLDApXG5cbiAgICBjb25zdCBnYW1lID0gbmV3IEdhbWUoKTtcbiAgICBuZXcgR2FtZVZpZXcoZ2FtZSwgY3R4KS5zdGFydCgpXG4gIFxuICAgIC8vIGN0eC5iZWdpblBhdGgoKTtcbiAgICAvLyBjdHguYXJjKDEwMCwgMTAwLCAyMCwgMCwgMipNYXRoLlBJLCB0cnVlKTtcbiAgICAvLyBjdHguc3Ryb2tlU3R5bGUgPSBcImdyZWVuXCI7XG4gICAgLy8gY3R4LmxpbmVXaWR0aCA9IDU7XG4gICAgLy8gY3R4LnN0cm9rZSgpO1xuICAgIC8vIGN0eC5maWxsU3R5bGUgPSBcImJsdWVcIjtcbiAgICAvLyBjdHguZmlsbCgpO1xuXG4gICAgLy8gY29uc3Qgc3Bpbm5lciA9IG5ldyBzcG5yKGN0eClcbiAgICAvLyBzcGlubmVyLmFuaW1hdGUoc3Bpbm5lci5jb250ZXh0KVxuICAgIC8vIC8vIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzRWwud2lkdGgsIGNhbnZhc0VsLmhlaWdodClcbiAgICAvLyBjdHguZmlsbFN0eWxlID0gXCJyZWRcIjtcbiAgICAvLyAvLyBjdHguZmlsbFJlY3QoMzAwLCAzMDAsIDEwMCwgMTAwKTtcbiAgICAvLyAvLyBkZWJ1Z2dlclxuICAgIC8vIHNldFRpbWVvdXQoc3Bpbm5lci5tb3ZlLCA1MDAwKVxuICAgIC8vIC8vIGRlYnVnZ2VyXG4gICAgLy8gc2V0VGltZW91dChzcGlubmVyLnJvdGF0ZSwgNDAwMClcblxuICAgIC8vIGRlYnVnZ2VyXG4gICAgLy8gY29uc3QgY2lyY2xlID0gbmV3IGNyYyhjdHgpXG4gICAgLy8gY2lyY2xlLmFuaW1hdGUoY2lyY2xlLmNvbnRleHQpXG4gICAgLy8gc2V0VGltZW91dChjaXJjbGUubW92ZSwgNTAwMClcbiAgICAvLyBkZWJ1Z2dlclxuICAgIC8vIGxldCB4ID0gMjAwO1xuICAgIC8vIGZ1bmN0aW9uIGFuaW1hdGUoKSB7XG4gICAgLy8gICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcbiAgICAvLyAgICAgY3R4LmNsZWFyUmVjdCgwLDAsd2luZG93LmlubmVyV2lkdGgsd2luZG93LmlubmVySGVpZ2h0KVxuICAgIC8vICAgICBjb25zdCBzcGlubmVyID0gbmV3IHNwbnIoY3R4KVxuICAgIC8vICAgICBzcGlubmVyLmFuaW1hdGUoc3Bpbm5lci5jb250ZXh0KVxuICAgIC8vICAgICBjdHguZmlsbFN0eWxlID0gXCJyZWRcIjtcbiAgICAvLyB9XG4gICAgLy8gYW5pbWF0ZSgpO1xuICB9KTtcblxuXG4gICJdLCJuYW1lcyI6WyJjcmMiLCJyZXF1aXJlIiwic3BuciIsIkdhbWUiLCJHYW1lVmlldyIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbnZhc0VsIiwiZ2V0RWxlbWVudEJ5SWQiLCJ3aWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsImN0eCIsImdldENvbnRleHQiLCJmaWxsUmVjdCIsImltZyIsImRyYXdJbWFnZSIsImdhbWUiLCJzdGFydCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("const Target = __webpack_require__(/*! ./target.js */ \"./src/scripts/target.js\");\nfunction Game() {\n  this.targets = [];\n  this.addTarget();\n}\nGame.prototype.add = function add(object) {\n  if (object instanceof Target) {\n    this.targets.push(object);\n  }\n};\nGame.prototype.addTarget = function addTarget() {\n  this.addTarget(new Target({\n    game: this\n  }));\n};\nGame.prototype.step = function step(delta) {\n  this.moveObjects(delta);\n};\nGame.prototype.moveObjects = function moveObjects(delta) {\n  this.targets.move(delta);\n};\nmodule.exports = Game;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLE1BQU0sR0FBR0MsbUJBQU8sQ0FBQyw0Q0FBYSxDQUFDO0FBRXJDLFNBQVNDLElBQUksR0FBRztFQUNaLElBQUksQ0FBQ0MsT0FBTyxHQUFHLEVBQUU7RUFDakIsSUFBSSxDQUFDQyxTQUFTLEVBQUU7QUFDcEI7QUFFQUYsSUFBSSxDQUFDRyxTQUFTLENBQUNDLEdBQUcsR0FBRyxTQUFTQSxHQUFHLENBQUNDLE1BQU0sRUFBRTtFQUN0QyxJQUFJQSxNQUFNLFlBQVlQLE1BQU0sRUFBRTtJQUMxQixJQUFJLENBQUNHLE9BQU8sQ0FBQ0ssSUFBSSxDQUFDRCxNQUFNLENBQUM7RUFDN0I7QUFDSixDQUFDO0FBRURMLElBQUksQ0FBQ0csU0FBUyxDQUFDRCxTQUFTLEdBQUcsU0FBU0EsU0FBUyxHQUFHO0VBQzVDLElBQUksQ0FBQ0EsU0FBUyxDQUFDLElBQUlKLE1BQU0sQ0FBQztJQUFFUyxJQUFJLEVBQUU7RUFBSSxDQUFDLENBQUMsQ0FBQztBQUM3QyxDQUFDO0FBRURQLElBQUksQ0FBQ0csU0FBUyxDQUFDSyxJQUFJLEdBQUcsU0FBU0EsSUFBSSxDQUFDQyxLQUFLLEVBQUU7RUFDdkMsSUFBSSxDQUFDQyxXQUFXLENBQUNELEtBQUssQ0FBQztBQUMzQixDQUFDO0FBRURULElBQUksQ0FBQ0csU0FBUyxDQUFDTyxXQUFXLEdBQUcsU0FBU0EsV0FBVyxDQUFDRCxLQUFLLEVBQUU7RUFDckQsSUFBSSxDQUFDUixPQUFPLENBQUNVLElBQUksQ0FBQ0YsS0FBSyxDQUFDO0FBQzVCLENBQUM7QUFFREcsTUFBTSxDQUFDQyxPQUFPLEdBQUdiLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maWRnZXQtc3Bpbm5lci1wcm9qZWN0Ly4vc3JjL3NjcmlwdHMvZ2FtZS5qcz9jZGMwIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFRhcmdldCA9IHJlcXVpcmUoXCIuL3RhcmdldC5qc1wiKTtcblxuZnVuY3Rpb24gR2FtZSgpIHtcbiAgICB0aGlzLnRhcmdldHMgPSBbXTtcbiAgICB0aGlzLmFkZFRhcmdldCgpO1xufVxuXG5HYW1lLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiBhZGQob2JqZWN0KSB7XG4gICAgaWYgKG9iamVjdCBpbnN0YW5jZW9mIFRhcmdldCkge1xuICAgICAgICB0aGlzLnRhcmdldHMucHVzaChvYmplY3QpO1xuICAgIH1cbn1cblxuR2FtZS5wcm90b3R5cGUuYWRkVGFyZ2V0ID0gZnVuY3Rpb24gYWRkVGFyZ2V0KCkge1xuICAgIHRoaXMuYWRkVGFyZ2V0KG5ldyBUYXJnZXQoeyBnYW1lOiB0aGlzfSkpXG59XG5cbkdhbWUucHJvdG90eXBlLnN0ZXAgPSBmdW5jdGlvbiBzdGVwKGRlbHRhKSB7XG4gICAgdGhpcy5tb3ZlT2JqZWN0cyhkZWx0YSk7XG59XG5cbkdhbWUucHJvdG90eXBlLm1vdmVPYmplY3RzID0gZnVuY3Rpb24gbW92ZU9iamVjdHMoZGVsdGEpIHtcbiAgICB0aGlzLnRhcmdldHMubW92ZShkZWx0YSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gR2FtZTsiXSwibmFtZXMiOlsiVGFyZ2V0IiwicmVxdWlyZSIsIkdhbWUiLCJ0YXJnZXRzIiwiYWRkVGFyZ2V0IiwicHJvdG90eXBlIiwiYWRkIiwib2JqZWN0IiwicHVzaCIsImdhbWUiLCJzdGVwIiwiZGVsdGEiLCJtb3ZlT2JqZWN0cyIsIm1vdmUiLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/scripts/game_view.js":
/*!**********************************!*\
  !*** ./src/scripts/game_view.js ***!
  \**********************************/
/***/ (function(module) {

eval("function GameView(game, ctx) {\n  this.ctx = ctx;\n  this.game = game;\n  // this.target = this.game.addTarget();\n}\n\nGameView.prototype.start = function start() {\n  // this.bindKeyHandlers();\n  this.lastTime = 0;\n  requestAnimationFrame(this.animate.bind(this));\n};\nGameView.prototype.animate = function animate(time) {\n  const timeDelta = time - this.lastTime;\n  this.game.step(timeDelta);\n  this.game.draw(this.ctx);\n};\nmodule.exports = GameView;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lX3ZpZXcuanMuanMiLCJuYW1lcyI6WyJHYW1lVmlldyIsImdhbWUiLCJjdHgiLCJwcm90b3R5cGUiLCJzdGFydCIsImxhc3RUaW1lIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYW5pbWF0ZSIsImJpbmQiLCJ0aW1lIiwidGltZURlbHRhIiwic3RlcCIsImRyYXciLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maWRnZXQtc3Bpbm5lci1wcm9qZWN0Ly4vc3JjL3NjcmlwdHMvZ2FtZV92aWV3LmpzPzgwZWUiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gR2FtZVZpZXcoZ2FtZSwgY3R4KSB7XG4gICAgdGhpcy5jdHggPSBjdHg7XG4gICAgdGhpcy5nYW1lID0gZ2FtZTtcbiAgICAvLyB0aGlzLnRhcmdldCA9IHRoaXMuZ2FtZS5hZGRUYXJnZXQoKTtcbn1cblxuR2FtZVZpZXcucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgLy8gdGhpcy5iaW5kS2V5SGFuZGxlcnMoKTtcbiAgICB0aGlzLmxhc3RUaW1lID0gMDtcblxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUuYmluZCh0aGlzKSk7XG59XG5cbkdhbWVWaWV3LnByb3RvdHlwZS5hbmltYXRlID0gZnVuY3Rpb24gYW5pbWF0ZSh0aW1lKSB7XG4gICAgY29uc3QgdGltZURlbHRhID0gdGltZSAtIHRoaXMubGFzdFRpbWU7XG5cbiAgICB0aGlzLmdhbWUuc3RlcCh0aW1lRGVsdGEpO1xuICAgIHRoaXMuZ2FtZS5kcmF3KHRoaXMuY3R4KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHYW1lVmlldzsiXSwibWFwcGluZ3MiOiJBQUFBLFNBQVNBLFFBQVEsQ0FBQ0MsSUFBSSxFQUFFQyxHQUFHLEVBQUU7RUFDekIsSUFBSSxDQUFDQSxHQUFHLEdBQUdBLEdBQUc7RUFDZCxJQUFJLENBQUNELElBQUksR0FBR0EsSUFBSTtFQUNoQjtBQUNKOztBQUVBRCxRQUFRLENBQUNHLFNBQVMsQ0FBQ0MsS0FBSyxHQUFHLFNBQVNBLEtBQUssR0FBRztFQUN4QztFQUNBLElBQUksQ0FBQ0MsUUFBUSxHQUFHLENBQUM7RUFFakJDLHFCQUFxQixDQUFDLElBQUksQ0FBQ0MsT0FBTyxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDbEQsQ0FBQztBQUVEUixRQUFRLENBQUNHLFNBQVMsQ0FBQ0ksT0FBTyxHQUFHLFNBQVNBLE9BQU8sQ0FBQ0UsSUFBSSxFQUFFO0VBQ2hELE1BQU1DLFNBQVMsR0FBR0QsSUFBSSxHQUFHLElBQUksQ0FBQ0osUUFBUTtFQUV0QyxJQUFJLENBQUNKLElBQUksQ0FBQ1UsSUFBSSxDQUFDRCxTQUFTLENBQUM7RUFDekIsSUFBSSxDQUFDVCxJQUFJLENBQUNXLElBQUksQ0FBQyxJQUFJLENBQUNWLEdBQUcsQ0FBQztBQUM1QixDQUFDO0FBRURXLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHZCxRQUFRIn0=\n//# sourceURL=webpack-internal:///./src/scripts/game_view.js\n");

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

eval("class Target {\n  constructor(context) {\n    this.context = context;\n    this.x = 100;\n    this.y = 100;\n    this.animate = this.animate.bind(this);\n    this.move = this.move.bind(this);\n  }\n  drawTarget(ctx) {\n    // debugger\n    ctx.beginPath();\n    ctx.arc(this.x, this.y, 20, 0, 2 * Math.PI, true);\n    ctx.strokeStyle = \"green\";\n    ctx.lineWidth = 5;\n    ctx.stroke();\n    ctx.fillStyle = \"blue\";\n    ctx.fill();\n  }\n  animate(ctx) {\n    this.drawTarget(ctx);\n  }\n  move() {\n    this.x += 10;\n    this.y += 10;\n    this.animate(this.context);\n  }\n}\nmodule.exports = Target;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy90YXJnZXQuanMuanMiLCJuYW1lcyI6WyJUYXJnZXQiLCJjb25zdHJ1Y3RvciIsImNvbnRleHQiLCJ4IiwieSIsImFuaW1hdGUiLCJiaW5kIiwibW92ZSIsImRyYXdUYXJnZXQiLCJjdHgiLCJiZWdpblBhdGgiLCJhcmMiLCJNYXRoIiwiUEkiLCJzdHJva2VTdHlsZSIsImxpbmVXaWR0aCIsInN0cm9rZSIsImZpbGxTdHlsZSIsImZpbGwiLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maWRnZXQtc3Bpbm5lci1wcm9qZWN0Ly4vc3JjL3NjcmlwdHMvdGFyZ2V0LmpzP2UyOWMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgVGFyZ2V0IHtcbiAgICBjb25zdHJ1Y3RvciAoY29udGV4dCl7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHRcbiAgICAgICAgdGhpcy54ID0gMTAwXG4gICAgICAgIHRoaXMueSA9IDEwMFxuICAgICAgICB0aGlzLmFuaW1hdGUgPSB0aGlzLmFuaW1hdGUuYmluZCh0aGlzKVxuICAgICAgICB0aGlzLm1vdmUgPSB0aGlzLm1vdmUuYmluZCh0aGlzKVxuICAgIH1cbiAgICBcbiAgICBkcmF3VGFyZ2V0IChjdHgpe1xuICAgICAgICAvLyBkZWJ1Z2dlclxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5hcmModGhpcy54LCB0aGlzLnksIDIwLCAwLCAyKk1hdGguUEksIHRydWUpO1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImdyZWVuXCI7XG4gICAgICAgIGN0eC5saW5lV2lkdGggPSA1O1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcImJsdWVcIjtcbiAgICAgICAgY3R4LmZpbGwoKTtcbiAgICB9XG5cbiAgICBhbmltYXRlIChjdHgpIHtcbiAgICAgICAgdGhpcy5kcmF3VGFyZ2V0KGN0eClcbiAgICB9XG5cbiAgICBtb3ZlICgpIHtcbiAgICAgICAgdGhpcy54ICs9IDEwO1xuICAgICAgICB0aGlzLnkgKz0gMTA7XG4gICAgICAgIHRoaXMuYW5pbWF0ZSh0aGlzLmNvbnRleHQpXG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRhcmdldFxuICAiXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLE1BQU0sQ0FBQztFQUNUQyxXQUFXLENBQUVDLE9BQU8sRUFBQztJQUNqQixJQUFJLENBQUNBLE9BQU8sR0FBR0EsT0FBTztJQUN0QixJQUFJLENBQUNDLENBQUMsR0FBRyxHQUFHO0lBQ1osSUFBSSxDQUFDQyxDQUFDLEdBQUcsR0FBRztJQUNaLElBQUksQ0FBQ0MsT0FBTyxHQUFHLElBQUksQ0FBQ0EsT0FBTyxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ3RDLElBQUksQ0FBQ0MsSUFBSSxHQUFHLElBQUksQ0FBQ0EsSUFBSSxDQUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDO0VBQ3BDO0VBRUFFLFVBQVUsQ0FBRUMsR0FBRyxFQUFDO0lBQ1o7SUFDQUEsR0FBRyxDQUFDQyxTQUFTLEVBQUU7SUFDZkQsR0FBRyxDQUFDRSxHQUFHLENBQUMsSUFBSSxDQUFDUixDQUFDLEVBQUUsSUFBSSxDQUFDQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUNRLElBQUksQ0FBQ0MsRUFBRSxFQUFFLElBQUksQ0FBQztJQUMvQ0osR0FBRyxDQUFDSyxXQUFXLEdBQUcsT0FBTztJQUN6QkwsR0FBRyxDQUFDTSxTQUFTLEdBQUcsQ0FBQztJQUNqQk4sR0FBRyxDQUFDTyxNQUFNLEVBQUU7SUFDWlAsR0FBRyxDQUFDUSxTQUFTLEdBQUcsTUFBTTtJQUN0QlIsR0FBRyxDQUFDUyxJQUFJLEVBQUU7RUFDZDtFQUVBYixPQUFPLENBQUVJLEdBQUcsRUFBRTtJQUNWLElBQUksQ0FBQ0QsVUFBVSxDQUFDQyxHQUFHLENBQUM7RUFDeEI7RUFFQUYsSUFBSSxHQUFJO0lBQ0osSUFBSSxDQUFDSixDQUFDLElBQUksRUFBRTtJQUNaLElBQUksQ0FBQ0MsQ0FBQyxJQUFJLEVBQUU7SUFDWixJQUFJLENBQUNDLE9BQU8sQ0FBQyxJQUFJLENBQUNILE9BQU8sQ0FBQztFQUM5QjtBQUNKO0FBRUFpQixNQUFNLENBQUNDLE9BQU8sR0FBR3BCLE1BQU0ifQ==\n//# sourceURL=webpack-internal:///./src/scripts/target.js\n");

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