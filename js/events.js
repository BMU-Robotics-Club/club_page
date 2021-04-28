function showupcomingevents(){
    document.getElementById("upcominginformation").style.display = "inline";
    document.getElementById("flagshipinformation").style.display = "none";
   // document.getElementById("eventsmenu1").style.backgroundColor = "blue";
    //document.getElementById("classforbutton1").style.backgroundColor = "blue";
    //document.getElementById("upcominginformation").style.backgroundColor = "blue";
    document.getElementById("classforbutton1").style.color="white";
    document.getElementById("classforbutton2").style.color="black";


}

function showflagshipevents(){
    document.getElementById("upcominginformation").style.display = "none";
    document.getElementById("flagshipinformation").style.display = "inline";

    document.getElementById("classforbutton1").style.color="black";
    document.getElementById("classforbutton2").style.color="white";
}

var i = 0;
var txt = 'Lets !! Get !! Chase !!'; /* The text */
var speed = 150; /* The speed/duration of the effect in milliseconds */




function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }


}

