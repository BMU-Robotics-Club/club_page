// !for toggling effect on hamburger icon

let hamburger = document.querySelector("#hamburger");
let nav_words_list = document.querySelectorAll(".nav-words");
let altCheck = 0;
let nav_ham_close = document.querySelector("#nav-ham-close");
hamburger.addEventListener('click',function(){
    for(let i = 0;i<nav_words_list.length;i++){
        nav_words_list[i].classList.toggle("nav-words");
    }
    if(altCheck === 0){
        nav_ham_close.classList.replace("fa-bars","fa-times");
        altCheck += 1;
    }
    else{
        nav_ham_close.classList.replace("fa-times","fa-bars");
        altCheck = 0;
    }
});