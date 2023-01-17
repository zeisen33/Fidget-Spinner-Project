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

eval("const crc = __webpack_require__(/*! ./scripts/circle.js */ \"./src/scripts/circle.js\");\nconst spnr = __webpack_require__(/*! ./scripts/spinner.js */ \"./src/scripts/spinner.js\");\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  const canvasEl = document.getElementById(\"background\");\n  canvasEl.width = window.innerWidth;\n  canvasEl.height = window.innerHeight;\n\n  // const canvasSpinner = document.getElementById(\"spinner\");\n  // canvasSpinner.width = 500;\n  // canvasSpinner.height = 500\n\n  const ctx = canvasEl.getContext(\"2d\");\n  ctx.fillStyle = \"purple\";\n  ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);\n\n  // ctx.beginPath();\n  // ctx.arc(100, 100, 20, 0, 2*Math.PI, true);\n  // ctx.strokeStyle = \"green\";\n  // ctx.lineWidth = 5;\n  // ctx.stroke();\n  // ctx.fillStyle = \"blue\";\n  // ctx.fill();\n\n  const spinner = new spnr(ctx);\n  spinner.animate(spinner.context);\n  // ctx.clearRect(0, 0, canvasEl.width, canvasEl.height)\n  ctx.fillStyle = \"red\";\n  ctx.fillRect(300, 300, 100, 100);\n  setTimeout(spinner.move, 5000);\n  // setTimeout(spinner.rotate, 4000)\n\n  const circle = new crc(ctx);\n  circle.animate(circle.context);\n  setTimeout(circle.move, 5000);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsR0FBRyxHQUFHQyxtQkFBTyxDQUFDLG9EQUFxQixDQUFDO0FBQzFDLE1BQU1DLElBQUksR0FBR0QsbUJBQU8sQ0FBQyxzREFBc0IsQ0FBQztBQUU1Q0UsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxZQUFVO0VBQ3BELE1BQU1DLFFBQVEsR0FBR0YsUUFBUSxDQUFDRyxjQUFjLENBQUMsWUFBWSxDQUFDO0VBQ3RERCxRQUFRLENBQUNFLEtBQUssR0FBR0MsTUFBTSxDQUFDQyxVQUFVO0VBQ2xDSixRQUFRLENBQUNLLE1BQU0sR0FBR0YsTUFBTSxDQUFDRyxXQUFXOztFQUVwQztFQUNBO0VBQ0E7O0VBRUEsTUFBTUMsR0FBRyxHQUFHUCxRQUFRLENBQUNRLFVBQVUsQ0FBQyxJQUFJLENBQUM7RUFDckNELEdBQUcsQ0FBQ0UsU0FBUyxHQUFHLFFBQVE7RUFDeEJGLEdBQUcsQ0FBQ0csUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUVQLE1BQU0sQ0FBQ0MsVUFBVSxFQUFFRCxNQUFNLENBQUNHLFdBQVcsQ0FBQzs7RUFFekQ7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0VBRUEsTUFBTUssT0FBTyxHQUFHLElBQUlkLElBQUksQ0FBQ1UsR0FBRyxDQUFDO0VBQzdCSSxPQUFPLENBQUNDLE9BQU8sQ0FBQ0QsT0FBTyxDQUFDRSxPQUFPLENBQUM7RUFDaEM7RUFDQU4sR0FBRyxDQUFDRSxTQUFTLEdBQUcsS0FBSztFQUNyQkYsR0FBRyxDQUFDRyxRQUFRLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0VBQ2hDSSxVQUFVLENBQUNILE9BQU8sQ0FBQ0ksSUFBSSxFQUFFLElBQUksQ0FBQztFQUM5Qjs7RUFFQSxNQUFNQyxNQUFNLEdBQUcsSUFBSXJCLEdBQUcsQ0FBQ1ksR0FBRyxDQUFDO0VBQzNCUyxNQUFNLENBQUNKLE9BQU8sQ0FBQ0ksTUFBTSxDQUFDSCxPQUFPLENBQUM7RUFDOUJDLFVBQVUsQ0FBQ0UsTUFBTSxDQUFDRCxJQUFJLEVBQUUsSUFBSSxDQUFDO0FBQy9CLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ZpZGdldC1zcGlubmVyLXByb2plY3QvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjcmMgPSByZXF1aXJlKFwiLi9zY3JpcHRzL2NpcmNsZS5qc1wiKVxuY29uc3Qgc3BuciA9IHJlcXVpcmUoXCIuL3NjcmlwdHMvc3Bpbm5lci5qc1wiKVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbigpe1xuICAgIGNvbnN0IGNhbnZhc0VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYWNrZ3JvdW5kXCIpO1xuICAgIGNhbnZhc0VsLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgY2FudmFzRWwuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuXG4gICAgLy8gY29uc3QgY2FudmFzU3Bpbm5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3Bpbm5lclwiKTtcbiAgICAvLyBjYW52YXNTcGlubmVyLndpZHRoID0gNTAwO1xuICAgIC8vIGNhbnZhc1NwaW5uZXIuaGVpZ2h0ID0gNTAwXG4gIFxuICAgIGNvbnN0IGN0eCA9IGNhbnZhc0VsLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBjdHguZmlsbFN0eWxlID0gXCJwdXJwbGVcIjtcbiAgICBjdHguZmlsbFJlY3QoMCwgMCwgd2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XG4gIFxuICAgIC8vIGN0eC5iZWdpblBhdGgoKTtcbiAgICAvLyBjdHguYXJjKDEwMCwgMTAwLCAyMCwgMCwgMipNYXRoLlBJLCB0cnVlKTtcbiAgICAvLyBjdHguc3Ryb2tlU3R5bGUgPSBcImdyZWVuXCI7XG4gICAgLy8gY3R4LmxpbmVXaWR0aCA9IDU7XG4gICAgLy8gY3R4LnN0cm9rZSgpO1xuICAgIC8vIGN0eC5maWxsU3R5bGUgPSBcImJsdWVcIjtcbiAgICAvLyBjdHguZmlsbCgpO1xuXG4gICAgY29uc3Qgc3Bpbm5lciA9IG5ldyBzcG5yKGN0eClcbiAgICBzcGlubmVyLmFuaW1hdGUoc3Bpbm5lci5jb250ZXh0KVxuICAgIC8vIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzRWwud2lkdGgsIGNhbnZhc0VsLmhlaWdodClcbiAgICBjdHguZmlsbFN0eWxlID0gXCJyZWRcIjtcbiAgICBjdHguZmlsbFJlY3QoMzAwLCAzMDAsIDEwMCwgMTAwKTtcbiAgICBzZXRUaW1lb3V0KHNwaW5uZXIubW92ZSwgNTAwMClcbiAgICAvLyBzZXRUaW1lb3V0KHNwaW5uZXIucm90YXRlLCA0MDAwKVxuXG4gICAgY29uc3QgY2lyY2xlID0gbmV3IGNyYyhjdHgpXG4gICAgY2lyY2xlLmFuaW1hdGUoY2lyY2xlLmNvbnRleHQpXG4gICAgc2V0VGltZW91dChjaXJjbGUubW92ZSwgNTAwMClcbiAgfSk7XG5cblxuICAiXSwibmFtZXMiOlsiY3JjIiwicmVxdWlyZSIsInNwbnIiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXNFbCIsImdldEVsZW1lbnRCeUlkIiwid2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJjdHgiLCJnZXRDb250ZXh0IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJzcGlubmVyIiwiYW5pbWF0ZSIsImNvbnRleHQiLCJzZXRUaW1lb3V0IiwibW92ZSIsImNpcmNsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/circle.js":
/*!*******************************!*\
  !*** ./src/scripts/circle.js ***!
  \*******************************/
/***/ (function(module) {

eval("class Circle {\n  constructor(context) {\n    this.context = context;\n    this.x = 100;\n    this.y = 100;\n    this.animate = this.animate.bind(this);\n    this.move = this.move.bind(this);\n  }\n  drawCircle(ctx) {\n    ctx.beginPath();\n    ctx.arc(this.x, this.y, 20, 0, 2 * Math.PI, true);\n    ctx.strokeStyle = \"green\";\n    ctx.lineWidth = 5;\n    ctx.stroke();\n    ctx.fillStyle = \"blue\";\n    ctx.fill();\n  }\n  animate(ctx) {\n    this.drawCircle(ctx);\n  }\n  move() {\n    this.x += 10;\n    this.y += 10;\n    this.animate(this.context);\n  }\n}\nmodule.exports = Circle;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9jaXJjbGUuanMuanMiLCJuYW1lcyI6WyJDaXJjbGUiLCJjb25zdHJ1Y3RvciIsImNvbnRleHQiLCJ4IiwieSIsImFuaW1hdGUiLCJiaW5kIiwibW92ZSIsImRyYXdDaXJjbGUiLCJjdHgiLCJiZWdpblBhdGgiLCJhcmMiLCJNYXRoIiwiUEkiLCJzdHJva2VTdHlsZSIsImxpbmVXaWR0aCIsInN0cm9rZSIsImZpbGxTdHlsZSIsImZpbGwiLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maWRnZXQtc3Bpbm5lci1wcm9qZWN0Ly4vc3JjL3NjcmlwdHMvY2lyY2xlLmpzP2M0NzkiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQ2lyY2xlIHtcbiAgICBjb25zdHJ1Y3RvciAoY29udGV4dCl7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHRcbiAgICAgICAgdGhpcy54ID0gMTAwXG4gICAgICAgIHRoaXMueSA9IDEwMFxuICAgICAgICB0aGlzLmFuaW1hdGUgPSB0aGlzLmFuaW1hdGUuYmluZCh0aGlzKVxuICAgICAgICB0aGlzLm1vdmUgPSB0aGlzLm1vdmUuYmluZCh0aGlzKVxuICAgIH1cbiAgICBcbiAgICBkcmF3Q2lyY2xlIChjdHgpe1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5hcmModGhpcy54LCB0aGlzLnksIDIwLCAwLCAyKk1hdGguUEksIHRydWUpO1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImdyZWVuXCI7XG4gICAgICAgIGN0eC5saW5lV2lkdGggPSA1O1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcImJsdWVcIjtcbiAgICAgICAgY3R4LmZpbGwoKTtcbiAgICB9XG5cbiAgICBhbmltYXRlIChjdHgpIHtcbiAgICAgICAgdGhpcy5kcmF3Q2lyY2xlKGN0eClcbiAgICB9XG5cbiAgICBtb3ZlICgpIHtcbiAgICAgICAgdGhpcy54ICs9IDEwO1xuICAgICAgICB0aGlzLnkgKz0gMTA7XG4gICAgICAgIHRoaXMuYW5pbWF0ZSh0aGlzLmNvbnRleHQpXG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENpcmNsZVxuICAiXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLE1BQU0sQ0FBQztFQUNUQyxXQUFXLENBQUVDLE9BQU8sRUFBQztJQUNqQixJQUFJLENBQUNBLE9BQU8sR0FBR0EsT0FBTztJQUN0QixJQUFJLENBQUNDLENBQUMsR0FBRyxHQUFHO0lBQ1osSUFBSSxDQUFDQyxDQUFDLEdBQUcsR0FBRztJQUNaLElBQUksQ0FBQ0MsT0FBTyxHQUFHLElBQUksQ0FBQ0EsT0FBTyxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ3RDLElBQUksQ0FBQ0MsSUFBSSxHQUFHLElBQUksQ0FBQ0EsSUFBSSxDQUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDO0VBQ3BDO0VBRUFFLFVBQVUsQ0FBRUMsR0FBRyxFQUFDO0lBQ1pBLEdBQUcsQ0FBQ0MsU0FBUyxFQUFFO0lBQ2ZELEdBQUcsQ0FBQ0UsR0FBRyxDQUFDLElBQUksQ0FBQ1IsQ0FBQyxFQUFFLElBQUksQ0FBQ0MsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFDUSxJQUFJLENBQUNDLEVBQUUsRUFBRSxJQUFJLENBQUM7SUFDL0NKLEdBQUcsQ0FBQ0ssV0FBVyxHQUFHLE9BQU87SUFDekJMLEdBQUcsQ0FBQ00sU0FBUyxHQUFHLENBQUM7SUFDakJOLEdBQUcsQ0FBQ08sTUFBTSxFQUFFO0lBQ1pQLEdBQUcsQ0FBQ1EsU0FBUyxHQUFHLE1BQU07SUFDdEJSLEdBQUcsQ0FBQ1MsSUFBSSxFQUFFO0VBQ2Q7RUFFQWIsT0FBTyxDQUFFSSxHQUFHLEVBQUU7SUFDVixJQUFJLENBQUNELFVBQVUsQ0FBQ0MsR0FBRyxDQUFDO0VBQ3hCO0VBRUFGLElBQUksR0FBSTtJQUNKLElBQUksQ0FBQ0osQ0FBQyxJQUFJLEVBQUU7SUFDWixJQUFJLENBQUNDLENBQUMsSUFBSSxFQUFFO0lBQ1osSUFBSSxDQUFDQyxPQUFPLENBQUMsSUFBSSxDQUFDSCxPQUFPLENBQUM7RUFDOUI7QUFDSjtBQUVBaUIsTUFBTSxDQUFDQyxPQUFPLEdBQUdwQixNQUFNIn0=\n//# sourceURL=webpack-internal:///./src/scripts/circle.js\n");

/***/ }),

/***/ "./src/scripts/spinner.js":
/*!********************************!*\
  !*** ./src/scripts/spinner.js ***!
  \********************************/
/***/ (function(module) {

eval("class Spinner {\n  constructor(context) {\n    this.context = context;\n    this.x = 200;\n    this.y = 200;\n    this.animate = this.animate.bind(this);\n    this.move = this.move.bind(this);\n    this.rotate = this.rotate.bind(this);\n    this.rads = 0;\n  }\n  drawSpinner(ctx) {\n    ctx.fillStyle = \"red\";\n    //x, y, width, height\n    ctx.fillRect(this.x, this.y, 40, 50);\n    ctx.rotate(this.rads);\n  }\n  animate(ctx) {\n    this.drawSpinner(ctx);\n  }\n  move() {\n    this.x += 10;\n    this.y += 10;\n    this.animate(this.context);\n  }\n  rotate() {\n    this.rads += 60;\n    this.animate(this.context);\n  }\n}\nmodule.exports = Spinner;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9zcGlubmVyLmpzLmpzIiwibmFtZXMiOlsiU3Bpbm5lciIsImNvbnN0cnVjdG9yIiwiY29udGV4dCIsIngiLCJ5IiwiYW5pbWF0ZSIsImJpbmQiLCJtb3ZlIiwicm90YXRlIiwicmFkcyIsImRyYXdTcGlubmVyIiwiY3R4IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maWRnZXQtc3Bpbm5lci1wcm9qZWN0Ly4vc3JjL3NjcmlwdHMvc3Bpbm5lci5qcz84YzVjIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFNwaW5uZXIge1xuICAgIGNvbnN0cnVjdG9yIChjb250ZXh0KXtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dFxuICAgICAgICB0aGlzLnggPSAyMDBcbiAgICAgICAgdGhpcy55ID0gMjAwXG4gICAgICAgIHRoaXMuYW5pbWF0ZSA9IHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMubW92ZSA9IHRoaXMubW92ZS5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMucm90YXRlID0gdGhpcy5yb3RhdGUuYmluZCh0aGlzKVxuICAgICAgICB0aGlzLnJhZHMgPSAwXG4gICAgfVxuICAgIFxuICAgIGRyYXdTcGlubmVyIChjdHgpe1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJyZWRcIjtcbiAgICAgICAgLy94LCB5LCB3aWR0aCwgaGVpZ2h0XG4gICAgICAgIGN0eC5maWxsUmVjdCh0aGlzLngsdGhpcy55LDQwLDUwKTtcbiAgICAgICAgY3R4LnJvdGF0ZSh0aGlzLnJhZHMpXG4gICAgfVxuXG4gICAgYW5pbWF0ZSAoY3R4KSB7XG4gICAgICAgIHRoaXMuZHJhd1NwaW5uZXIoY3R4KVxuICAgIH1cblxuICAgIG1vdmUgKCkge1xuICAgICAgICB0aGlzLnggKz0gMTA7XG4gICAgICAgIHRoaXMueSArPSAxMDtcbiAgICAgICAgdGhpcy5hbmltYXRlKHRoaXMuY29udGV4dClcbiAgICB9XG5cbiAgICByb3RhdGUgKCkge1xuICAgICAgICB0aGlzLnJhZHMgKz0gNjBcbiAgICAgICAgdGhpcy5hbmltYXRlKHRoaXMuY29udGV4dClcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU3Bpbm5lclxuICAiXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLE9BQU8sQ0FBQztFQUNWQyxXQUFXLENBQUVDLE9BQU8sRUFBQztJQUNqQixJQUFJLENBQUNBLE9BQU8sR0FBR0EsT0FBTztJQUN0QixJQUFJLENBQUNDLENBQUMsR0FBRyxHQUFHO0lBQ1osSUFBSSxDQUFDQyxDQUFDLEdBQUcsR0FBRztJQUNaLElBQUksQ0FBQ0MsT0FBTyxHQUFHLElBQUksQ0FBQ0EsT0FBTyxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ3RDLElBQUksQ0FBQ0MsSUFBSSxHQUFHLElBQUksQ0FBQ0EsSUFBSSxDQUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ2hDLElBQUksQ0FBQ0UsTUFBTSxHQUFHLElBQUksQ0FBQ0EsTUFBTSxDQUFDRixJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ3BDLElBQUksQ0FBQ0csSUFBSSxHQUFHLENBQUM7RUFDakI7RUFFQUMsV0FBVyxDQUFFQyxHQUFHLEVBQUM7SUFDYkEsR0FBRyxDQUFDQyxTQUFTLEdBQUcsS0FBSztJQUNyQjtJQUNBRCxHQUFHLENBQUNFLFFBQVEsQ0FBQyxJQUFJLENBQUNWLENBQUMsRUFBQyxJQUFJLENBQUNDLENBQUMsRUFBQyxFQUFFLEVBQUMsRUFBRSxDQUFDO0lBQ2pDTyxHQUFHLENBQUNILE1BQU0sQ0FBQyxJQUFJLENBQUNDLElBQUksQ0FBQztFQUN6QjtFQUVBSixPQUFPLENBQUVNLEdBQUcsRUFBRTtJQUNWLElBQUksQ0FBQ0QsV0FBVyxDQUFDQyxHQUFHLENBQUM7RUFDekI7RUFFQUosSUFBSSxHQUFJO0lBQ0osSUFBSSxDQUFDSixDQUFDLElBQUksRUFBRTtJQUNaLElBQUksQ0FBQ0MsQ0FBQyxJQUFJLEVBQUU7SUFDWixJQUFJLENBQUNDLE9BQU8sQ0FBQyxJQUFJLENBQUNILE9BQU8sQ0FBQztFQUM5QjtFQUVBTSxNQUFNLEdBQUk7SUFDTixJQUFJLENBQUNDLElBQUksSUFBSSxFQUFFO0lBQ2YsSUFBSSxDQUFDSixPQUFPLENBQUMsSUFBSSxDQUFDSCxPQUFPLENBQUM7RUFDOUI7QUFDSjtBQUVBWSxNQUFNLENBQUNDLE9BQU8sR0FBR2YsT0FBTyJ9\n//# sourceURL=webpack-internal:///./src/scripts/spinner.js\n");

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