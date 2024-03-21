import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";
import { MdOutlineLyrics } from "react-icons/md";
import { SlLoop } from "react-icons/sl";
import {
  TbPlayerTrackPrevFilled,
  TbPlayerTrackNextFilled,
} from "react-icons/tb";
import { HiSpeakerWave } from "react-icons/hi2";
import { HiSpeakerXMark } from "react-icons/hi2";
import { PiScribbleLoopDuotone } from "react-icons/pi";
import { MdLyrics } from "react-icons/md";
import demo from "../../assets/videos/demo.mp4";
import tracks from "../../tracks";
import * as musicShowInter from "../../interfaces/musicShow";
import "./musicShow.css";
import Navbar from "../nav/Navbar";
import MusicLists from "../musicLists/MusicLists";
import Lyrics from "../lyrics/Lyrics";

const MusicShow = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState<musicShowInter.Song | null>(
    null
  );
  const [volume, setVolume] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isLooping, setIsLooping] = useState(false);
  const [lyrics, setLyrics] = useState<musicShowInter.LyricData[]>([]);

  const currentSongs = useSelector(
    (state: any) => state.musicList.selectedSong
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

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  useEffect(() => {
    const updateLyrics = () => {
      const currentTime = audioRef.current.currentTime;
      const currentLyrics = currentSong?.lyricData.filter(
        (lyric) => lyric.time < currentTime
      );
      if (currentLyrics && currentLyrics.length > 0) {
        const last = currentLyrics.slice(-1);
        setLyrics(last);
      }
    };

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
        audioRef.current.addEventListener("timeupdate", updateLyrics);
        audioRef.current.addEventListener("loadedmetadata", () => {
          setDuration(audioRef.current.duration);
        });
        audioRef.current.addEventListener("ended", handleSongEnd);
      }
      return () => {
        if (audioRef.current) {
          audioRef.current.removeEventListener("timeupdate", updateLyrics);
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

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  const audioRef = useRef<any>(null);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (event: any) => {
    const newVolume = parseFloat(event.target.value);
    setVolume(newVolume);
  };

  const nextSongHandler = () => {
    if (currentSong) {
      const index = tracks.findIndex((track) => track.id === currentSong.id);
      const nextObject =
        index > -1 && index < tracks.length - 1 ? tracks[index + 1] : null;
      setCurrentSong(nextObject);
    }
  };

  const prevSongHandler = () => {
    if (currentSong) {
      const index = tracks.findIndex((track) => track.id === currentSong.id);
      const prevObject =
        index > -1 && index < tracks.length - 1 ? tracks[index - 1] : null;
      setCurrentSong(prevObject);
    }
  };

  // const loopHandlerFn = () => {
  //   if (isLooping && currentSong) {
  //     const index = tracks.findIndex((track) => track.id === currentSong.id);
  //     const loopSong =
  //       index > -1 && index < tracks.length - 1 ? tracks[index] : null;
  //     setCurrentSong(loopSong);
  //   }
  // };

  const handleSeek = (event: any) => {
    const newTime = parseFloat(event.target.value);
    setCurrentTime(newTime);
    audioRef.current.currentTime = newTime;
  };

  const onLoop = () => {
    setIsLooping(!isLooping);
  };

  const [sidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
    setIsVideoPlaying(!isVideoPlaying);
  };

  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  const [randomColor, setRandomColor] = useState("");

  useEffect(() => {
    setRandomColor("#ffc107");
  }, [isVideoPlaying]);

  return (
    <>
      <div className="container-fluid ">
        <div className="row">
          <Navbar
            toggleSidebar={toggleSidebar}
            sidebarVisible={sidebarVisible}
          />
          <div className={` col-3 p-0 ${sidebarVisible ? "" : "d-none"}`}>
            <MusicLists />
          </div>
          <div
            className={`col-9 p-0  ${
              sidebarVisible ? "col-9" : "col-12 content"
            }`}
          >
            <div>
              <div className="container p-0 d-flex">
                <div>
                  {isVideoPlaying ? (
                    <video src={demo} autoPlay muted loop id="myVideo"></video>
                  ) : (
                    <div
                      style={{ backgroundColor: randomColor }}
                      id="myVideo"
                    ></div>
                  )}
                </div>
                <div className="row align-items-center justify-content-end w-100 min-vh-100 ">
                  <div className="col-1"></div>
                  <div className="col-10 my-2">
                    <div className="d-flex justify-content-center"></div>
                    <div className="text-center mb-3">
                      {isFlipped ? <Lyrics lyrics={lyrics} /> : ""}
                    </div>
                    <div className="d-flex align-items-center justify-content-around  ">
                      <div className="text-white my-4 ">
                        {currentSong ? (
                          <>
                            <h3>{currentSong.title}</h3>
                            <p>{currentSong.artist}</p>
                          </>
                        ) : (
                          <h3>Choose your Play Song </h3>
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
                      <span className="text-white">
                        {formatTime(currentTime)}
                      </span>
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
                      <button onClick={toggleFlip} className="btn btn-link">
                        {isFlipped ? (
                          <MdLyrics className="fs-2 mx-2  text-success " />
                        ) : (
                          <MdOutlineLyrics className="fs-2 mx-2 text-white " />
                        )}
                      </button>

                      <button
                        onClick={prevSongHandler}
                        className="btn btn-link"
                      >
                        <TbPlayerTrackPrevFilled className="fs-2 mx-2 text-white " />
                      </button>
                      <button
                        onClick={handlePlayPause}
                        className="btn btn-link"
                      >
                        {isPlaying ? (
                          <FaPauseCircle className="display-2 mx-2 text-white " />
                        ) : (
                          <FaPlayCircle className="display-2 mx-2 text-white " />
                        )}
                      </button>
                      <button
                        onClick={nextSongHandler}
                        className="btn btn-link"
                      >
                        <TbPlayerTrackNextFilled className="fs-2 mx-2 text-white " />
                      </button>
                      <button className="btn btn-link" onClick={onLoop}>
                        {isLooping ? (
                          <PiScribbleLoopDuotone className="fs-2 mx-2 text-white " />
                        ) : (
                          <SlLoop className="fs-2 mx-2 text-white " />
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
                  <div className="col-1"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MusicShow;
