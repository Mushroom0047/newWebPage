//!Navbar
const btnHam = document.querySelector('.nav-hamburger');
btnHam.addEventListener('click', openMenu);

function openMenu(){
    let menuHam = document.querySelector('#nav-menu');
    if (menuHam.className === "nav-menu") {
        menuHam.className += " responsive";
    } else {
        menuHam.className = "nav-menu";
    }
}

//up effect
window.onscroll = ()=>{
    if(document.documentElement.scrollTop > 100){
        document.querySelector('.up-div').classList.add('show');
    }else{
        document.querySelector('.up-div').classList.remove('show');
    }
}

document.querySelector('.up-div').addEventListener('click', ()=>{
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

function onSubmit(token) {
  document.getElementById("contact-form").submit();
}

let buttonShowJS = document.querySelector('.btn__show__js');
let boxJsCode = document.querySelector('.flexbox-js');

let stateDiv = 0;
buttonShowJS.addEventListener("click", () => {
    switch(stateDiv){
        case 0:
            stateDiv = 1;
            boxJsCode.classList.add("show");
            boxJsCode.classList.remove("hide");
            break;
        case 1:
            stateDiv = 0;
            boxJsCode.classList.add("hide");
            boxJsCode.classList.remove("show");
            break;
    }
});

