function clock() 
{
    var day = new Date();
    
    var hour = day.getHours();
    if (hour<10) hour = "0"+hour;
    var min = day.getMinutes();
    if (min<10) min = "0"+min;
    var sec = day.getSeconds();
    if (sec<10) sec = "0"+sec;
    
    document.getElementById("clock").innerHTML = hour+":"+min+":"+sec;
    
    setTimeout("clock()",1000);
}

function clockClicked() {
    var contentInfinity = document.getElementById("contentInfinity");
    contentInfinity.style.visibility = "hidden";
}

function infinityClicked() {
    var contentInfinity = document.getElementById("contentInfinity");
    contentInfinity.style.visibility = "visible";
}
