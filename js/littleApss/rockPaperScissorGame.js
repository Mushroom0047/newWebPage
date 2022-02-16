// !game rock paper scissor
// *Variables
const img_rock = "https://img.icons8.com/color/96/000000/hand-rock.png"
const img_paper = "https://img.icons8.com/color/96/000000/hand-cursor.png"
const img_scissor = "https://img.icons8.com/color/96/000000/hand-peace--v2.png"
let score_total = 0;
let enemy_choice_number;
let player_choice_number;

const sound_win = new Audio('/img/sounds/bling.ogg');
const sound_loose = new Audio('/img/sounds/hurt.ogg');
const sound_tie = new Audio('/img/sounds/arrow_hit.ogg');

// *Calls
let div_choice = document.querySelector('.rps__my-choice');
let result_battle = document.querySelector('#rps__result__id');
let enemy_image = document.querySelector('#rps__enemy__id');
let score_span = document.querySelector('#rps__score');

// *APP
div_choice.addEventListener("click", (e) => {
  e.stopPropagation();
  // *instant events
  enemy_choice_number = enemy_choice();
  

  if (e.target.classList.contains("rps__img__rock")) {
    document.querySelector('.rps__img__rock').classList.add('rps__image__on');
    document.querySelector('.rps__img__paper').classList.remove('rps__image__on');
    document.querySelector('.rps__img__scissor').classList.remove('rps__image__on');
    player_choice_number = 1;
  }
  if (e.target.classList.contains("rps__img__paper")) {
    document.querySelector('.rps__img__rock').classList.remove('rps__image__on');
    document.querySelector('.rps__img__paper').classList.add('rps__image__on');
    document.querySelector('.rps__img__scissor').classList.remove('rps__image__on');
    
    player_choice_number = 2;
  }
  if (e.target.classList.contains("rps__img__scissor")) {
    document.querySelector('.rps__img__rock').classList.remove('rps__image__on');
    document.querySelector('.rps__img__paper').classList.remove('rps__image__on');
    document.querySelector('.rps__img__scissor').classList.add('rps__image__on');
    
    player_choice_number = 3;
  }

  switch(enemy_choice_number){
    case 1: enemy_image.setAttribute('src', img_rock);
    break;
    case 2: enemy_image.setAttribute('src', img_paper);
    break;
    case 3: enemy_image.setAttribute('src', img_scissor);
  }

  winner(enemy_choice_number, player_choice_number);
});

// *function to enemy
const enemy_choice = ()=>{
  let num_random = 0;
  do{
    num_random = Math.floor(Math.random()*10);
  }while(num_random > 3)
  if(num_random == 0)num_random++;
  return num_random;
}

// *function to calculete the winner
const winner = (enemy, player)=>{
  let result;
  switch((enemy - player)){
    case 0: result = "EMPATE";sound_tie.play();
    break;
    case -1: result = "GANAS";score_total++;sound_win.play();
    break;
    case -2: result = "PIERDES";score_total=0;sound_loose.play();
    break;
    case 1: result = "PIERDES";score_total=0;sound_loose.play();
    break;
    case 2: result = "GANAS";score_total++;sound_win.play();
    break;
  }
  score_span.textContent = score_total;
  result_battle.textContent = result;
}