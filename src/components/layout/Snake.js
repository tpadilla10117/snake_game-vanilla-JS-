import { getInputDirection } from "./Input";

/* How many times the snake moves per second:  */
    export const SNAKE_SPEED = 1;

/* How I represent my Snake, in an X and Y position (here it's middle of screen): */
    const snakeBody = [ { x: 11, y: 11 },
    ];
    let newSegments = 0;

/* Update loop - updates all of the logic for my game : */
    export function update() {

        addSegments();
        const inputDirection = getInputDirection();
        /* console.log("update snake"); */

        for (let i = snakeBody.length - 2; i >= 0; i--) {

        //We take the last element and set it to a new object, shifting the snake:
            snakeBody[i + 1] = { ...snakeBody[i] }; //i + 1 is the last element; snakeBody.length - 2 == 2nd to last element
        }

    //Update the head of the snake:
        snakeBody[0].x += inputDirection.x;
        snakeBody[0].y += inputDirection.y;

    }

/* Draw / Render Loop - what draws everything on the screen based on the update loop */
    export function draw(gameBoard) {
        /* console.log("draw snake"); */

        /* Loop through each portion of the snake - called 'segment' */
        snakeBody.forEach(segment => {
            const snakeElement = document.createElement('div'); //we create a div
            snakeElement.style.gridRowStart = segment.y; //drawing/setting the X and then Y coordinates of the snake
            snakeElement.style.gridColumnStart = segment.x;
            snakeElement.classList.add('snake'); //add the 'snake' class
            gameBoard.appendChild(snakeElement);
        })
    }


    export function expandSnake(amount) {
        newSegments += amount;
    }

    export function onSnake(position, { ignoreHead = false } = {} ) {
        return snakeBody.some( (segment, index) => {
            if (ignoreHead && index === 0) return false;
            return equalPositions(segment, position);
        })
    }

    export function getSnakeHead() {
        return snakeBody[0];
    }

    export function snakeIntersection() {
        return onSnake(snakeBody[0], {ignoreHead: true } )
    }

    function equalPositions(pos1, pos2) {
        return (
            pos1.x === pos2.x && pos1.y === pos2.y
        )
    };

    function addSegments() {
        for (let i = 0; i< newSegments; i++) {
            snakeBody.push( {...snakeBody[snakeBody.length - 1] });
        };

        newSegments = 0;
    }