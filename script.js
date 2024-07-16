function startTimer() {
    updateTimer();
    let intervalID = setInterval(decrementTimer, 1000);
    return intervalID;
}

function decrementTimer() {
    timeRemaining--;
    if (timeRemaining <= 0) stopTimer();
    updateTimer();
}

function stopTimer() {
    clearInterval(intervalID);
}

function zeroPad(number, length) {
    return String(number).padStart(length, '0');
}

function updateTimer() {
    let minutes = Math.floor(timeRemaining / 60);
    let seconds = zeroPad(timeRemaining % 60, 2);
    timer.textContent = `${minutes}:${seconds}`;
}

function resetTimer() {
    clearInterval(intervalID);
    timeRemaining = GOAL_TIME;
    intervalID = startTimer();
}

const GOAL_TIME = 120;
let timeRemaining = GOAL_TIME;
const timer = document.querySelector("#timer");
let intervalID = startTimer();

document.addEventListener('mousemove', resetTimer)
document.addEventListener('keydown', resetTimer)
