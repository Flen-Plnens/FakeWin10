(function() {
    const startChar = 0xE052;
    const endChar = 0xE0CB;
    const totalFrames = endChar - startChar + 1;

    let keyframes = '@keyframes bootAnimation {\n';
    for (let i = 0; i <= totalFrames; i++) {
        const percent = (i / totalFrames * 100).toFixed(10);
        const char = String.fromCharCode(startChar + (i % totalFrames));
        keyframes += `    ${percent}% { content: "\\${char.charCodeAt(0).toString(16).toUpperCase()}"; }\n`;
    }
    keyframes += '}';

    const styleTag = document.createElement('style');
    styleTag.textContent = keyframes;
    document.head.appendChild(styleTag);
})();
