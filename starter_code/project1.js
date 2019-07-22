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
        this.x = 0;
        this.y = 350;
        this.width = 30;
        this.height = 30;
        this.direction = 'right';
        // this.img = './images/head_right.png';
    }

    drawSnake(){
        // const snakeImg = new Image();
        // snakeImg.src = this.img;
        ctx.fillStyle = "red";
        ctx.fillRect(this.x , this.y, this.width, this.height);
    }

    moveSnake(){
        console.log('moving')
        if(this.direction == 'left'){
            this.x -= 1;
        }
        if(this.direction == 'right'){
            this.x += 1;
        }
        if(this.direction == 'up'){
            this.y -= 1;
        }
        if(this.direction == 'down'){
            this.y += 1;
        }
        
    }

    controllingSnake(num){
        //ctx.clearRect(0,0,canvas.width,canvas.height);
        switch(num){
            case 37: //left arrow key
                this.direction = 'left';
                console.log('left', currentGame.snake)
                // if(this.x > 0){
                //     this.x -= 10;
                // }
                break;

            case 38: //up arrow key
                this.direction = 'up';
                // if(this.y > 0){
                //     this.y -= 10;
                // }
                break;

            case 39: //right arrow key
                this.direction = 'right';
                // if(this.x < canvas.width){
                //     this.x += 10;
                // }    
                break;

            case 40: //down arrow key
                this.direction = 'down';
                // if(this.y < canvas.height){
                //     this.y += 10;             
                // }
                break;
        }
        

        //this.drawSnake();
    }
}
document.onkeydown = function(e){
    // console.log(e);
    let movingSomewhere = e.keyCode;
    currentSnake.controllingSnake(movingSomewhere);
}

function clearCanvas() {
    ctx.clearRect(0,0, canvas.width, canvas.height);
}

document.getElementById("start-button").onclick = function() {
    startGame();
};

currentSnake = new Snake();
document.getElementById("game-board").style.display = "block";
currentGame = new Game();
currentGame.snake = currentSnake;

function startGame(){
    console.log('loop')
    clearCanvas();
    currentGame.snake.moveSnake();
    currentGame.snake.drawSnake();
    // currentSnake.controllingSnake(movingSomewhere);
    
    window.requestAnimationFrame(startGame);
    //startGame();
    // console.log(currentSnake);
}


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