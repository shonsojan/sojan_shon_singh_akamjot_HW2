import { MusicBook } from './musicbook.js';

const musicBook = new MusicBook();

document.querySelector('#musicForm button').addEventListener('click', addMusic);
function addMusic() {
  const name = document.querySelector('#musicName').value;
  const artist = document.querySelector('#musicArtist').value;
  const releases = document.querySelector('#musicReleases').value;

  musicBook.addMusic(name, artist, releases);

  document.querySelector('#musicName').value = '';
  document.querySelector('#musicArtist').value = '';
  document.querySelector('#musicReleases').value = '';

  // Render Musics
  renderMusics();
}

// Function to render musics
function renderMusics() {
  const musicsElement = document.querySelector('#musics');
  musicsElement.innerHTML = '';

  musicBook.getMusics().forEach(music => {
    const musicItem = document.createElement('li');

    const musicNameHeading = document.createElement('h3');
    musicNameHeading.textContent = music.name;
    musicItem.appendChild(musicNameHeading);

    const artistParagraph = document.createElement('p');
    artistParagraph.textContent = 'Music Artist: ' + music.artist;
    musicItem.appendChild(artistParagraph);

    const releaseParagraph = document.createElement('p');
    releaseParagraph.textContent = 'Music Release: ' + music.releases;
    musicItem.appendChild(releaseParagraph);

    musicsElement.appendChild(musicItem);
  });
}

renderMusics();
