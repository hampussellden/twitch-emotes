//Generate an emote bullet
const createEmote = (emote, area) => {
  const image = document.createElement('img');
  image.src = emote;
  image.classList.add('bullet');
  area.appendChild(image);
};
const getEmote = () => {
  const index = Math.floor(Math.random() * (emotes.length - 0));
  return emotes[index];
};

// random Number function inspired by https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
const getRandomArbitrary = (min, max) => {
  return Math.random() * (max - min) + min;
};

//shuffle function copied from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;
  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
};

//create dancers
const createDancer = (i) => {
  const dancer = document.createElement('img');
  dancer.src = gifs[i];
  dancer.classList.add('dancer');
  dancers.append(dancer);
};
