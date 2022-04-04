const canvas = document.getElementById('game-screen');
const context = canvas.getContext("2d");

let playerXPosition = 100;
let playerYPosition = 100;
let playerRadius = 30; 
let playerSpeed = 5;

let enemy1XPosition = 9;
let enemy1YPosition = 9;
let enemy1Radius = 10;
let enemy1Speed = 5;

let enemy2XPosition = 690;
let enemy2YPosition = 19;
let enemy2Radius = 10;
let enemy2Speed = 5;

let enemy3XPosition = 9;
let enemy3YPosition = 290;
let enemy3Radius = 10;
let enemy3Speed = 5;

let enemy4XPosition = 9;
let enemy4YPosition = 39;
let enemy4Radius = 10;
let enemy4Speed = 5;


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
}
function startEnemie2 () {

  context.fillStyle = "green";
  context.beginPath();
  context.arc(enemy2XPosition, enemy2YPosition, enemy2Radius,0, Math.PI * 2);
  context.fill(); 
  enemy2Move();   
}  

function startEnemie3 () {
  context.fillStyle = "blue";
  context.beginPath();
  context.arc(enemy3XPosition, enemy3YPosition, enemy3Radius,0, Math.PI * 2);
  context.fill(); 
  enemy3Move();
}    
function startEnemie4(){
  context.fillStyle = "blue";
  context.beginPath();
  context.arc(enemy4XPosition, enemy4YPosition, enemy4Radius,0, Math.PI * 2);
  context.fill();
  enemy4Move();  
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
  enemy3XPosition += enemy3Speed;

  if (enemy3XPosition > canvas.width){
    enemy3XPosition = 0 - enemy3Radius;
    enemy3YPosition = Math.floor(Math.random() * (canvas.height - enemy3Radius));
  }
}
function enemy4Move() {
  enemy4XPosition += enemy4Speed;

  if (enemy4XPosition > canvas.width){
    enemy4XPosition = 0 - enemy4Radius;
    enemy4YPosition = Math.floor(Math.random() * (canvas.height - enemy4Radius));
  }
}


document.body.addEventListener('keyup', keyUp);
document.body.addEventListener('keydown', keyDown);


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

    
  startGame();  