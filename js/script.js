var board = [null, null, null,
             null, null, null,
             null, null, null];

playerScore = 0;
cpuScore = 0;

//change text in '.intro'
function showRules(){
  var introText = document.getElementById('introText');
  introText.innerHTML = "What'll it be, Mr. Torrance? <br> Here's to five miserable months on the wagon and all the irreparable harm that it's caused me.";
  playerScore = 0;
  cpuScore = 0;
  updateCpuScore();
  updatePlayerScore();
  resetBoard();
  $('#board').removeClass('coldjack');
  coinToss();
}

//determine if player or cpu goes first
function coinToss(){
  var num = Math.floor((Math.random() * 10) + 1);
  if (num < 6) {
    userTurn();
  } else {
    cpuChoice();
  }
}

//change text in startbutton to 'Your Turn'
function userTurn(){
  var buttonText = document.getElementById('startbuttontext');
  buttonText.innerHTML = "Your Turn";
}



//take User click and update board if space value is null
function userClick(square){
  if (square === 'board[0]'){
    if (board[0] === null){
      board[0] = 5;
      $('#topleftbox').addClass(whichJack());
    }
  }else if (square === 'board[1]'){
    if (board[1] === null){
      board[1] = 5;
      $('#topmiddlebox').addClass(whichJack());
    }
  }else if (square === 'board[2]'){
    if (board[2] === null){
      board[2] = 5;
      $('#toprightbox').addClass(whichJack());
    }
  }else if (square === 'board[3]'){
    if (board[3] === null){
      board[3] = 5;
       $('#middleleftbox').addClass(whichJack());
    }
  }else if (square === 'board[4]'){
    if (board[4] === null){
      board[4] = 5;
       $('#middlemiddlebox').addClass(whichJack());
    }
  }else if (square === 'board[5]'){
    if (board[5] === null){
      board[5] = 5;
       $('#middlerightbox').addClass(whichJack());
    }
  }else if (square === 'board[6]'){
    if (board[6] = 5){
      board[6] = 5;
      $('#bottomleftbox').addClass(whichJack());
    }
  }else if (square === 'board[7]'){
    if (board[7] = 5){
      board[7] = 5;
      $('#bottommiddlebox').addClass(whichJack());
    }
  }else if (square === 'board[8]'){
    if (board[8] = 5){
      board[8] = 5;
       $('#bottomrightbox').addClass(whichJack());
    }
  }
  checkUserWin();
}

//depending on hotel wins, pick a jack to use for squares
function whichJack(){
  if (cpuScore === 0){
    return 'boxjack1';
  } else if (cpuScore === 1){
    return 'boxjack2';
  } else if (cpuScore === 2){
    return 'boxjack3';
  }
}

//pick a different boxhotel class for each cpuChoice
function whichHotel(){
  if (cpuScore === 0){
    return 'boxhotel1';
  } else if (cpuScore === 1){
    return 'boxhotel2';
  } else if (cpuScore === 2){
    return 'boxhotel3';
  }
}


//update html playerScore with playerScore variable
function updatePlayerScore(){
  playerScoreText = document.getElementById('playerscore');
  playerScoreText.innerHTML = playerScore;
}

//check for user win conditions
function checkUserWin(){
  if (board[0] + board[1] + board[2] === 15){
    console.log('User WIN!');
    playerScore += 1;
    resetBoard();
  } else if (board[3] + board[4] + board[5] === 15){
    console.log('User WIN!');
    playerScore += 1;
  } else if (board[6] + board[7] + board[8] === 15){
    console.log('User WIN!');
    playerScore += 1;
    resetBoard();
  } else if (board[0] + board[3] + board[6] === 15){
    console.log('User WIN!');
    playerScore += 1;
    resetBoard();
  } else if (board[1] + board[4] + board[7] === 15){
    console.log('User WIN!');
    playerScore += 1;
    resetBoard();
  } else if (board[2] + board[5] + board[8] === 15){
    console.log('User WIN!');
    playerScore += 1;
    resetBoard();
  } else if (board[0] + board[4] + board[8] === 15){
    console.log('User WIN!');
    playerScore += 1;
    resetBoard();
  } else if (board[2] + board[4] + board[6] === 15){
    console.log('User WIN!');
    playerScore += 1;
    resetBoard();
  } else {
    cpuChoice();
  }
  checkTie();
  updatePlayerScore();
}

//cpu chooses a square
function cpuChoice(){
  var num = Math.floor((Math.random() * 10) + 1);
  if (num <= 1){
    if (board[4] === null){
      board[4] = 1;
      $('#middlemiddlebox').addClass(whichHotel());
      console.log(board);
    } else {
      cpuChoice();
    }
  } else if (num == 2){
    if (board[0] === null){
      board[0] = 1;
      $('#topleftbox').addClass(whichHotel());
      console.log(board);
    } else {
      cpuChoice();
    }
  } else if (num == 3){
    if (board[2] === null){
      board[2] = 1;
      $('#toprightbox').addClass(whichHotel());
      console.log(board);
    } else {
      cpuChoice();
    }
  } else if (num == 4){
    if (board[6] === null){
      board[6] = 1;
      $('#bottomleftbox').addClass(whichHotel());
      console.log(board);
    } else {
      cpuChoice();
    }
  } else if (num == 5){
    if (board[8] === null){
      board[8] = 1;
      $('#bottomrightbox').addClass(whichHotel());
      console.log(board);
    } else {
      cpuChoice();
    }
  } else if (num == 6){
    if (board[1] === null){
      board[1] = 1;
      $('#topmiddlebox').addClass(whichHotel());
      console.log(board);
    } else {
      cpuChoice();
    }
  } else if (num == 7){
    if (board[7] === null){
      board[7] = 1;
      $('#bottommiddlebox').addClass(whichHotel());
      console.log(board);
    } else {
      cpuChoice();
    }
  } else if (num == 8){
    if (board[5] === null){
      board[5] = 1;
      $('#middlerightbox').addClass(whichHotel());
      console.log(board);
    } else {
      cpuChoice();
    }
  } else if (num == 9){
    if (board[3] === null){
      board[3] = 1;
      $('#middleleftbox').addClass(whichHotel());
      console.log(board);
    } else {
      cpuChoice();
    }
  } else if (num === 10){
    if (board[4] === null){
      board[4] = 1;
      $('#middlemiddlebox').addClass(whichHotel());
      console.log(board);
    } else {
      cpuChoice();    }
  }
  checkTie();
  checkCpuWin();
}

//check for tie conditions
function checkTie(){
  var boardFull = true;
  for (var i = 0; i < board.length; i++){
    if (board[i] === null){
      boardFull = false;
    }
  }if (boardFull){
    cpuScore += 1;
    resetBoard();
  }
}

//check for CPU win conditions
function checkCpuWin(){
  if (board[0] + board[1] + board[2] === 3){
    console.log('CPU WIN!');
    cpuScore += 1;
    resetBoard();
  } else if (board[3] + board[4] + board[5] === 3){
    console.log('CPU WIN!');
    cpuScore += 1;
    resetBoard();
  } else if (board[6] + board[7] + board[8] === 3){
    console.log('CPU WIN!');
    cpuScore += 1;
    resetBoard();
  } else if (board[0] + board[3] + board[6] === 3){
    console.log('CPU WIN!');
    cpuScore += 1;
    resetBoard();
  } else if (board[1] + board[4] + board[7] === 3){
    console.log('CPU WIN!');
    cpuScore += 1;
    resetBoard();
  } else if (board[2] + board[5] + board[8] === 3){
    console.log('CPU WIN!');
    cpuScore += 1;
    resetBoard();
  } else if (board[0] + board[4] + board[8] === 3){
    console.log('CPU WIN!');
    cpuScore += 1;
    resetBoard();
  } else if (board[2] + board[4] + board[6] === 3){
    console.log('CPU WIN!');
    cpuScore += 1;
    resetBoard();
  } else {
    userTurn();
  }
  updateCpuScore();
  checkGameOver();
}

function updateIntroText(){
  var introText = document.getElementById('introText');
  if (cpuScore === 1){
    introText.innerHTML = "Hello, Danny. Come and play with us. Come and play with us, Danny. Forever... and ever... and ever.";
  } else if (cpuScore === 2){
    introText.innerHTML = "Here's Johnny!";
  }
}

function updateCpuScore(){
  cpuScoreText = document.getElementById('cpuscore');
  cpuScoreText.innerHTML = cpuScore;
}

//gameOver check to see if hotel has won 3 times
function checkGameOver(){
  if (cpuScore > 2){
    console.log("gameovergameover");
    gameOver();
  }
}

//overlay frozen jack on gameboard. update text in intro and playbutton
function gameOver(){
  $('#board').addClass('coldjack');
  var introText = document.getElementById('introText');
  introText.innerHTML = "The old-timers used to call it cabin fever. A claustrophobic reaction which can occur when people are shut in together over long periods of time.";
  var buttonText = document.getElementById('startbuttontext');
  buttonText.innerHTML = "Play Again";
}

//reset board spaces to null, remove pictures
function resetBoard(){
  for (var i = 0; i < board.length; i++){
    board[i] = null;
  }
  $('#topleftbox').removeClass('boxbrown boxjack1 boxjack2 boxjack3 boxhotel1 boxhotel2 boxhotel3 boxhotel4 boxhotel5 boxhotel6 boxhotel7');
  $('#topmiddlebox').removeClass('boxbrown boxjack1 boxjack2 boxjack3 boxhotel1 boxhotel2 boxhotel3 boxhotel4 boxhotel5 boxhotel6 boxhotel7');
  $('#toprightbox').removeClass('boxbrown boxjack1 boxjack2 boxjack3 boxhotel1 boxhotel2 boxhotel3 boxhotel4 boxhotel5 boxhotel6 boxhotel7');
  $('#middleleftbox').removeClass('boxbrown boxjack1 boxjack2 boxjack3 boxhotel1 boxhotel2 boxhotel3 boxhotel4 boxhotel5 boxhotel6 boxhotel7');
  $('#middlemiddlebox').removeClass('boxbrown boxjack1 boxjack2 boxjack3 boxhotel1 boxhotel2 boxhotel3 boxhotel4 boxhotel5 boxhotel6 boxhotel7');
  $('#middlerightbox').removeClass('boxbrown boxjack1 boxjack2 boxjack3 boxhotel1 boxhotel2 boxhotel3 boxhotel4 boxhotel5 boxhotel6 boxhotel7');
  $('#bottomleftbox').removeClass('boxbrown boxjack1 boxjack2 boxjack3 boxhotel1 boxhotel2 boxhotel3 boxhotel4 boxhotel5 boxhotel6 boxhotel7');
  $('#bottommiddlebox').removeClass('boxbrown boxjack1 boxjack2 boxjack3 boxhotel1 boxhotel2 boxhotel3 boxhotel4 boxhotel5 boxhotel6 boxhotel7');
  $('#bottomrightbox').removeClass('boxbrown boxjack1 boxjack2 boxjack3 boxhotel1 boxhotel2 boxhotel3 boxhotel4 boxhotel5 boxhotel6 boxhotel7');
  updateIntroText();
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
