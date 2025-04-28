export function startBootLoader() {
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
