//!Loader page
window.onload = ()=>{
    let currentURL = window.location.pathname;
    console.log(currentURL);
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