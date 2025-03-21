// Music class
export class Music {
  constructor(id, name, artist, release) {
      this.id = id;
      this.name = name;
      this.artist = artist;
      this.release = release;
  }

  updateName(newName) {
      this.name = newName;
  }

  updateArtist(newArtist) {
      this.artist = newArtist;
  }

  updateRelease(newRelease) {
      this.release = newRelease;
  }
}

// MusicBook class
export class MusicBook {
  constructor() {
      this.musics = []; // Fixed the incorrect property name
  }

  addMusic(name, artist, release) {
      const id = this.musics.length + 1; // Generate unique ID
      const music = new Music(id, name, artist, release);
      this.musics.push(music);
  }

  removeMusic(id) {
      this.musics = this.musics.filter(music => music.id !== id);
  }

  getMusics() {
      return this.musics;
  }
}
