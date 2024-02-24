let userName = 'Cece' 
  userName ? console.log(`Oh hello there, ${userName}, we've been expecting you!`) : console.log(`Don't you know its rude not to introduce yourself? No manners these days! `);

let userQuestion = 'Will the world end';
  console.log(`So ${userName}, you want to know: ${userQuestion}?`);

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = ''
  switch (randomNumber) {

    case 0 :
      eightBall = 'The gods are yet to determine your fate.';
      break;

    case 1 :
      eightBall = 'The Fates have spoken: it is certain.';
      break;

    case 2 :
      eightBall = 'The Nymphs magic has been cast, it is decidedly so.';
      break;

    case 3 :
      eightBall = 'The mists of the Underworld are upon you. Ask again.';
      break;

    case 4 :
      eightBall = 'The Titans shadows dark your fate, it is uncertain.';
      break;

    case 5 : 
      eightBall = 'The cold hands of Hades have been laid upon you. Do not count on it.';
      break;

    case 6 :
      eightBall = 'Pay homage to the Gods and you may yet triumph.';
      break;

    case 7 :
      eightBall = 'Seek a Hero dear friend, your prospects look  weak.';
      break;

    case 8 :
      eightBall = 'The power of the Gods wills it so.';
      break;
  
  }

console.log(eightBall);
