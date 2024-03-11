import { Link } from "react-router-dom";
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
    <div className="container text-white ">
      <div className="row">
        <div className="col-12 p-4">
          <h4 className="mb-4 text-center">Chinese Songs</h4>
          <div className="row">
            {albumsData.map((album, index) => (
              <div
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
                      <p className=" m-0 textDec">{album.title}</p>
                      <p className="small m-0 textDec">{album.artist}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChineseSongs;
