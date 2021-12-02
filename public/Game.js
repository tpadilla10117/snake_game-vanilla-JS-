
//TODO: Implement with React framework
//TODO: Game WORKS, but it's re-rendering due to the react framework.  Place this into Vanilla Js then re-write with react
/* import React from "react"; */


import { SNAKE_SPEED, draw as drawSnake, update as updateSnake, getSnakeHead, snakeIntersection } from './Snake.js';
import { update as updateFood, draw as drawFood } from './Food.js';
import { outsideGrid } from './FoodPosition.js';



    let lastRenderTime = 0;
    let gameOver = false;
    const gameBoard = document.getElementById('game-board');

/* 1) Game Loop: */
    function main(currentTime) {

    //TODO: Check the confirm error:
        if(gameOver) {
            if(window.confirm('You lose.  Press ok to restart.')) {
                window.location ='/';
            }
            return
        };

        window.requestAnimationFrame(main);/* browser, tell me when to I can render my next frame.  I start with requesting a frame to animate my game, then I get the timestamp back when that frame is going to render*/

        const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000; /* convert to second from milliseconds */

    /* If the seconds from our last render is less than the time between our renders  */
        if(secondsSinceLastRender < 1 / SNAKE_SPEED) return

        /* console.log("Here is the current time: ", currentTime); */
        console.log("Render: ");

        lastRenderTime = currentTime;
        update();
        draw();
    }

    /* console.log(window.requestAnimationFrame(main)); */
    window.requestAnimationFrame(main);

    function update() {
        updateSnake();
        updateFood();
        checkDeath();
    }

/* This functions draws the snake to the gameboard: */
    function draw() {
        gameBoard.innerHTML = ''; //clears the trailing snake pieces
        drawSnake(gameBoard);
        drawFood(gameBoard);
    }

    function checkDeath() {
        gameOver = outsideGrid( getSnakeHead() ) || snakeIntersection();
    };

     


