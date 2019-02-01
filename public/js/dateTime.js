// Code to put live date and time on the webpage

window.onload = startInterval;

function startInterval()
    {
        setInterval("startTime();",1000);
    }
    
    function startTime()
    {
        var dt = new Date();
        document.getElementById("navTime").innerHTML = dt.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
    }

var dt = new Date();
document.getElementById("navDate").innerHTML = dt.toDateString();