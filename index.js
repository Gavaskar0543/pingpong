//player1 
var player1 = document.getElementById('player1');
var ball = document.getElementById('ball');
var player2 = document.getElementById('player2');
/* score*/
var currentScore = 0;
/* `localStorage =>key : pair so here we setting the items */
localStorage.setItem('currentScore',currentScore);
/*page loading. */
window.onload = ()=>{
   let score = localStorage.getItem('currentScore');
  // alert(`max Score is :${score}`);
}
// _joyStick operation
function playerWallMover(_joyStick){
    let player1pos = player1.getBoundingClientRect();
let player2pos = player2.getBoundingClientRect();
let ballpos = ball.getBoundingClientRect();


let border = document.getElementById('controler');
let borderpos = border.getBoundingClientRect();
let maxwidth =  borderpos.width-player1pos.width-10;
Math.round(maxwidth);
console.log(maxwidth);
var speed =10;
  if(_joyStick == 'ArrowRight'){
    //player1
      console.log(player1pos.x,maxwidth);
      if(player1pos.x < maxwidth){
      player1.style.left = (player1pos.x +20) + 'px';
      }
      
      //player2
      if(player1pos.x < maxwidth){
        player2.style.left = (player2pos.x +20) + 'px';
      }
}
  else if(_joyStick == 'ArrowLeft'){
   //player1
    if(player1pos.x > 2){
    player1.style.left = (player1pos.x -20) + 'px';
    }
    //player2
    if(player2pos.x > 2){
      player2.style.left = (player2pos.x -20) + 'px';
      }
  }
  
}


 

//playground - handler 
document.addEventListener('keydown',function(event){
    let value = event.key;
   playerWallMover(value);
})