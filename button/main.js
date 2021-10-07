
monBoutton = document.getElementById("scroll_top");


window.onscroll = function() {scrollfunction()};

function scrollfunction()  {
    
    if(document.body.scrollTop > 20  || document.documentElement.
    scrollTop > 20) {
         monBoutton.style.display ="block";
    } else {
            monBoutton.style.display ="none";
    }
}

function topfunction() {
    document.documentElement.scrollTop = 0
}