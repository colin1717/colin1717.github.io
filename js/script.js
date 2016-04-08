var board = [null, null, null,
             null, null, null,
             null, null, null];

//change text in '.intro'
function showRules(){
  var introText = document.getElementById('introText');
  introText.innerHTML = "Win Tic Tac Toe to keep this hotel from taking what's left of Jack's sanity. Don't loose 3 times.";
}

//determine if player or cpu goes first
function coinToss(){
  var num = Math.floor((Math.random() * 10) + 1);
  if (num < 6) {
    return 'player';
  } else {
    return 'cpu';
  }
}

//change text in startbutton to 'Your Turn'
function userTurn(){
  var buttonText = document.getElementById('startbuttontext');
  buttonText.innerHTML = "Your Turn";
}

//take click and update board
function userClick(square){
  if (square === 'board[0]'){
    board[0] = 5;
  }else if (square === 'board[1]'){
    board[1] = 5;
  }else if (square === 'board[2]'){
    board[2] = 5;
  }else if (square === 'board[3]'){
    board[3] = 5;
  }else if (square === 'board[4]'){
    board[4] = 5;
  }else if (square === 'board[5]'){
    board[5] = 5;
  }else if (square === 'board[6]'){
    board[6] = 5;
  }else if (square === 'board[7]'){
    board[7] = 5;
  }else if (square === 'board[8]'){
    board[8] = 5;
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
}

//check for CPU win conditions
function checkCpuWin(){
  if (board[0] + board[1] + board[2] === 3){
    console.log('CPU WIN!');
  } else if (board[3] + board[4] + board[5] === 3){
    console.log('CPU WIN!');
  } else if (board[6] + board[7] + board[8] === 3){
    console.log('CPU WIN!');
  } else if (board[0] + board[3] + board[6] === 3){
    console.log('CPU WIN!');
  } else if (board[1] + board[4] + board[7] === 3){
    console.log('CPU WIN!');
  } else if (board[2] + board[5] + board[8] === 3){
    console.log('CPU WIN!');
  } else if (board[0] + board[4] + board[8] === 3){
    console.log('CPU WIN!');
  } else if (board[2] + board[4] + board[6] === 3){
    console.log('CPU WIN!');
  }
}

//Event Handlers
//Startbutton
$('#startbutton').click(function(){
  showRules();
})
//looking for user clicks top row
$('#topleftbox').click(function(){
  userClick('board[0]');
  console.log(board);
})
$('#topmiddlebox').click(function(){
  userClick('board[1]');
  console.log(board);
})
$('#toprightbox').click(function(){
  userClick('board[2]');
  console.log(board);
})
//looking for user click middle row
$('#middleleftbox').click(function(){
  userClick('board[3]');
  console.log(board);
})
$('#middlemiddlebox').click(function(){
  userClick('board[4]');
  console.log(board);
})
$('#middlerightbox').click(function(){
  userClick('board[5]');
  console.log(board);
})
//looking for user clicks bottom row
$('#bottomleftbox').click(function(){
  userClick('board[6]');
  console.log(board);
})
$('#bottommiddlebox').click(function(){
  userClick('board[7]');
  console.log(board);
})
$('#bottomrightbox').click(function(){
  userClick('board[8]');
  console.log(board);
})
