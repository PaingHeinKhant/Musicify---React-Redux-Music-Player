import { Carousel } from "react-bootstrap";
import bannerOne from "../../assets/images/bannerOne.jpg";
import bannerTwo from "../../assets/images/bannerTwo.png";
import bannerThree from "../../assets/images/bannerThree.png";
import "./carousel.css";

function MyCarousel() {
  return (
    <Carousel className="car-sty">
      <Carousel.Item>
        <img className="d-block w-100" src={bannerOne} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={bannerTwo} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={bannerThree} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;
