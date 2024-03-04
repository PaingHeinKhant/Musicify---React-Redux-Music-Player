import { RiNeteaseCloudMusicFill } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
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
    <div className="background-color min-vh-100 text-warning ">
      <div className="container">
        <div className="row">
          <div className="col-12 mt-4 ">
            {/* header */}
            <div className="d-flex mb-5">
              <RiNeteaseCloudMusicFill className="fs-1 me-1" />
              <h3 className="text-uppercase m-0 ">Musicify</h3>
            </div>
            {tracks.map((track) => (
              <div className="my-2" key={track.id}>
                <div
                  className="row g-0 text-white"
                  onClick={() => playTrack(track)}
                >
                  <div className="col-md-2">
                    <img
                      src="https://indiater.com/wp-content/uploads/2021/06/Free-Music-Album-Cover-Art-Banner-Photoshop-Template.jpg"
                      className="img-fluid rounded w-100 rounded-4 p-2"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8 d-flex align-items-center ">
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
