import React from "react";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { BiSkipPrevious } from "react-icons/bi";
import { BiSkipNext } from "react-icons/bi";
import { AiFillPauseCircle } from "react-icons/ai";
import { BiShuffle } from "react-icons/bi";
import { BiRepeat } from "react-icons/bi";
import { GiSpeaker } from "react-icons/gi";
import { AiOutlineFullscreen } from "react-icons/ai";
import { useState, useEffect } from "react";
import "./footerbar.css";
const FooterBar = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    // Update the time display every second
    const interval = setInterval(() => {
      if (isPlaying) {
        setCurrentTime((prevTime) => prevTime + 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const handlePlayToggle = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const volume = 50;
  return (
    <div className="col-12 songbar pt-3">
      <div className="row">
        <div className="col-4 text-white">
          <div className="d-flex mx-4 align-items-center">
            <img
              src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/artistic-album-cover-design-template-d12ef0296af80b58363dc0deef077ecc_screen.jpg?ts=1561488440"
              className="musicImage"
              alt=""
            />
            <div className="">
              <p className="p-0 m-0 custom-font">Ma Lar Chin Nae</p>
              <p className="p-0 m-0 small custom-font text-white-50">Wai La</p>
            </div>
            <MdOutlineFavoriteBorder className="mx-4" />
          </div>
        </div>
        <div className="col-4">
          <div className="text-white">
            <div className="text-center">
              <BiShuffle className="text-white fs-5 text-white-50 " />
              <BiSkipPrevious className="text-white fs-1  mx-3 text-white-50 " />
              <AiFillPauseCircle className="text-white fs-1 text-white" />
              <BiSkipNext className="text-white fs-1  mx-3 text-white-50" />
              <BiRepeat className="text-white fs-5 text-white-50 " />
            </div>

            <div className="music-bar w-100 pt-3">
              <div
                className="progress bg-success"
                style={{ height: "4px" }}
              ></div>
              <div className="controls d-flex align-items-center mt-3">
                {/* <button
                    className={`play-btn btn btn-primary btn-sm ${isPlaying ? 'playing' : ''}`}
                    onClick={handlePlayToggle}
                    ></button> */}
                {/* <div className="time ml-2">{formatTime(currentTime)}</div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="col-4 text-center d-flex justify-content-center">
          <div className="container">
            <div className="row">
              <div className="col-6"></div>
              <div className="col-4 mt-3 d-flex align-items-center">
                <GiSpeaker className="fs-3 text-white" />
                {/* <VolumeBar volume={volume} /> */}
              </div>
              <div className="col-2 mt-3 d-flex align-items-center">
                <AiOutlineFullscreen className="text-white fs-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBar;
