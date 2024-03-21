import "./playList.css";
import { BiSolidAlbum } from "react-icons/bi";
import { MdArrowRight } from "react-icons/md";

const InterSongs = () => {
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
    <div className="container text-white ">
      <div className="row">
        <div className="col-12 p-4">
          <div className="mb-4 d-flex justify-content-between align-items-center">
            {" "}
            <h4 className="">International Songs</h4>
            <p className="m-0">
              See More <MdArrowRight className="fs-2" />
            </p>
          </div>
          <div className="row">
            {albumsData.map((album, index) => (
              <div
                key={index}
                className="col-6 mb-4 cursor-class d-inline-block col-sm-4 col-lg-2"
              >
                <div className="album ">
                  <img src={album.coverUrl} className="w-100" alt="" />
                  <div className="album__title">
                    <p className=" m-0 custom-font">{album.title}</p>
                    <p className="small m-0 custom-font">{album.artist}</p>
                  </div>
                  <div className="album__overlay">
                    <BiSolidAlbum className="fs-1 text-success " />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterSongs;
