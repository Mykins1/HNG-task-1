// Get the current time from Date.now() value
function updateTime() {
  const timeElement = document.getElementById("time-display");
  if (timeElement) {
    const now = Date.now();
    timeElement.textContent = now.toString();
  }
}

// Update the time immediately on load
updateTime();

// Set an interval to update the time every 100 milliseconds
setInterval(updateTime, 100);
