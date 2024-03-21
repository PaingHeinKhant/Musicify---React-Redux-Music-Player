import Carousel from "../../components/carousel/Carousel";
// import FooterBar from "../../components/footerbar/FooterBar";
import ChineseSongs from "../../components/playlist/ChineseSongs";
import InterSongs from "../../components/playlist/InterSongs";
import PlayList from "../../components/playlist/PlayList";
import "./discover.css";
const Discover = () => {
  return (
    <div className="bg-body-background">
      <div className="">
        <div className="alert alert-warning m-0 text-center" role="alert">
          This application is presently undergoing development. ⚠️
        </div>
        <Carousel />
        <ChineseSongs />
        <PlayList />
        <InterSongs />
      </div>
      {/* <FooterBar />  */}
    </div>
  );
};

export default Discover;
