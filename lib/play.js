const yts = require('yt-search')

const nyari = async (teks) => {
  let arama = await yts(teks);
  arama = arama.all;
  const title = arama[0].videoId
  return title
};

module.exports = nyari
