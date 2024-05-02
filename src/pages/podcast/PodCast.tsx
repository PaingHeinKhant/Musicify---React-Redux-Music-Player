import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { IoIosPlayCircle } from "react-icons/io";
import { FaMicrophone } from "react-icons/fa6";

import "./podcast.css";
const podCast = () => {
  const albumsData = [
    {
      title: "Soundscapes Unleashed",
      coverUrl:
        "https://images.unsplash.com/photo-1559523161-0fc0d8b38a7a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cG9kY2FzdHN8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Melodic Musings",
      coverUrl:
        "https://images.unsplash.com/photo-1593697909683-bccb1b9e68a4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBvZGNhc3RzfGVufDB8fDB8fHww",
    },
    {
      title: "Rhythmic Revelations",
      coverUrl:
        "https://images.unsplash.com/photo-1581368135153-a506cf13b1e1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBvZGNhc3RzfGVufDB8fDB8fHww",
    },
    {
      title: "Tune Talk: Exploring Music's Depths",
      coverUrl:
        "https://images.unsplash.com/photo-1583127812417-7c06e950a432?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHBvZGNhc3RzfGVufDB8fDB8fHww",
    },
    {
      title: "Harmony Haven: A Music Podcast",
      coverUrl:
        "https://images.unsplash.com/photo-1593697821094-53ed19153f21?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHBvZGNhc3RzfGVufDB8fDB8fHww",
    },
    {
      title: "Sonic Stories: Unraveling the Tracks",
      coverUrl:
        "https://plus.unsplash.com/premium_photo-1680037568232-949478a86307?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fHBvZGNhc3RzfGVufDB8fDB8fHww",
    },
    {
      title: "Notes & Narratives: A Musical Journey",
      coverUrl:
        "https://plus.unsplash.com/premium_photo-1680037567955-3d9fc98e1f50?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA5fHxwb2RjYXN0c3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "MeloCast: A Journey Through Sound",
      coverUrl:
        "https://images.unsplash.com/photo-1557804506-e969d7b32a4b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxwb2RjYXN0c3xlbnwwfHwwfHx8MA%3D%3D",
    },
  ];
  return (
    <div className="bg-body-background min-vh-100">
      <div className="container p-4 text-white  ">
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
              Podcast
            </div>
          </div>
          <div className="col-12 my-3">
            <div className="row">
              <div className="col-12 d-flex justify-content-between mt-4">
                <div className="d-flex align-items-center">
                  <FaMicrophone className="display-1 text-success" />
                  <h1 className="letter-spacing ">Podcasts</h1>
                </div>
                {/* <SearchBox /> */}
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
                      whileHover={{ scale: 1 }}
                      key={index}
                      className="col-6 mb-4 d-inline-block cursor-class col-sm-4 col-lg-4"
                    >
                      <div className="album-link text-decoration-none text-white">
                        <div className="album_pod position-relative">
                          <img
                            src={album.coverUrl}
                            className="w-100 rounded-3"
                            alt=""
                          />

                          <div className="album__text-layer position-absolute top-0 m-3 start-0  d-flex">
                            <span className="badge bg-danger">LIVE •</span>
                          </div>

                          <div className="album__text-layer my-3">
                            <h5 className="m-0 hover-color">{album.title}</h5>
                          </div>
                          <div className="album__overlay_pod">
                            <IoIosPlayCircle className="display-4 text-danger " />
                          </div>
                        </div>
                      </div>
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

export default podCast;
