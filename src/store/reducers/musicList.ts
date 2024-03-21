import * as type from "../types";

interface MusicState {
  selectedSong: any;
}

const initialState: MusicState = {
  selectedSong: null,
};

const musicListReducer = (state: MusicState = initialState, action: any) => {
  switch (action.type) {
    case type.CLICKED_SONG:
      return {
        ...state,
        selectedSong: action.payload,
      };
    default:
      return state;
  }
};

export default musicListReducer;
