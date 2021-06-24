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

  hitter = {
    pos: {
      x: width / 2,
      y: height - bottomHitterMargin,
    },

    width: 100,
    height: 20,
  };

  hitter.pos.x = (width - hitter.width) / 2;
}

const bottomHitterMargin = 50; // margin between the bottom of the sketch and the hitter
const bottomBallMargin = 200; // margin between bottom of sketch and initial position of the ball

const gravity = 1;

let ball;
let hitter;

function draw() {
  background(0);
  hitter.pos.x = mouseX - hitter.width / 2;
  rect(hitter.pos.x, hitter.pos.y, hitter.width, hitter.height); // hitter

  circle(ball.pos.x, ball.pos.y, ball.diameter); // ball
  applyAccelerationAndSpeed(ball);
}

function applyAccelerationAndSpeed(gameObject) {
  gameObject.speed.x += gameObject.acceleration.x;
  gameObject.speed.y += gameObject.acceleration.y;

  gameObject.pos.x += gameObject.speed.x;
  gameObject.pos.y += gameObject.speed.y;
}
