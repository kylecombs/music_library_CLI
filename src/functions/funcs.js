const { formatForObject, formatForDisplay } = require('./utils');
const { green, red } = require('../../terminalColorize');
// function for show albums
const printAlbums = (state) => ({
  printAlbums: (artistName, unplayed) => {
    let artists = Object.keys(state.collection);
    // if artist is specified, filter by artist
    if (artistName && artistName !== 'all') {
      const artistNameFormatted = formatForObject(artistName);
      artists = artists.filter((artist) => artist === artistNameFormatted);
    }
    artists.forEach((artist) => {
      const artistToPrint = formatForDisplay(artist);
      state.collection[artist].albums.forEach((album) => {
        const title = formatForDisplay(album.title);
        // if unplayed is specified, only print unplayed albums
        if (unplayed) {
          if (!album.played) {
            console.log(green, `"${title}" by ${artistToPrint}`);
          }
          // if neither artist or unplayed is specified print all albums
        } else {
          console.log(
            green,
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
    const albumInCollection = state.findAlbum(title) !== null;

    // if album is not in collection add album
    if (!albumInCollection) {
      // if artist exists in collection add to albums
      if (state.collection[artist]) {
        state.collection[artist].albums.push({ title, played: false });
      } else {
        // if artist does not exist in collection add artist and album
        state.collection[artist] = { albums: [{ title, played: false }] };
      }
      console.log(green, `Added "${displayTitle}" by ${displayArtist}`);
    } else {
      // is album does exist in collection display error
      console.error(
        red,
        'an album with that title already exists in your collection'
      );
    }
  },
});

// function for play album
const playAlbum = (state) => ({
  playAlbum: (title) => {
    title = formatForDisplay(title);
    const album = state.findAlbum(title);
    if (album) {
      album.played = true;
      console.log(green, `You're listening to "${title}"`);
    } else {
      console.log(red, "can't find that album in you collection");
    }
  },
});

// finder ulitity function for single album
const findAlbum = (state) => ({
  findAlbum: (title) => {
    title = formatForObject(title);
    for (let artist in state.collection) {
      const album = state.collection[artist].albums.filter((album) => {
        return album.title === title;
      })[0];
      if (album) {
        return album;
      }
    }
    return null;
  },
});

module.exports = { printAlbums, addAlbum, playAlbum, findAlbum };
