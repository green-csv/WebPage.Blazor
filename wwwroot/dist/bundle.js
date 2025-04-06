/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./wwwrootsrc/js/crt-static-canvas.js":
/*!********************************************!*\
  !*** ./wwwrootsrc/js/crt-static-canvas.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initCRTStatic: () => (/* binding */ initCRTStatic)\n/* harmony export */ });\nfunction initCRTStatic(canvasId = 'tv-static-canvas') {\r\n    const canvas = document.getElementById(canvasId);\r\n    const ctx = canvas.getContext('2d');\r\n\r\n    function resizeCanvas() {\r\n        canvas.width = window.innerWidth;\r\n        canvas.height = window.innerHeight;\r\n    }\r\n\r\n    resizeCanvas();\r\n    window.addEventListener('resize', resizeCanvas);\r\n\r\n    function rand(min, max) {\r\n        return Math.floor(Math.random() * (max - min)) + min;\r\n    }\r\n\r\n    const blockSize = 4;\r\n\r\n    function drawStatic() {\r\n        const imageData = ctx.createImageData(canvas.width, canvas.height);\r\n        const buffer = new Uint32Array(imageData.data.buffer);\r\n        const blocksX = Math.ceil(canvas.width / blockSize);\r\n        const blocksY = Math.ceil(canvas.height / blockSize);\r\n\r\n        for (let y = 0; y < blocksY; y++) {\r\n            for (let x = 0; x < blocksX; x++) {\r\n                const r = Math.floor(Math.random() * 256);\r\n                const g = Math.floor(Math.random() * 256);\r\n                const b = Math.floor(Math.random() * 256);\r\n                const color = (255 << 24) | (r << 16) | (g << 8) | b;\r\n\r\n                for (let dy = 0; dy < blockSize; dy++) {\r\n                    for (let dx = 0; dx < blockSize; dx++) {\r\n                        const px = x * blockSize + dx;\r\n                        const py = y * blockSize + dy;\r\n\r\n                        if (px < canvas.width && py < canvas.height) {\r\n                            const index = py * canvas.width + px;\r\n                            buffer[index] = color;\r\n                        }\r\n                    }\r\n                }\r\n            }\r\n        }\r\n\r\n        ctx.putImageData(imageData, 0, 0);\r\n\r\n        if (Math.random() < 1) {\r\n            const y = rand(0, canvas.height);\r\n            const tearHeight = rand(5, 20);\r\n            ctx.fillStyle = 'rgba(255,255,255,0.2)';\r\n            ctx.fillRect(0, y, canvas.width, tearHeight);\r\n        }\r\n\r\n        if (Math.random() < 0.01) {\r\n            ctx.fillStyle = 'rgba(255,255,255,0.1)';\r\n            ctx.fillRect(0, 0, canvas.width, canvas.height);\r\n        }\r\n\r\n        for (let i = 0; i < 3; i++) {\r\n            if (Math.random() < 0.5) {\r\n                const y = rand(0, canvas.height);\r\n                const height = rand(8, 40);\r\n                ctx.fillStyle = `rgba(${rand(100, 255)},${rand(100, 255)},${rand(100, 255)},0.3)`;\r\n                ctx.fillRect(0, y, canvas.width, height);\r\n            }\r\n        }\r\n\r\n        if (window.__flickerTrigger) {\r\n            ctx.fillStyle = 'rgba(255,255,255,0.3)';\r\n            ctx.fillRect(0, 0, canvas.width, canvas.height);\r\n            window.__flickerTrigger = false;\r\n        }\r\n    }\r\n\r\n    let lastFrame = 0;\r\n    const fps = 30;\r\n    const frameDuration = 1000 / fps;\r\n\r\n    function animate(timestamp) {\r\n        if (timestamp - lastFrame >= frameDuration) {\r\n            drawStatic();\r\n            lastFrame = timestamp;\r\n        }\r\n        requestAnimationFrame(animate);\r\n    }\r\n\r\n    animate(fps);\r\n}\r\n\n\n//# sourceURL=webpack:///./wwwrootsrc/js/crt-static-canvas.js?");

/***/ }),

/***/ "./wwwrootsrc/js/index.js":
/*!********************************!*\
  !*** ./wwwrootsrc/js/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tailwind_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tailwind.css */ \"./wwwrootsrc/tailwind.css\");\n/* harmony import */ var _tailwind_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tailwind_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/app.scss */ \"./wwwrootsrc/scss/app.scss\");\n/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_app_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _crt_static_canvas_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./crt-static-canvas.js */ \"./wwwrootsrc/js/crt-static-canvas.js\");\n﻿\r\n\r\n\r\n\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n    (0,_crt_static_canvas_js__WEBPACK_IMPORTED_MODULE_2__.initCRTStatic)();\r\n});\n\n//# sourceURL=webpack:///./wwwrootsrc/js/index.js?");

/***/ }),

/***/ "./wwwrootsrc/scss/app.scss":
/*!**********************************!*\
  !*** ./wwwrootsrc/scss/app.scss ***!
  \**********************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected character '@' (1:1)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> ﻿@import \\\"variables\\\";\\n| @import \\\"crt-tv\\\";\\n| \");\n\n//# sourceURL=webpack:///./wwwrootsrc/scss/app.scss?");

/***/ }),

/***/ "./wwwrootsrc/tailwind.css":
/*!*********************************!*\
  !*** ./wwwrootsrc/tailwind.css ***!
  \*********************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected character '@' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> @import \\\"tailwindcss\\\";\");\n\n//# sourceURL=webpack:///./wwwrootsrc/tailwind.css?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./wwwrootsrc/js/index.js");
/******/ 	
/******/ })()
;