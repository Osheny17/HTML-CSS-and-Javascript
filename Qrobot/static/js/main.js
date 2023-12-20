// Global variables
const time_el = document.querySelector('.reloj .time');
const start_btn = document.getElementById('start');
const start_img = document.getElementById('startImg');
const reset_btn = document.getElementById("reset");

let seconds = 0;
let interval = null;

// Event listeners
start_btn.addEventListener('click', startStop);  // renamed to startStop
stop_btn.addEventListener("click", stop);
reset_btn.addEventListener("click", reset);

// Update the timer
function timer () {
	seconds++;

	// Format our time
	let hrs = Math.floor(seconds / 3600);
	let mins = Math.floor((seconds - (hrs * 3600)) / 60);
	let secs = seconds % 60;

	if (secs < 10) secs = '0' + secs;
	if (mins < 10) mins = "0" + mins;
	if (hrs < 10) hrs = "0" + hrs;

	time_el.innerText = `${hrs}:${mins}:${secs}`;
}

function startStop() {
        if (interval) {
            stop();
            start_img.src = "/static/imagenes/start.png";
        } else {
            start();
            start_img.src = "/static/imagenes/stop.png";
        }
}

function start() {
        interval = setInterval(timer, 1000);
}

function stop() {
        clearInterval(interval);
        interval = null;
}

function reset() {
        stop();
        seconds = 0;
        time_el.innerText = '00:00:00';
}

function toggleHiddenText() {
    var hiddenText = document.getElementById('hiddenText');
    if (hiddenText.style.opacity === '0') {
        hiddenText.style.opacity = '1';
        hiddenText.style.height = 'auto'; // or replace 'auto' with specific height if needed
    } else {
        hiddenText.style.opacity = '0';
        hiddenText.style.height = '0';
    }
}





