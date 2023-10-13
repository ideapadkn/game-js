const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
console.log(ctx);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const paticlesArray = [];

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  // ctx.fillStyle = "white";
  // ctx.fillRect(20, 20, 50, 50);
});

const mouse = {
  x: undefined,
  y: undefined,
};
canvas.addEventListener("click", function (event) {
  mouse.x = event.x;
  mouse.y = event.y;
  // drawCircle();
});
canvas.addEventListener("mousemove", function (event) {
  mouse.x = event.x;
  mouse.y = event.y;
  // drawCircle();
});

class Particle {
  constructor() {
    // this.x = mouse.x;
    // this.y = mouse.y;
    this.x = Math.random() * canvas.width; // если убрать canvas.width то это будет начинатся с 0
    this.y = Math.random() * canvas.height; // если убрать canvas.height то это будет начинатся с 0
    this.size = Math.random() * 15 + 1;
    this.speedX = Math.random() * 3 - 1.5;
    this.speedY = Math.random() * 3 - 1.5;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
  }
  draw() {
    ctx.fillStyle = "blue";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function init() {
  for (let i = 0; i < 100; i++) {
    paticlesArray.push(new Particle());
  }
}
init();

function handleParticles() {
  for (let i = 0; i < paticlesArray.length; i++) {
    paticlesArray[i].update();
    paticlesArray[i].draw();
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  handleParticles();
  requestAnimationFrame(animate);
}
animate();

// function drawCircle() {
//   ctx.fillStyle = "blue";
//   ctx.beginPath();
//   ctx.arc(mouse.x, mouse.y, 20, 0, Math.PI * 2);
//   ctx.fill();
// }

// ctx.fillStyle = "white";
// ctx.fillRect(20, 20, 50, 50); // 1, 2 - местополежение, 3 - width, 4 - height

// ctx.lineWidth = 5; // border width
// ctx.strokeStyle = "red"; // border
// ctx.stroke();
