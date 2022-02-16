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