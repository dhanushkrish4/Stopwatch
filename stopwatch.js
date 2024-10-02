let timerInterval;
let startTime;
let elapsedTime = 0;
let isRunning = false;

function startStopwatch() {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(updateDisplay, 10);
        isRunning = true;
    }
}

function pauseStopwatch() {
    if (isRunning) {
        clearInterval(timerInterval);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}

function resetStopwatch() {
    clearInterval(timerInterval);
    elapsedTime = 0;
    isRunning = false;
    document.getElementById('display').innerHTML = "00:00:00.00";
    document.getElementById('laps').innerHTML = '';
}

function updateDisplay() {
    const time = Date.now() - startTime;
    const milliseconds = Math.floor((time % 1000) / 10);
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / (1000 * 60)) % 60);
    const hours = Math.floor(time / (1000 * 60 * 60));

    document.getElementById('display').innerHTML = 
        `${pad(hours)}:${pad(minutes)}:${pad(seconds)}.${pad(milliseconds, 2)}`;
}

function pad(number, digits = 2) {
    return String(number).padStart(digits, '0');
}

function recordLap() {
    const lapTime = document.getElementById('display').innerHTML;
    const lapList = document.getElementById('laps');
    const lapItem = document.createElement('li');
    lapItem.textContent = `Lap: ${lapTime}`;
    lapList.appendChild(lapItem);
}
