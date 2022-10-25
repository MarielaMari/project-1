export function getRandomMovie (movieChoices) {
  const length = getRandomMovie.length;
  const randomIndex = Math.floor (Math.random () * length);
  return getRandomMovie[randomIndex];
}

getRandomMovie ();
