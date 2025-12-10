function updateClock() {
    const clockElement = document.getElementById("clock");
    if (!clockElement) return;

    const now = new Date();

    // Format date parts
    const options = {
        weekday: 'long',    // e.g. Monday
        year: 'numeric',    // e.g. 2024
        month: 'long',      // e.g. June
        day: 'numeric'      // e.g. 14
    };
    const formattedDate = now.toLocaleDateString(undefined, options);

    // Format time with 12-hour format and AM/PM
    const formattedTime = now.toLocaleTimeString(undefined, {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    });

    // Combine formatted date and time
    clockElement.textContent = `${formattedDate} — ${formattedTime}`;
}

// Update immediately on load
updateClock();

// Update every second
setInterval(updateClock, 1000);
