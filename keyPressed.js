function keyPressed(){
  if(keyCode === UP_ARROW){
    if(tail.length > 0){
      if(tail[tail.length-1].x != snake.x)
      {
        snake.dir(0,-1);
      }
    }
    else{
      snake.dir(0,-1);
    }
  }
  else if(keyCode === DOWN_ARROW){
    if(tail.length > 0){
      if(tail[tail.length-1].x != snake.x)
      {
          snake.dir(0,1);
      }
    }
    else{
        snake.dir(0,1);
    }
  }
  else if(keyCode === LEFT_ARROW){
    if(tail.length > 0){
      if(tail[tail.length-1].y != snake.y)
      {
          snake.dir(-1,0);
      }
    }
    else{
        snake.dir(-1,0);
    }

  }
  else if(keyCode === RIGHT_ARROW){
    if(tail.length > 0){
      if(tail[tail.length-1].y != snake.y)
      {
          snake.dir(1,0);
      }
    }
    else{
        snake.dir(1,0);
    }

  }
}
