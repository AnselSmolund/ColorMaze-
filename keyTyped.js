function keyTyped(){
  if(key === 'r'){
    if(document.getElementById('red').checked){
      document.getElementById('red').checked = false;
    }
    else{
      document.getElementById('red').checked = true;
    }
  }
  if(key === 'g'){
    if(document.getElementById('green').checked){
      document.getElementById('green').checked = false;
    }
    else{
      document.getElementById('green').checked = true;
    }
  }
  if(key === 'p'){
    if(document.getElementById("pause").checked)
    {
      document.getElementById("pause").checked = false;
    }
    else{
      document.getElementById("pause").checked = true;
    }
  }
  if(key === 'b'){
    if(document.getElementById('blue').checked){
      document.getElementById('blue').checked = false;
    }
    else{
      document.getElementById('blue').checked = true;
    }
  }
}
