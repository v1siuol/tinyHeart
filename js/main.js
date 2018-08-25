var can1;
var can2;

var canWidth;
var canHeight;

var ctx1;
var ctx2;

var lastTime;
var deltaTime;

var bgPic = new Image();

var ane;

document.body.onload = game;
function game() {
  init();
  lastTime = Date.now();
  deltaTime = 0;
  gameloop();
}

function init() {
  // 获得canvas context
  can1 = document.getElementById("canvas1"); // fishes, dust, UI, circle
  ctx1 = can1.getContext("2d");
  can2 = document.getElementById("canvas2"); // background, ane, fruits
  ctx2 = can2.getContext("2d");

  bgPic.src = "./src/background.jpg";

  canWidth = can1.width;
  canHeight = can1.height;

  ane = new aneObj();
  ane.init();
}
function gameloop() {
  window.requestAnimFrame(gameloop); // setInterval, setTimeout, frame per second
  var now = Date.now()
  deltaTime = now - lastTime;
  lastTime = now;

  drawBackground();
  ane.draw();
}
