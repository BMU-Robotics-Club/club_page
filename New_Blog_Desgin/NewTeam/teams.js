function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
 }

 async function animatedisplay()
{
 var img1=document.getElementById("img1");
 var img2=document.getElementById("img2");
 var img3=document.getElementById("img3");
 var img4=document.getElementById("img4");
 var img5=document.getElementById("img5");
 var img6=document.getElementById("img6");

img1.style.opacity=1;
img2.style.opacity=0;
img3.style.opacity=0;
img4.style.opacity=0;
img5.style.opacity=0;
img6.style.opacity=0;

await  sleep(800);
img1.style.opacity=1;
img2.style.opacity=1;
img3.style.opacity=0;
img4.style.opacity=0;
img5.style.opacity=0;
img6.style.opacity=0;

await sleep(800);

img1.style.opacity=1;
img2.style.opacity=1;
img3.style.opacity=1;
img4.style.opacity=0;
img5.style.opacity=0;
img6.style.opacity=0;

await sleep(800);

img1.style.opacity=1;
img2.style.opacity=1;
img3.style.opacity=1;
img4.style.opacity=1;
img5.style.opacity=0;
img6.style.opacity=0;

await sleep(800);

img1.style.opacity=1;
img2.style.opacity=1;
img3.style.opacity=1;
img4.style.opacity=1;
img5.style.opacity=1;
img6.style.opacity=0;

await sleep(800);
img1.style.opacity=1;
img2.style.opacity=1;
img3.style.opacity=1;
img4.style.opacity=1;
img5.style.opacity=1;
img6.style.opacity=1;

await sleep(800);


img1.style.opacity=1;
img2.style.opacity=1;
img3.style.opacity=1;
img4.style.opacity=1;
img5.style.opacity=1;
img6.style.opacity=1;


//my magic

var stop=document.getElementById("stop");
stop.style.display="none";
}


function one()
{

var board1=document.getElementById("board1");
board1.style.display="block";
board1.style.opacity=1;

}
function oneout()
{

var board1=document.getElementById("board1");
board1.style.opacity=0;
board1.style.display="none";


}

function two()
{
   

var board2=document.getElementById("board2");
var support1=document.getElementById("support1");
board2.style.display="block";
support1.style.display="block";
board2.style.opacity=1;
support1.style.opacity=1;

}
function twoout()
{

var board2=document.getElementById("board2");
var support1=document.getElementById("support1");
board2.style.opacity=0;
support1.style.opacity=0;
board2.style.display="none";
support1.style.display="none";


}

function three()
{
   

var board3=document.getElementById("board3");
var support2=document.getElementById("support2");
board3.style.display="block";
support2.style.display="block";
board3.style.opacity=1;
support2.style.opacity=1;

}
function threeout()
{

var board3=document.getElementById("board3");
var support2=document.getElementById("support2");
board3.style.opacity=0;
support2.style.opacity=0;
board3.style.display="none";
support2.style.display="none";


}


function four()
{


var board4=document.getElementById("board4");
var support3=document.getElementById("support3");
board4.style.display="block";
support3.style.display="block";
board4.style.opacity=1;
support3.style.opacity=1;
}
function fourout()
{

var board4=document.getElementById("board4");
var support3=document.getElementById("support3");
board4.style.opacity=0;
support3.style.opacity=0;
board4.style.display="none";
support3.style.display="none";

}


function five()
{
   

var board5=document.getElementById("board5");
var support4=document.getElementById("support4");
board5.style.display="block";
support4.style.display="block";
board5.style.opacity=1;
support4.style.opacity=1;

}
function fiveout()
{

var board5=document.getElementById("board5");
var support4=document.getElementById("support4");
board5.style.opacity=0;
support4.style.opacity=0;
board5.style.display="none";
support4.style.display="none";



}


function six()
{
   

var board6=document.getElementById("board6");
board6.style.display="block";
board6.style.opacity=1;

}
function sixout()
{

var board6=document.getElementById("board6");
board6.style.opacity=0;
board6.style.display="none";


}