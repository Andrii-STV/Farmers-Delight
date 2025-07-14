const hearts = document.querySelectorAll(".pixel-heart");let i = 9;
var countDownDate = new Date().getTime();



function restartLife () {
    location.reload();

}

var x = setInterval(function() {

    


    var now = new Date().getTime();
    document.getElementById("counter").innerHTML = now;
    hearts[i].style.opacity = "0";
    i--;
    
    
}, 1000);



