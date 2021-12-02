/* THIS COMPONENT CONTAINS FUNCTIONS FOR THE 'FOOD' ITEM IN SNAKE: */
    
    import { onSnake, expandSnake } from './Snake.js';
    import { randomGridPosition } from './FoodPosition.js';

    let food = getRandomFoodPosition();

    const EXPANSION_RATE = 1; //how much the snake grows when it eats food

/* Update loop - updates all of the logic for my game : */
    export function update() {
        if (onSnake(food) ) {
            expandSnake(EXPANSION_RATE);
            food = getRandomFoodPosition();
        }
    }

/* Draw / Render Loop - what draws everything on the screen based on the update loop */
    export function draw(gameBoard) {
        const foodElement = document.createElement('div');
        foodElement.style.gridRowStart = food.y;
        foodElement.style.gridColumnStart = food.x;
        foodElement.classList.add('food');
        gameBoard.appendChild(foodElement)
    }

/* Randomizing Food Position: */
    function getRandomFoodPosition() {
        let newFoodPosition

        while(newFoodPosition == null || onSnake(newFoodPosition)) {
            newFoodPosition = randomGridPosition();
        }

        return newFoodPosition;
    }
