function Snake(){
  this.x = -20;
  this.y = 600;
  this.xspeed = 0;
  this.yspeed = 0;
  this.total = 0;


  this.eat = function(pos){
    var d = dist(this.x,this.y,pos.x,pos.y)
    if(d<1){
      this.total++;
      if(document.getElementById('red').checked){
        redCount += Math.floor(random(5,10));
      }
      if(document.getElementById('green').checked){
        greenCount += Math.floor(random(5,10));
      }
      if(document.getElementById('blue').checked){
        blueCount += Math.floor(random(5,10));
      }
      var v = createVector(this.x,this.y);
      tail.push(v);
      return true;
    }
    else{
      return false;
    }
  }
  this.dir = function(x,y){

    this.xspeed = x;
    this.yspeed = y;
  }
  this.death = function(){
    for(var i = 0; i < tail.length; i++){
      var pos = tail[i];
      var d = dist(this.x,this.y,pos.x,pos.y);
      if(d < 1){
        this.total = 0;
        tail = [];
      }
    }
  }
  this.update = function(){
    if(this.x >= width-scl || this.x == 0){
      if(document.getElementById('red').checked){
        redCount -= 1;
      }
      if(document.getElementById('green').checked){
        greenCount -=1;
      }
      if(document.getElementById('blue').checked){
        blueCount -=1;
      }

    }
    if(this.total == tail.length){
    for(var i = 0; i < this.total-1; i++){
      tail[i] = tail[i+1];
    }
  }
    tail[this.total - 1] = createVector(this.x,this.y);
    this.x += this.xspeed* scl;
    this.y += this.yspeed * scl;

    this.x = constrain(this.x,0,width-scl);
    this.y = constrain(this.y,0,height-scl);
  }
  this.show = function(){

  if(document.getElementById("green").checked && !document.getElementById("red").checked && !document.getElementById("blue").checked){
    document.getElementById("rgb").innerHTML = "rgb(0, " + greenCount + ",0)";
    document.getElementById("rgb").style.color = "rgb(0, " + greenCount + ",0)";
    fill(0,greenCount,0);
  }
  else if(document.getElementById("green").checked && document.getElementById("red").checked&& !document.getElementById("blue").checked){
    document.getElementById("rgb").innerHTML = "rgb(" + redCount + ", " + greenCount + ",0)";
    document.getElementById("rgb").style.color = "rgb(" + redCount  + ", " + greenCount + ",0)";
    fill(redCount ,greenCount,0);
  }
  else if(document.getElementById("green").checked && document.getElementById("red").checked && document.getElementById("blue").checked){
    document.getElementById("rgb").innerHTML = "rgb(" + redCount  + ", " + greenCount +", " + blueCount+ ")";
    document.getElementById("rgb").style.color = "rgb(" + redCount  + ", " + greenCount +", " + blueCount+ ")";
    fill(redCount ,greenCount,blueCount);
  }
  else if(document.getElementById("green").checked && !document.getElementById("red").checked&& document.getElementById("blue").checked){
    document.getElementById("rgb").innerHTML = "rgb(0, " + greenCount +", " + blueCount+ ")";
    document.getElementById("rgb").style.color = "rgb(0, " + greenCount +", " + blueCount+ ")";
    fill(0,greenCount,blueCount);
  }
  else if(!document.getElementById("green").checked && document.getElementById("red").checked&& !document.getElementById("blue").checked){
    document.getElementById("rgb").innerHTML = "rgb(" + redCount  + ", 0, 0)";
    document.getElementById("rgb").style.color = "rgb(" + redCount  + ", 0, 0)";
    fill(redCount ,0,0);
  }
  else if(!document.getElementById("green").checked && document.getElementById("red").checked && document.getElementById("blue").checked){
    document.getElementById("rgb").innerHTML = "rgb(" + redCount  + ", 0, " + blueCount+ ")";
    document.getElementById("rgb").style.color = "rgb(" + redCount  + ", 0, " + blueCount+ ")";
    fill(redCount ,0,blueCount);
  }
  else if(!document.getElementById("green").checked && !document.getElementById("red").checked&& document.getElementById("blue").checked){
    document.getElementById("rgb").innerHTML = "rgb(0, 0, " + blueCount+ ")";
    document.getElementById("rgb").style.color = "rgb(0, 0, " + blueCount+ ")";
    fill(0,0,blueCount);
  }
  else{
    document.getElementById("rgb").innerHTML = "rgb(0, 0, 0)";
    document.getElementById("rgb").style.color = "rgb(0, 0, 0)";

    fill(0,0,0);
  }
  noStroke();
    for(var i = 0; i < this.total; i++){
      rect(tail[i].x,tail[i].y,scl,scl);
    }

    rect(this.x,this.y,scl,scl);

  }
}
