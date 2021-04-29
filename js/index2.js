// *typing effect

(function () {
    var CharacterPos = 0;
    var MsgBuffer = "";
    var TypeDelay = 100; 
    var NxtMsgDelay = 1000;
    var MsgIndex = 0;
        var delay;
    var MsgArray = ["BMU Robotics Club"];
     
    function StartTyping() {
       var id = document.getElementById("typing-text");
       if (CharacterPos != MsgArray[MsgIndex].length) {
          MsgBuffer  = MsgBuffer + MsgArray[MsgIndex].charAt(CharacterPos);
          id.value = MsgBuffer+"|";
          delay = TypeDelay;
          id.scrollTop = id.scrollHeight; 
       } else {
          delay = NxtMsgDelay;
          MsgBuffer   = "";
          CharacterPos = -1;
          if (MsgIndex!=MsgArray.length-1){
            MsgIndex++;
          }else {
            MsgIndex = 0;
              }
        }
        CharacterPos++;
        setTimeout(StartTyping,delay);
    }
     StartTyping();
})();

// For navigation bar
window.addEventListener('scroll', function () {
    let header = document.querySelector('header');
    let windowPosition = window.scrollY > 0;
    header.classList.toggle('scrolling-active', windowPosition);
})


// !Achivements JS

// ? Global Variables 
    // *section hidden 
let sec_hidden = document.querySelector(".Hidden");
// ! for content
let hidden_img = document.querySelector(".Hidden-img");
let hidden_con = document.querySelector(".Hidden-flex-items")[1];


// !HiddenOpen
function HiddenOpen(){
   sec_hidden.classList.replace("Hidden-not-active","Hidden-active");
    
}
// !HiddenClose
function HiddenClose(){
    sec_hidden.classList.replace("Hidden-active","Hidden-not-active");
}

// *LineFollower
function LineFollower(){
    hidden_img.setAttribute("src","/Images/linefollower.jfif");
    HiddenOpen();
}

function RoboSoccer(){
    hidden_img.setAttribute("src","/Images/robosoccer.jpg");
    HiddenOpen();
}

function NitroSurge(){
    hidden_img.setAttribute("src","/Images/nitrosurge.jpg");
    HiddenOpen();

}

function RoboWar(){
    hidden_img.setAttribute("src","/Images/robowar.jpg");
    HiddenOpen();
}


