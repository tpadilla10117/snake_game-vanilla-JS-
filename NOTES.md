<!-- Game Loop -->
Game Loop:

- A game loop runs continuously during gameplay. Each turn of the loop, it 1) processes user input without blocking, 2) updates the game state, and 3) renders the game. It tracks the passage of time to control the rate of gameplay.

This pattern decouples progression of game time from user input and processor speed.

- **Its used in every game engine

- Real World Definition: Game loop is the main process of all the game rendering threads. It's present in all modern games. It drives input process, internal status update, rendering, AI and all the other processes.

- Plain Words: Game Loop pattern ensures that game time progresses in equal speed in all different hardware setups.