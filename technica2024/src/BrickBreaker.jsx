
//import { useEffect } from 'react';

const BrickBreaker = () => {
    const bricks = [];

    const gameContainer = document.getElementById("game-container");

        // Define the dimensions and properties of the bricks
        const brickWidth = 50;
        const brickHeight = 20;
        const brickRows = 3;
        const brickCols = 8;

        // Initialize the game board with bricks
        
        for (let row = 0; row < brickRows; row++) {
            for (let col = 0; col < brickCols; col++) {
                const brick = document.createElement("div");
                brick.classList.add("brick");
                brick.style.width = `${brickWidth}px`;
                brick.style.height = `${brickHeight}px`;
                brick.style.top = `${row * brickHeight}px`;
                brick.style.left = `${col * brickWidth}px`;
                gameContainer.appendChild(brick);
                bricks.push(brick);
            }
        }


    // The rest of your game logic (e.g., updateGame function, event listeners) here
    let ballX = 200;
    let ballY = 300;
    let ballSpeedX = 5;
    let ballSpeedY = -5;
    let paddleX = 160;
    const updateGame = () => {

        

        const paddle = document.getElementById("paddle");
        const ball = document.getElementById("ball");


        // Move the ball
        ballX += ballSpeedX;
        ballY += ballSpeedY;
    
        // Check for collisions with walls
        if (ballX < 0 || ballX + 20 > 400) {
            ballSpeedX = -ballSpeedX;
        }
        if (ballY < 0) {
            ballSpeedY = -ballSpeedY;
        }
    
        // Check for collisions with paddle
        if (ballY + 20 >= 390 && ballX >= paddleX && ballX <= paddleX + 80) {
            ballSpeedY = -ballSpeedY;
        }
    
        // Check for collisions with bricks
        bricks.forEach((brick) => {
            if (brick.style.display !== 'none') {
                const brickRect = brick.getBoundingClientRect();
                const ballRect = ball.getBoundingClientRect();
                if (ballRect.right >= brickRect.left && ballRect.left <= brickRect.right &&
                    ballRect.bottom >= brickRect.top && ballRect.top <= brickRect.bottom) {
                    ballSpeedY = -ballSpeedY;
                    brick.style.display = 'none';
                }
            }
        });
    
        // Check for game over
        if (ballY > 400) {
            alert("Game Over");
            document.location.reload();
        }
    
        // Check for win condition (no visible bricks left)
        /*
        let remainingBricks = Array.from(bricks).filter((brick) => brick.style.display !== 'none');
        if (remainingBricks.length === 0) {
            alert("You Win!");
            document.location.reload();
        }
        */
    
        // Update the ball and paddle positions
        ball.style.left = ballX + "px";
        ball.style.top = ballY + "px";
        paddle.style.left = paddleX + "px";
    
        
    }
        requestAnimationFrame(updateGame);

        document.addEventListener("keydown", function (event) {
            if (event.key === "ArrowLeft" && paddleX > 0) {
                paddleX -= 10;
            }
            if (event.key === "ArrowRight" && paddleX < 320) {
                paddleX += 10;
            }
        });
    
        updateGame();
    

    return (
        <div>
        <h1>Welcome to My Brick Breaker Game</h1>
        <p>Instructions: Use the left and right arrow keys to move the paddle and bounce the ball.</p>
        <div id="game-container">

        <div id="paddle"></div>
        <div className="brick" style="top: 50px; left: 50px;"></div>
        <div className="brick" style="top: 50px; left: 120px;"></div>
        <div className="brick" style="top: 50px; left: 190px;"></div>
        <div className="brick" style="top: 50px; left: 260px;"></div>
        <div id="ball"></div>
        </div>

        </div>

    );
};


export default BrickBreaker;
