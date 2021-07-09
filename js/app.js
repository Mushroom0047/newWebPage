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