window.onload = startInterval;

function startInterval()
    {
        setInterval("startTime();",1000);
    }
    
    function startTime()
    {
        var dt = new Date();
        document.getElementById("navTime").innerHTML = dt.toLocaleTimeString();
    }

var dt = new Date();
document.getElementById("navDate").innerHTML = dt.toDateString();