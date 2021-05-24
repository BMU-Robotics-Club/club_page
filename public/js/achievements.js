// !Achivements JS

// ? Global Variables 
// *section hidden 
let sec_hidden = document.querySelector(".Hidden");
// ! for content
let hidden_img = document.querySelector(".Hidden-img");
let hidden_con = document.querySelector(".Hidden-flex-items")[1];

let contentp=document.getElementById("contentp");




// !HiddenOpen
function HiddenOpen1(){
   sec_hidden.classList.replace("Hidden-not-active","Hidden-active");
   contentp.innerHTML ="<h1 style='margin-left:-15%;margin-top:8%;'>1st Prize from <span style='color:blue;font-weight: bold;'>Uphoria 2019</span></h1><p style='font-weight: bold;text-align: left;margin-top: 12%;width:100%;'>The line follower robot is a mobile machine that can detect and follow the line drawn on the floor. Generally, the path is predefined and can be either visible like a black line on a white surface with a high contrasted color or it can be invisible like a magnetic filed.</p><h3 style='margin-left:-20%;margin-top:10%;color:blue;'>Team Members</h3><h4 style='margin-left:-20%;margin-top:1%;'>Charith Reddy<br><br>Gurram Dinesh<br><br>Akash. </h4>";
    
}


function HiddenOpen2(){
sec_hidden.classList.replace("Hidden-not-active","Hidden-active");
contentp.innerHTML ="<h1 style='margin-left:-15%;margin-top:8%;'>1st Prize from <span style='color:blue;font-weight: bold;'>Uphoria 2019</span></h1><p style='font-weight: bold;text-align: left;margin-top: 12%;width:100%;'>Robot Soccer is a robot sport, where robot machines compete against each other in a variation of the game of Association Football (soccer). In robot soccer, each team is fully autonomous - once the game starts the only input from any human is from the referee.</p><h3 style='margin-left:-20%;margin-top:10%;color:blue;'>Team Members</h3><h4 style='margin-left:-20%;margin-top:1%;'>Charith Reddy<br><br>Gurram Dinesh<br><br>Akash.</h4>";

}


function HiddenOpen3(){
    sec_hidden.classList.replace("Hidden-not-active","Hidden-active");
    contentp.innerHTML ="<h1 style='margin-left:-15%;margin-top:8%;'>1st Prize from <span style='color:blue;font-weight: bold;'>Uphoria 2019</span></h1><p style='font-weight: bold;text-align: left;margin-top: 12%;width:100%;'>Nitro vehicles also require a means of cranking the engine over, which can be achieved using a pull-start, starter box, battery operated rotostart, or by an electric drill. The Traxxas nitro rc cars come with a hand start up system, that revs the engine and starts it up. It doesn't require a pull start system.</p><h3 style='margin-left:-20%;margin-top:10%;color:blue;'>Team Members</h3><h4 style='margin-left:-20%;margin-top:1%;'>Charith Reddy<br><br>Gurram Dinesh<br><br>Akash.</h4>";
    
    }

    function HiddenOpen4(){
        sec_hidden.classList.replace("Hidden-not-active","Hidden-active");
        contentp.innerHTML ="<h1 style='margin-left:-15%;margin-top:8%;'>1st Prize from <span style='color:blue;font-weight: bold;'>Uphoria 2019</span></h1><p style='font-weight: bold;text-align: left;margin-top: 12%;width:100%;'>RoboWar is an open-source video game in which the player programs onscreen icon-like robots to battle each other with animation and sound effects. The syntax of the language in which the robots are programmed is a relatively simple stack-based one, based largely on IF, THEN, and simply-defined variables</p><h3 style='margin-left:-20%;margin-top:10%;color:blue;'>Team Members</h3><h4 style='margin-left:-20%;margin-top:1%;'>Charith Reddy<br><br>Gurram Dinesh<br><br>Akash. </h4>";
        
        }
// !HiddenClose
function HiddenClose(){
    sec_hidden.classList.replace("Hidden-active","Hidden-not-active");
    
}

// *LineFollower
function LineFollower(){
    hidden_img.setAttribute("src","/Images/linefollower.jfif");
    HiddenOpen1();
}

function RoboSoccer(){
    hidden_img.setAttribute("src","/Images/robosoccer.jpg");
    HiddenOpen2();
}

function NitroSurge(){
    hidden_img.setAttribute("src","/Images/nitrosurge.jpg");
    HiddenOpen3();

}

function RoboWar(){
    hidden_img.setAttribute("src","/Images/robowar.jpg");
    HiddenOpen4();
}
