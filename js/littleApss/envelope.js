//!Change the envelope 
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
