/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./App/wwwroot/app.css":
/*!*****************************!*\
  !*** ./App/wwwroot/app.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./App/wwwroot/app.css?");

/***/ }),

/***/ "./App/wwwroot/assets/icon-c3ref.jpg":
/*!*******************************************!*\
  !*** ./App/wwwroot/assets/icon-c3ref.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/icon-c3ref.jpg\";\n\n//# sourceURL=webpack:///./App/wwwroot/assets/icon-c3ref.jpg?");

/***/ }),

/***/ "./App/wwwroot/favicon.png":
/*!*********************************!*\
  !*** ./App/wwwroot/favicon.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"favicon.png\";\n\n//# sourceURL=webpack:///./App/wwwroot/favicon.png?");

/***/ }),

/***/ "./App/wwwroot/index.js":
/*!******************************!*\
  !*** ./App/wwwroot/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.css */ \"./App/wwwroot/app.css\");\n/* harmony import */ var _assets_icon_c3ref_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/icon-c3ref.jpg */ \"./App/wwwroot/assets/icon-c3ref.jpg\");\n/* harmony import */ var _favicon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./favicon.png */ \"./App/wwwroot/favicon.png\");\n/* harmony import */ var _js_crt_static_canvas_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/crt-static-canvas.js */ \"./App/wwwroot/js/crt-static-canvas.js\");\n/* harmony import */ var _js_boot_sequence_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/boot-sequence.js */ \"./App/wwwroot/js/boot-sequence.js\");\n/* harmony import */ var _js_boot_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/boot-loader */ \"./App/wwwroot/js/boot-loader.js\");\n﻿\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n    (0,_js_crt_static_canvas_js__WEBPACK_IMPORTED_MODULE_3__.initCRTStatic)();\r\n    (0,_js_boot_loader__WEBPACK_IMPORTED_MODULE_5__.startBootLoader)();\r\n\r\n    window.bootInterop = {\r\n        start: _js_boot_sequence_js__WEBPACK_IMPORTED_MODULE_4__.startBootSequence\r\n    };\r\n});\n\n//# sourceURL=webpack:///./App/wwwroot/index.js?");

/***/ }),

/***/ "./App/wwwroot/js/boot-loader.js":
/*!***************************************!*\
  !*** ./App/wwwroot/js/boot-loader.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   startBootLoader: () => (/* binding */ startBootLoader)\n/* harmony export */ });\n﻿function startBootLoader() {\r\n    const lines = document.querySelectorAll('.boot-line');\r\n    const bootLines = document.getElementById('boot-lines');\r\n\r\n    if ( !bootLines || lines.length === 0) {\r\n        console.warn(\"Boot loader skipped: Missing DOM elements.\");\r\n        return;\r\n    }\r\n\r\n    let current = 0;\r\n\r\n    function typeNextLine() {\r\n        const el = lines[current];\r\n        const text = el.dataset.line;\r\n        if (!text) return;\r\n\r\n        let i = 0;\r\n        const typer = setInterval(() => {\r\n            el.textContent = text.slice(0, i) + \"█\";\r\n            i++;\r\n            if (i > text.length) {\r\n                clearInterval(typer);\r\n                el.textContent = text;\r\n                current++;\r\n                if (current < lines.length) {\r\n                    setTimeout(typeNextLine, 3);\r\n                }\r\n            }\r\n        }, 2);\r\n    }\r\n    \r\n    bootLines.classList.remove('hidden');\r\n    typeNextLine();\r\n}\r\n\n\n//# sourceURL=webpack:///./App/wwwroot/js/boot-loader.js?");

/***/ }),

/***/ "./App/wwwroot/js/boot-sequence.js":
/*!*****************************************!*\
  !*** ./App/wwwroot/js/boot-sequence.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   startBootSequence: () => (/* binding */ startBootSequence)\n/* harmony export */ });\n﻿function startBootSequence() {\r\n    \r\n    const lines = document.querySelectorAll('.boot-line');\r\n    \r\n    console.log('Boot sequence triggered. Found lines:', lines.length);\r\n    \r\n    lines.forEach((line, index) => {\r\n        \r\n        line.style.animation = `cascadeLine 0.01s ease forwards`;\r\n        \r\n        const text = line.dataset.line;\r\n        \r\n        if (!text) {\r\n            console.warn('Missing data-line attribute on boot-line element:', line);\r\n            return; // skip this broken child\r\n        }\r\n        \r\n        let i = 0;\r\n        \r\n        const typer = setInterval(() => {\r\n            line.textContent = text.slice(0, i) + \"█\";\r\n            i++;\r\n            if (i > text.length) {\r\n                clearInterval(typer);\r\n                line.textContent = text;\r\n            }\r\n        }, 30);\r\n        \r\n    });\r\n}\n\n//# sourceURL=webpack:///./App/wwwroot/js/boot-sequence.js?");

/***/ }),

/***/ "./App/wwwroot/js/crt-static-canvas.js":
/*!*********************************************!*\
  !*** ./App/wwwroot/js/crt-static-canvas.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initCRTStatic: () => (/* binding */ initCRTStatic)\n/* harmony export */ });\nfunction initCRTStatic(canvasId = 'tv-static-canvas') {\r\n    const canvas = document.getElementById(canvasId);\r\n    \r\n    if (!canvas || canvas.offsetParent === null) return;\r\n    \r\n    const ctx = canvas.getContext('2d');\r\n\r\n    function resizeCanvas() {\r\n        canvas.width = window.innerWidth;\r\n        canvas.height = window.innerHeight;\r\n    }\r\n\r\n    resizeCanvas();\r\n    window.addEventListener('resize', resizeCanvas);\r\n\r\n    function rand(min, max) {\r\n        return Math.floor(Math.random() * (max - min)) + min;\r\n    }\r\n\r\n    const blockSize = 4;\r\n\r\n    function drawStatic() {\r\n        const imageData = ctx.createImageData(canvas.width, canvas.height);\r\n        const buffer = new Uint32Array(imageData.data.buffer);\r\n        const blocksX = Math.ceil(canvas.width / blockSize);\r\n        const blocksY = Math.ceil(canvas.height / blockSize);\r\n\r\n        for (let y = 0; y < blocksY; y++) {\r\n            for (let x = 0; x < blocksX; x++) {\r\n                const r = Math.floor(Math.random() * 256);\r\n                const g = Math.floor(Math.random() * 256);\r\n                const b = Math.floor(Math.random() * 256);\r\n                const color = (255 << 24) | (r << 16) | (g << 8) | b;\r\n\r\n                for (let dy = 0; dy < blockSize; dy++) {\r\n                    for (let dx = 0; dx < blockSize; dx++) {\r\n                        const px = x * blockSize + dx;\r\n                        const py = y * blockSize + dy;\r\n\r\n                        if (px < canvas.width && py < canvas.height) {\r\n                            const index = py * canvas.width + px;\r\n                            buffer[index] = color;\r\n                        }\r\n                    }\r\n                }\r\n            }\r\n        }\r\n\r\n        ctx.putImageData(imageData, 0, 0);\r\n\r\n        if (Math.random() < 1) {\r\n            const y = rand(0, canvas.height);\r\n            const tearHeight = rand(5, 20);\r\n            ctx.fillStyle = 'rgba(255,255,255,0.2)';\r\n            ctx.fillRect(0, y, canvas.width, tearHeight);\r\n        }\r\n\r\n        if (Math.random() < 0.01) {\r\n            ctx.fillStyle = 'rgba(255,255,255,0.1)';\r\n            ctx.fillRect(0, 0, canvas.width, canvas.height);\r\n        }\r\n\r\n        for (let i = 0; i < 3; i++) {\r\n            if (Math.random() < 0.5) {\r\n                const y = rand(0, canvas.height);\r\n                const height = rand(8, 40);\r\n                ctx.fillStyle = `rgba(${rand(100, 255)},${rand(100, 255)},${rand(100, 255)},0.3)`;\r\n                ctx.fillRect(0, y, canvas.width, height);\r\n            }\r\n        }\r\n\r\n        if (window.__flickerTrigger) {\r\n            ctx.fillStyle = 'rgba(255,255,255,0.3)';\r\n            ctx.fillRect(0, 0, canvas.width, canvas.height);\r\n            window.__flickerTrigger = false;\r\n        }\r\n    }\r\n\r\n    let lastFrame = 0;\r\n    const fps = 30;\r\n    const frameDuration = 1000 / fps;\r\n\r\n    function animate(timestamp) {\r\n        if (timestamp - lastFrame >= frameDuration) {\r\n            drawStatic();\r\n            lastFrame = timestamp;\r\n        }\r\n        requestAnimationFrame(animate);\r\n    }\r\n\r\n    animate(fps);\r\n}\r\n\n\n//# sourceURL=webpack:///./App/wwwroot/js/crt-static-canvas.js?");

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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./App/wwwroot/index.js");
/******/ 	
/******/ })()
;