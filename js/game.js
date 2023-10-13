const canvas = document.getElementById("game");
const context = canvas.getContext("2d");
const grid = 10;
const N = 20;
let player = { row: 10, col: 10 };
let food = { row: 12, col: 15 };
let lose = { row: 19, col: 19 };
let direction = "right";
let count = 0;

function loop() {
  rAF = requestAnimationFrame(loop);

  context.clearRect(0, 0, canvas.width, canvas.height);

  if (++count == 10) {
    if (direction == "right") player.col++;
    if (direction == "left") player.col--;
    if (direction == "up") player.row++;
    if (direction == "down") player.row--;

    count = 0;
  }

  // food ?
  if (player.row == food.row && player.col == food.col) {
    food.row = Math.floor(Math.random() * N);
    food.col = Math.floor(Math.random() * N);

    lose.row = Math.floor(Math.random() * N);
    lose.col = Math.floor(Math.random() * N);

    // context.fillStyle = "#ff0000";
    // context.fillRect(lose.col * grid, lose.row * grid, grid - 1, grid - 1);
  }

  // lose ?
  if (player.row == lose.row && player.col == lose.col) {
    cancelAnimationFrame(rAF);
  }

  // player
  context.fillStyle = "#42d7f5";
  context.fillRect(player.col * grid, player.row * grid, grid - 1, grid - 1);

  // food
  context.fillStyle = "#00ff26";
  context.fillRect(food.col * grid, food.row * grid, grid - 1, grid - 1);

  // lose
  context.fillStyle = "#ff0000";
  context.fillRect(lose.col * grid, lose.row * grid, grid - 1, grid - 1);
}

document.addEventListener("keydown", (e) => {
  if (e.which == 37) direction = "left";
  if (e.which == 39) direction = "right";
  if (e.which == 40) direction = "up";
  if (e.which == 38) direction = "down";
});

rAF = requestAnimationFrame(loop);

//--------------------------------------------------------------------------------------------------
