export function startBootSequence() {
    
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