console.log(window.innerWidth);
if(window.innerWidth <= 750) {
    console.log("yess it is!");
    document.getElementById('navbar').style.width = "100%";
    document.getElementById('profile').style.width = "100%";
    document.getElementById('box').style.clipPath = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";
    document.getElementById('card').style.justifyContent = "center";
}


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
}