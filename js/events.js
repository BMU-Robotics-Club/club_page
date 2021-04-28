function showupcomingevents(){
    document.getElementById("upcominginformation").style.display = "inline";
    document.getElementById("flagshipinformation").style.display = "none";
   // document.getElementById("eventsmenu1").style.backgroundColor = "blue";
    //document.getElementById("classforbutton1").style.backgroundColor = "blue";
    //document.getElementById("upcominginformation").style.backgroundColor = "blue";
    document.getElementById("classforbutton1").style.color="red";
    document.getElementById("classforbutton2").style.color="black";


}

function showflagshipevents(){
    document.getElementById("upcominginformation").style.display = "none";
    document.getElementById("flagshipinformation").style.display = "inline";

    document.getElementById("classforbutton1").style.color="black";
    document.getElementById("classforbutton2").style.color="red";
}