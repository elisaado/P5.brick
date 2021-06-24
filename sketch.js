function setup() {
  createCanvas(800, 600);
  ballPosition = [width / 2, height - bottomBallMargin];
}

const hitterWidth = 100; // hitter is the thing you use to hit the ball
const hitterHeight = 20; // hitter is the thing you use to hit the ball
const bottomMargin = 50; // margin between the bottom of the sketch and the hitter
const bottomBallMargin = 200; // margin between bottom of sketch and initial position of the ball
const ballDiameter = 50;

let hitterXpos = 0; // 0 is at the middle
const speed = 7;
const gravity = 9.81;
let ballPosition;

function draw() {
  background(0);
  hitterXpos = mouseX - width / 2;
  const hitter = rect(
    (width - hitterWidth) / 2 + hitterXpos,
    height - bottomMargin,
    hitterWidth,
    hitterHeight
  );

  const ball = circle(ballPosition[0], ballPosition[1], ballDiameter);
}
