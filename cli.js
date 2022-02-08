const { red } = require('./terminalColorize');

const processInput = (input, collection, rl) => {
  const command = input.split(' ')[0];
  switch (command) {
    case 'quit':
      quit(rl);
      break;
    case 'add':
      add(input, collection);
      break;
    case 'play':
      play(input, collection);
      break;
    case 'show':
      show(input, collection);
      break;
    default:
      console.log(red, 'invalid command');
  }
};

// quit command
const quit = (rl) => {
  console.log('\nBye!\n');
  rl.close();
};

// add command
const add = (input, collection) => {
  // extract strings between quotes and remove whitespace and empty strings
  const inputArray = input.split('"').filter((e) => e && e !== ' ');
  const title = inputArray[1];
  const artist = inputArray[2];
  if (title && artist) {
    collection.addAlbum(title, artist);
  } else {
    invalid();
  }
};

// play command
const play = (input, collection) => {
  const inputArray = input.split('"').filter((e) => e && e !== ' ');
  const title = inputArray[1];
  if (title) {
    collection.playAlbum(title);
  } else {
    invalid();
  }
};

// show command
const show = (input, collection) => {
  const inputArray = input.split('"').filter((e) => e && e !== ' ');
  const options = inputArray[0].split(' ').filter((e) => e);
  const filterUnplayed = options[1] === 'unplayed';
  const filterArtist = options[2] === 'by';
  if (filterArtist) {
    const artist = inputArray[inputArray.length - 1];
    collection.printAlbums(artist, filterUnplayed);
  } else {
    collection.printAlbums('all', filterUnplayed);
  }
};

// invalid command error message
const invalid = () => {
  console.log(red, 'invalid command');
};

module.exports = processInput;
