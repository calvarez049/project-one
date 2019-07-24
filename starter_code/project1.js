let currentGame;
let currentSnake;
let currentFood;
// let speed = 0;

// document.getElementById("game-board").style.display = "none";
const canvas = document.getElementById('snake-game');
const ctx = canvas.getContext('2d');
const canvasW = ctx.canvas.width;
const canvasH = ctx.canvas.height;

class Game {
    constructor(){
      this.snake = {}; 
      this.food = updateFood(); 
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

    drawSnake(x ,y, width, height){
        // const snakeImg = new Image();
        // snakeImg.src = this.img;
        ctx.fillStyle = "green";
        ctx.fillRect(this.x , this.y, this.width, this.height);
    }

    moveSnake(){
        console.log('moving')
        if(this.direction == 'left'){
            this.x -= 5;
        }
        if(this.direction == 'right'){
            this.x += 5;
        }
        if(this.direction == 'up'){
            this.y -= 15;
        }
        if(this.direction == 'down'){
            this.y += 15;
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
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.width = 60;
        this.height = 75;
        this.img = './images/burger-4286223_640.png';
    }

    drawFood() {
        const foodImage = new Image();
        foodImage.src = this.img;
        ctx.drawImage(foodImage, this.x, this.y, this.width, this.height);
    }

    getLeft(){
        return this.x;
    }
    getRight(){
        return this.x + this.width;
    }
    getTop(){
        return this.y;
    }
    getBottom(){
        return this.y + this.height;
    }
}
document.onkeydown = function(e){
    // console.log(e);
    let movingSomewhere = e.keyCode;
    currentSnake.controllingSnake(movingSomewhere);
}


function detectCanvasCollision() {
    if (currentSnake.x <= 0 || currentSnake.y <= 0 || currentSnake.x >= canvasW || currentSnake.y >= canvasH){
        alert("YOU LOSE!");
        window.location.reload();
    } 
}

function detectFoodCollision(currentFood, currentSnake){
    if(currentFood.x < currentSnake.x + currentSnake.width &&
        currentFood.x + currentFood.width > currentSnake.x &&
        currentFood.y < currentSnake.y + currentSnake.height &&
        currentFood.y + currentFood.height > currentSnake.y){
                currentGame.food = updateFood();
                currentGame.score += 1;
                document.getElementById("score").innerHTML = currentGame.score;
                currentSnake.drawSnake(currentSnake.x, currentSnake.y,currentSnake.width + 30, currentSnake.height +30);
    }
}

function clearCanvas() {
    ctx.clearRect(0,0, canvas.width, canvas.height);
}

function updateFood(){
    let randomFoodX = Math.floor(Math.random()* 800);
    let randomFoodY = Math.floor(Math.random()* 500);
    return new Food(randomFoodX, randomFoodY);
}

document.getElementById("start-button").onclick = function() {
    startGame();
    document.getElementById("start-button").onclick =null;
};

currentSnake = new Snake();
document.getElementById("game-board").style.display = "block";
currentGame = new Game();
currentGame.snake = currentSnake;
currentGame.score = 0;

function startGame(){
    clearCanvas();
    currentGame.snake.moveSnake();
    currentGame.snake.drawSnake();
    detectCanvasCollision()
    currentGame.food.drawFood();
    detectFoodCollision(currentGame.food, currentSnake)
    
    window.requestAnimationFrame(startGame); // same as startGame();  
}

// startGame();

