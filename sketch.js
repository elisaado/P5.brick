function setup() {
  createCanvas(800, 600);

  ball = {
    pos: {
      x: width / 2,
      y: height - bottomBallMargin,
    },

    speed: {
      x: 0,
      y: ballSpeed,
    },

    hitbox: {
      x1: 0,
      x2: 0,
      y1: 0,
      y2: 0,
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

    hitbox: {
      x1: 0,
      x2: 0,
      y1: 0,
      y2: 0,
    },
  };

  hitter.pos.x = (width - hitter.width) / 2;
}

const bottomHitterMargin = 50; // margin between the bottom of the sketch and the hitter
const bottomBallMargin = 200; // margin between bottom of sketch and initial position of the ball

let ballSpeed = 5;

let ball;
let hitter;
let hitterAndBallCollided = false;

function draw() {
  background(0);
  fill(255, 0, 0);
  calculateHitbox(ball);
  rect(
    ball.hitbox.x1,
    ball.hitbox.y1,
    ball.hitbox.x2 - ball.hitbox.x1,
    ball.hitbox.y2 - ball.hitbox.y1
  );
  calculateHitbox(hitter);
  if (colliding(hitter, ball)) {
    if (!hitterAndBallCollided) {
      console.log("kanker");
      for (p in ball.speed) {
        ball.speed[p] = -ball.speed[p];
      }
    }
    hitterAndBallCollided = true;
  } else {
    hitterAndBallCollided = false;
  }

  fill(255);
  if (mouseX > 0) hitter.pos.x = mouseX - hitter.width / 2;
  rect(hitter.pos.x, hitter.pos.y, hitter.width, hitter.height); // hitter
  circle(ball.pos.x, ball.pos.y, ball.diameter); // ball

  applySpeed(ball);
}

function calculateHitbox(gameObject) {
  hb = gameObject.hitbox;
  if (!hb) return;
  if (gameObject.diameter) {
    // it's a ball!
    hb.x1 = gameObject.pos.x - gameObject.diameter / 2;
    hb.x2 = gameObject.pos.x + gameObject.diameter / 2;
    hb.y1 = gameObject.pos.y - gameObject.diameter / 2;
    hb.y2 = gameObject.pos.y + gameObject.diameter / 2;
    return;
  }

  hb.x1 = gameObject.pos.x;
  hb.x2 = gameObject.pos.x + gameObject.width;
  hb.y1 = gameObject.pos.y;
  hb.y2 = gameObject.pos.y + gameObject.height;
}

function colliding(gameObject1, gameObject2) {
  let hb1 = gameObject1.hitbox;
  let hb2 = gameObject2.hitbox;
  if ((!hb1 && hb1 !== 0) || (!hb2 && hb2 !== 0)) return;

  if (
    hb1.x1 < hb2.x2 &&
    hb1.x2 > hb2.x1 &&
    hb1.y1 < hb2.y2 &&
    hb1.y2 > hb2.y1
  ) {
    return true;
  }

  return false;
}

function applySpeed(gameObject) {
  gameObject.pos.x += gameObject.speed.x;
  gameObject.pos.y += gameObject.speed.y;
}
