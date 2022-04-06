const canvas = document.getElementById('game-screen');
const context = canvas.getContext("2d");
const canvas2 = document.getElementById('hits-and-score');
const context2 = canvas2.getContext("2d");



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
let enemy3Speed = 5;

let enemy4XPosition = 9;
let enemy4YPosition = 39;
let enemy4Radius = 10;
let enemy4Speed = 5;

let enemy5XPosition = 9;
let enemy5YPosition = 290;
let enemy5Radius = 10;
let enemy5Speed = 7;

let enemy6XPosition = 9;
let enemy6YPosition = 140;
let enemy6Radius = 10;
let enemy6Speed = 6;



let upArrow = false;
let downArrow = false;
let rightArrow = false;
let leftArrow = false;

function startGame(){
requestAnimationFrame(startGame);    
imgIteration()
startChracter()
startEnemie1()
startEnemie2()
startEnemie3()
startEnemie4()
startEnemie5()
startEnemie6()
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
    context2.fillStyle = "rgb(51, 48, 48)";
    context2.fillRect(0, 0, canvas2.width, canvas2.height);
    context.fillStyle = "rgb(51, 48, 48)";
    context.fillRect(0, 0, canvas.width, canvas.height);
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
    console.log('Você perdeu!');
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
    console.log('Você perdeu!');
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
    console.log('Você perdeu!');
  }
}    
function startEnemie4(){
  context.fillStyle = "blue";
  context.beginPath();
  context.arc(enemy4XPosition, enemy4YPosition, enemy4Radius,0, Math.PI * 2);
  context.fill();
  enemy4Move();  
  let dx = enemy4XPosition - playerXPosition;
  let dy = enemy4YPosition - playerYPosition;
  let distance = Math.sqrt(dx * dx + dy * dy);
  let sumRadius = playerRadius + enemy4Radius;

  if ( distance < sumRadius) {
    console.log('Você perdeu!');
  }   
}
function startEnemie5() {
  context.fillStyle = "blue";
  context.beginPath();
  context.arc(enemy5XPosition, enemy5YPosition, enemy5Radius,0, Math.PI * 2);
  context.fill();
  enemy5Move();  
  let dx = enemy5XPosition - playerXPosition;
  let dy = enemy5YPosition - playerYPosition;
  let distance = Math.sqrt(dx * dx + dy * dy);
  let sumRadius = playerRadius + enemy5Radius;

  if ( distance < sumRadius) {
    console.log('Você perdeu!');
  }
}
function startEnemie6(){
  context.fillStyle = "blue";
  context.beginPath();
  context.arc(enemy6XPosition, enemy6YPosition, enemy6Radius,0, Math.PI * 2);
  context.fill();
  enemy6Move();  
  let dx = enemy6XPosition - playerXPosition;
  let dy = enemy6YPosition - playerYPosition;
  let distance = Math.sqrt(dx * dx + dy * dy);
  let sumRadius = playerRadius + enemy6Radius;

  if ( distance < sumRadius) {
    console.log('Você perdeu!');
  }

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
function setStartButton (){
  startGame();
}

function setResetButton(){
  resetGame();
}
 

let startButton = document.getElementById('start-button')
let resetButton = document.getElementById('reset-button')

document.body.addEventListener('keyup', keyUp);
document.body.addEventListener('keydown', keyDown);

startButton.addEventListener('click', () => {
  setStartButton ();
});

resetButton.addEventListener('click', () => {

});

imgIteration()
