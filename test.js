const collection = require('./src/interface/collection');

// TESTS FOR INTERFACE

// collection for testing
const testCollection = {
  miles_davis: {
    albums: [
      { title: 'silent_way', played: false },
      { title: 'on_the_corner', played: false },
    ],
  },
  wayne_shorter: {
    albums: [
      { title: 'out_to_lunch', played: false },
      { title: 'juju', played: false },
    ],
  },
};

// create instance of collection passing in testCollection
const myCollection = collection(testCollection);

console.log(
  '\x1b[35m',
  '\n----- should add "Pink Flag" by Wire to collection -------\n'
);
myCollection.addAlbum('Pink Flag', 'Wire');

console.log(
  '\x1b[35m',
  '\n----- should show entire collection including "Pink Flag" by Wire -------\n'
);
myCollection.printAlbums('all');

console.log(
  '\x1b[35m',
  '\n----- should play "On the Corner" by Miles Davis -------\n'
);
myCollection.playAlbum('On The Corner');

console.log(
  '\x1b[35m',
  '\n----- should play "Silent Way" by Miles Davis -------\n'
);
myCollection.playAlbum('Silent Way');

console.log(
  '\x1b[35m',
  '\n----- should show both albums by Miles Davis as (played)-------\n'
);
myCollection.printAlbums('Miles Davis');

console.log('\x1b[35m', '\n----- should show all unplayed albums -------\n');
myCollection.printAlbums('all', 'unplayed');

console.log(
  '\x1b[35m',
  '\n----- should show all unplayed albums by Wayne Shorter-------\n'
);
myCollection.printAlbums('Wayne Shorter', 'unplayed');

console.log(
  '\x1b[35m',
  "\n----- should print error 'an album with that title already exists in your collection' -------\n"
);
myCollection.addAlbum('Silent Way', 'Justin Bieber');

module.exports = collection;
