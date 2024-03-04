export interface SelectedSong {
  musicList: Song[];
}

export interface Song {
  id: number;
  artist: string;
  src: string;
  title: string;
}
