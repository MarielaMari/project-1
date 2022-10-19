export function getRandomMovie (movieChoices) {
    const length = movieChoices.length;
    const randomIndex = Math.floor (Math.random () * length);
    return movieChoices[randomIndex];
  }