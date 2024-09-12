// Play the button click sound
const buttonClickSound = new Audio('audio/506053__mellau__button-click-2.wav');

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
document.getElementById('riddle-answer1').addEventListener('click', function() {
    document.getElementById('event-2-result').textContent = "Correct! You can now enter the secret code.";
    document.getElementById('secret-code-input').style.display = 'block';
    document.getElementById('submit-code-btn').style.display = 'block';
});

document.getElementById('riddle-answer2').addEventListener('click', function() {
    document.getElementById('event-2-result').textContent = "Incorrect! The children laugh at you.";
    document.getElementById('riddle-answer1').disabled = true;
    document.getElementById('riddle-answer2').disabled = true;
});

// Event 2: Submit Code
document.getElementById('submit-code-btn').addEventListener('click', function() {
    let code = document.getElementById('secret-code-input').value;
    if (code === '1234') {
        alert('Correct! The clue is: Sunny was seen near the ice cream cart.');
    } else {
        alert('Incorrect code, try again.');
    }
});
