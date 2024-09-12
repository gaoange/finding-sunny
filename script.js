// Play the audio when the Begin button is clicked
document.getElementById('begin-btn').addEventListener('click', function() {
    const audio = document.getElementById('background-audio');
    audio.volume = 0.5;
    audio.play(); 
});

// Transition to game intro
document.getElementById('begin-btn').addEventListener('click', function() {
    document.getElementById('intro-screen').style.display = 'none';
    document.getElementById('game-intro-screen').style.display = 'flex';
});

// Start the actual game
document.getElementById('start-game-btn').addEventListener('click', function() {
    document.getElementById('game-intro-screen').style.display = 'none';
    document.getElementById('game-container').style.display = 'block';
});
