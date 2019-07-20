let currentGame;
let currentSnake;
let speed = 0;

// document.getElementById("game-board").style.display = "none";
const canvas = document.getElementById('snake-game');
const ctx = canvas.getContext('2d');

class Game {
    constructor(){
      this.snake = {}; 
      this.food = []; 
      this.score = 0;
    }
  }

class Snake {
    constructor(){
        this.x = 400;
        this.y = 300;
        this.width = 50;
        this.height = 50;
        // this.img = './images/head_right.png';
    }

    drawSnake(){
        // const snakeImg = new Image();
        // snakeImg.src = this.img;
        ctx.fillStyle = "red";
        ctx.fillRect(this.x , this.y, this.width, this.height);
    }

    moveSnake(){
        speed += 1;
        ctx.clearRect(this.x, this.y, this.width, this.height);
        ctx.fillRect(speed,this.y,this.width,this.height);
        window.requestAnimationFrame(moveSnake());
              
        // switch(num){

        // }
    }
    // window.requestAnimationFrame(moveSnake());


}
document.getElementById("start-button").onclick = function() {
    startGame();
  };

function startGame(){
    document.getElementById("game-board").style.display = "block";
    currentGame = new Game();
    currentSnake = new Snake();

    currentGame.snake = currentSnake;
    currentSnake.drawSnake();
    // console.log(currentSnake);
   // window.requestAnimationFrame(startGame);
}

// startGame();

// ctx.fillStyle ="red";
// ctx.fillRect(400,300,20,20);
// var speed1 = 0;

// function clearCanvas(){
//     ctx.clearRect(0,0,700,700);
// }

// function updateCanvas(){
//     speed1 += 1;
//     clearCanvas();
//     ctx.fillRect ( speed1,300,30,30);
//     window.requestAnimationFrame(updateCanvas);
// }

// window.requestAnimationFrame(updateCanvas);

// class Food{
//     constructor(x,y,width,height){
//         this.x = x;
//         this.y = y;
//         this.width = width;
//         this.height = height;
//     }
    
//     drawFood(){
         
//     }
// }








































// var bw = 800;
// var bh = 800;
// var p = 0;

// function drawBoard(){
//     ctx.beginPath();
//     for (var x = 0; x < bw; x += 40) {
//         ctx.moveTo(0 + x + p, p);
//         ctx.lineTo(0 + x + p, bh + p);
//         p = 10;
//     }

//     for (var x = 0; x < bh; x += 40) {
//         ctx.moveTo(p, 0 + x + p);
//         ctx.lineTo(bw + p, 0 + x + p);
//         p = 10;
//     }
//     ctx.strokeStyle = "black";
//     ctx.stroke();
//     ctx.closePath();
// }

// drawBoard();