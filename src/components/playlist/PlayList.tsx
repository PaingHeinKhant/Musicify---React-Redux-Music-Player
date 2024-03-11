const playlist = () => {
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
          <h4 className="mb-4 text-center">New Release Album</h4>
          <div className="row">
            {albumsData.map((album, index) => (
              <div
                key={index}
                className="col-6 mb-4 cursor-class d-inline-block col-sm-4 col-lg-2"
              >
                <div className="album">
                  <img src={album.coverUrl} className="w-100" alt="" />
                  <div className="album__title">
                    <p className=" m-0 custom-font">{album.title}</p>
                    <p className="small m-0 custom-font">{album.artist}</p>
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

export default playlist;
