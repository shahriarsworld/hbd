// Cat Game Logic
let score = 0;
let cat = document.getElementById('cat');
let scoreDisplay = document.getElementById('scoreDisplay');
let popup = document.getElementById('popup');
let popupClose = document.getElementById('popup-close');
let ourMemoriesSection = document.getElementById('ourMemories');

// Move the cat randomly inside the game container
function moveCat() {
    let container = document.getElementById('cat-game-container');
    let maxX = container.offsetWidth - cat.offsetWidth;
    let maxY = container.offsetHeight - cat.offsetHeight;

    let randomX = Math.random() * maxX;
    let randomY = Math.random() * maxY;

    cat.style.left = randomX + 'px';
    cat.style.top = randomY + 'px';
}

// Catch the cat
cat.addEventListener('click', function () {
    score++;
    scoreDisplay.textContent = 'Catches: ' + score + '/10';

    if (score === 10) {
        showPopup();
    } else {
        moveCat();
    }
});

// Show the popup message
function showPopup() {
    popup.classList.add('show');
    let message = document.getElementById('specialMessagePopup');
    message.textContent = "Happy Birthday Tasu! ❤ You are the best part of my life. I LOVE YOU MORE THAN EVER, MORE THAN YOU KNOW..";

    setTimeout(function() {
        popup.classList.remove('show');
        showOurMemories();
        resetGame(); // Reset the game after the popup
    }, 10000); // Wait for 10 seconds before showing memories
}

// Show the Our Memories and My Beautiful Girl sections
function showOurMemories() {
    ourMemoriesSection.style.display = 'block';
    let myBeautifulGirlSection = document.getElementById('myBeautifulGirl');
    myBeautifulGirlSection.style.display = 'block';
}


// Close the popup
popupClose.addEventListener('click', function () {
    popup.classList.remove('show');
    showOurMemories();
});

// Reset the game
function resetGame() {
    score = 0;
    scoreDisplay.textContent = 'Catches: 0/10';
    moveCat();
}

// Start the game when the page loads
moveCat();
