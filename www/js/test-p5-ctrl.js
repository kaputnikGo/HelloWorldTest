/*
 * @name Mouse Functions
 * @description test clicks on control boxes.
 */

let cnvPos;
// box position vars
let bx0, bx1, bx2, bx3;
let by0, by1, by2, by3;
let btn0, btn1, btn2, btn3; // DOM objects
// size of button, touch area
let btnW = 60; // min 40
let btnH = 60; // min 40
let btnGap = 16;
let startX = 10;
let startY = 16;
// log a button touch
let textX, textY;
let resultText = "empty";
let infoText = "empty";

function setup() {
  let canvas = createCanvas(700, 700);
  // NOTE: DOM objects position relative to the browser/device screen origin
  // not P5 canvas origin
  
  // start DOM relative positioning
  cnvPos = canvas.position(); // returns canvas (x,y) relative to phone screen
  bx0 = bx1 = bx2 = bx3 = cnvPos.x + startX;
  by0 = cnvPos.y + startY; // account for P5 canvas, else it rel to phone screen
  by1 = by0 + btnH + btnGap; // prev y + size + gap
  by2 = by1 + btnH + btnGap;
  by3 = by2 + btnH + btnGap;
  // end DOM relative positioning

  textX = startX;
  textY = canvas.height * 0.5; // half way down canvas
  // button text will overrun if width < text.length
  btn0 = createButton("b0");
  btn0.style("padding-left:0px");
  btn0.size(btnW, btnH);
  btn0.position(bx0, by0);

  btn1 = createButton("b1");
  btn1.style("padding-left:0px");
  btn1.size(btnW, btnH);
  btn1.position(bx1, by1);

  btn2 = createButton("b2");
  btn2.style("padding-left:0px");
  btn2.size(btnW, btnH);
  btn2.position(bx2, by2);

  btn3 = createButton("b3");
  btn3.style("padding-left:0px");
  btn3.size(btnW, btnH);
  btn3.position(bx3, by3);
  // buttons call a function
  btn0.mousePressed(btn0Pressed);
  btn1.mousePressed(btn1Pressed);
  btn2.mousePressed(btn2Pressed);
  btn3.mousePressed(btn3Pressed);
}

/*****************************************************/

function btn0Pressed() {
  // something
  resultText = "btn0 touched";
  infoText = "something 0";
}
function btn1Pressed() {
  // something
  resultText = "btn1 touched";
  infoText = "something 1";
}
function btn2Pressed() {
  // something
  resultText = "btn2 touched";
  infoText = "something 2";
}
function btn3Pressed() {
  // something
  resultText = "btn3 touched";
  infoText = "something 3";
}

/*****************************************************/

function draw() {
  background(200); // gray
  text(int(getFrameRate()) + " fps", 10, 16);
  text(resultText, textX, textY);
  text(infoText, textX, textY + btnGap);
  text("cnvPos.x: " + cnvPos.x, textX, textY + (2 * btnGap));
  text("cnvPos.y: " + cnvPos.y, textX, textY + (3 * btnGap));
}

/*****************************************************/

// touchStarted(), mousePressed()
function touchStarted() {
  // nothing yet
}
// touchMoved(), mouseDragged()
function touchMoved() {
  // do nothing in here:
  // causes long-touch and OS popups
}
// touchEnded(), mouseReleased()
function touchEnded() {
  // could be useful
}
