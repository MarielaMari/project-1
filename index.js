//START GAME

import {welcomeMessage} from './welcomeMessage.js';
import {gameRules} from './gameRules.js';

import rl from 'readline-sync';
import {getRandomMovie} from './getRandomMovie.js';

console.log();

const player = rl.question ('What is your name? ');
console.log ();
console.log (`Hello ${player}! Have fun.`);
console.log ();

export let movieChoices = [
  {
    id: '001',
    title: 'speed',
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
    title: 'twilight',
    genre: 'Drama, Fantasy, Romance',
    year: '2008',
    director: 'Catherine Hardwicke',
    stars: 'Kristen Sewart, Robert Pattinson',
    soundtrack: '',
    quote: '',
    didYouKnow: '',
  },
  {
    id: '003',
    title: 'scarface',
    genre: 'Crime, Drama',
    year: '1983',
    director: 'Brian De Palma',
    stars: 'Al Pacino, Michelle Pfeiffer',
    soundtrack: '',
    quote: '',
    didYouKnow: '',
  },
  {
    id: '004',
    title: 'frozen',
    genre: 'Animation, Adventure, Comedy',
    year: '2013',
    director: 'Chris Buck, Jennifer Lee',
    stars: 'Kristen Bell (voice), Ididna Menzel (voice)',
    soundtrack: '',
    quote: '',
    didYouKnow: '',
  },
  {
    id: '005',
    title: 'titanic',
    genre: 'Drama, Romance',
    year: '1997',
    director: 'James Cameron',
    stars: 'Kate Winslet, Leonardo DiCaprio',
    soundtrack: '',
    quote: '',
    didYouKnow: '',
  },
  {
    id: '006',
    title: 'salt',
    genre: 'Action, Thriller',
    year: '2010',
    director: 'Phillip Noyce',
    stars: 'Angelina Jolie',
    soundtrack: '',
    quote: '',
    didYouKnow: '',
  },
];

function playGame () {
  const randomMovie = getRandomMovie (movieChoices);
  console.log (
    ` Here is the hint:
      Genre: "${randomMovie.genre}"
      Year: ${randomMovie.year}
      Director: ${randomMovie.director}
      Stars: ${randomMovie.stars}`
  );

  console.log ();

  const playersGuess = rl.question ('Which movie is this? Enter your guess: ');
  console.log ();

  if (playersGuess === randomMovie.title) {
    console.log ('Good job!');

    console.log ();
    const playersNewExit = rl.question ('Would you like to play again? y/n: ');
    console.log ();

    if (playersNewExit === 'y') {
      playGame ();
    } else {
      console.log (`Thank you for playing! Good buy ${player}`);
    }
  } else {
    console.log ();
    console.log (
      `Sorry, wrong answer. The correct answer is "${randomMovie.title}"`
    );

    console.log ();
    const playersNewExit = rl.question ('Would you like to play again? y/n: ');
    console.log ();

    if (playersNewExit === 'y') {
      playGame ();
    } else {
      console.log (`Thank you for playing! Good buy ${player}`);
    }
  }
}

//END OF GAME

playGame ();
