//START GAME

import {welcomeMessage} from './welcomeMessage.js';
import {gameRules} from './gameRules.js';

import rl from 'readline-sync';
//import {getRandomMovie, movieChoices} from './getRandomMovie';
const player = rl.question ('\n What is your name? ');
console.log (`\n Hello ${player}! Have fun.\n`);

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
    id: '003',
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
    id: '004',
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
    id: '005',
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
    id: '006',
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
export function getRandomMovie (movieChoices) {
  const length = movieChoices.length;
  const randomIndex = Math.floor (Math.random () * length);
  return movieChoices[randomIndex];
}

function playGame () {
  const randomMovie = getRandomMovie (movieChoices);
  console.log (
    `\n Here is the hint:
      Genre: "${randomMovie.genre}
      Year: ${randomMovie.year}
      Director: ${randomMovie.director}
      Stars: ${randomMovie.stars}"`
  );

 
  console.log ('\n');
  const playersGuess = rl.question ('Enter your guess: ');

  console.log ('\n');
  console.log (`Good bye ${player}! \nThank you for playing.`);

  if (playersGuess === randomMovie.title) {
    console.log ('Good job!');
    playGame ();
  }
}

//END GAME

playGame ();
