import { Icon } from '@iconify/react';
import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import Div from '../Div';
import Timeline from '../Timeline';

export default function TimelineSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const timelineData = [
    {
      memberImage: '/images/sac-img.jpg',
      name: " 'Sacred Foods of India'",
      new: "  Phygital NFT",
      position: 'Masterpiece of Chef Vikas Khanna presented to Telangana IT Secretary',
    },
    {
      memberImage: '/images/startup.jpg',
      name: 'Best Emerging Blockchain ',
      new: "Start-up of the year",
      position: 'Proud to be the winners of W3 Summit Global Awards',
    },
    {
      memberImage: '/images/accolades/wtl.jpg',
      name: " Designer of Phygital  ",
      new: "  NFTs for WTL",
      position: 'Designed exclusive Digital Collectibles for “The Greatest Show on Court”',
    },
    {
      memberImage: '/images/accolades/zee.jpg',
      name: 'Featured as Pioneers in Media Metaverse',
      position: 'Proud to be a part of the Zee Business Studio journey into the Metaverse',
    },
  ];

  const nextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const SlickArrowLeft = ({ ...props }) => (
    <div
      {...props}
      className={'slick-prev slick-arrow' + (currentSlide === 0 ? ' slick-disabled' : '')}
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
    >
      <Icon icon="bi:arrow-left" />
    </div>
  );

  const SlickArrowRight = ({ ...props }) => (
    <div
      {...props}
      className={
        'slick-next slick-arrow' +
        (currentSlide === timelineData.length - 1 ? ' slick-disabled' : '')
      }
      aria-hidden="true"
      aria-disabled={currentSlide === timelineData.length - 1 ? true : false}
    >
      <Icon icon="bi:arrow-right" />
    </div>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    arrows: false,
    responsive: [
      {
        breakpoint: 470,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    beforeChange: (oldIndex, newIndex) => {
      setCurrentSlide(newIndex);
    },
  };

  return (
    <Slider {...settings} className="cs-arrow_style3" ref={sliderRef}>
      {timelineData.map((item, index) => (
        <Div key={index}>
          <Div key={index}>
            <img src={item.memberImage} alt="Member" />
            <h2 className="award_name">{item.name}</h2>
            <h2 className="award_name_new">{item.new}</h2>
            <p className="award_description">{item.position}</p>
          </Div>
        </Div>
      ))}
    </Slider>
  );
}
