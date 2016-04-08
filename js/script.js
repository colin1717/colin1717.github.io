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


