function funcbox11() {

   
    document.getElementById("box11").style.display="inline";
    document.getElementById("box12").style.display="none";
    document.getElementById("box13").style.display="none";
    document.getElementById("box14").style.display="none";


  }

  function funcbox12() {


    document.getElementById("box11").style.display="none";
    document.getElementById("box12").style.display="inline";
    document.getElementById("box13").style.display="none";
    document.getElementById("box14").style.display="none";

 }

 function funcbox13() {

    
    document.getElementById("box11").style.display="none";
    document.getElementById("box12").style.display="none";
    document.getElementById("box13").style.display="inline";
    document.getElementById("box14").style.display="none";

 }

 function funcbox14() {


    document.getElementById("box11").style.display="none";
    document.getElementById("box12").style.display="none";
    document.getElementById("box13").style.display="none";
    document.getElementById("box14").style.display="inline";

 }
 let t=8
 function otpsent() {

if(t>0)
{
   document.getElementById("OTP").textContent="Sent  "+t+"s";
   t=t-1;
   setTimeout(otpsent,1000);
 }
 else{
    t=8
   document.getElementById("OTP").textContent="Send again";
 }
}