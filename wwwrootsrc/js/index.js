
import '../scss/app.scss';

import { initCRTStatic } from './crt-static-canvas.js';
import { startBootSequence } from './boot-sequence.js';
import { startBootLoader } from "./boot-loader";

document.addEventListener('DOMContentLoaded', () => {
    initCRTStatic();
    startBootLoader();

    window.bootInterop = {
        start: startBootSequence
    };
});