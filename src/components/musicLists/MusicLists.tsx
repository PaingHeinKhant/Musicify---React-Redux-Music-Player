import { useDispatch } from "react-redux";
import { clickedSong } from "../../store/actions/musicList";

import "./musicList.css";
import tracks from "../../tracks";
import * as musicList from "../../interfaces/musicList";

const MusicLists = () => {
  const dispatch = useDispatch();

  const playTrack = (track: musicList.lists) => {
    dispatch(clickedSong(track));
  };
  return (
    <div className="bg-black  min-vh-100 ">
      <div className="container">
        <div className="row">
          <div className="col-12 mt-4 mx-3">
            <h1 className="text-white mb-4">Song Lists</h1>
            <hr className="text-white" />
            {tracks.map((track) => (
              <div className="my-2 track-item " key={track.id}>
                <div
                  className="row g-0 text-white border-bottom  py-3"
                  onClick={() => playTrack(track)}
                >
                  <div className="col-md-8 d-flex ">
                    <h2 className="me-4">{track.id}</h2>
                    <div className="card-body">
                      <p className="card-text m-0">{track.title}</p>
                      <p className="m-0 small">{track.artist}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicLists;
