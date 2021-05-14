//! for responsive hamburger icon

let hamburger = document.querySelector("#hamburger");
let nav_words_list = document.querySelectorAll(".nav-words");
let altCheck = 0;
let nav_home_close = document.querySelector("#nav-ham-close");
let header = document.querySelector('header');
hamburger.addEventListener('click',()=>{
    header.classList.toggle("scrolling-active");
    for(let i = 0;i<nav_words_list.length;i++){
        nav_words_list[i].classList.toggle("nav-words");
    }
    if(altCheck === 0){
        nav_home_close.classList.replace("fa-bars","fa-times");
        altCheck += 1;
    }
    else{
        nav_home_close.classList.replace("fa-times","fa-bars");
        altCheck = 0;
    }

});