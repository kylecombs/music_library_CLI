const collection = (collection = {}) => {
  const state = collection;

  return Object.assign({}, printAlbums(state), addAlbum(state));
};

const printAlbums = (state) => ({
  printAlbums: (artistName, unplayed) => {
    let artists = Object.keys(state);
    // if artist is specified, filter by artist
    if (artistName && artistName !== 'all') {
      artists = artists.filter((artist) => artist === artistName);
    }

    artists.forEach((artist) => {
      state[artist].albums.forEach((album) => {
        // if unplayed is specified, only print unplayed albums
        if (unplayed) {
          if (!album.played) {
            console.log(`"${album.title}" by ${artist}`);
          }
          // if neither artist or unplayed is specified print all albums
        } else {
          console.log(
            `"${album.title}" by ${artist} (${
              album.played ? 'played' : 'unplayed'
            })`
          );
        }
      });
    });
  },
});

const addAlbum = (state) => ({
  addAlbum: (title, artist) => {
    // if artist exists in collection add to albums
    if (state[artist]) {
      state[artist].albums.push({ title, played: false });
    } else {
      // if artist does not exist in collection add artist and album
      state[artist] = { albums: [{ title, played: false }] };
    }
  },
});

const testCollection = {
  miles_davis: {
    albums: [
      { title: 'silent_way', played: false },
      { title: 'on_the_corner', played: true },
    ],
  },
  wayne_shorter: {
    albums: [
      { title: 'out_to_lunch', played: false },
      { title: 'juju', played: false },
    ],
  },
};

const myCollection = collection(testCollection);

myCollection.printAlbums('miles_davis', true);

module.exports = collection;
