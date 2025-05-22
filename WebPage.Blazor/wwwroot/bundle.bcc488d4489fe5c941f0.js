/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/************************************************************************/

;// ./App/wwwroot/assets/icon-c3ref.jpg
const icon_c3ref_namespaceObject = __webpack_require__.p + "assets/icon-c3ref.jpg";
;// ./App/wwwroot/favicon.png
const favicon_namespaceObject = __webpack_require__.p + "favicon.png";
;// ./App/wwwroot/image.png
const image_namespaceObject = __webpack_require__.p + "image.png";
;// ./App/wwwroot/js/crt-static-canvas.js
function initCRTStatic(canvasId = 'tv-static-canvas') {
    const canvas = document.getElementById(canvasId);
    
    if (!canvas || canvas.offsetParent === null) return;
    
    const ctx = canvas.getContext('2d');

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    function rand(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    const blockSize = 4;

    function drawStatic() {
        const imageData = ctx.createImageData(canvas.width, canvas.height);
        const buffer = new Uint32Array(imageData.data.buffer);
        const blocksX = Math.ceil(canvas.width / blockSize);
        const blocksY = Math.ceil(canvas.height / blockSize);

        for (let y = 0; y < blocksY; y++) {
            for (let x = 0; x < blocksX; x++) {
                const r = Math.floor(Math.random() * 256);
                const g = Math.floor(Math.random() * 256);
                const b = Math.floor(Math.random() * 256);
                const color = (255 << 24) | (r << 16) | (g << 8) | b;

                for (let dy = 0; dy < blockSize; dy++) {
                    for (let dx = 0; dx < blockSize; dx++) {
                        const px = x * blockSize + dx;
                        const py = y * blockSize + dy;

                        if (px < canvas.width && py < canvas.height) {
                            const index = py * canvas.width + px;
                            buffer[index] = color;
                        }
                    }
                }
            }
        }

        ctx.putImageData(imageData, 0, 0);

        if (Math.random() < 1) {
            const y = rand(0, canvas.height);
            const tearHeight = rand(5, 20);
            ctx.fillStyle = 'rgba(255,255,255,0.2)';
            ctx.fillRect(0, y, canvas.width, tearHeight);
        }

        if (Math.random() < 0.01) {
            ctx.fillStyle = 'rgba(255,255,255,0.1)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        }

        for (let i = 0; i < 3; i++) {
            if (Math.random() < 0.5) {
                const y = rand(0, canvas.height);
                const height = rand(8, 40);
                ctx.fillStyle = `rgba(${rand(100, 255)},${rand(100, 255)},${rand(100, 255)},0.3)`;
                ctx.fillRect(0, y, canvas.width, height);
            }
        }

        if (window.__flickerTrigger) {
            ctx.fillStyle = 'rgba(255,255,255,0.3)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            window.__flickerTrigger = false;
        }
    }

    let lastFrame = 0;
    const fps = 30;
    const frameDuration = 1000 / fps;

    function animate(timestamp) {
        if (timestamp - lastFrame >= frameDuration) {
            drawStatic();
            lastFrame = timestamp;
        }
        requestAnimationFrame(animate);
    }

    animate(fps);
}

;// ./App/wwwroot/js/boot-sequence.js
﻿function startBootSequence() {
    
    const lines = document.querySelectorAll('.boot-line');
    
    console.log('Boot sequence triggered. Found lines:', lines.length);
    
    lines.forEach((line, index) => {
        
        line.style.animation = `cascadeLine 0.01s ease forwards`;
        
        const text = line.dataset.line;
        
        if (!text) {
            console.warn('Missing data-line attribute on boot-line element:', line);
            return; // skip this broken child
        }
        
        let i = 0;
        
        const typer = setInterval(() => {
            line.textContent = text.slice(0, i) + "█";
            i++;
            if (i > text.length) {
                clearInterval(typer);
                line.textContent = text;
            }
        }, 30);
        
    });
}
;// ./App/wwwroot/js/boot-loader.js
﻿function startBootLoader() {
    const lines = document.querySelectorAll('.boot-line');
    const bootLines = document.getElementById('boot-lines');

    if ( !bootLines || lines.length === 0) {
        console.warn("Boot loader skipped: Missing DOM elements.");
        return;
    }

    let current = 0;

    function typeNextLine() {
        const el = lines[current];
        const text = el.dataset.line;
        if (!text) return;

        let i = 0;
        const typer = setInterval(() => {
            el.textContent = text.slice(0, i) + "█";
            i++;
            if (i > text.length) {
                clearInterval(typer);
                el.textContent = text;
                current++;
                if (current < lines.length) {
                    setTimeout(typeNextLine, 3);
                }
            }
        }, 2);
    }
    
    bootLines.classList.remove('hidden');
    typeNextLine();
}

;// ./App/wwwroot/index.js
﻿








document.addEventListener('DOMContentLoaded', () => {
    initCRTStatic();
    startBootLoader();

    window.bootInterop = {
        start: startBootSequence
    };
});
/******/ })()
;