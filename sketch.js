function setup() {
  createCanvas(800, 600);

  ball = {
    pos: {
      x: width / 2,
      y: height - bottomBallMargin,
    },

    speed: {
      x: 0,
      y: 0,
    },

    acceleration: {
      x: 0,
      y: gravity,
    },

    diameter: 50,
  };
}

const hitterWidth = 100; // hitter is the thing you use to hit the ball
const hitterHeight = 20; // hitter is the thing you use to hit the ball
const bottomMargin = 50; // margin between the bottom of the sketch and the hitter
const bottomBallMargin = 200; // margin between bottom of sketch and initial position of the ball

let hitterXpos = 0; // 0 is at the middle
const speed = 7;
const gravity = 1;
let ball;

function draw() {
  background(0);
  hitterXpos = mouseX - width / 2;
  const hitter = rect(
    (width - hitterWidth) / 2 + hitterXpos,
    height - bottomMargin,
    hitterWidth,
    hitterHeight
  );

  circle(ball.pos.x, ball.pos.y, ball.diameter); // ball
  applyAccelerationAndSpeed(ball);
}

function applyAccelerationAndSpeed(gameObject) {
  gameObject.speed.x += gameObject.acceleration.x;
  gameObject.speed.y += gameObject.acceleration.y;

  gameObject.pos.x += gameObject.speed.x;
  gameObject.pos.y += gameObject.speed.y;
}
