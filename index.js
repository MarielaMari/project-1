console.log ('\n Welcome to "Guess the One Word Movie Title" ');

console.log ('\n');
console.log (
  ` GAME RULES:
  1. Use small letters only. // TODO: Check, it might not be case sensitive!
  2. After the information about the movie is displayied,
     you have three tries to guess the name of the movie.
  3. If you have not guessed the movie, after your tird try
     you will have a choice to play again, exit or start a new game.
     
     POINTS: You win one point every time when you guess a movie.`
);

console.log ('\n');
import rl from 'readline-sync';
const player = rl.question ('What is your name? ');
console.log (`Hello ${player}! Have fun. `);

console.log ('\n');
//TODO: decide on info from objects for each movie vs displaying dashes for the name of the movie
//TODO: need to use getRandomFromSet command to randomize themovie title choices


const movieTitles = [
   {tite:'Speed', genre:'Action, Adventure, Crime', year:'1994', director:'Jan De Bont', stars:'Sandra Bullock, Keanu Reeves', soundtrack:'', quote:'', didYouKnow:''},
   {tite:'The Devil\'s Advocate', genre:'Drama, Mystery, Thriller', year:'1997', director:'Tylor Hackford', stars:'Al Pacino, Keanu Reeves', soundtrack:'', quote:'', didYouKnow:''},
   {tite:'Twilight', genre:'Drama, Fantasy, Romance', year:'2008', director:'Catherine Hardwicke', stars:'Kristen Sewart, Robert Pattinson', soundtrack:'', quote:'', didYouKnow:''},
   {tite:'Scarface', genre:'Crime, Drama', year:'1983', director:'Brian De Palma', stars:'Al Pacino, Michelle Pfeiffer', soundtrack:'', quote:'', didYouKnow:''},
   {tite:'Frozen', genre:'Animation, Adventure, Comedy', year:'2013', director:'Chris Buck, Jennifer Lee', stars:'Kristen Bell (voice), Ididna Menzel (voice)', soundtrack:'', quote:'', didYouKnow:''},
   {tite:'Titanic', genre:'Drama, Romance', year:'1997', director:'James Cameron', stars:'Kate Winslet, Leonardo DiCaprio', soundtrack:'', quote:'', didYouKnow:''},
   {tite:'Salt', genre:'Action, Thriller', year:'2010', director:'Phillip Noyce', stars:'Angelina Jolie', soundtrack:'', quote:'', didYouKnow:''}
]

//TODO: the array objects were working; need to investigate the Eneter First

console.log ('\n');
import rl1 from 'readline-sync';
const playerFirstGuess = rl1.question ('Enter your first guess: ');

//TODO: Use setTimeOut, 3000

console.log ('\n');
import rl2 from 'readline-sync';
const playerSecondGuess = rl2.question ('Enter your second guess: ');

//TODO: Use setTimeOut, 3000

console.log ('\n');
import rl3 from 'readline-sync';
const playerThirdGuess = rl3.question ('Enter your third guess: ');

//TODO: Use setTimeOut, 3000 Would you like to play again, exit the game or play a new game?

console.log ('\n');
console.log ('This was your third try.');
console.log ('Please, choose: play again or start new game');

console.log ('\n');
console.log (`Good bye, ${player}! Thank you for playing.`);

//Movie titles to use in an array/database:
//Silence of the Lambs, Slumdog Millionaire, Friends, Dirty Dancing, Twilight, The Devil's Advocate,
