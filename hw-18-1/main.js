let initialTime = 87;

const timer = document.getElementById("timer");

function convertTimeFormat(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
}


function startTimer(duration) {
    let remainingTime = duration;

    const interval = setInterval(() => {
        timer.textContent = convertTimeFormat(remainingTime);
        if (remainingTime === 0) {
            clearInterval(interval);
            timer.textContent = "Time is up";
            timer.classList.add("time-up");
        } else {
            remainingTime--;
        }
    }, 1000);
}

startTimer(initialTime);