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


//popup

function forgetpopup(){

document.getElementById("overlay").style.display="block";
document.getElementById("overlay").style.a
document.getElementById("outter2").style.display="block";

}