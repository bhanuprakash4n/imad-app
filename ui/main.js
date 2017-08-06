console.log('Loaded!');

draw=function() {
    background(255,255,255);
    stroke(mouseX,mouseY,mouseX);
    fill(mouseX,mouseY,0);
  ellipse(mouseX,mouseY,15,15);  
};