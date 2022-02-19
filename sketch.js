let margin = 40;
let rectWidth = 360;
let rectHeight = 307;
let corner = 1000;

function setup() {
  createCanvas(800, 1000);
  colorMode(HSB, 360, 100, 100, 100)
}

function draw() {
  background(0, 0, 100, 100);
  
  /* Margin placeholder
  noFill();
  stroke(0, 81, 70, 100)
  strokeWeight(5)
  rect(40, 40, 720, 920) */
  
  // Base rectangles
  
  noStroke();
  fill(360, 100, 0, 100)
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
  
  fill(0, 0, 100, 100);
  // Top left white hole
  rect(margin, margin + rectHeight / 2, rectWidth * 0.75, rectHeight / 2, corner, 0, corner, corner)
  // Top right hole
  rect(width / 2, margin, rectWidth / 2, rectHeight, corner, corner, corner, 0)
  // Mid left white hole
  rect(margin + rectWidth* 0.4, margin + rectHeight, rectWidth / 2 + (rectWidth / 2 - rectWidth* 0.4), rectHeight, corner, 0, corner, corner)
  // Mid right white hole
  circle(margin + rectWidth + rectWidth / 2, margin + rectHeight + rectHeight / 2, rectWidth * 0.75)
  // Bottom white hole
  rect(width/2, margin + rectHeight * 2, rectWidth/2 + rectWidth / 4, rectHeight, 0, corner, corner, corner)
  
  // Pointless white circles
  circle(670, 120, 100)
  circle(120, 450, 80)
  circle(185, 925, 30)
  circle(720, 690, 30)
  
}
