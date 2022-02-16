//Variables
let textFromTA = document.getElementById("text_area_conversor");
let buttonLowerCase = document.getElementById("minusculas");
let buttonUpperCase = document.getElementById("mayusculas");
let buttonClear = document.getElementById("limpiar_texto");
let replaceText = "";
//check button
    //Converter to lowercase
    buttonLowerCase.addEventListener('click', ()=>{
        replaceText = textFromTA.value;
        if(replaceText.length > 0){
            let str = replaceText.toLocaleLowerCase();
            textFromTA.value = str;
        }
    })

    //Converter to uppercase
    buttonUpperCase.addEventListener('click', ()=>{
        replaceText = textFromTA.value;
        if(replaceText.length > 0){
            let str = replaceText.toLocaleUpperCase();
            textFromTA.value = str;
        }
    })
    //Clear text
    buttonClear.addEventListener('click', ()=>{
        textFromTA.value = "";
    })