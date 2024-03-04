import * as type from "../types";

const initialState = {
  selectedSong: null,
};

const musicListReducer = (state = initialState, action: any) => {
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
