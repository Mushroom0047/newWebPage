//!Poke API
var selectPokemones = document.querySelector('#pokeLista');
// Call th function
window.onload = ()=>{
  call_pokeAPi()
} 

// Fill the pokemons name
function call_pokeAPi(){
  fetch('https://pokeapi.co/api/v2/pokemon?limit=150')
  .then(response => response.json())
  .then(json => {
    var pokeCount = 150;  
    for(var i=0;i<pokeCount;i++){      
      var pokeName = json['results'][i]['name'];
      createElement(pokeName);
    }       
  })
}

function createElement(pokeName){
  var newOption = document.createElement("option");
  var pokeOption = document.createTextNode(pokeName);
  newOption.appendChild(pokeOption);
  newOption.value = pokeName;
  selectPokemones.appendChild(newOption);
}

// Buscar poke foto
const searchButton = document.querySelector('.btn-buscar');
searchButton.addEventListener('click', buscarPoke);

function buscarPoke(){    
  var attributtes = [];

// Eliminar td repetidos
  if(selectPokemones.value != 'Seleccione'){
    fetch('https://pokeapi.co/api/v2/pokemon/'+selectPokemones.value)
    .then(response => response.json())
    .then(json =>{      
      document.querySelector('.poke-img').src = json['sprites']['other']['official-artwork']['front_default'];
      attributtes[0] = json['types'][0]['type']['name'];//tipo
      attributtes[1] = json['stats'][0]['base_stat'];//hp
      attributtes[2] = json['stats'][1]['base_stat'];//atk
      attributtes[3] = json['stats'][2]['base_stat'];//def
      attributtes[4] = json['stats'][3]['base_stat'];//atk esp
      attributtes[5] = json['stats'][4]['base_stat'];//def esp
      attributtes[6] = json['stats'][5]['base_stat'];//vel
      attributtes[7] = json['weight'];//peso
      // Fill table      
      document.querySelector('#tipo').innerHTML = attributtes[0];            
      document.querySelector('#hp').innerHTML = attributtes[1];    
      document.querySelector('#atk').innerHTML = attributtes[2];    
      document.querySelector('#def').innerHTML = attributtes[3];    
      document.querySelector('#atkEsp').innerHTML = attributtes[4];    
      document.querySelector('#defEsp').innerHTML = attributtes[5];    
      document.querySelector('#vel').innerHTML = attributtes[6];    
      document.querySelector('#peso').innerHTML = attributtes[7];                 
    })
  }
}
