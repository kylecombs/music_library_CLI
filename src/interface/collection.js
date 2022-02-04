const { printAlbums, addAlbum, playAlbum } = require('../functions/funcs');

// collection interface using a functional, composition over inheritance pattern
const collection = (collection = {}) => {
  const state = collection;

  return Object.assign(
    {},
    printAlbums(state),
    addAlbum(state),
    playAlbum(state)
  );
};

module.exports = collection;
