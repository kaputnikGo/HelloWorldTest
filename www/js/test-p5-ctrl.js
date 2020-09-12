/*
 * @name Mouse Functions
 * @description test click on a box.
 */
let bx, by;
let boxSize = 20;
let overBox = false;
let locked = false;
let xOffset = 0.0;
let yOffset = 0.0;

function setup() {
  createCanvas(720, 400);
  bx = width * 0.5;
  by = height * 0.5;
  rectMode(RADIUS);
  strokeWeight(2);
}

function draw() {
  background(237, 34, 93);

  // Test if the cursor is over the box
  if (
    mouseX > bx - boxSize &&
    mouseX < bx + boxSize &&
    mouseY > by - boxSize &&
    mouseY < by + boxSize
  ) {
    overBox = true;
    if (!locked) {
      stroke(255);
      fill(244, 122, 158);
    }
  } else {
    stroke(156, 39, 176);
    fill(244, 122, 158);
    overBox = false;
  }

  // Draw the box
  rect(bx, by, boxSize, boxSize);
}

// touchStarted(), mousePressed()
function touchStarted() {
  if (overBox) {
    locked = true;
    fill(255, 255, 255);
  } else {
    locked = false;
  }
  xOffset = mouseX - bx;
  yOffset = mouseY - by;
}

// touchMoved(), mouseDragged()
function touchMoved() {
  if (locked) {
    bx = mouseX - xOffset;
    by = mouseY - yOffset;
  }
}

// touchEnded(), mouseReleased()
function touchEnded() {
  locked = false;
}
