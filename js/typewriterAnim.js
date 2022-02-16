//!Animation of typewriter
const tittleName = document.querySelector('.typewriter');
let nombre = 'Mi nombre es Héctor ';
let indice = 0;
let intervalStart;
let intervalOp;

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
