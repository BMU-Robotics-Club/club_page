
function closeall(){
  document.getElementById("statsdiv").style.display = "inline-block";
  document.getElementById("upcominginformation").style.display = "none";
  document.getElementById("flagshipinformation").style.display = "none";
  document.getElementById("workshopinformation").style.display = "none";
  document.getElementById("technicalinformation").style.display = "none";
  
}


function openupcomingevents(){

  document.getElementById("statsdiv").style.display = "none";
  document.getElementById("upcominginformation").style.display = "inline-block";
  document.getElementById("flagshipinformation").style.display = "none";
  document.getElementById("workshopinformation").style.display = "none";
  document.getElementById("technicalinformation").style.display = "none";
  
  
}


function openflagshipevents(){
  document.getElementById("upcominginformation").style.display = "none";
  document.getElementById("workshopinformation").style.display = "none";
  document.getElementById("technicalinformation").style.display = "none";
  document.getElementById("statsdiv").style.display = "none";
  document.getElementById("flagshipinformation").style.display = "inline-block";
  
  
}


