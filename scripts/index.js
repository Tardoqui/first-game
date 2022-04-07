const canvas = document.getElementById('game-screen');
const context = canvas.getContext("2d");
const canvas2 = document.getElementById('hits-and-score');
const context2 = canvas2.getContext("2d");


context2.fillStyle = "rgb(2, 42, 87)";
context2.fillRect(0, 0, canvas2.width, canvas2.height);


text2('  Press the keyboard arrows: ', '20px Comic Sans MS', 5, 30, 'white');
text2('↑ up, ↓ down, → right and ← left', '18px Comic Sans MS', 5, 60, 'white')
text2('           to move the player. ', '18px Comic Sans MS', 5, 90, 'white')
text2('  To win the game you must avoid ', '18px Comic Sans MS', 5, 130, 'white')
text2('     the enemies for 60 seconds', '18px Comic Sans MS', 5, 160, 'white')
text2(" LET'S PLAY", '45px Comic Sans MS', 5, 250, 'white')


let playerXPosition = 500;
let playerYPosition = 300;       
let playerRadius = 30; 
let playerSpeed = 6;

let enemy1XPosition = 9;
let enemy1YPosition = 9;
let enemy1Radius = 10;
let enemy1Speed = 6;

let enemy2XPosition = 690;
let enemy2YPosition = 9;
let enemy2Radius = 10;
let enemy2Speed = 7;

let enemy3XPosition = 29;
let enemy3YPosition = 9;
let enemy3Radius = 10;
let enemy3Speed = 8;

let enemy4XPosition = 9;
let enemy4YPosition = 39;
let enemy4Radius = 10;
let enemy4Speed = 8;

let enemy5XPosition = 9;
let enemy5YPosition = 290;
let enemy5Radius = 10;
let enemy5Speed = 7;

let enemy6XPosition = 9;
let enemy6YPosition = 140;
let enemy6Radius = 10;
let enemy6Speed = 6;

let enemy7XPosition = 159;
let enemy7YPosition = 9;
let enemy7Radius = 10;
let enemy7Speed = 5;

let enemy8XPosition = 9;
let enemy8YPosition = 240;
let enemy8Radius = 10;
let enemy8Speed = 5;

let upArrow = false;
let downArrow = false;
let rightArrow = false;
let leftArrow = false;

let timeCounter = 0;

function startGame(){
requestAnimationFrame(startGame);  
if(timeCounter <= 60) {
  timeCounter += 1/60;
} else {
  alert('Congratulations, you won the game!!');
} 
imgIteration()
startChracter()
startEnemie1()
startEnemie2()
startEnemie3()
startEnemie4()
startEnemie5()
startEnemie6()
startEnemie7()
startEnemie8()
arrows()
screenLimit()

}
function screenLimit (){
    if (playerYPosition < playerRadius){
      playerYPosition = playerRadius
    }
    if (playerYPosition > canvas.height - playerRadius){
      playerYPosition = canvas.height - playerRadius;
    }
    if (playerXPosition < playerRadius){
      playerXPosition = playerRadius;
    }
    if (playerXPosition > canvas.width - playerRadius){
      playerXPosition = canvas.width - playerRadius;
    }
}
function arrows () {
  if (upArrow) {
    playerYPosition = playerYPosition - playerSpeed;
  }
  if (downArrow) {
    playerYPosition = playerYPosition + playerSpeed;
  }
  if (leftArrow) {
    playerXPosition = playerXPosition - playerSpeed;
  }
  if (rightArrow) {
    playerXPosition = playerXPosition + playerSpeed;
  }
}
function imgIteration(){
    
  context.fillStyle = "rgb(2, 42, 87)";
  context.fillRect(0, 0, canvas.width, canvas.height);
  text('Time: ' + Math.floor(timeCounter), '35px Comic Sans MS', 6, 35, 'white');
    
}
function startChracter(){

  context.fillStyle = "white";
  context.beginPath();
  context.arc(playerXPosition, playerYPosition  , playerRadius,0, Math.PI * 2);
  context.fill();
}
function startEnemie1() {

  context.fillStyle = "green";
  context.beginPath();
  context.arc(enemy1XPosition, enemy1YPosition, enemy1Radius,0, Math.PI * 2,);
  context.fill(); 
  enemyMove();
  let dx = enemy1XPosition - playerXPosition;
  let dy = enemy1YPosition - playerYPosition;
  let distance = Math.sqrt(dx * dx + dy * dy);
  let sumRadius = playerRadius + enemy1Radius;

  if ( distance < sumRadius) {
    playerXPosition = 500;
    playerYPosition = 300;
    enemy1XPosition = 9;
    enemy1YPosition = 9;
    timeCounter = 0;
  }
  
}
function startEnemie2 () {

  context.fillStyle = "green";
  context.beginPath();
  context.arc(enemy2XPosition, enemy2YPosition, enemy2Radius,0, Math.PI * 2);
  context.fill(); 
  enemy2Move();   
  let dx = enemy2XPosition - playerXPosition;
  let dy = enemy2YPosition - playerYPosition;
  let distance = Math.sqrt(dx * dx + dy * dy);
  let sumRadius = playerRadius + enemy2Radius;

  if ( distance < sumRadius) {
    playerXPosition = 500;
    playerYPosition = 300;
    timeCounter = 0;
  }   
}  

function startEnemie3 () {
  context.fillStyle = "green";
  context.beginPath();
  context.arc(enemy3XPosition, enemy3YPosition, enemy3Radius,0, Math.PI * 2);
  context.fill(); 
  enemy3Move();
  let dx = enemy3XPosition - playerXPosition;
  let dy = enemy3YPosition - playerYPosition;
  let distance = Math.sqrt(dx * dx + dy * dy);
  let sumRadius = playerRadius + enemy3Radius;

  if ( distance < sumRadius) {
    playerXPosition = 500;
    playerYPosition = 300;
    timeCounter = 0;
  }
}    
function startEnemie4(){
  context.fillStyle = "yellow";
  context.beginPath();
  context.arc(enemy4XPosition, enemy4YPosition, enemy4Radius,0, Math.PI * 2);
  context.fill();
  enemy4Move();  
  let dx = enemy4XPosition - playerXPosition;
  let dy = enemy4YPosition - playerYPosition;
  let distance = Math.sqrt(dx * dx + dy * dy);
  let sumRadius = playerRadius + enemy4Radius;

  if ( distance < sumRadius) {
    playerXPosition = 500;
    playerYPosition = 300;
    timeCounter = 0;
  }   
}
function startEnemie5() {
  context.fillStyle = "yellow";
  context.beginPath();
  context.arc(enemy5XPosition, enemy5YPosition, enemy5Radius,0, Math.PI * 2);
  context.fill();
  enemy5Move();  
  let dx = enemy5XPosition - playerXPosition;
  let dy = enemy5YPosition - playerYPosition;
  let distance = Math.sqrt(dx * dx + dy * dy);
  let sumRadius = playerRadius + enemy5Radius;

  if ( distance < sumRadius) {
    playerXPosition = 500;
    playerYPosition = 300;
    timeCounter = 0;
  }
}
function startEnemie6(){
  context.fillStyle = "yellow";
  context.beginPath();
  context.arc(enemy6XPosition, enemy6YPosition, enemy6Radius,0, Math.PI * 2);
  context.fill();
  enemy6Move();  
  let dx = enemy6XPosition - playerXPosition;
  let dy = enemy6YPosition - playerYPosition;
  let distance = Math.sqrt(dx * dx + dy * dy);
  let sumRadius = playerRadius + enemy6Radius;

  if ( distance < sumRadius) {
    playerXPosition = 500;
    playerYPosition = 300;
    timeCounter = 0;
  }

}
function startEnemie7(){
  context.fillStyle = "green";
  context.beginPath();
  context.arc(enemy7XPosition, enemy7YPosition, enemy7Radius,0, Math.PI * 2,);
  context.fill(); 
  enemy7Move();
  let dx = enemy7XPosition - playerXPosition;
  let dy = enemy7YPosition - playerYPosition;
  let distance = Math.sqrt(dx * dx + dy * dy);
  let sumRadius = playerRadius + enemy7Radius;

  if ( distance < sumRadius) {
    playerXPosition = 500;
    playerYPosition = 300;
    timeCounter = 0;
  }
  
}
function startEnemie8(){
  context.fillStyle = "yellow";
  context.beginPath();
  context.arc(enemy8XPosition, enemy8YPosition, enemy8Radius,0, Math.PI * 2,);
  context.fill(); 
  enemy8Move();
  let dx = enemy8XPosition - playerXPosition;
  let dy = enemy8YPosition - playerYPosition;
  let distance = Math.sqrt(dx * dx + dy * dy);
  let sumRadius = playerRadius + enemy8Radius;

  if ( distance < sumRadius) {
    playerXPosition = 500;
    playerYPosition = 300;
    timeCounter = 0;
  }
  
}

function startEndGame(){
  context.fillStyle = "black";
  context.fillRect(10, 10, 400, 400);
  text('ffaefaefefe', '350px Comic Sans MS', 6, 35, 'white');

}
function enemyMove() {
  enemy1YPosition += enemy1Speed;
  if (enemy1YPosition > canvas.height){
    enemy1YPosition = 0 - enemy1Radius;
    enemy1XPosition = Math.floor(Math.random() * (canvas.width - enemy1Radius));
  }
  
}

function enemy2Move() {
  enemy2YPosition += enemy2Speed;
  if (enemy2YPosition > canvas.height){
    enemy2YPosition = 0 - enemy2Radius;
    enemy2XPosition = Math.floor(Math.random() * (canvas.width - enemy2Radius));
  }
}
function enemy3Move() {
  enemy3YPosition += enemy3Speed;
  if (enemy3YPosition > canvas.width){
    enemy3YPosition = 0 - enemy3Radius;
    enemy3XPosition = Math.floor(Math.random() * (canvas.height - enemy3Radius));
  }
}
function enemy4Move() {
  enemy4XPosition += enemy4Speed;
  if (enemy4XPosition > canvas.width){
    enemy4XPosition = 0 - enemy4Radius;
    enemy4YPosition = Math.floor(Math.random() * (canvas.height - enemy4Radius));
  }
}
function enemy5Move(){
  enemy5XPosition += enemy5Speed;
  if (enemy5XPosition > canvas.width){
    enemy5XPosition = 0 - enemy5Radius;
    enemy5YPosition = Math.floor(Math.random() * (canvas.height - enemy5Radius));
  }
}
function enemy6Move(){
  enemy6XPosition += enemy6Speed;
  if (enemy6XPosition > canvas.width){
    enemy6XPosition = 0 - enemy4Radius;
    enemy6YPosition = Math.floor(Math.random() * (canvas.height - enemy6Radius));
  }
}
function enemy7Move() {
  enemy7YPosition += enemy7Speed;
  if (enemy7YPosition > canvas.height){
    enemy7YPosition = 0 - enemy7Radius;
    enemy7XPosition = Math.floor(Math.random() * (canvas.width - enemy7Radius));
  }
  
}
function enemy8Move() {
  enemy8XPosition += enemy4Speed;
  if (enemy8XPosition > canvas.width){
    enemy8XPosition = 0 - enemy8Radius;
    enemy8YPosition = Math.floor(Math.random() * (canvas.height - enemy8Radius));
  }
}
function keyDown (event) {
    
    if (event.keyCode === 38) {
      upArrow = true;
    }
    if (event.keyCode === 40) {
      downArrow = true;
    }  
    if (event.keyCode === 37) {
      leftArrow = true;
    }   
    if (event.keyCode === 39) {
      rightArrow = true;
    }
}  
function keyUp (event) {
    
  if (event.keyCode === 38) {
     upArrow = false;
  }
  if (event.keyCode === 40) {
    downArrow = false;
  }    
  if (event.keyCode === 37) {
    leftArrow = false;
  }   
  if (event.keyCode === 39) {
    rightArrow = false;
  }
}
function text (txt, fnt, x, y, c) {
  context.fillStyle = c;
  context.font = fnt;
  context.fillText(txt, x, y);
}
function text2 (txt, fnt, x, y, c) {
  context2.fillStyle = c;
  context2.font = fnt;
  context2.fillText(txt, x, y);
}
function setStartButton (){
  startGame();
}
 
let startButton = document.getElementById('start-button')

document.body.addEventListener('keyup', keyUp);
document.body.addEventListener('keydown', keyDown);

startButton.addEventListener('click', () => {
  setStartButton ();
});



imgIteration()
