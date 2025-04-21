document.addEventListener('DOMContentLoaded', function() {
    const heading = document.querySelector('h1');
    const text = heading.textContent;
    const parts = text.split(' ');
    let newText = '';

    parts.forEach((part, index) => {
        if (part.toLowerCase() === 'cantik') {
            newText += `<span class="cantik">${part}</span>`;
        } else {
            newText += part;
        }
        if (index < parts.length - 1) {
            newText += ' '; // Tambahkan spasi antar kata
        }
    });

    heading.innerHTML = newText;

    // Contoh sederhana efek interaktif (opsional)
    heading.addEventListener('mouseover', function() {
        this.style.backgroundColor = '#ddd';
        this.style.cursor = 'pointer';
    });

    heading.addEventListener('mouseout', function() {
        this.style.backgroundColor = '#fff';
        this.style.cursor = 'default';
    });
});