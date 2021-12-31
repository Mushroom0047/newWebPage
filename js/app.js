//Animation of typewriter
const tittleName = document.querySelector('.typewriter');
let nombre = 'Mi nombre es Héctor ';
let indice = 0;
var intervalStart;
var intervalOp;

window.setTimeout(intervalWrite, 1400);

function intervalWrite(){
    intervalStart =  window.setInterval(()=>{
        write();
    }, 120);     
}
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
window.onload = ()=>{
    window.setTimeout(loading, 1300);

function loading(){
    let loading = document.querySelector('.loading');
    let i = 10;
    intervalOp = window.setInterval(()=>{
        loading.style.opacity = i / 10;
        i--;
        if(i <= 0){
            loading.style.display = 'none';
            clearInterval(intervalOp);
        }
    }, 40);
    
};
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

//Change the envelope 
let envelope = document.querySelector('.sobre-icono');
envelope.addEventListener('mouseenter', ()=>{
    if(envelope.classList.contains('fa-envelope')){
        envelope.classList.replace('fa-envelope', 'fa-envelope-open');
    }
});
envelope.addEventListener('mouseleave', ()=>{
    if(envelope.classList.contains('fa-envelope-open')){
        envelope.classList.replace('fa-envelope-open','fa-envelope');
    }
});