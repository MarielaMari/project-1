//START GAME

//TODO: to create separate welcomeMessage.js file
function welcomeMessage () {
  console.log ('\n Welcome to "Guess the One Word Movie Title" ');
}
welcomeMessage ();

//TODO: to create separate gameRules.js file
function gameRules () {
  console.log (
    ` \n
    GAME RULES:
   1. Use small letters only. // TODO: Check, it might not be case sensitive!
   2. After the information about the movie is displayied,
      you have three tries to guess the name of the movie.
   3. If you have not guessed the movie, after your tird try
      you will have a choice to play again, exit or start a new game.
      
      POINTS: You win one point every time when you guess a movie.\n`
  );
}
gameRules ();

import rl from 'readline-sync';
const player = rl.question ('\n What is your name? ');
console.log (`\n Hello ${player}! Have fun.\n`);

//TODO: fix the radom function
////TODO: to create separate getRandomMovie.js file

//movieChoices.forEach((item) => console.log(item));

let movieChoices = [
  {
    id: '001',
    title: 'Speed',
    genre: 'Action, Adventure, Crime',
    year: '1994',
    director: 'Jan De Bont',
    stars: 'Sandra Bullock, Keanu Reeves',
    soundtrack: '',
    quote: '',
    didYouKnow: '',
  },
  {
    id: '002',
    title: "The Devil's Advocate",
    genre: 'Drama, Mystery, Thriller',
    year: '1997',
    director: 'Tylor Hackford',
    stars: 'Al Pacino, Keanu Reeves',
    soundtrack: '',
    quote: '',
    didYouKnow: '',
  },
  {
    id: '003',
    title: 'Twilight',
    genre: 'Drama, Fantasy, Romance',
    year: '2008',
    director: 'Catherine Hardwicke',
    stars: 'Kristen Sewart, Robert Pattinson',
    soundtrack: '',
    quote: '',
    didYouKnow: '',
  },
  {
    id: '004',
    title: 'Scarface',
    genre: 'Crime, Drama',
    year: '1983',
    director: 'Brian De Palma',
    stars: 'Al Pacino, Michelle Pfeiffer',
    soundtrack: '',
    quote: '',
    didYouKnow: '',
  },
  {
    id: '005',
    title: 'Frozen',
    genre: 'Animation, Adventure, Comedy',
    year: '2013',
    director: 'Chris Buck, Jennifer Lee',
    stars: 'Kristen Bell (voice), Ididna Menzel (voice)',
    soundtrack: '',
    quote: '',
    didYouKnow: '',
  },
  {
    id: '006',
    title: 'Titanic',
    genre: 'Drama, Romance',
    year: '1997',
    director: 'James Cameron',
    stars: 'Kate Winslet, Leonardo DiCaprio',
    soundtrack: '',
    quote: '',
    didYouKnow: '',
  },
  {
    id: '007',
    title: 'Salt',
    genre: 'Action, Thriller',
    year: '2010',
    director: 'Phillip Noyce',
    stars: 'Angelina Jolie',
    soundtrack: '',
    quote: '',
    didYouKnow: '',
  },
];

function getRandomMovie (movieChoices) {
  const length = movieChoices.length;
  const randomIndex = Math.floor (Math.random () * length);
  return movieChoices[randomIndex];
}
const randomMovie = getRandomMovie (movieChoices);
console.log (
  `\n Here is your first movie hint, genre is: ${randomMovie.genre}`
);

console.log ('\n');
const playerFirstGuess = rl.question ('Enter your first guess: ');

//TODO: Use setTimeOut, 3000

console.log ('\n');
const playerSecondGuess = rl.question ('Enter your second guess: ');

//TODO: Use setTimeOut, 3000

console.log ('\n');
const playerThirdGuess = rl.question ('Enter your third guess: ');

//TODO: Use setTimeOut, 3000 Would you like to play again, exit the game or play a new game?

console.log ('\n');
console.log ('This was your third try.');
console.log ('Please, choose: play again or start new game');

console.log ('\n');
console.log (`Good bye, ${player}! Thank you for playing.`);

//Movie titles to use in an array/database:
//Silence of the Lambs, Slumdog Millionaire, Friends, Dirty Dancing, Twilight, The Devil's Advocate,
//END
