import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clickedSong } from "../../store/actions/musicList";
import { motion } from "framer-motion";
import { FaArrowCircleLeft } from "react-icons/fa";

import "./musicList.css";
import tracks from "../../tracks";
import * as musicList from "../../interfaces/musicList";

const MusicLists = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const playTrack = (track: musicList.lists) => {
    dispatch(clickedSong(track));
  };
  return (
    <div className="bg-black  min-vh-100 ">
      <div className="container">
        <div className="row">
          <div className="col-12 mt-4 mx-3">
            <div className="">
              <div
                className="text-white d-flex align-items-center mb-3"
                onClick={() => navigate(-1)}
              >
                <FaArrowCircleLeft className="fs-3 me-2" />
                <p className="m-0">Back To Discover</p>
              </div>
            </div>
            <h1 className="text-white mb-4">Song Lists</h1>
            <hr className="text-white" />
            {tracks.map((track) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                className="my-2 track-item "
                key={track.id}
              >
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
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicLists;
