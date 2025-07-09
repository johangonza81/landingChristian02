import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/img01.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.jpg';
import img6 from '../assets/img6.jpg';

function ImageCarousel() {
  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <div className="carousel-container">
      <Carousel
        autoPlay
        interval={3000}
        infiniteLoop
        showThumbs={true}
        showStatus={false}
        swipeable
        emulateTouch
      >
        {images.map((src, index) => (
          <div key={index}>
            <img src={src} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default ImageCarousel;
