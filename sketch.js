function setup() {
  createCanvas(800, 600);
}

const hitterWidth = 100; // hitter is the thing you use to hit the ball
const hitterHeight = 20; // hitter is the thing you use to hit the ball
const bottomMargin = 50; // margin between the bottom of the sketch and the hitter

xpos = 0; // 0 is at the middle
speed = 7;

function draw() {
  background(0);
  if (keyIsDown(LEFT_ARROW)) xpos -= speed;
  if (keyIsDown(RIGHT_ARROW)) xpos += speed;
  const hitter = rect(
    (width - hitterWidth) / 2 + xpos,
    height - bottomMargin,
    hitterWidth,
    hitterHeight
  );
}
