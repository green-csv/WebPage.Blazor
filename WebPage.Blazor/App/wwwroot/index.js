﻿import './app.css';
import './assets/icon-c3ref.jpg'
import './favicon.png'
import './image.png'

import { initCRTStatic } from './js/crt-static-canvas.js';
import { startBootSequence } from './js/boot-sequence.js';
import { startBootLoader } from "./js/boot-loader";

document.addEventListener('DOMContentLoaded', () => {
    initCRTStatic();
    startBootLoader();

    window.bootInterop = {
        start: startBootSequence
    };
});