import { Carousel } from 'react-bootstrap';
import taylar from "../../assets/images/taylar.jpeg";
import disney from "../../assets/images/disney.jpeg";
import chinese from "../../assets/images/chinese.jpeg";
import "./carousel.css";

function MyCarousel() {
  return (
    <Carousel className='car-sty'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={disney}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={taylar}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
        
          src={chinese}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;

