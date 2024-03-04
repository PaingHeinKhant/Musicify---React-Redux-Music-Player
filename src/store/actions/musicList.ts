import * as type from "../types";

export const clickedSong = (song: any) => {
  return {
    type: type.CLICKED_SONG,
    payload: song,
  };
};
