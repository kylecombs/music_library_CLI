const { formatForObject, formatForDisplay, findAlbum } = require('./utils');

// function for show albums
const printAlbums = (state) => ({
  printAlbums: (artistName, unplayed) => {
    let artists = Object.keys(state);
    // if artist is specified, filter by artist
    if (artistName && artistName !== 'all') {
      const artistNameFormatted = formatForObject(artistName);
      artists = artists.filter((artist) => artist === artistNameFormatted);
    }

    artists.forEach((artist) => {
      const artistToPrint = formatForDisplay(artist);
      state[artist].albums.forEach((album) => {
        const title = formatForDisplay(album.title);
        // if unplayed is specified, only print unplayed albums
        if (unplayed) {
          if (!album.played) {
            console.log('\x1b[32m', `"${title}" by ${artistToPrint}`);
          }
          // if neither artist or unplayed is specified print all albums
        } else {
          console.log(
            '\x1b[32m',
            `"${title}" by ${artistToPrint} (${
              album.played ? 'played' : 'unplayed'
            })`
          );
        }
      });
    });
  },
});

// function for add album
const addAlbum = (state) => ({
  addAlbum: (title, artist) => {
    title = formatForObject(title);
    artist = formatForObject(artist);
    const displayTitle = formatForDisplay(title);
    const displayArtist = formatForDisplay(artist);

    // check if album title exists in collection
    const albumInCollection = findAlbum(title, state) !== undefined;

    // if album is not in collection add album
    if (!albumInCollection) {
      // if artist exists in collection add to albums
      if (state[artist]) {
        state[artist].albums.push({ title, played: false });
      } else {
        // if artist does not exist in collection add artist and album
        state[artist] = { albums: [{ title, played: false }] };
      }
      console.log('\x1b[32m', `Added "${displayTitle}" by ${displayArtist}`);
    } else {
      // is album does exist in collection display error
      console.error(
        '\x1b[31m',
        'an album with that title already exists in your collection'
      );
    }
  },
});

// function for play album
const playAlbum = (state) => ({
  playAlbum: (title) => {
    const album = findAlbum(title, state);
    album.played = true;
    console.log('\x1b[32m', `You're listening to "${title}"`);
  },
});

module.exports = { printAlbums, addAlbum, playAlbum };
