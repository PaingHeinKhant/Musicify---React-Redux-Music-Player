import Carousel from "../../components/carousel/Carousel";
import ChineseSongs from "../../components/playlist/ChineseSongs";
import InterSongs from "../../components/playlist/InterSongs";
import PlayList from "../../components/playlist/PlayList";
import "./discover.css";
const Discover = () => {
  return (
    <div className="bg-body-background">
      <Carousel />
      <ChineseSongs />
      <PlayList />
      <InterSongs />
    </div>
  );
};

export default Discover;
