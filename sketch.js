var snake;
var food;
var input;
var redCount = 51;
var greenCount = 51;
var blueCount = 51;
var count = 51;
var tail = [];
var scl = 25;
var input;
var fr = 20;


function setup(){
  createCanvas(600,600);
  var btn = document.getElementById('btn');
  var clipboard = new Clipboard(btn);
  document.getElementById("size").defaultValue = "20";
  document.getElementById("size").step = "1";
  document.getElementById("size").max = "60";
  document.getElementById("size").min = "1";
  snake = new Snake();
  input = select('#size');
  fr = input.value();
  frameRate(fr);
  fill(255);
  strokeWeight(6);
  beginShape();
  vertex(0, 0);
  vertex(600, 0);
  vertex(600, 500);
  vertex(0, 500);
  endShape(CLOSE);
  pickLocation();
  background(200);
}
function pickLocation(){
  var cols = floor(width/scl);
  var rows = floor(height/scl);
  food = createVector(floor(random(cols)),floor(random(rows)));
  food.mult(scl);
}

function fillup(){
  if(document.getElementById("green").checked && !document.getElementById("red").checked && !document.getElementById("blue").checked){
    background(0,greenCount,0);
  }
  else if(document.getElementById("green").checked && document.getElementById("red").checked&& !document.getElementById("blue").checked){
    background(redCount,greenCount,0);
  }
  else if(document.getElementById("green").checked && document.getElementById("red").checked && document.getElementById("blue").checked){
    background(redCount,greenCount,blueCount);
  }
  else if(document.getElementById("green").checked && !document.getElementById("red").checked&& document.getElementById("blue").checked){
    background(0,greenCount,blueCount);
  }
  else if(!document.getElementById("green").checked && document.getElementById("red").checked&& !document.getElementById("blue").checked){
    background(redCount,0,0);
  }
  else if(!document.getElementById("green").checked && document.getElementById("red").checked && document.getElementById("blue").checked){
    background(redCount,0,blueCount);
  }
  else if(!document.getElementById("green").checked && !document.getElementById("red").checked&& document.getElementById("blue").checked){
    background(0,0,blueCount);
  }
  else{
    background(0,0,0);
  }
}
function draw(){

  fr = input.value();
  frameRate(fr);
  greenCount = constrain(greenCount,51,255);
  redCount = constrain(redCount,51,255);
  blueCount = constrain(blueCount,51,255);
  count = constrain(count,51,255);
  if(document.getElementById("pause").checked){
    document.getElementById('pauseDisplay').innerHTML = "";
    snake.update();
    snake.death();
    snake.show();
  }
  if(!document.getElementById("pause").checked){
    document.getElementById('pauseDisplay').innerHTML = "paused";
  }

  fill(255,255,0);
  if(document.getElementById("pause").checked){
    rect(food.x,food.y,scl,scl);
  }
  if(document.getElementById("red").checked){
    document.getElementById("redDisplay").style.opacity = "1.0";
    document.getElementById("redDisplay").style.padding = "20px" + " " + (redCount/8) + "px";
  }else{
    document.getElementById("redDisplay").style.padding = "20px 6px";
    document.getElementById("redDisplay").style.opacity = "0.3";
  }
  if(document.getElementById("green").checked){
    document.getElementById("greenDisplay").style.opacity= "1.0";
    document.getElementById("greenDisplay").style.padding = "20px" + " " + (greenCount/8) + "px";
  }else{
    document.getElementById("greenDisplay").style.opacity= "0.3";
    document.getElementById("greenDisplay").style.padding = "20px 6px";
  }
  if(document.getElementById("blue").checked){
    document.getElementById("blueDisplay").style.opacity = "1.0";
    document.getElementById("blueDisplay").style.padding = "20px" + " " + (blueCount/8) + "px";
  }else{
    document.getElementById("blueDisplay").style.opacity = "0.3";
    document.getElementById("blueDisplay").style.padding = "20px 6px";
  }
  if(!document.getElementById("pause").checked){
    if(document.getElementById("green").checked && !document.getElementById("red").checked && !document.getElementById("blue").checked){
      fill(0,greenCount,0);
    }
    else if(document.getElementById("green").checked && document.getElementById("red").checked&& !document.getElementById("blue").checked){
      fill(redCount,greenCount,0);
    }
    else if(document.getElementById("green").checked && document.getElementById("red").checked && document.getElementById("blue").checked){
      fill(redCount,greenCount,blueCount);
    }
    else if(document.getElementById("green").checked && !document.getElementById("red").checked&& document.getElementById("blue").checked){
      fill(0,greenCount,blueCount);
    }
    else if(!document.getElementById("green").checked && document.getElementById("red").checked&& !document.getElementById("blue").checked){
      fill(redCount,0,0);
    }
    else if(!document.getElementById("green").checked && document.getElementById("red").checked && document.getElementById("blue").checked){
      fill(redCount,0,blueCount);
    }
    else if(!document.getElementById("green").checked && !document.getElementById("red").checked&& document.getElementById("blue").checked){
      fill(0,0,blueCount);
    }
    else{
      fill(0,0,0);
    }
    rect(food.x,food.y,scl,scl);
  }


  if(snake.eat(food)){
    pickLocation();
  }
  document.getElementById('reset').addEventListener('click',setup);
  document.getElementById('fill').addEventListener('click',fillup);
}
