export interface SelectedSong {
  musicList: Song[];
}

export interface LyricData {
  time: number;
  text: string;
}

export interface Song {
  id: number;
  title: string;
  artist: string;
  src: string;
  lyricData: LyricData[];
}
