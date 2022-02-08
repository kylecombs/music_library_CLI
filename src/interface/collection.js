const {
  printAlbums,
  addAlbum,
  playAlbum,
  findAlbum,
} = require('../functions/funcs');

// collection interface using a functional, composition over inheritance pattern
const Collection = (collection = {}) => {
  this.collection = collection;
  return Object.assign(
    this,
    printAlbums(this),
    addAlbum(this),
    playAlbum(this),
    findAlbum(this)
  );
};

module.exports = Collection;
