import React, { useState } from "react";
import demo from "../../assets/videos/demo.mp4";
import "./playmusic.css";
import Lyrics from "../lyrics/Lyrics";

const PlayMusic = () => {
  const [activeTab, setActiveTab] = useState("up-next");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const MusicData = [
    {
      id: "1",
      title: "Ma Way Tat Chit Chin",
      artist: "N Kai Ra",
      viewer: "6K plays",
      coverUrl:
        "https://marketplace.canva.com/EAEqlr422aw/1/0/1600w/canva-falling-modern-aesthetic-music-album-cover-KsRCFSNg4XA.jpg",
      time: "4:00",
    },
    {
      id: "2",
      title: "Ta Tat Lone A Twat",
      artist: "Sai Leik",
      time: "4:00",
      viewer: "2B plays",
      coverUrl:
        "https://marketplace.canva.com/EAEqlr422aw/1/0/1600w/canva-falling-modern-aesthetic-music-album-cover-KsRCFSNg4XA.jpg",
    },
    {
      id: "3",
      title: "Way Nay Bay Mat",
      artist: "Tha O",
      time: "4:00",
      viewer: "10M plays",
      coverUrl:
        "https://marketplace.canva.com/EAEqlr422aw/1/0/1600w/canva-falling-modern-aesthetic-music-album-cover-KsRCFSNg4XA.jpg",
    },
    {
      id: "4",
      title: "Tate Tate Ka Lay",
      artist: "Joe Jar",
      time: "4:00",
      viewer: "5M plays",
      coverUrl:
        "https://marketplace.canva.com/EAEqlr422aw/1/0/1600w/canva-falling-modern-aesthetic-music-album-cover-KsRCFSNg4XA.jpg",
    },
    {
      id: "5",
      title: "Yone Par",
      artist: "Mg Mg Zaw Latt",
      time: "4:00",
      viewer: "89K plays",
      coverUrl:
        "https://marketplace.canva.com/EAEqlr422aw/1/0/1600w/canva-falling-modern-aesthetic-music-album-cover-KsRCFSNg4XA.jpg",
    },
    {
      id: "6",
      title: "Ta Nat Khar Chit Thu",
      artist: "Nay Nay",
      time: "4:00",
      viewer: "10K plays",
      coverUrl:
        "https://marketplace.canva.com/EAEqlr422aw/1/0/1600w/canva-falling-modern-aesthetic-music-album-cover-KsRCFSNg4XA.jpg",
    },
    {
      id: "7",
      title: "Pyae Sone Lonn",
      artist: "Zaw Paing",
      time: "4:00",
      viewer: "100K plays",
      coverUrl:
        "https://marketplace.canva.com/EAEqlr422aw/1/0/1600w/canva-falling-modern-aesthetic-music-album-cover-KsRCFSNg4XA.jpg",
    },
    {
      id: "6",
      title: "Ta Nat Khar Chit Thu",
      artist: "Nay Nay",
      time: "4:00",
      viewer: "10K plays",
      coverUrl:
        "https://marketplace.canva.com/EAEqlr422aw/1/0/1600w/canva-falling-modern-aesthetic-music-album-cover-KsRCFSNg4XA.jpg",
    },
    {
      id: "7",
      title: "Law Ka Kyoe Wine",
      artist: "Bo Phyu",
      time: "4:00",
      viewer: "37K plays",
      coverUrl:
        "https://marketplace.canva.com/EAEqlr422aw/1/0/1600w/canva-falling-modern-aesthetic-music-album-cover-KsRCFSNg4XA.jpg",
    },
    {
      id: "8",
      title: "Amay Yope Yay",
      artist: "Nay Paing",
      time: "4:00",
      viewer: "18K plays",
      coverUrl:
        "https://marketplace.canva.com/EAEqlr422aw/1/0/1600w/canva-falling-modern-aesthetic-music-album-cover-KsRCFSNg4XA.jpg",
    },

    {
      id: "9",
      title: "Eain Matt Saung Nya (Bonus)",
      artist: "Nay Thu",
      time: "2:00",
      viewer: "7K plays",
      coverUrl:
        "https://marketplace.canva.com/EAEqlr422aw/1/0/1600w/canva-falling-modern-aesthetic-music-album-cover-KsRCFSNg4XA.jpg",
    },
    {
      id: "10",
      title: "Latt Tee",
      artist: "Hein Win",
      time: "4:00",
      viewer: "120K plays",
      coverUrl:
        "https://marketplace.canva.com/EAEqlr422aw/1/0/1600w/canva-falling-modern-aesthetic-music-album-cover-KsRCFSNg4XA.jpg",
    },
  ];

  return (
    <div className="bg-body-background min-vh-100">
      <div className="width-frame">
        <div className="container">
          <div className="row">
            <div className="col-md-6 margin-top">
              <video
                src={demo}
                autoPlay
                muted
                loop
                id="myVideo"
                className="w-100"
              ></video>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-5 table-play my-5">
              <ul
                className="nav mb-3 d-flex justify-content-around text-white"
                id="pills-tab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link fs-6 bold text-white text-decoration-none ${
                      activeTab === "up-next" ? "active" : ""
                    }`}
                    id="pills-up-next-tab"
                    type="button"
                    role="tab"
                    aria-controls="pills-up-next"
                    aria-selected={activeTab === "up-next"}
                    onClick={() => handleTabClick("up-next")}
                  >
                    UP NEXT
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link fs-6 bold text-white text-decoration-none ${
                      activeTab === "lyrics" ? "active" : ""
                    }`}
                    id="lyrics-tab"
                    type="button"
                    role="tab"
                    aria-controls="pills-lyrics"
                    aria-selected={activeTab === "lyrics"}
                    onClick={() => handleTabClick("lyrics")}
                  >
                    LYRICS
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link fs-6 bold text-white text-decoration-none ${
                      activeTab === "related" ? "active" : ""
                    }`}
                    id="pills-related-tab"
                    type="button"
                    role="tab"
                    aria-controls="pills-related"
                    aria-selected={activeTab === "related"}
                    onClick={() => handleTabClick("related")}
                  >
                    RELATED
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="pills-tabContent">
                <div
                  className={`tab-pane fade ${
                    activeTab === "up-next" ? "show active" : ""
                  }`}
                  id="pills-up-next"
                  role="tabpanel"
                  aria-labelledby="pills-up-next-tab"
                >
                  <div className="music-data-container">
                    {MusicData.map((music, index) => (
                      <div className="container-fluid text-white" key={index}>
                        <div className="row d-flex align-items-center">
                          <div className="col-8">
                            <div className="d-flex align-items-center mt-3">
                              <img
                                width={40}
                                height={40}
                                src={music.coverUrl}
                                alt=""
                              />
                              <div className="ms-3">
                                <p className="m-0">{music.title}</p>
                                <p className="m-0">{music.artist}</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-4 d-flex justify-content-end">
                            <p className="m-0">{music.time}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div
                  className={`tab-pane fade ${
                    activeTab === "lyrics" ? "show active" : ""
                  }`}
                  id="pills-lyrics"
                  role="tabpanel"
                  aria-labelledby="lyrics-tab"
                >
                  {/* <Lyrics /> */}
                </div>
                <div
                  className={`tab-pane fade ${
                    activeTab === "related" ? "show active" : ""
                  }`}
                  id="pills-related"
                  role="tabpanel"
                  aria-labelledby="pills-related-tab"
                >
                  <div className="music-data-container">
                    {MusicData.map((music, index) => (
                      <div className="container-fluid text-white" key={index}>
                        <div className="row d-flex align-items-center">
                          <div className="col-8">
                            <div className="d-flex align-items-center mt-3">
                              <img
                                width={40}
                                height={40}
                                src={music.coverUrl}
                                alt=""
                              />
                              <div className="ms-3">
                                <p className="m-0">{music.title}</p>
                                <p className="m-0">{music.artist}</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-4 d-flex justify-content-end">
                            <p className="m-0">{music.time}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayMusic;
