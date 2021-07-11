//Animation of typewriter
const tittleName = document.querySelector('.typewriter');
let nombre = 'Mi nombre es Héctor ';
let indice = 0;

var intervalStart = window.setInterval(()=>{
    write();
}, 120); 

function write(){    
    if(indice < nombre.length){
        tittleName.innerHTML += nombre.charAt(indice);        
        indice++;
    }else{
        clearInterval(intervalStart);     
    }
}
// Navbar
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

// Knowledge bar
let item1 = document.querySelector('.progress-bar-12').style.width = '50%';
let item2 = document.querySelector('.progress-bar-13').style.width = '80%';
let item3 = document.querySelector('.progress-bar-14').style.width = '50%';
let item4 = document.querySelector('.progress-bar-15').style.width = '50%';
let item5 = document.querySelector('.progress-bar-16').style.width = '90%';
let item6 = document.querySelector('.progress-bar-17').style.width = '40%';
let item7 = document.querySelector('.progress-bar-18').style.width = '90%';
let item8 = document.querySelector('.progress-bar-19').style.width = '10%';
let item9 = document.querySelector('.progress-bar-20').style.width = '30%';
let item10 = document.querySelector('.progress-bar-21').style.width = '10%';
let item11 = document.querySelector('.progress-bar-22').style.width = '30%';