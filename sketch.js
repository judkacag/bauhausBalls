let margin = 40;
let rectWidth = 360;
let rectHeight = 307;
let corner = 1000;
let topLeftSpeed = 0;

function setup() {
  createCanvas(800, 1000);
  colorMode(HSB, 360, 100, 100, 100)
}

function draw() {
  background(51.43, 2.86, 96.08, 100);
  
  /* Margin placeholder
  noFill();
  stroke(0, 81, 70, 100)
  strokeWeight(5)
  rect(40, 40, 720, 920) */
  
  // Base rectangles
  
  noStroke();
  fill(360, 100, 0, 85)
  // Top left black rect
  rect(margin, margin, rectWidth, rectHeight, corner, 0, 0, 0)
  // Top right black rect
  rect(margin + rectWidth, margin, rectWidth, rectHeight, 0, 0, corner, 0 )
  // Mid left black rect
  rect(margin, margin + rectHeight, rectWidth, rectHeight, corner, 0, 0, 0)
  // Mid right rect
  rect(margin + rectWidth, margin + rectHeight, rectWidth, rectHeight, 0, 0, corner, 0 )
  // Bottom left rect
  rect(margin, margin + rectHeight * 2, rectWidth/2, rectHeight, 0, corner, 0, corner)
  // Bottom right black rect
  rect(margin + rectWidth/2, margin + rectHeight * 2, rectWidth + rectWidth/2, rectHeight, corner, 0, corner, corner)
  
  // While holes
  
  fill(51.43, 2.86, 96.08, 100);
  // Top right hole
  rect(width / 2, margin, rectWidth / 2, rectHeight, corner, corner, corner, 0)
  push();
  fill(354, 17.7, 88.63, 85);
  ellipseMode(CORNER);
  ellipse(width / 2, margin + 50, rectWidth / 2, rectWidth / 2)
  pop();
  push();
  noFill();
  stroke(360, 100, 0, 100);
  strokeWeight(1);
  for (let i = 0; i < 30; i += 2.2) {
    rect(width / 2 - i, margin - i, rectWidth / 2 - i, rectHeight - i, corner, corner, corner, 0)
  }
  pop();
  // Bottom white hole
  rect(width/2, margin + rectHeight * 2, rectWidth/2 + rectWidth / 4, rectHeight, 0, corner, corner, corner)
  push();
  noFill();
  stroke(360, 100, 0, 100);
  strokeWeight(1);
  for (let i = 0; i < 30; i += 2) {
    rect(width/2 - i, margin + rectHeight * 2 - i, rectWidth/2 + rectWidth / 4 - i, rectHeight - i, 0, corner, corner, corner)
  }
  pop();
  // Mid right white hole
  circle(margin + rectWidth + rectWidth / 2, margin + rectHeight + rectHeight / 2, rectWidth * 0.75)
  push();
  push();
  fill(167.8, 55.29, 66.67, 85);
  ellipse(margin + rectWidth + rectWidth / 2 + 50, margin + rectHeight + rectHeight / 2 + 40, rectWidth / 2.5, rectWidth / 2.5)
  pop();
  noFill();
  stroke(360, 100, 0, 100);
  strokeWeight(1);
  for (let i = 0; i < 40; i += 2) {
    circle(margin - i + rectWidth + rectWidth / 2 - i, margin + rectHeight + rectHeight / 2 -i , rectWidth * 0.75 - i)
  }
  pop();
  // Mid left white hole
  rect(margin + rectWidth* 0.4, margin + rectHeight, rectWidth / 2 + (rectWidth / 2 - rectWidth* 0.4), rectHeight, corner, 0, corner, corner)
  push();
  noFill();
  stroke(360, 100, 0, 100);
  strokeWeight(1);
  for (let i = 0; i < 30; i += 2) {
    rect((margin + rectWidth* 0.4) - i, margin + rectHeight - i, (rectWidth / 2 + (rectWidth / 2 - rectWidth* 0.4)) - i, rectHeight - i, corner, 0, corner, corner)
  }
  pop();
  // Top left white hole
  rect(margin, margin + rectHeight / 2, rectWidth * 0.75, rectHeight / 2, corner, 0, corner, corner)
  // Orange ball
  push();
  fill(22.89, 89.4, 85.1, 85);
  ellipseMode(CORNER);
  ellipse(margin + 30, margin + rectHeight / 2, rectHeight / 2, rectHeight / 2)
  pop();
  // Top left white hole outlines
  push();
  noFill();
  stroke(360, 100, 0, 100);
  strokeWeight(1);
  for (let i = 0; i < 30; i += 2) {
    rect(margin - i, margin + rectHeight / 2 - i, rectWidth * 0.75 - i, rectHeight / 2 - i, corner, 0, corner, corner)
  }
  pop();
  
  // Pointless white circles
  circle(670, 120, 100)
  circle(110, 450, 60)
  circle(185, 925, 30)
  circle(720, 690, 30)
  
}
