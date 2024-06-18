import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoIosAddCircle } from "react-icons/io";
import { FaShare } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import "./detailAlbum.css";

const DetailAlbum = () => {
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
  const [hoverIndex, setHoverIndex] = useState(null);
  return (
    <div className="bg-body-background text-white">
      <div className="width-frame-detail pt-4 ">
        <div className="col-12 d-flex">
          <div className="breadcrumb-item text-white me-3">
            <Link
              to={`/discover`}
              className="text-decoration-none text-success fs-6"
            >
              <IoMdArrowRoundBack className="me-2" />
              Back
            </Link>
          </div>
        </div>
        <div className="row d-flex align-items-center pt-4 mb-5">
          <div className="col-2 me-3">
            <img
              width={200}
              src="https://marketplace.canva.com/EAEqlr422aw/1/0/1600w/canva-falling-modern-aesthetic-music-album-cover-KsRCFSNg4XA.jpg"
              alt=""
            />
          </div>
          <div className="col-9 ms-5">
            <h2 className="">Sunshine in the Rain</h2>
            <h6 className="text-white-50">Album • Han Tun • 2023</h6>
            <h6 className="text-white-50">10 Songs • 40 minutes</h6>
            <div className="mt-3">
              <button className="btn btn-success px-4 rounded-5 me-3">
                <FaPlay className="me-1" />
                Play
              </button>
              <button className="btn btn-light px-4 rounded-5">
                <MdOutlinePlaylistAdd className="me-1" />
                Add to playList
              </button>
            </div>
          </div>
        </div>

        {MusicData.map((music, index) => (
          <div className="">
            <div
              className="row d-flex align-items-center"
              key={index}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <div className="col-1">
                {hoverIndex === index ? (
                  <FaPlay className="play-icon fs-5 hover-effect" />
                ) : (
                  <p className="m-0 me-4 col-1">{music.id}</p>
                )}
              </div>
              <div className="col-4 d-flex align-items-center">
                <img width={30} src={music.coverUrl} alt="" />
                <p className="m-0 ms-4">{music.title}</p>
              </div>
              <div className="col-2">
                <p className="m-0 text-white-50">{music.artist}</p>
              </div>
              <div className="col-2">
                <p className="m-0 text-white-50">{music.viewer}</p>
              </div>
              <div className="col-3 d-flex justify-content-end">
                {hoverIndex === index ? (
                  <>
                    <FaShare className="play-icon fs-4 me-3 hover-effect" />
                    <IoIosAddCircle className="play-icon fs-4 me-3 hover-effect" />
                    <FaStar className="play-icon fs-4 me-5 hover-effect" />
                  </>
                ) : (
                  <p></p>
                )}

                <p className="m-0 text-white-50">{music.time}</p>
              </div>
            </div>
            {index !== MusicData.length - 1 && <hr />}
          </div>
        ))}
        <div className="pt-5"></div>
      </div>
    </div>
  );
};

export default DetailAlbum;
