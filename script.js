console.log(window.innerWidth);
if(window.innerWidth <= 750) {
    console.log("yess it is!");
    document.getElementById('profile').style.width = "100%";
    document.getElementById('colom').style.fontSize = "15px";
    document.getElementById('colom1').style.fontSize = "15px";
    document.getElementById('colom2').style.fontSize = "15px";
    document.getElementById('colom3').style.fontSize = "15px";
    document.getElementById('colom4').style.fontSize = "15px";
    document.getElementById('box').style.clipPath = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";
    // document.getElementById('box').style.justifyContent = "center";
    // document.getElementById('box').style.textAlign = "center";
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