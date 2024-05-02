let timerInterval;
let countValue = 0;
const countElement = document.getElementById("count_timer");

document.getElementById("start_btn").addEventListener("click", () => {
	startCounter();
});

document.getElementById("pause_btn").addEventListener("click", () => {
	pauseCounter();
});

document.getElementById("resume_btn").addEventListener("click", () => {
	resumeCounter();
});

document.getElementById("stop_btn").addEventListener("click", () => {
	stopCounter();
});

function startCounter() {
	clearInterval(timerInterval);

	timerInterval = setInterval(() => {
		countValue++;
		countElement.textContent = countValue;
	}, 1000);
}

function pauseCounter() {
	clearInterval(timerInterval);
}

function resumeCounter() {
	startCounter();
}

function stopCounter() {
	clearInterval(timerInterval);
	countValue = 0;
	countElement.textContent = countValue;
}
