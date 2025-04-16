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

/***/ "./App/wwwroot/assets/icon-c3ref.jpg":
/*!*******************************************!*\
  !*** ./App/wwwroot/assets/icon-c3ref.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/icon-c3ref.jpg\";\n\n//# sourceURL=webpack:///./App/wwwroot/assets/icon-c3ref.jpg?");

/***/ }),

/***/ "./App/wwwroot/js/boot-loader.js":
/*!***************************************!*\
  !*** ./App/wwwroot/js/boot-loader.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   startBootLoader: () => (/* binding */ startBootLoader)\n/* harmony export */ });\n﻿function startBootLoader() {\n    const lines = document.querySelectorAll('.boot-line');\n    const bootLines = document.getElementById('boot-lines');\n\n    if ( !bootLines || lines.length === 0) {\n        console.warn(\"Boot loader skipped: Missing DOM elements.\");\n        return;\n    }\n\n    let current = 0;\n\n    function typeNextLine() {\n        const el = lines[current];\n        const text = el.dataset.line;\n        if (!text) return;\n\n        let i = 0;\n        const typer = setInterval(() => {\n            el.textContent = text.slice(0, i) + \"█\";\n            i++;\n            if (i > text.length) {\n                clearInterval(typer);\n                el.textContent = text;\n                current++;\n                if (current < lines.length) {\n                    setTimeout(typeNextLine, 3);\n                }\n            }\n        }, 2);\n    }\n    \n    bootLines.classList.remove('hidden');\n    typeNextLine();\n}\n\n\n//# sourceURL=webpack:///./App/wwwroot/js/boot-loader.js?");

/***/ }),

/***/ "./App/wwwroot/js/boot-sequence.js":
/*!*****************************************!*\
  !*** ./App/wwwroot/js/boot-sequence.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   startBootSequence: () => (/* binding */ startBootSequence)\n/* harmony export */ });\n﻿function startBootSequence() {\n    \n    const lines = document.querySelectorAll('.boot-line');\n    \n    console.log('Boot sequence triggered. Found lines:', lines.length);\n    \n    lines.forEach((line, index) => {\n        \n        line.style.animation = `cascadeLine 0.01s ease forwards`;\n        \n        const text = line.dataset.line;\n        \n        if (!text) {\n            console.warn('Missing data-line attribute on boot-line element:', line);\n            return; // skip this broken child\n        }\n        \n        let i = 0;\n        \n        const typer = setInterval(() => {\n            line.textContent = text.slice(0, i) + \"█\";\n            i++;\n            if (i > text.length) {\n                clearInterval(typer);\n                line.textContent = text;\n            }\n        }, 30);\n        \n    });\n}\n\n//# sourceURL=webpack:///./App/wwwroot/js/boot-sequence.js?");

/***/ }),

/***/ "./App/wwwroot/js/crt-static-canvas.js":
/*!*********************************************!*\
  !*** ./App/wwwroot/js/crt-static-canvas.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initCRTStatic: () => (/* binding */ initCRTStatic)\n/* harmony export */ });\nfunction initCRTStatic(canvasId = 'tv-static-canvas') {\n    const canvas = document.getElementById(canvasId);\n    const ctx = canvas.getContext('2d');\n\n    function resizeCanvas() {\n        canvas.width = window.innerWidth;\n        canvas.height = window.innerHeight;\n    }\n\n    resizeCanvas();\n    window.addEventListener('resize', resizeCanvas);\n\n    function rand(min, max) {\n        return Math.floor(Math.random() * (max - min)) + min;\n    }\n\n    const blockSize = 4;\n\n    function drawStatic() {\n        const imageData = ctx.createImageData(canvas.width, canvas.height);\n        const buffer = new Uint32Array(imageData.data.buffer);\n        const blocksX = Math.ceil(canvas.width / blockSize);\n        const blocksY = Math.ceil(canvas.height / blockSize);\n\n        for (let y = 0; y < blocksY; y++) {\n            for (let x = 0; x < blocksX; x++) {\n                const r = Math.floor(Math.random() * 256);\n                const g = Math.floor(Math.random() * 256);\n                const b = Math.floor(Math.random() * 256);\n                const color = (255 << 24) | (r << 16) | (g << 8) | b;\n\n                for (let dy = 0; dy < blockSize; dy++) {\n                    for (let dx = 0; dx < blockSize; dx++) {\n                        const px = x * blockSize + dx;\n                        const py = y * blockSize + dy;\n\n                        if (px < canvas.width && py < canvas.height) {\n                            const index = py * canvas.width + px;\n                            buffer[index] = color;\n                        }\n                    }\n                }\n            }\n        }\n\n        ctx.putImageData(imageData, 0, 0);\n\n        if (Math.random() < 1) {\n            const y = rand(0, canvas.height);\n            const tearHeight = rand(5, 20);\n            ctx.fillStyle = 'rgba(255,255,255,0.2)';\n            ctx.fillRect(0, y, canvas.width, tearHeight);\n        }\n\n        if (Math.random() < 0.01) {\n            ctx.fillStyle = 'rgba(255,255,255,0.1)';\n            ctx.fillRect(0, 0, canvas.width, canvas.height);\n        }\n\n        for (let i = 0; i < 3; i++) {\n            if (Math.random() < 0.5) {\n                const y = rand(0, canvas.height);\n                const height = rand(8, 40);\n                ctx.fillStyle = `rgba(${rand(100, 255)},${rand(100, 255)},${rand(100, 255)},0.3)`;\n                ctx.fillRect(0, y, canvas.width, height);\n            }\n        }\n\n        if (window.__flickerTrigger) {\n            ctx.fillStyle = 'rgba(255,255,255,0.3)';\n            ctx.fillRect(0, 0, canvas.width, canvas.height);\n            window.__flickerTrigger = false;\n        }\n    }\n\n    let lastFrame = 0;\n    const fps = 30;\n    const frameDuration = 1000 / fps;\n\n    function animate(timestamp) {\n        if (timestamp - lastFrame >= frameDuration) {\n            drawStatic();\n            lastFrame = timestamp;\n        }\n        requestAnimationFrame(animate);\n    }\n\n    animate(fps);\n}\n\n\n//# sourceURL=webpack:///./App/wwwroot/js/crt-static-canvas.js?");

/***/ }),

/***/ "./App/wwwroot/js/index.js":
/*!*********************************!*\
  !*** ./App/wwwroot/js/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/app.scss */ \"./App/wwwroot/scss/app.scss\");\n/* harmony import */ var _assets_icon_c3ref_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/icon-c3ref.jpg */ \"./App/wwwroot/assets/icon-c3ref.jpg\");\n/* harmony import */ var _crt_static_canvas_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./crt-static-canvas.js */ \"./App/wwwroot/js/crt-static-canvas.js\");\n/* harmony import */ var _boot_sequence_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./boot-sequence.js */ \"./App/wwwroot/js/boot-sequence.js\");\n/* harmony import */ var _boot_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./boot-loader */ \"./App/wwwroot/js/boot-loader.js\");\n﻿\n\n\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n    (0,_crt_static_canvas_js__WEBPACK_IMPORTED_MODULE_2__.initCRTStatic)();\n    (0,_boot_loader__WEBPACK_IMPORTED_MODULE_4__.startBootLoader)();\n\n    window.bootInterop = {\n        start: _boot_sequence_js__WEBPACK_IMPORTED_MODULE_3__.startBootSequence\n    };\n});\n\n//# sourceURL=webpack:///./App/wwwroot/js/index.js?");

/***/ }),

/***/ "./App/wwwroot/scss/app.scss":
/*!***********************************!*\
  !*** ./App/wwwroot/scss/app.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./App/wwwroot/scss/app.scss?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./App/wwwroot/js/index.js");
/******/ 	
/******/ })()
;