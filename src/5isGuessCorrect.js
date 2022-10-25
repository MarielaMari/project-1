import rl from 'readline-sync';
import {getRandomMovie} from './3getRandomMovie';

const playersGuess = rl.question ('Which movie is this? Enter your guess: ');
console.log ();

export const isGuessCorrect = playersGuess => {
  if (playersGuess === getRandomMovie.title) {
    console.log ('Your guess is correct! Good job!');
  } else {
    console.log (
      `Sorry, wrong answer. The correct answer is "${getRandomMovie.title}"`
    );
  }
};

isGuessCorrect ();
