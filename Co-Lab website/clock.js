function updateClock() {
    // Get the element by its ID
    var clockElement = document.getElementById("clock");
    
    // Create a new Date object to get the current date and time
    var now = new Date();
    
    // Format the time nicely (toLocaleString formats it based on the user's browser settings)
    var formattedTime = now.toLocaleString();
    
    // Update the HTML element's content
    clockElement.innerHTML = formattedTime;
}

// Call the updateClock function immediately when the page loads
updateClock();

// Set an interval to call the updateClock function every 1000 milliseconds (1 second)
setInterval(updateClock, 1000);