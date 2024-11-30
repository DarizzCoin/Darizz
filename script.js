const background = document.getElementById('background');

// Funktion för att skapa en ny stjärna
function createStar() {
    const star = document.createElement('div');
    star.classList.add('star');

    // Sätt en slumpmässig position
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    star.style.left = `${x}px`;
    star.style.top = `${y}px`;

    // Lägg till stjärnan i bakgrunden
    background.appendChild(star);

    // Ta bort stjärnan efter animationen är klar
    setTimeout(() => {
        star.remove();
    }, 2000);
}

// Skapa stjärnor med intervall
setInterval(createStar, 100);
