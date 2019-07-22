let currentGame;
let currentSnake;
let speed = 0;

// document.getElementById("game-board").style.display = "none";
const canvas = document.getElementById('snake-game');
const ctx = canvas.getContext('2d');
const canvasW = ctx.canvas.width;
const canvasH = ctx.canvas.height;

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
        ctx.fillStyle = "green";
        ctx.fillRect(this.x , this.y, this.width, this.height);
    }

    moveSnake(){
        console.log('moving')
        if(this.direction == 'left'){
            this.x -= 3;
        }
        if(this.direction == 'right'){
            this.x += 3;
        }
        if(this.direction == 'up'){
            this.y -= 3;
        }
        if(this.direction == 'down'){
            this.y += 3;
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

class Food {
    constructor(){
        this.x = x;
        this.y = y;
        this.width = 20;
        this.height = 30;
        this.img = './images/burger-4286223_640.png';
    }

    drawFood() {
        const foodImage = new Image();
        foodImage.src = this.img;
        ctx.drawImage(foodImage, this.x, this.y, this.width, this.height);
    }

    // getLeft() {
    //     return this
    // }
}
document.onkeydown = function(e){
    // console.log(e);
    let movingSomewhere = e.keyCode;
    currentSnake.controllingSnake(movingSomewhere);
}


function detectCanvasCollision() {
    if (currentSnake.x <= 0 || currentSnake.y <= 0){
        alert("YOU LOSE!");
    } else if (currentSnake.x >= canvasW || currentSnake.y >= canvasH){
        alert("YOU LOSE!");
    }
    // || currentSnake.y
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
console.log(canvasW,canvasH);

function startGame(){
    clearCanvas();
    currentGame.snake.moveSnake();
    currentGame.snake.drawSnake();
    console.log(currentSnake.y)
    // currentSnake.controllingSnake(movingSomewhere);
    detectCanvasCollision();
    window.requestAnimationFrame(startGame);
    //startGame();
}

