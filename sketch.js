function setup() {
  createCanvas(800, 600);
}

const hitterWidth = 100; // hitter is the thing you use to hit the ball
const hitterHeight = 20; // hitter is the thing you use to hit the ball
const bottomMargin = 50; // margin between the bottom of the sketch and the hitter

let hitter_xpos = 0; // 0 is at the middle
const speed = 7;
const gravity = 9.81;

function draw() {
  background(0);
  hitter_xpos = mouseX - width / 2;
  const hitter = rect(
    (width - hitterWidth) / 2 + hitter_xpos,
    height - bottomMargin,
    hitterWidth,
    hitterHeight
  );

  const ball = circle();
}
