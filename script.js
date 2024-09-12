// Play the audio when the Begin button is clicked
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
    alert('Vendor: I saw Sunny running towards the park.');
});

// Event 1: Inspect the Area
document.getElementById('inspect-area-btn').addEventListener('click', function() {
    alert('You searched the area but found nothing.');
    // Move to Event 2 after inspection
    document.getElementById('event-1').style.display = 'none';
    document.getElementById('event-2').style.display = 'block';
});

// Event 2: Start Puzzle
document.getElementById('start-puzzle-btn').addEventListener('click', function() {
    alert('Puzzle started! Match the images to get a clue.');
});

// Event 2: Submit Code
document.getElementById('submit-code-btn').addEventListener('click', function() {
    let code = document.getElementById('secret-code-input').value;
    if(code === '1234') {
        alert('Correct! The clue is: Sunny was seen near the ice cream cart.');
    } else {
        alert('Incorrect code, try again.');
    }
});
