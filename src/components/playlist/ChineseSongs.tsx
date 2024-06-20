import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MdArrowRight } from "react-icons/md";
import "./playList.css";
import { BiSolidAlbum } from "react-icons/bi";

const ChineseSongs = () => {
  const albumsData = [
    {
      title: "Space Melody",
      artist: "VIZE",
      coverUrl:
        "https://marketplace.canva.com/EAEqlr422aw/1/0/1600w/canva-falling-modern-aesthetic-music-album-cover-KsRCFSNg4XA.jpg",
    },
    {
      title: "Space Melody",
      artist: "VIZE",
      coverUrl:
        "https://marketplace.canva.com/EAEqlr422aw/1/0/1600w/canva-falling-modern-aesthetic-music-album-cover-KsRCFSNg4XA.jpg",
    },
    {
      title: "Space Melody",
      artist: "VIZE",
      coverUrl:
        "https://marketplace.canva.com/EAEqlr422aw/1/0/1600w/canva-falling-modern-aesthetic-music-album-cover-KsRCFSNg4XA.jpg",
    },
    {
      title: "Space Melody",
      artist: "VIZE",
      coverUrl:
        "https://marketplace.canva.com/EAEqlr422aw/1/0/1600w/canva-falling-modern-aesthetic-music-album-cover-KsRCFSNg4XA.jpg",
    },
    {
      title: "Space Melody",
      artist: "VIZE",
      coverUrl:
        "https://marketplace.canva.com/EAEqlr422aw/1/0/1600w/canva-falling-modern-aesthetic-music-album-cover-KsRCFSNg4XA.jpg",
    },
    {
      title: "Space Melody",
      artist: "VIZE",
      coverUrl:
        "https://marketplace.canva.com/EAEqlr422aw/1/0/1600w/canva-falling-modern-aesthetic-music-album-cover-KsRCFSNg4XA.jpg",
    },
  ];
  return (
    <div className=" text-white">
      <div className="row">
        <div className="col-12 p-4 text-white">
          <div className="mb-4 d-flex justify-content-between align-items-center">
            {" "}
            <h3 className="">New Releases</h3>
            <p className="m-0">
              See More <MdArrowRight className="fs-2" />
            </p>
          </div>
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
                    <img src={album.coverUrl} className="w-100" alt="" />
                    <div className="album__title">
                      <p className="m-0 textDec">{album.title}</p>
                      <p className="small m-0 textDec">{album.artist}</p>
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
  );
};

export default ChineseSongs;
