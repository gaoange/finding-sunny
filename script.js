/* General Styling */
body {
    font-family: 'Gloria Hallelujah', cursive;
    background-color: #f0f8ff;
    color: #333;
    margin: 0;
    padding: 20px;
    text-align: center;
}

/* Info Section Styling */
#info-section {
    text-align: center;
    padding-bottom: 50px;
}

h1, h2 {
    color: #4CAF50;
}

p {
    font-size: 1.1em;
    margin: 10px 0;
}

ul {
    margin: 20px auto;
    padding: 0;
    list-style: square inside;
    max-width: 80%;
}

/* Game Container */
#game-container, #intro-screen, #game-intro-screen {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

button {
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #45a049;
}

/* Sunny Character Design */
.sunny-character {
    position: relative;
    margin-bottom: 20px;
}

.sunny-body {
    width: 100px;
    height: 60px;
    background-color: #ffd966;
    border-radius: 50px;
    display: inline-block;
    position: relative;
}

.sunny-head {
    width: 50px;
    height: 50px;
    background-color: #ffd966;
    border-radius: 50%;
    position: absolute;
    top: -40px;
    left: -10px;
}

/* Eyes */
.sunny-eye {
    width: 10px;
    height: 10px;
    background-color: #000;
    border-radius: 50%;
    position: absolute;
}

.left-eye {
    top: 15px;
    left: 10px;
}

.right-eye {
    top: 15px;
    right: 10px;
}

/* Nose */
.sunny-nose {
    width: 8px;
    height: 8px;
    background-color: #000;
    border-radius: 50%;
    position: absolute;
    top: 30px;
    left: 50%;
    transform: translateX(-50%);
}

/* Ears */
.sunny-ear {
    width: 20px;
    height: 30px;
    background-color: #ffd966;
    border-radius: 50%;
    position: absolute;
}

.left-ear {
    top: -10px;
    left: -10px;
    transform: rotate(-30deg);
}

.right-ear {
    top: -10px;
    right: -10px;
    transform: rotate(30deg);
}

/* Legs */
.sunny-leg {
    width: 15px;
    height: 30px;
    background-color: #ffd966;
    border-radius: 10px;
    position: absolute;
    bottom: -30px;
}

.left-leg {
    left: 10px;
}

.right-leg {
    right: 10px;
}

/* Tail */
.sunny-tail {
    width: 40px;
    height: 10px;
    background-color: #ffd966;
    border-radius: 50px;
    position: absolute;
    top: 20px;
    right: -40px;
}

/* Paw Prints */
#paw-prints {
    display: flex;
    justify-content: space-between;
    width: 80%;
    margin-top: 20px;
    margin-bottom: 50px;
}

.paw-print {
    display: inline-block;
    position: relative;
}

.paw-pad {
    width: 20px;
    height: 20px;
    background-color: #333;
    border-radius: 50%;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
}

.toe {
    width: 10px;
    height: 10px;
    background-color: #333;
    border-radius: 50%;
    position: absolute;
}

.toe1 {
    top: -10px;
    left: -15px;
}

.toe2 {
    top: -15px;
    left: 0;
}

.toe3 {
    top: -15px;
    right: 0;
}

.toe4 {
    top: -10px;
    right: -15px;
}

/* Candy Stand Abstract Design */
.candy-stand {
    position: relative;
    width: 100px;
    height: 60px;
    background-color: red;
    margin: 20px auto;
}

.stand-base {
    width: 100px;
    height: 50px;
    background-color: #ff9999;
}

.stand-roof {
    width: 120px;
    height: 30px;
    background-color: #ff6666;
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}

.stand-logo {
    margin-top: 10px;
    font-size: 0.9em;
    color: white;
    font-weight: bold;
}

/* Carnival abstract shapes */
.carnival-background {
    position: relative;
    width: 300px;
    height: 200px;
    background-color: #f9f9f9;
    margin: 20px 0;
}

.tent {
    width: 120px;
    height: 80px;
    background-color: #ff6666;
    position: absolute;
    bottom: 0;
    left: 10px;
}

.tent:before {
    content: "";
    width: 140px;
    height: 60px;
    background-color: #ffcc66;
    position: absolute;
    bottom: 80px;
    left: -10px;
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}

.ferris-wheel {
    width: 60px;
    height: 60px;
    border: 3px solid #66ccff;
    border-radius: 50%;
    position: absolute;
    bottom: 10px;
    right: 20px;
}

/* Question Marks for Event 2 */
.question-marks {
    position: relative;
    width: 100%;
    height: 100px;
    margin: 20px 0;
}

.question-mark {
    font-size: 30px;
    color: #333;
    position: absolute;
    animation: float 3s infinite ease-in-out;
}

.question-mark:nth-child(1) {
    left: 10%;
    animation-duration: 3s;
}

.question-mark:nth-child(2) {
    left: 50%;
    animation-duration: 2.5s;
}

.question-mark:nth-child(3) {
    left: 80%;
    animation-duration: 4s;
}

@keyframes float {
    0% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-20px);
    }
    100% {
        transform: translateY(0);
    }
}

/* Event 3 Abstract Illustrations */
.playground {
    position: relative;
    width: 400px;
    height: 200px;
    margin: 20px auto;
}

.sandbox {
    width: 80px;
    height: 40px;
    background-color: #e2b575;
    position: absolute;
    bottom: 10px;
    left: 10px;
}

.slide {
    width: 60px;
    height: 120px;
    background-color: #66ccff;
    position: absolute;
    bottom: 10px;
    right: 10px;
}

.trash-can {
    width: 40px;
    height: 60px;
    background-color: #333;
    position: absolute;
    bottom: 10px;
    left: 150px;
}
