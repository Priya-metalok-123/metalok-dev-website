import { Icon } from '@iconify/react';
import React from 'react';
import Slider from 'react-slick';
import Div from '../Div';
import Team from '../Team';
import Spacing from '../Spacing';
import { Link, NavLink } from 'react-router-dom';

export default function TeamSlider() {
  /** Team Member Data **/
  const teamData = [
    
    {
      memberImage: '/images/team/mohit goel.png',
      memberImageOne: '/images/team/mohit goel.jpg',
      memberName: 'Mohit Goel',
      memberDesignation: 'Chief Executive Officer',
      memberSocial: {
        linkedin: 'https://www.linkedin.com/in/mohitgoeleth?original_referer=https%3A%2F%2Flinktr.ee%2F',
        twitter: '/',
        // youtube: '/',
        facebook: '/',
      },
    },
    {
      memberImage: '/images/team/anchal.png',
      memberImageOne: '/images/team/anchal-goel.png',
      memberName: 'Aanchal Goel',
      memberDesignation: 'Chief Financial Officer',
      memberSocial: {
        linkedin: '/',
        twitter: '/',
        // youtube: '/',
        facebook: '/',
      },
    },
   
   
    // {
    //   memberImage: '/images/member_4.jpeg',
    //   memberName: 'Him Agarwal ',
    //   memberDesignation: 'chief technical officer',
    //   memberSocial: {
    //     linkedin: '/',
    //     twitter: '/',
    //     youtube: '/',
    //     facebook: '/',
    //   },
    // },
    // {
    //   memberImage: '/images/member_4.jpeg',
    //   memberName: 'Pourush Dhingra  ',
    //   memberDesignation: 'chief design officer',
    //   memberSocial: {
    //     linkedin: '/',
    //     twitter: '/',
    //     youtube: '/',
    //     facebook: '/',
    //   },
    // },
    // {
    //   memberImage: '/images/member_4.jpeg',
    //   memberName: 'Raghuram ',
    //   memberDesignation: 'chief architect officer',
    //   memberSocial: {
    //     linkedin: '/',
    //     twitter: '/',
    //     youtube: '/',
    //     facebook: '/',
    //   },
    // },
  ];
  /** Slider Settings **/
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        'slick-prev slick-arrow' + (currentSlide === 0 ? ' slick-disabled' : '')
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
    >
      <Icon icon="bi:arrow-left" />
    </div>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        'slick-next slick-arrow' +
        (currentSlide === slideCount - 1 ? ' slick-disabled' : '')
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
    >
      <Icon icon="bi:arrow-right" />
    </div>
  );
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };
  const handleButtonClick = () => {
    // Redirect to another page
    window.location.href = '/meet-my-team-page'; // Replace '/meet-my-team-page' with the actual URL of the target page
  };
  return (
    <>
     <Slider {...settings} className="cs-gap-24 cs-arrow_style2">
       {teamData.map((item, index) => (
        <Div key={index}>
           <Team
            memberImage={item.memberImage}
            memberImageOne={item.memberImageOne}
            memberName={item.memberName}
            memberDesignation={item.memberDesignation}  
            memberSocial={item.memberSocial}
            
          
          />
        </Div> 
      ))}
    </Slider>

    {/* <Div className="custom_btn_div">
    <p onClick={handleButtonClick}>Meet My Team</p>
    <div className="arrow"></div>
    </Div> */}
    {/* <Spacing lg="65" md="40" />
    <Div className =" parent_span_div">
      <span className="cs-text_btn " >
        <span> <Link to="/team">Meet the Team </Link> </span>
        <Icon icon="bi:arrow-right" /> 
      </span>
    </Div> */}
             
                            
    </>
    
  );
}

