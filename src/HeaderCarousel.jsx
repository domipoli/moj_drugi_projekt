import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './HeaderCarousel.scss';

import photo1 from './photoassets/Karuzela/1.jpg';
import photo2 from './photoassets/Karuzela/2.jpg';
import photo3 from './photoassets/Karuzela/3.jpg';
import photo4 from './photoassets/Karuzela/4.jpg';
import photo5 from './photoassets/Karuzela/5.jpg';
import photo6 from './photoassets/Karuzela/6.jpg';


export const MobileCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    swipeToSlide: true,
    touchThreshold: 10,
    adaptiveHeight: true
  };

  return (
    <Slider {...settings}>
      {/* {items.map((item, index) => (
        <div key={index} className="slick-slide">
          <img src={item.image} alt={item.altText} />
          <div className="slick-caption">
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
      ****** */}

      <div className="slick-slide">
        <div className='photo-container'>
          <img src={photo1} alt='choir1'/>      
        </div>
               
        <div className="slick-caption">
          <p>Koncert “Przy kominku”</p>
          <p>Kolegium Rungego</p>
          <p>Poznań, 11 lutego 2024 r.</p>
        </div>
      </div>

      <div className="slick-slide">
        <div className='photo-container'>
          <img src={photo2} alt='choir2'/>
        </div>
        <div className="slick-caption">
          <p>Koncert w ramach “Spotkań z Japonią”</p>
          <p>Sopoteka</p>
          <p>Sopot, 7 grudnia 2024 r.</p>
        </div>
      </div>

      <div className="slick-slide">
        <div className='photo-container'>
          <img src={photo3} alt='choir3' />
        </div>
        <div className="slick-caption">
          <p>Koncert “Jakie to anime?”</p>
          <p>Park Kasserna</p>
          <p>Poznań, 18 lipca 2024 r.</p>
        </div>
      </div>

      <div className="slick-slide">
        <div className='photo-container'>
          <img src={photo4} alt='choir4'/>
        </div>
        <div className="slick-caption">
          <p>Casting “Mam talent”</p>
          <p>Studio TVN</p>
          <p>Warszawa, 14 grudnia 2024 r.</p>
          </div>
      </div>

      <div className="slick-slide">
        <div className='photo-container'>
          <img src={photo5} alt='choir5'/>
        </div>
        <div className="slick-caption">
          <p>Koncert jubileuszowy - 10 lat Hibike</p>
          <p>Dom Tramwajarza</p>
          <p>Poznań, 17 czerwca 2025 r.</p>
          </div>
      </div>

      <div className="slick-slide">
        <div className='photo-container'>
          <img src={photo6} alt='choir6'/>
        </div>
        <div className="slick-caption">
          <p>Koncert na konwencie Ryucon</p>
          <p>Tauron Arena</p>
          <p>Kraków, 29 lipca 2022 r.</p>
          </div>
      </div>

    </Slider>
  );
};