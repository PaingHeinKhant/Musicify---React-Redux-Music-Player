import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./playList.css";
import { BiSolidAlbum } from "react-icons/bi";
import { MdArrowRight } from "react-icons/md";

const PlayList = () => {
  const albumsData = [
    {
      title: "Space Melody",
      artist: "VIZE",
      coverUrl:
        "https://static.musictoday.com/store/bands/4225/product_600/XVCOMBO16.JPG",
    },
    {
      title: "Space Melody",
      artist: "VIZE",
      coverUrl:
        "https://static.musictoday.com/store/bands/4225/product_600/XVCOMBO16.JPG",
    },
    {
      title: "Space Melody",
      artist: "VIZE",
      coverUrl:
        "https://static.musictoday.com/store/bands/4225/product_600/XVCOMBO16.JPG",
    },
    {
      title: "Space Melody",
      artist: "VIZE",
      coverUrl:
        "https://static.musictoday.com/store/bands/4225/product_600/XVCOMBO16.JPG",
    },
    {
      title: "Space Melody",
      artist: "VIZE",
      coverUrl:
        "https://static.musictoday.com/store/bands/4225/product_600/XVCOMBO16.JPG",
    },
    {
      title: "Space Melody",
      artist: "VIZE",
      coverUrl:
        "https://static.musictoday.com/store/bands/4225/product_600/XVCOMBO16.JPG",
    },
  ];
  return (
    <div className=" text-white">
      <div className="row">
        <div className="col-12 p-4">
          <div className="mb-4 d-flex justify-content-between align-items-center">
            {" "}
            <h1 className="">Recommended albums</h1>
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
                    <img
                      src={album.coverUrl}
                      className="w-100 rounded-3"
                      alt=""
                    />
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

export default PlayList;
