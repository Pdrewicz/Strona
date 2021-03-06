var gravity_x = 450 / 2;
var gravity_y = 400;
var gravityCanvas = document.getElementById('gravityCanvas');
var movingL = false
var movingR = false
setInterval(gravity, 1);

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
    var contentCalculator = document.getElementById("contentCalculator");
    contentInfinity.style.visibility = "hidden";
    contentCalculator.style.visibility = "hidden";
    contentGravity.style.visibility = "hidden";
    contentBowl.style.visibility = "hidden";
    contentParticles.style.visibility = "hidden";
}

function infinityClicked() {
    var contentInfinity = document.getElementById("contentInfinity");
    contentInfinity.style.visibility = "visible";
    contentCalculator.style.visibility = "hidden";
    contentGravity.style.visibility = "hidden";
    contentBowl.style.visibility = "hidden";
    contentParticles.style.visibility = "hidden";
}
function calculatorClicked() {
    var contentCalculator = document.getElementById("contentCalculator");
    contentCalculator.style.visibility = "visible";
    contentInfinity.style.visibility = "hidden";
    contentGravity.style.visibility = "hidden";
    contentBowl.style.visibility = "hidden";
    contentParticles.style.visibility = "hidden";
}
function gravityClicked() {
    var contentGravity = document.getElementById("contentGravity");
    contentGravity.style.visibility = "visible";
    contentCalculator.style.visibility = "hidden";
    contentInfinity.style.visibility = "hidden";
    contentBowl.style.visibility = "hidden";
    contentParticles.style.visibility = "hidden";
}
function bowlClicked() {
    var contentBowl = document.getElementById("contentBowl");
    contentBowl.style.visibility = "visible";
    contentCalculator.style.visibility = "hidden";
    contentInfinity.style.visibility = "hidden";
    contentGravity.style.visibility = "hidden";
    contentParticles.style.visibility = "hidden";
}
function particlesClicked() {
    var contentParticles = document.getElementById("contentParticles");
    contentParticles.style.visibility = "visible";
    contentBowl.style.visibility = "hidden";
    contentCalculator.style.visibility = "hidden";
    contentInfinity.style.visibility = "hidden";
    contentGravity.style.visibility = "hidden";
}
function button(id){
    document.getElementById("displayText").innerHTML+=document.getElementById(id).innerHTML;
}
function back(){
    var text = document.getElementById("displayText").innerHTML
    document.getElementById("displayText").innerHTML = text.replace(/\d$/, '')
}
function clearDisplay(){
    document.getElementById("displayText").innerHTML="";
}
function count(count){
    countType=count
    if (countType == "sqr"){
        document.getElementById("displayText").innerHTML=parseFloat(document.getElementById("displayText").innerHTML)*parseFloat(document.getElementById("displayText").innerHTML)
        document.getElementById("calculator2").innerHTML=""
    } else if (countType == "sqrt") {
        document.getElementById("displayText").innerHTML=Math.sqrt(parseFloat(document.getElementById("displayText").innerHTML))
        document.getElementById("calculator2").innerHTML=""
    } else {
        document.getElementById("calculator2").innerHTML=document.getElementById("displayText").innerHTML
        document.getElementById("displayText").innerHTML=""
    }
}
function submit(){
    if (document.getElementById("calculator2").innerHTML!=""){
        if (countType == "add"){
            document.getElementById("displayText").innerHTML=parseFloat(document.getElementById("displayText").innerHTML)+parseFloat(document.getElementById("calculator2").innerHTML)
            document.getElementById("calculator2").innerHTML=""
        } else if (countType == "sub"){
            document.getElementById("displayText").innerHTML=parseFloat(document.getElementById("calculator2").innerHTML)-parseFloat(document.getElementById("displayText").innerHTML)
            document.getElementById("calculator2").innerHTML=""
        } else if (countType == "mult"){
            document.getElementById("displayText").innerHTML=parseFloat(document.getElementById("displayText").innerHTML)*parseFloat(document.getElementById("calculator2").innerHTML)
            document.getElementById("calculator2").innerHTML=""
        } else if (countType == "div"){
            document.getElementById("displayText").innerHTML=parseFloat(document.getElementById("calculator2").innerHTML)/parseFloat(document.getElementById("displayText").innerHTML)
            document.getElementById("calculator2").innerHTML=""
        }
    }
}

function gravity() {
    var gravityCanvas = document.getElementById('gravityCanvas');
    var ctx = gravityCanvas.getContext('2d');
    ctx.clearRect(0, 0, gravityCanvas.width, gravityCanvas.height);
    ctx.fillStyle = "#4f4f63";
    ctx.fillRect(gravity_x, gravity_y - 50, 50, 80);
    ctx.fillStyle = "#393944";
    ctx.fillRect(gravity_x + 2, gravity_y - 48, 46, 76);
    ctx.fillStyle = "#4f4f63";
    ctx.fillRect(gravity_x, gravity_y + 30, 20, 25);
    ctx.fillStyle = "#393944";
    ctx.fillRect(gravity_x + 2, gravity_y + 30, 16, 21);
    ctx.fillStyle = "#4f4f63";
    ctx.fillRect(gravity_x + 30, gravity_y + 30, 20, 25);
    ctx.fillStyle = "#393944";
    ctx.fillRect(gravity_x + 32, gravity_y + 30, 16, 21);
    ctx.fillStyle = "#4f4f63";
    ctx.fillRect(gravity_x - 10, gravity_y - 50, 10, 50);
    ctx.fillStyle = "#393944";
    ctx.fillRect(gravity_x - 8, gravity_y - 48, 8, 46);
    ctx.fillStyle = "#4f4f63";
    ctx.fillRect(gravity_x + 50, gravity_y - 50, 10, 50);
    ctx.fillStyle = "#393944";
    ctx.fillRect(gravity_x  + 50, gravity_y - 48, 8, 46);
    ctx.fillStyle = "#4f4f63";
    ctx.beginPath();
    ctx.arc(gravity_x + 25, gravity_y - 70, 30, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
    ctx.fillStyle = "#393944";
    ctx.beginPath();
    ctx.arc(gravity_x + 25, gravity_y - 70, 27, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
    if (gravity_y < 450) {
        gravity_y += 0.5
    }
    if (movingL) {
        if (gravity_x > 0) {
            gravity_x -= 1
        }
    }
    if (movingR) {
        if (gravity_x < 450) {
            gravity_x += 1
        }
    }
}
function gravityLstart() {
    movingL = true
}
function gravityLend() {
    movingL = false
}
function gravityRstart() {
    movingR = true
}
function gravityRend() {
    movingR = false
}
function gravityJump() {
    if (gravity_y == 450) {
        while (gravity_y > 400) {
            gravity_y -= 1
        }
    }
}