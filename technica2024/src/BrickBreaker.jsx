function BrickBreaker() {
    //const gameContainer = document.getElementById("game-container");
    const paddle = document.getElementById("paddle");
    const ball = document.getElementById("ball");
    const bricks = document.querySelectorAll(".brick");

    let ballX = 200;
    let ballY = 300;
    let ballSpeedX = 5;
    let ballSpeedY = -5;
    let paddleX = 160;

    function updateGame() {
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
        let remainingBricks = Array.from(bricks).filter((brick) => brick.style.display !== 'none');
        if (remainingBricks.length === 0) {
            alert("You Win!");
            document.location.reload();
        }
    
        // Update the ball and paddle positions
        ball.style.left = ballX + "px";
        ball.style.top = ballY + "px";
        paddle.style.left = paddleX + "px";
    
        requestAnimationFrame(updateGame);
    }
    

    document.addEventListener("keydown", function (event) {
        if (event.key === "ArrowLeft" && paddleX > 0) {
            paddleX -= 10;
        }
        if (event.key === "ArrowRight" && paddleX < 320) {
            paddleX += 10;
        }
    });

    updateGame();
}

export default BrickBreaker;
