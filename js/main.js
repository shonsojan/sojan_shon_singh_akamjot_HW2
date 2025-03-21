import { MusicBook } from './musicbook.js';

const musicBook = new MusicBook();

document.querySelector('#musicForm').addEventListener('submit', addMusic);

function addMusic(event) {
  event.preventDefault();  // Prevent form submission and page reload

  const name = document.querySelector('#musicName').value;
  const artist = document.querySelector('#musicArtist').value;
  const release = document.querySelector('#musicRelease').value;

  musicBook.addMusic(name, artist, release);

  // Clear input fields
  document.querySelector('#musicName').value = '';
  document.querySelector('#musicArtist').value = '';
  document.querySelector('#musicRelease').value = '';

  // Render updated music list
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
    releaseParagraph.textContent = 'Music Release: ' + music.release;
    musicItem.appendChild(releaseParagraph);

    musicsElement.appendChild(musicItem);
  });
}

renderMusics();
