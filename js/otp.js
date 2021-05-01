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