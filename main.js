const hearts = document.querySelectorAll(".pixel-heart");let i = 0;


function restartLife () {
    //location.reload();
    i = 0;


    hearts.forEach(element => {
            element.style.opacity = "1";
    });

}

var x = setInterval(function() {
    hearts[(9-i)].style.opacity = "0";
    i++;
    
    
}, 2000);



