//Animation of typewriter
const tittleName = document.querySelector('.typewriter');
let nombre = 'Mi nombre es Héctor ';
let indice = 0;

window.setTimeout(()=>{
    window.setInterval(()=>{
        write();
    }, 120);     
}, 1400);

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


//Loader page
window.setTimeout(loading, 1300);

function loading(){
    let loading = document.querySelector('.loading');
    let i = 10;
    window.setInterval(()=>{
        loading.style.opacity = i / 10;
        i--;
        if(i <= 0){
            loading.style.display = 'none';
        }
    }, 40);
    
};
