//counter
const divCounterCode = document.querySelector('.div-counter-code');
let btnShowCounterCode = document.querySelector('.btn-counter-code');

btnShowCounterCode.addEventListener('click', ()=>{
    if(btnShowCounterCode.value == "Mostrar código"){
        divCounterCode.style.display = 'block';
        btnShowCounterCode.value = 'Ocultar código';
        changeColorBtn(true, btnShowCounterCode);
    }else{
        divCounterCode.style.display = 'none';
        btnShowCounterCode.value = 'Mostrar código';
        changeColorBtn(false, btnShowCounterCode);
    }
    
});

// Todo
const divTodoCode = document.querySelector('.div-todo-code');
let btnShowTodoCode = document.querySelector('.btn-todo-code');

btnShowTodoCode.addEventListener('click', ()=>{
    if(btnShowTodoCode.value == "Mostrar código"){
        divTodoCode.style.display = 'block';
        btnShowTodoCode.value = 'Ocultar código';
        changeColorBtn(true, btnShowTodoCode);
    }else{
        divTodoCode.style.display = 'none';
        btnShowTodoCode.value = 'Mostrar código';
        changeColorBtn(false, btnShowTodoCode);
    }
    
});

// Pomodoro
const divPomCode = document.querySelector('.div-pom-code');
let btnShowPomCode = document.querySelector('.btn-pom-code');

btnShowPomCode.addEventListener('click', ()=>{
    if(btnShowPomCode.value == "Mostrar código"){
        divPomCode.style.display = 'block';
        btnShowPomCode.value = 'Ocultar código';
        changeColorBtn(true, btnShowPomCode);
    }else{
        divPomCode.style.display = 'none';
        btnShowPomCode.value = 'Mostrar código';
        changeColorBtn(false, btnShowPomCode);
    }
    
});
// rock paper scissor
const divRpsCode = document.querySelector('.div-rps-code');
let btnShowRpsCode = document.querySelector('.btn-rps-code');

btnShowRpsCode.addEventListener('click', ()=>{
    if(btnShowRpsCode.value == "Mostrar código"){
        divRpsCode.style.display = 'block';
        btnShowRpsCode.value = 'Ocultar código';
        changeColorBtn(true, btnShowRpsCode);
    }else{
        divRpsCode.style.display = 'none';
        btnShowRpsCode.value = 'Mostrar código';
        changeColorBtn(false, btnShowRpsCode);
    }
    
});

// Function change color of buttom
function changeColorBtn(type, button) {
    if(type){
        button.classList.remove("btn-yellow");
        button.classList.add("btn-red");
    }else{
        button.classList.add("btn-yellow");
        button.classList.remove("btn-red");
    }
}