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
