import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BiSolidAlbum } from "react-icons/bi";
import { FaGuitar } from "react-icons/fa";

import "./artists.css";
const Artists = () => {
  const albumsData = [
    {
      artist: "VIZE",
      coverUrl:
        "https://static.musictoday.com/store/bands/4225/product_600/XVCOMBO16.JPG",
    },
    {
      artist: "VIZE",
      coverUrl:
        "https://static.musictoday.com/store/bands/4225/product_600/XVCOMBO16.JPG",
    },
    {
      artist: "VIZE",
      coverUrl:
        "https://static.musictoday.com/store/bands/4225/product_600/XVCOMBO16.JPG",
    },
    {
      artist: "VIZE",
      coverUrl:
        "https://static.musictoday.com/store/bands/4225/product_600/XVCOMBO16.JPG",
    },
    {
      artist: "VIZE",
      coverUrl:
        "https://static.musictoday.com/store/bands/4225/product_600/XVCOMBO16.JPG",
    },
    {
      artist: "VIZE",
      coverUrl:
        "https://static.musictoday.com/store/bands/4225/product_600/XVCOMBO16.JPG",
    },
    {
      artist: "VIZE",
      coverUrl:
        "https://marketplace.canva.com/EAEqlr422aw/1/0/1600w/canva-falling-modern-aesthetic-music-album-cover-KsRCFSNg4XA.jpg",
    },
    {
      artist: "VIZE",
      coverUrl:
        "https://marketplace.canva.com/EAEqlr422aw/1/0/1600w/canva-falling-modern-aesthetic-music-album-cover-KsRCFSNg4XA.jpg",
    },
    {
      artist: "VIZE",
      coverUrl:
        "https://marketplace.canva.com/EAEqlr422aw/1/0/1600w/canva-falling-modern-aesthetic-music-album-cover-KsRCFSNg4XA.jpg",
    },
    {
      artist: "VIZE",
      coverUrl:
        "https://marketplace.canva.com/EAEqlr422aw/1/0/1600w/canva-falling-modern-aesthetic-music-album-cover-KsRCFSNg4XA.jpg",
    },
    {
      artist: "VIZE",
      coverUrl:
        "https://marketplace.canva.com/EAEqlr422aw/1/0/1600w/canva-falling-modern-aesthetic-music-album-cover-KsRCFSNg4XA.jpg",
    },
    {
      artist: "VIZE",
      coverUrl:
        "https://marketplace.canva.com/EAEqlr422aw/1/0/1600w/canva-falling-modern-aesthetic-music-album-cover-KsRCFSNg4XA.jpg",
    },
    {
      artist: "VIZE",
      coverUrl:
        "https://marketplace.canva.com/EAEqlr422aw/1/0/1600w/canva-falling-modern-aesthetic-music-album-cover-KsRCFSNg4XA.jpg",
    },
    {
      artist: "VIZE",
      coverUrl:
        "https://marketplace.canva.com/EAEqlr422aw/1/0/1600w/canva-falling-modern-aesthetic-music-album-cover-KsRCFSNg4XA.jpg",
    },
  ];
  return (
    <div className="bg-body-background min-vh-100">
      <div className="width-frame p-4 text-white  ">
        <div className="row">
          <div className="col-12 my-2 d-flex">
            <div className="breadcrumb-item text-white me-3">
              <Link
                to={`/discover`}
                className="text-decoration-none text-success"
              >
                Discover
              </Link>
            </div>
            <div className="text-success">/</div>
            <div className="ms-3 text-success" aria-current="page">
              Artists
            </div>
          </div>
          <div className="col-12 my-3">
            <div className="row">
              <div className="col-12 d-flex justify-content-between mt-1">
                <div className="d-flex align-items-center">
                  <FaGuitar className="display-6 me-2 text-success" />
                  <h3 className="letter-spacing m-0">Artists</h3>
                </div>{" "}
              </div>
            </div>
          </div>
          <hr />
          <div className="container text-white">
            <div className="row">
              <div className="col-12 p-4">
                <div className="row">
                  {albumsData.map((album, index) => (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.5 }}
                      whileHover={{ scale: 1.1 }}
                      key={index}
                      className="col-6 mb-4 d-inline-block cursor-class col-sm-4 col-lg-2"
                    >
                      <Link
                        to={`/discover/${index}`}
                        className="album-link text-decoration-none text-white"
                      >
                        <div className="album">
                          <img
                            src={album.coverUrl}
                            className="w-100 rounded-3"
                            alt=""
                          />
                          <div className="album__title my-2">
                            <p className=" m-0 textDec">{album.artist}</p>
                          </div>
                          <div className="album__overlay">
                            <BiSolidAlbum className="fs-1 text-success " />
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Artists;
