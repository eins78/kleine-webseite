// tmp: data format experiments
// var setup = {
//   "things":     [ 'rock'   , 'paper' , 'scissors' ],
//   "rules": [                                  
//    /*rock*/     [  null    ,  false  ,  'dulls'   ],
//    /*paper*/    [  'wraps' ,   null  ,   false    ],
//    /*scissors*/ [  false   ,  'cuts' ,    null    ]
//   ]
// }
// 
// var setup = {
//   "things":        [ 'hirst'           , 'beuys'   , 'warhol'               ],
//   "rules": [                                             
//    /*hirst*/       [  null             , 'outsells', false                  ],
//    /*beuys*/       [  false            ,    null   , 'is more diverse than' ],
//    /*warhol*/      [  'is more famous' ,   false   , null                   ]
//   ]
// }
// 
// var setup = {
//   "things":     [  'rock'   ,'paper', 'scissors', 'lizard',  'spock'   ],
//   "rules": [
//    /*rock*/     [    null   , false ,  'dulls'  ,'crushes',   false    ],
//    /*paper*/    [  'wraps'  ,  null ,   false   ,  false  ,'disproves' ],
//    /*scissors*/ [   false   , 'cuts',    null   , 'stabs' ,   false    ],
//    /*lizard*/   [   false   , 'eats',    false  ,   null  , 'poisons'  ],
//    /*spock*/    ['vaporizes',  false, 'smashes' ,  false  ,    null    ]
//   ]
// }


// ROCK/PAPER/SCISSORS game

// # Data
var score = {
  human: 0,
  computer: 0
},
  playThings = [
  'rock', 'paper', 'scissors'
];

// # Workflow
$(document).ready(function () {
  // find all the things, loop over each with a function
  $('#playThings li').each(function () {
    // atach a function as 'clickhandler' (playGame)
    // it is run when an element is clicked in the browser.
    $(this).on('click', function (e) {
      // We find the element that was clicked on
      // and get its 'class' property.
      var thing = $(e.target).prop('class');
      // Then we play the game (we call the function, its first argument is the thing we are playing this round).
      console.log(thing)
      playGame(thing);
    });
  });
});

// # Functions
function playGame(humanPlays) {
  // This function gets called everytime a 'playThing' element is clicked in the browser.
  // We get 1 argument, a string with name of thing.

  console.log("Human plays: "+humanPlays);

  // variables
  var random, computerPlays, winner;
  
  // computer's move

  // we get a random number between 0 and 2
  random = getRandomInt(0,2);

  // playthings are numbered 0 to 2, we take a random one.
  computerPlays = playThings[random];
  
  console.log("Computer plays: "+computerPlays);
  
  // decide result
  
  // If both played the same.
  if (humanPlays === computerPlays) {
    winner = "nobody";
  }
  else {
    
    // If the human played "rock", 
    if (humanPlays === 'rock') {
      // he can only win against "scissors".
      if (computerPlays === 'scissors') {
        winner = 'human';
      } else {
        winner = 'computer';
      }
    }
  
    // If the human played "paper", 
    if (humanPlays === 'paper') {
      // he can only win against "rock".
      if (computerPlays === 'rock') {
        winner = 'human';
      } else {
        winner = 'computer';
      }
    }
  
    // If the human played "scissors", 
    if (humanPlays === 'scissors') {
      // he can only win against "paper".
      if (computerPlays === 'paper') {
        winner = 'human';
      } else {
        winner = 'computer';
      }
    }
  }
  
  // we should have found a winner…
  // if not: error
  if (!winner) {
    throw new Error("Does not compute!");
  } else {
    // declare result
    var msg = humanPlays+'/'+computerPlays+" - ";
    
    if (winner === 'nobody') {
      msg = msg+"Tie!";
    }
    else if (winner === 'human') {
      msg = msg+"Human wins!";
      score.human = score.human + 1;
    }
    else if (winner === 'computer') {
      msg = msg+"Computer wins!";
      score.computer = score.computer + 1;
      console.log("Kill all Humans!");
    }
    
    // show message and add to log
    $('#result .message').text(msg);
    $('#log').prepend($('<p>').text('msg'));
    
    // update score in browser
    $('#result .score').text(score.human + " : " + score.computer);
  }
  
}

// 'Math.random' example from
// <https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Math/random>
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}