export function initCRTStatic(canvasId = 'tv-static-canvas') {
    const canvas = document.getElementById(canvasId);
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
