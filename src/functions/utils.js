// formatting utility function for adding to collection
const formatForObject = (string) => {
  return string.split(' ').join('_').toLowerCase();
};

// formatting utility function for printing to terminal
const formatForDisplay = (string) => {
  return string
    .split('_')
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
};

// finder ulitity function for single album
const findAlbum = (title, collection) => {
  title = formatForObject(title);
  for (let artist in collection) {
    return collection[artist].albums.filter(
      (album) => album.title === title
    )[0];
  }
};

module.exports = { formatForObject, formatForDisplay, findAlbum };
