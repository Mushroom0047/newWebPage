// !Generate motivational quote
const btnGen = document.querySelector(".btn-gen");
let quote = document.querySelector(".frase-mot");
let author = document.querySelector(".author");
let valueToSearch = 1;

function generateQuote() {
  var value = Math.floor(Math.random() * 268 + 1);
  var result = value.toString();
  return result;
}
//Button to call function http
btnGen.addEventListener("click", call_fetch);

// Fetch function
function call_fetch(){
  let id = generateQuote(); 
  const url = 'https://hectorvaldesm.com/api/frases-motiv/'+id;
  
  fetch(url)
  .then(response => response.json())
  .then(json => {
    quote.innerHTML = '\"'+json[0].frase+'\"';
    author.innerHTML = json[0].autor;
  })
}
