/*BUTTON CATCH*/
mybutton = document.getElementById("myBtn");

/*BUTTON AFTER SCROLL SHOW */
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

/*ONCLICK GOES TO TOP*/
function topFunction() {
  document.documentElement.scrollTop = 0;
}

/*SLIDESHOW PICTURES */
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("slika");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 1500);
}