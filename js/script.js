var board = [null, null, null,
             null, null, null,
             null, null, null];


//determine if player or cpu goes first
function coinToss(){
  var num = Math.floor((Math.random() * 10) + 1);
  if (num < 6) {
    return 'player';
  } else {
    return 'cpu';
  }
}

//cpu chooses a square
function cpuChoice(){
  var num = Math.floor((Math.random() * 10) + 1);
  if (num <= 1){
    board[4] = 1;
  } else if (num == 2){
    board[0] = 1;
  } else if (num == 3){
    board[2] = 1;
  } else if (num == 4){
    board[6] = 1;
  } else if (num == 5){
    board[8] = 1;
  } else if (num == 6){
    board[1] = 1;
  } else if (num == 7){
    board[7] = 1;
  } else if (num == 8){
    board[5] = 1;
  } else if (num == 9){
    board[3] = 1;
  } else {
    board[4] = 1;
  }
};





