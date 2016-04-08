var board = [null, null, null,
             null, null, null,
             null, null, null];

playerScore = 0;
cpuScore = 0;

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

//take User click and update board if space value is null
function userClick(square){
  if (square === 'board[0]'){
    if (board[0] === null){
      board[0] = 5;
      $('#topleftbox').addClass('boxred');
      checkUserWin();
    }
  }else if (square === 'board[1]'){
    if (board[1] === null){
      board[1] = 5;
      $('#topmiddlebox').addClass('boxred');
      checkUserWin();
    }
  }else if (square === 'board[2]'){
    if (board[2] === null){
      board[2] = 5;
      $('#toprightbox').addClass('boxred');
      checkUserWin();
    }
  }else if (square === 'board[3]'){
    if (board[3] === null){
      board[3] = 5;
       $('#middleleftbox').addClass('boxred');
      checkUserWin();
    }
  }else if (square === 'board[4]'){
    if (board[4] === null){
      board[4] = 5;
       $('#middlemiddlebox').addClass('boxred');
      checkUserWin();
    }
  }else if (square === 'board[5]'){
    if (board[5] === null){
      board[5] = 5;
       $('#middlerightbox').addClass('boxred');
      checkUserWin();
    }
  }else if (square === 'board[6]'){
    if (board[6] = 5){
      board[6] = 5;
      $('#bottomleftbox').addClass('boxred');
      checkUserWin();
    }
  }else if (square === 'board[7]'){
    if (board[7] = 5){
      board[7] = 5;
      $('#bottommiddlebox').addClass('boxred');
      checkUserWin();
    }
  }else if (square === 'board[8]'){
    if (board[8] = 5){
      board[8] = 5;
       $('#bottomrightbox').addClass('boxred');
      checkUserWin();
    }
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
    updatePlayerScore();
    resetBoard();
  } else if (board[3] + board[4] + board[5] === 15){
    console.log('User WIN!');
    playerScore += 1;
    updatePlayerScore();
  } else if (board[6] + board[7] + board[8] === 15){
    console.log('User WIN!');
    playerScore += 1;
    updatePlayerScore();
    resetBoard();
  } else if (board[0] + board[3] + board[6] === 15){
    console.log('User WIN!');
    playerScore += 1;
    updatePlayerScore();
    resetBoard();
  } else if (board[1] + board[4] + board[7] === 15){
    console.log('User WIN!');
    playerScore += 1;
    updatePlayerScore();
    resetBoard();
  } else if (board[2] + board[5] + board[8] === 15){
    console.log('User WIN!');
    playerScore += 1;
    updatePlayerScore();
    resetBoard();
  } else if (board[0] + board[4] + board[8] === 15){
    console.log('User WIN!');
    playerScore += 1;
    updatePlayerScore();
    resetBoard();
  } else if (board[2] + board[4] + board[6] === 15){
    console.log('User WIN!');
    playerScore += 1;
    updatePlayerScore();
    resetBoard();
  } else {
    cpuChoice();
  }
}

//add a picture of jack to square that is specified as argument


//cpu chooses a square
function cpuChoice(){
  var num = Math.floor((Math.random() * 10) + 1);
  if (num <= 1){
    if (board[4] === null){
      board[4] = 1;
      $('#middlemiddlebox').addClass('boxbrown');
      console.log(board);
      checkCpuWin();
    } else {
      cpuChoice();
    }
  } else if (num == 2){
    if (board[0] === null){
      board[0] = 1;
      $('#topleftbox').addClass('boxbrown');
      console.log(board);
      checkCpuWin();
    } else {
      cpuChoice();
    }
  } else if (num == 3){
    if (board[2] === null){
      board[2] = 1;
      $('#toprightbox').addClass('boxbrown');
      console.log(board);
      checkCpuWin();
    } else {
      cpuChoice();
    }
  } else if (num == 4){
    if (board[6] === null){
      board[6] = 1;
      $('#bottomleftbox').addClass('boxbrown');
      console.log(board);
      checkCpuWin();
    } else {
      cpuChoice();
    }
  } else if (num == 5){
    if (board[8] === null){
      board[8] = 1;
      $('#bottomrightbox').addClass('boxbrown');
      console.log(board);
      checkCpuWin();
    } else {
      cpuChoice();
    }
  } else if (num == 6){
    if (board[1] === null){
      board[1] = 1;
      $('#topmiddlebox').addClass('boxbrown');
      console.log(board);
      checkCpuWin();
    } else {
      cpuChoice();
    }
  } else if (num == 7){
    if (board[7] === null){
      board[7] = 1;
      $('#bottommiddlebox').addClass('boxbrown');
      console.log(board);
      checkCpuWin();
    } else {
      cpuChoice();
    }
  } else if (num == 8){
    if (board[5] === null){
      board[5] = 1;
      $('#middlerightbox').addClass('boxbrown');
      console.log(board);
      checkCpuWin();
    } else {
      cpuChoice();
    }
  } else if (num == 9){
    if (board[3] === null){
      board[3] = 1;
      $('#middleleftbox').addClass('boxbrown');
      console.log(board);
      checkCpuWin();
    } else {
      cpuChoice();
    }
  } else if (num === 10){
    if (board[4] === null){
      board[4] = 1;
      $('#middlemiddlebox').addClass('boxbrown');
      console.log(board);
      checkCpuWin();
    } else {
      cpuChoice();    }
  }
}

//check for CPU win conditions
function checkCpuWin(){
  if (board[0] + board[1] + board[2] === 3){
    console.log('CPU WIN!');
    cpuScore += 1;
    updateCpuScore();
    resetBoard();
  } else if (board[3] + board[4] + board[5] === 3){
    console.log('CPU WIN!');
    cpuScore += 1;
    updateCpuScore();
    resetBoard();
  } else if (board[6] + board[7] + board[8] === 3){
    console.log('CPU WIN!');
    cpuScore += 1;
    updateCpuScore();
    resetBoard();
  } else if (board[0] + board[3] + board[6] === 3){
    console.log('CPU WIN!');
    cpuScore += 1;
    updateCpuScore();
    resetBoard();
  } else if (board[1] + board[4] + board[7] === 3){
    console.log('CPU WIN!');
    cpuScore += 1;
    updateCpuScore();
    resetBoard();
  } else if (board[2] + board[5] + board[8] === 3){
    console.log('CPU WIN!');
    cpuScore += 1;
    updateCpuScore();
    resetBoard();
  } else if (board[0] + board[4] + board[8] === 3){
    console.log('CPU WIN!');
    cpuScore += 1;
    updateCpuScore();
    resetBoard();
  } else if (board[2] + board[4] + board[6] === 3){
    console.log('CPU WIN!');
    cpuScore += 1;
    updateCpuScore();
    resetBoard();
  }
}

function updateCpuScore(){
  cpuScoreText = document.getElementById('cpuscore');
  cpuScoreText.innerHTML = cpuScore;
}

//reset board spaces to null, remove pictures
function resetBoard(){
  for (var i = 0; i < board.length; i++){
    board[i] = null;
  }
  console.log(board);
}

//image link arrays
var jackPic = ["url('file:///Users/colin/Desktop/tictactoe/images/jacks/1jack.jpg');",
            "url('file:///Users/colin/Desktop/tictactoe/images/jacks/2jack.jpg')",
            "url('file:///Users/colin/Desktop/tictactoe/images/jacks/3jack.jpg')"];


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
