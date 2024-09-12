// Play the button click sound
const buttonClickSound = new Audio('audio/506053__mellau__button-click-2.wav');
const gameOverSound = new Audio('audio/76376__deleted_user_877451__game_over.wav');
const yaySound = new Audio('audio/428156__higgs01__yay.wav');
const barkSound = new Audio('audio/630648__haulaway__single-bark-small-to-medium-dog.mp3');
const barterAcceptSound = new Audio('audio/86426__deleted_user_1390811__epanody-nice.wav');
const congratsSound = new Audio('audio/607207__fupicat__congrats.wav');

// Player Progress
let progressValue = 0;
const progressBar = document.getElementById('progress-bar');

// Update progress bar function
function updateProgress(amount) {
    progressValue += amount;
    progressBar.value = progressValue;
}

// Play button click sound every time any button is clicked
document.querySelectorAll('button').forEach(function(button) {
    button.addEventListener('click', function() {
        buttonClickSound.play();
    });
});

// Play the background audio when the Begin button is clicked
document.getElementById('begin-btn').addEventListener('click', function() {
    const audio = document.getElementById('background-audio');
    audio.volume = 0.5;  // Set volume
    audio.play();  // Play audio
    updateProgress(10); // Update progress
});

// Button to transition to game intro
document.getElementById('begin-btn').addEventListener('click', function() {
    document.getElementById('intro-screen').style.display = 'none';
    document.getElementById('game-intro-screen').style.display = 'flex';
});

// Start Game Button - Transition into the game itself (or the next part)
document.getElementById('start-game-btn').addEventListener('click', function() {
    document.getElementById('game-intro-screen').style.display = 'none';
    document.getElementById('game-container').style.display = 'block';
    updateProgress(10); // Update progress
});

// Event 1: Ask the Vendor
let hasSearchedArea = false;

document.getElementById('ask-vendor-btn').addEventListener('click', function() {
    if (!hasSearchedArea) {
        document.getElementById('event-1-result').textContent = "Vendor: I saw Sunny running towards the park.";
        setTimeout(nextEvent, 2000); // Automatically move to Event 2
        updateProgress(20); // Update progress
    }
});

document.getElementById('inspect-area-btn').addEventListener('click', function() {
    document.getElementById('event-1-result').textContent = "You searched the area and found nothing.";
    document.getElementById('ask-vendor-btn').disabled = false;
    hasSearchedArea = true;
    setTimeout(nextEvent, 2000); // Automatically move to Event 2
    updateProgress(20); // Update progress
});

function nextEvent() {
    document.getElementById('event-1').style.display = 'none';
    document.getElementById('event-2').style.display = 'block';
}

// Event 2: Riddle
const riddles = [
    { question: "What has keys but can't open locks?", correct: "A piano" },
    { question: "What runs but never walks?", correct: "A river" },
    { question: "What has a face but can't smile?", correct: "A clock" }
];

// Pick a random riddle
const selectedRiddle = riddles[Math.floor(Math.random() * riddles.length)];
document.getElementById('riddle-question').textContent = selectedRiddle.question;

// Handle riddle answers
document.getElementById('riddle-answer1').addEventListener('click', function() {
    if (selectedRiddle.correct === "A piano") {
        document.getElementById('event-2-result').textContent = "Correct! The secret code is bananas.";
        yaySound.play(); // Play yay sound
        showSecretCodeInput();
    } else {
        handleFailure();
    }
});

document.getElementById('riddle-answer2').addEventListener('click', function() {
    if (selectedRiddle.correct === "A river" || selectedRiddle.correct === "A clock") {
        document.getElementById('event-2-result').textContent = "Correct! The secret code is bananas.";
        yaySound.play(); // Play yay sound
        showSecretCodeInput();
    } else {
        handleFailure();
    }
});

function showSecretCodeInput() {
    document.getElementById('secret-code-input').style.display = 'block';
    document.getElementById('submit-code-btn').style.display = 'block';
}

function handleFailure() {
    document.getElementById('event-2-result').textContent = "You failed. The children laughed.";
    gameOverSound.play();
    document.getElementById('riddle-answer1').disabled = true;
    document.getElementById('riddle-answer2').disabled = true;
    document.getElementById('restart-btn').style.display = 'block';
}

// Restart the game from Event 2
document.getElementById('restart-btn').addEventListener('click', function() {
    window.location.reload();
});

// Event 2: Submit Code
document.getElementById('submit-code-btn').addEventListener('click', function() {
    let code = document.getElementById('secret-code-input').value;
    if (code.toLowerCase() === 'bananas') {
        alert('Correct! You may proceed to the next event.');
        transitionToEvent3();
        updateProgress(20); // Update progress
    } else {
        alert('Incorrect code, try again.');
    }
});

// Transition to Event 3
function transitionToEvent3() {
    document.getElementById('event-2').style.display = 'none';
    document.getElementById('event-3').style.display = 'block';
}

// Event 3: Search the Playground
document.getElementById('search-sandbox').addEventListener('click', function() {
    document.getElementById('search-result').textContent = "You found a teddy bear!";
    document.getElementById('return-toy-btn').style.display = 'block';
});

document.getElementById('search-slide').addEventListener('click', function() {
    document.getElementById('search-result').textContent = "You searched the slide but found nothing.";
});

document.getElementById('search-trash').addEventListener('click', function() {
    document.getElementById('search-result').textContent = "You searched the trash can but found nothing.";
});

// Return the Toy Button
document.getElementById('return-toy-btn').addEventListener('click', function() {
    yaySound.play();
    alert('You returned the teddy bear and gained valuable information about Sunny! Sunny was last seen near the ice cream cart.');
    transitionToEvent4();
    updateProgress(20); // Update progress
});

// Transition to Event 4
function transitionToEvent4() {
    document.getElementById('event-3').style.display = 'none';
    document.getElementById('event-4').style.display = 'block';
}

// Event 4: Serve Customers Mini-game
document.getElementById('serve-customers-btn').addEventListener('click', function() {
    document.getElementById('ice-cream-game').style.display = 'block';
    startIceCreamGame();
    startTimer(10);  // Start 10 second timer
    updateProgress(10); // Update progress
});

// Timer for Serve Customers Game
let timerInterval;
function startTimer(timeLeft) {
    clearInterval(timerInterval);
    document.getElementById('timer').textContent = timeLeft;
    timerInterval = setInterval(function() {
        timeLeft--;
        document.getElementById('timer').textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            gameOver();
        }
    }, 1000);
}

// Event 4: Slider for Negotiating Shortcut
document.getElementById('negotiate-shortcut-btn').addEventListener('click', function() {
    const offer = window.prompt("Enter a value between 1 and 100 to offer the vendor.");
    if (offer >= 50) {
        document.getElementById('event-4-result').textContent = "The vendor accepted your offer. You may pass.";
        yaySound.play();
        setTimeout(function() {
            transitionToEvent5();
        }, 2000);
    } else {
        document.getElementById('event-4-result').textContent = "The vendor is upset. You failed!";
        gameOverSound.play();
    }
});

// Ice Cream Mini-game Logic
const orders = ["Vanilla", "Chocolate", "Strawberry"];
let currentOrder = '';
let servedCount = 0;

function startIceCreamGame() {
    currentOrder = orders[Math.floor(Math.random() * orders.length)];
    document.getElementById('order').textContent = currentOrder;
}

document.getElementById('vanilla-btn').addEventListener('click', function() {
    checkOrder("Vanilla");
});

document.getElementById('chocolate-btn').addEventListener('click', function() {
    checkOrder("Chocolate");
});

document.getElementById('strawberry-btn').addEventListener('click', function() {
    checkOrder("Strawberry");
});

function checkOrder(flavor) {
    if (flavor === currentOrder) {
        servedCount++;
        document.getElementById('order-result').textContent = "Correct!";
        if (servedCount === 5) {
            yaySound.play();
            document.getElementById('event-4-result').textContent = "Path cleared. You can continue.";
            updateProgress(20); // Update progress
            setTimeout(function() {
                transitionToEvent5();
            }, 2000);
        } else {
            startIceCreamGame();  // Load next order
        }
    } else {
        document.getElementById('order-result').textContent = "Incorrect! Try again.";
    }
}

// Transition to Event 5
function transitionToEvent5() {
    document.getElementById('event-4').style.display = 'none';
    document.getElementById('event-5').style.display = 'block';
}

// Event 5: Search and Barter with Stranger
document.getElementById('submit-barter-btn').addEventListener('click', function() {
    let offer = document.getElementById('barter-input').value.toLowerCase();
    if (offer === "ring") {
        document.getElementById('barter-result').textContent = "The stranger accepts your offer. You gain information about Sunny!";
        barterAcceptSound.play();  // Play barter accepted sound
        updateProgress(20); // Update progress
        setTimeout(transitionToEvent6, 2000);
    } else {
        document.getElementById('barter-result').textContent = "The stranger declines. You lose!";
        gameOverSound.play();
        document.getElementById('restart-game-btn').style.display = 'block'; // Add restart button
    }
});

// Restart the Game Button
document.getElementById('restart-game-btn').addEventListener('click', function() {
    window.location.reload();
});

// Event 6: Run Towards Sunny (Final Mini-Game)
function transitionToEvent6() {
    document.getElementById('event-5').style.display = 'none';
    document.getElementById('event-6').style.display = 'block';
    startRunGame();
}

function startRunGame() {
    barkSound.play();
    let timeLeft = 6;
    let runProgress = 0;
    const runInterval = setInterval(function() {
        timeLeft--;
        document.getElementById('run-timer').textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(runInterval);
            document.getElementById('run-result').textContent = "You lost Sunny!";
            gameOverSound.play();
        }
    }, 1000);

    document.addEventListener('keydown', function(event) {
        if (event.code === 'Space') {
            runProgress += 10;
            document.getElementById('run-progress').value = runProgress;
            if (runProgress >= 100) {
                clearInterval(runInterval);
                document.getElementById('run-result').textContent = "You found Sunny!";
                yaySound.play();
                congratsSound.play();
                barkSound.play();
            }
        }
    });
}

function gameOver() {
    document.getElementById('event-4-result').textContent = "Time ran out! Game over.";
    gameOverSound.play();
    document.getElementById('restart-btn').style.display = 'block';
}
