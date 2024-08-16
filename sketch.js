function setup() {
    createCanvas(1200, 1200);
  background("black")
  }
  function draw(){ 
  
    
    stroke("blue");
    fill("red")
    
    //console.log(mouseIsPressed);
    
    if(mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35)
      
    }
  }