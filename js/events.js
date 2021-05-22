function closeupcomingevents(){
  document.getElementById("upcominginformation").style.display = "none";
  document.getElementById("statsdiv").style.display = "inline-block";
}

function openupcomingevents(){
  document.getElementById("upcominginformation").style.display = "inline-block";
  document.getElementById("statsdiv").style.display = "none";
}

function showupcomingevents(){
    document.getElementById("upcominginformation").style.display = "flex";
    document.getElementById("flagshipinformation").style.display = "none";
    document.getElementById("workshopinformation").style.display = "none";
    document.getElementById("technicalinformation").style.display = "none";

    document.getElementById("smallvertical1").style.display = "flex";
    document.getElementById("smallvertical2").style.display = "none";
    document.getElementById("smallvertical3").style.display = "none";
    document.getElementById("smallvertical4").style.display = "none";
}

function showflagshipevents(){
    document.getElementById("upcominginformation").style.display = "none";
    document.getElementById("flagshipinformation").style.display = "flex";
    document.getElementById("workshopinformation").style.display = "none";
    document.getElementById("technicalinformation").style.display = "none";

   

     document.getElementById("smallvertical1").style.display = "none";
     document.getElementById("smallvertical2").style.display = "flex";
    document.getElementById("smallvertical3").style.display = "none";
    document.getElementById("smallvertical4").style.display = "none";
}

function showworkshops(){
    document.getElementById("upcominginformation").style.display = "none";
    document.getElementById("flagshipinformation").style.display = "none";
    document.getElementById("workshopinformation").style.display = "flex";
    document.getElementById("technicalinformation").style.display = "none";

    document.getElementById("smallvertical1").style.display = "none";
    document.getElementById("smallvertical2").style.display = "none";
    document.getElementById("smallvertical3").style.display = "flex";
    document.getElementById("smallvertical4").style.display = "none";
}

function showtechnicalevents(){
    document.getElementById("upcominginformation").style.display = "none";
    document.getElementById("flagshipinformation").style.display = "none";
    document.getElementById("workshopinformation").style.display = "none";
    document.getElementById("technicalinformation").style.display = "flex";

    document.getElementById("smallvertical1").style.display = "none";
    document.getElementById("smallvertical2").style.display = "none";
    document.getElementById("smallvertical3").style.display = "none";
    document.getElementById("smallvertical4").style.display = "flex";
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

