// Play the button click sound
const buttonClickSound = new Audio('audio/506053__mellau__button-click-2.wav');
const gameOverSound = new Audio('audio/76376__deleted_user_877451__game_over.wav');
const yaySound = new Audio('audio/428156__higgs01__yay.wav');

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        buttonClickSound.play();
    });
});

// Play the background audio when the Begin button is clicked
document.getElementById('begin-btn').addEventListener('click', function() {
    const audio = document.getElementById('background-audio');
    audio.volume = 0.5;  // Set volume
    audio.play();  // Play audio
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
});

// Event 1: Ask the Vendor
document.getElementById('ask-vendor-btn').addEventListener('click', function() {
    document.getElementById('event-1-result').textContent = "Vendor: I saw Sunny running towards the park.";
    document.getElementById('inspect-area-btn').disabled = true; // Disable other button
    setTimeout(nextEvent, 2000); // Automatically move to Event 2
});

// Event 1: Inspect the Area
document.getElementById('inspect-area-btn').addEventListener('click', function() {
    document.getElementById('event-1-result').textContent = "You searched the area and found nothing.";
    document.getElementById('ask-vendor-btn').disabled = true; // Disable other button
    setTimeout(nextEvent, 2000); // Automatically move to Event 2
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
    alert('You returned the teddy bear and gained valuable information about Sunny!');
    // Proceed to the next part of the game or victory screen
});
