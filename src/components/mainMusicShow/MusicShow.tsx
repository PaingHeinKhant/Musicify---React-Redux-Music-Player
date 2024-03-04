import React, { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";
import { IoReorderThreeOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

import { SlLoop } from "react-icons/sl";
import {
  TbPlayerTrackPrevFilled,
  TbPlayerTrackNextFilled,
} from "react-icons/tb";
import { HiSpeakerWave } from "react-icons/hi2";
import { HiSpeakerXMark } from "react-icons/hi2";
import { PiScribbleLoopDuotone } from "react-icons/pi";
import { MdLyrics } from "react-icons/md";
import Drawer from "../drawer/Drawer";
import demo from "../../assets/videos/demo.mp4";
import tracks from "../../tracks";
import * as musicShowInter from "../../interfaces/musicShow";
import "./musicShow.css";

const MusicShow = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [currentSong, setCurrentSong] = useState(null);
  const [volume, setVolume] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isLooping, setIsLooping] = useState(false);

  const currentSongs = useSelector(
    (state: musicShowInter.SelectedSong) => state.musicList.selectedSong
  );

  useEffect(() => {
    if (currentSongs) {
      setCurrentSong(currentSongs);
      setIsPlaying(true);
    }
    if (audioRef.current) {
      audioRef.current.removeEventListener("ended", handleSongEnd);
    }
  }, [currentSongs]);

  useEffect(() => {
    setCurrentSong(tracks[currentSongIndex]);
  }, [currentSongIndex]);
  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  useEffect(() => {
    // Check if audioRef and audioRef.current are not null
    if (audioRef.current) {
      audioRef.current.volume = volume;
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
      if (currentSong) {
        audioRef.current.addEventListener("timeupdate", handleTimeUpdate);
        audioRef.current.addEventListener("loadedmetadata", () => {
          setDuration(audioRef.current.duration);
        });
        audioRef.current.addEventListener("ended", handleSongEnd);
      }
      return () => {
        if (audioRef.current) {
          audioRef.current.removeEventListener("timeupdate", handleTimeUpdate);
          audioRef.current.removeEventListener("loadedmetadata", () => {
            setDuration(audioRef.current.duration);
          });
          audioRef.current.removeEventListener("ended", handleSongEnd);
        }
      };
    }
  }, [isPlaying, volume]);

  const handleSongEnd = () => {
    nextSongHandler();
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  const audioRef = useRef<any>(null);

  const openDrawer = () => setDrawerOpen(true);
  const closeDrawer = () => setDrawerOpen(false);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (event) => {
    const newVolume = parseFloat(event.target.value);
    setVolume(newVolume);
  };

  const nextSongHandler = () => {
    setCurrentSongIndex((prevIndex) =>
      prevIndex === tracks.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSongHandler = () => {
    setCurrentSongIndex((prevIndex) =>
      prevIndex === 0 ? tracks.length - 1 : prevIndex - 1
    );
  };

  const loopHandlerFn = () => {
    if (isLooping) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

  const handleSeek = (event) => {
    const newTime = parseFloat(event.target.value);
    setCurrentTime(newTime);
    audioRef.current.currentTime = newTime;
  };

  const onLoop = () => {
    setIsLooping(!isLooping);
  };

  return (
    <div>
      <video src={demo} autoPlay muted loop id="myVideo"></video>
      <Drawer open={drawerOpen} onClose={closeDrawer} />
      <div
        className={`min-vh-100 content background container-fluid ${
          drawerOpen ? "pushed" : ""
        }`}
      >
        <div className="container min-vh-100 d-flex align-items-center">
          <div className="row">
            <div className="col-3"></div>
            <div className="col-6 my-5">
              <div className="d-flex align-items-center justify-content-between ">
                <div className="">
                  {drawerOpen ? (
                    <RxCross2
                      className="fs-1 text-white "
                      onClick={() => closeDrawer()}
                    />
                  ) : (
                    <IoReorderThreeOutline
                      className="fs-1 text-white "
                      onClick={() => openDrawer()}
                    />
                  )}
                </div>
                <div className="">Helo</div>
              </div>
              <div className="d-flex justify-content-center">
                <video
                  src={demo}
                  className="w-75 rounded rounded-4"
                  autoPlay
                  muted
                  loop
                ></video>
              </div>
              <div className="d-flex align-items-center justify-content-between ">
                <div className="text-white my-4 text-start">
                  {currentSong && (
                    <>
                      <h3>{currentSong.title}</h3>
                      <p>{currentSong.artist}</p>
                    </>
                  )}
                </div>{" "}
                <div className="d-flex align-items-center ">
                  <input
                    type="range"
                    min={0}
                    max={1}
                    step="0.01"
                    value={volume}
                    onChange={handleVolumeChange}
                  />
                  {volume == 0 ? (
                    <HiSpeakerXMark className="fs-3 text-white ms-2" />
                  ) : (
                    <HiSpeakerWave className="fs-3 text-white ms-2" />
                  )}
                </div>
              </div>

              <div className="text-center text-white mt-5 mb-2">
                <span className="text-white">{formatTime(currentTime)}</span>
                <input
                  type="range"
                  min={0}
                  className="w-50 mx-4 bg-danger"
                  max={duration || 0}
                  step="0.01"
                  value={currentTime}
                  onChange={handleSeek}
                />
                <span className="text-white">{formatTime(duration)}</span>
              </div>
              <div className=" text-center">
                <MdLyrics className="fs-2 mx-4 text-white " />
                <button onClick={prevSongHandler} className="btn btn-link">
                  <TbPlayerTrackPrevFilled className="fs-2 mx-4 text-white " />
                </button>
                <button onClick={handlePlayPause} className="btn btn-link">
                  {isPlaying ? (
                    <FaPauseCircle className="display-3 mx-4 text-white " />
                  ) : (
                    <FaPlayCircle className="display-3 mx-4 text-white " />
                  )}
                </button>
                <button onClick={nextSongHandler} className="btn btn-link">
                  <TbPlayerTrackNextFilled className="fs-2 mx-4 text-white " />
                </button>
                <button className="btn btn-link" onClick={onLoop}>
                  {isLooping ? (
                    <PiScribbleLoopDuotone className="fs-2 mx-4 text-white " />
                  ) : (
                    <SlLoop className="fs-2 mx-4 text-white " />
                  )}
                </button>
              </div>

              {currentSong && (
                <audio
                  ref={audioRef}
                  src={currentSong.src}
                  autoPlay={isPlaying}
                />
              )}
            </div>
            <div className="col-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicShow;
