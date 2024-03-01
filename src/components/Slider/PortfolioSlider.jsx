import React from 'react'
import Portfolio from '../Portfolio'
import Div from '../Div'
import Slider from 'react-slick';

export default function PortfolioSlider() {
  const portfolioData = [
    {
      title:'Colosseum ',
      subtitle:'See Details',
      href:'/colleseumProjectPage',
      src:'/images/portfolio-home/1.png'
    },
    {
      title:'Ram Mandir ',
      subtitle:'See Details',
      href:'/ramandirProjectPage',
      src:'/images/portfolio-home/2.png'
    },
    {
      title:'Zee Business ',
      subtitle:'See Details',
      href:'/zeeProjectPage',
      src:'/images/portfolio-home/3.png'
    },
    {
      title:'W3 Summit ',
      subtitle:'See Details',
      href:'/websummitProjectPage',
      src:'/images/portfolio-home/4.png'
    },
    {
      title:'Sportsverse  ',
      subtitle:'See Details',
      href:'/sportsverseProjectPage',
      src:'/images/portfolio-home/5.png'
    }
    ,{
      title:'Akshaya NFTs  ',
      subtitle:'See Details',
      href:'/akshyaProjectPage',
      src:'/images/portfolio-home/6.png'
    },
    {
      title:'Avalipt  ',
      subtitle:'See Details',
      href:'/avaliptProjectPage',
      src:'/images/portfolio-home/7.png'
    },
    {
      title:'Foodverse  ',
      subtitle:'See Details',
      href:'/foodverseProjectPage',
      src:'/images/portfolio-home/8.png'
    },
    {
      title:'Colosseum 3D ',
      subtitle:'See Details',
      href:'/colleseummetaverseProjectPage',
      src:'/images/portfolio-home/9.png'
    },
  ]
  
  /** Slider Settings **/
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    autoplay: true,
    centerPadding: "0",
    slidesToShow: 3,
    speed: 500,
    dots: true,
    arrows:false,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };
  
  return (
    <Slider {...settings} className='cs-slider cs-style3 cs-gap-24'>
      {portfolioData.map((item, index)=> (
        <Div key={index}>
          <Portfolio 
            title={item.title} 
            subtitle={item.subtitle}
            href={item.href}
            src={item.src}
          />
        </Div>
      ))}
    </Slider>
  )
}
