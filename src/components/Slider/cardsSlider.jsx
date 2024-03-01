// import { Icon } from "@iconify/react";

// import React, { useState, useEffect } from "react";

// import Slider from "react-slick";

// import Div from "../Div";

// import Cards from "../Team/cards";

// import Spacing from "../Spacing";

// import { Link, NavLink } from "react-router-dom";

// export default function CardsSlider() {

//   const teamData = [
//     {
//       id: 0,

//       memberImage: "/images/demo/showcase.jpeg",

//        memberImageOne: "/images/service_3.jpeg",

//       memberName: "Corporate Hall",

//       memberDesignation: "W3 Summit event room",
//     },

//     {
//       id: 1,

//       memberImage: "/images/demo/home-bg.png",

//       memberImageOne: "/images/service_1.jpeg",

//       memberName: "Exhibition hallways",

//       memberDesignation: "W3 summit stall space",
//     },

//     {
//       id: 2,

//       memberImage: "/images/service_2.jpeg",

//       memberImageOne: "/images/service_3.jpeg",

//       memberName: "Auditorium",

//       memberDesignation: "Foodverse auditorium",
//     },

//     {
//       id: 3,

//       memberImage: "/images/demo/home-bg.png",

//       memberImageOne: "/images/service_3.jpeg",

//       memberName: "Conference Halls",

//       memberDesignation: "Blinxr",
//     },

//     {
//       id: 4,

//       memberImage: "/images/demo/home-bg.png",

//       memberImageOne: "/images/service_3.jpeg",

//       memberName: "Private & VIP Event Lounge",

//       memberDesignation: "Presidential suite",
//     },

//     {
//       id: 5,

//       memberImage: "/images/demo/home-bg.png",

//       memberImageOne: "/images/service_3.jpeg",

//       memberName: "Cloud concourse",

//       memberDesignation: "WTL",
//     },
//   ];

//   const [selectedImageIndex, setSelectedImageIndex] = useState(0);

//   // console.log("sectedImg-index", selectedImageIndex, teamData[selectedImageIndex])

//   console.log("meta-team-img", selectedImageIndex);
//   const updateImageIndex = (Id) => {
//     setSelectedImageIndex(Id);
//   };

//   //   <div

//   //     {...props}

//   //     className={

//   //       'slick-prev slick-arrow' + (currentSlide === 0 ? ' slick-disabled' : '')

//   //     }

//   //     aria-hidden="true"

//   //     aria-disabled={currentSlide === 0 ? true : false}

//   //   >

//   //     <Icon icon="bi:arrow-left" />

//   //   </div>

//   // );

//   // const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (

//   //   <div

//   //     {...props}

//   //     className={

//   //       'slick-next slick-arrow' +

//   //       (currentSlide === slideCount - 1 ? ' slick-disabled' : '')

//   //     }

//   //     aria-hidden="true"

//   //     aria-disabled={currentSlide === slideCount - 1 ? true : false}

//   //   >

//   //     <Icon icon="bi:arrow-right" />

//   //   </div>

//   // );

//   const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
//     <div
//       {...props}
//       className={`slick-prev slick-arrow${
//         currentSlide === 0 ? " slick-disabled" : ""
//       } custom-left-arrow`}
//       aria-hidden="true"
//       aria-disabled={currentSlide === 0 ? true : false}
//     >
//       <Icon icon="bi:arrow-left" />
//     </div>
//   );

//   const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
//     <div
//       {...props}
//       className={`slick-next slick-arrow${
//         currentSlide === slideCount - 1 ? " slick-disabled" : ""
//       } custom-right-arrow`}
//       aria-hidden="true"
//       aria-disabled={currentSlide === slideCount - 1 ? true : false}
//     >
//       <Icon icon="bi:arrow-right" />
//     </div>
//   );

//   const settings = {
//     dots: false,

//     infinite: true,

//     speed: 500,

//     slidesToShow: 4,

//     slidesToScroll: 1,

//     prevArrow: <SlickArrowLeft />,

//     nextArrow: <SlickArrowRight />,

//     responsive: [
//       {
//         breakpoint: 1200,

//         settings: {
//           slidesToShow: 3,
//         },
//       },

//       {
//         breakpoint: 991,

//         settings: {
//           slidesToShow: 2,

//           dots: true,

//           arrows: false,
//         },
//       },

//       {
//         breakpoint: 500,

//         settings: {
//           slidesToShow: 1,

//           dots: true,

//           arrows: false,
//         },
//       },
//     ],
//   };

//   return (
//     <>
//       <Slider {...settings} className="cs-gap-24 cs-arrow_style2">
//         {teamData.map((item, index) => (
//           <Div key={index}>
//             <Cards

//               memberImageOne={item.memberImageOne}

//               memberDesignation={item.memberDesignation}
//               eachItem={item}
//               updateImageIndex={updateImageIndex}
//             />
//           </Div>
//         ))}
//       </Slider>
//       <Spacing lg="60" md="80" />
//       <Div>
//         <img src={teamData[selectedImageIndex].memberImage} alt="" />
//       </Div>
//     </>
//   );
// }

// import { Icon } from '@iconify/react';
// import React, {useState, useEffect} from 'react';
// import Slider from 'react-slick';
// import Div from '../Div';
// import Cards from '../Team/cards';
// import Spacing from '../Spacing';
// import { Link, NavLink } from 'react-router-dom';

// export default function CardsSlider() {

//   /** Team Member Data **/
//   const [selectedImage, setSelectedImage] = useState('');
//   const handleColClick = (newImage) => {
//     setSelectedImage(newImage.memberImageOne);
//   };

//   const teamData = [
//     {

//       memberImage: '/images/demo/showcase.jpeg',
//       memberImageOne: '/images/service_3.jpeg',
//       memberName: 'Corporate Hall',
//       memberDesignation: 'W3 Summit event room',
//     },
//     {

//       memberImage: '/images/demo/home-bg.png',
//         memberImageOne: '/images/service_3.jpeg',
//       memberName: 'Exhibition hallways',
//       memberDesignation: 'W3 summit stall space',
//     },
//     {

//       memberImage: '/images/service_3.jpeg',
//        memberImageOne: '/images/service_3.jpeg',
//       memberName: 'Auditorium',
//       memberDesignation: 'Foodverse auditorium',
//     },
//     {

//       memberImage: '/images/demo/home-bg.png',
//       //  memberImageOne: '/images/service_3.jpeg',
//       memberName: 'Conference Halls',
//       memberDesignation: 'Blinxr',
//     },
//     {

//       memberImage: '/images/demo/home-bg.png',
//       //  memberImageOne: '/images/service_3.jpeg',
//       memberName: 'Private & VIP Event Lounge',
//       memberDesignation: 'Presidential suite',
//     },
//     {

//       memberImage: '/images/demo/home-bg.png',
//       //  memberImageOne: '/images/service_3.jpeg',
//       memberName: 'Cloud concourse',
//       memberDesignation: 'WTL',
//     },
//   ];

//   /** Slider Settings **/

//   const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
//     <div
//       {...props}
//       className={`slick-prev slick-arrow${currentSlide === 0 ? ' slick-disabled' : ''} custom-left-arrow`}
//       aria-hidden="true"
//       aria-disabled={currentSlide === 0 ? true : false}
//     >
//       <Icon icon="bi:arrow-left" />
//     </div>
//   );

//   const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
//     <div
//       {...props}
//       className={`slick-next slick-arrow${currentSlide === slideCount - 1 ? ' slick-disabled' : ''} custom-right-arrow`}
//       aria-hidden="true"
//       aria-disabled={currentSlide === slideCount - 1 ? true : false}
//     >
//       <Icon icon="bi:arrow-right" />
//     </div>
//   );

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     prevArrow: <SlickArrowLeft />,
//     nextArrow: <SlickArrowRight />,
//     responsive: [
//       {
//         breakpoint: 1200,
//         settings: {
//           slidesToShow: 3,
//         },
//       },
//       {
//         breakpoint: 991,
//         settings: {
//           slidesToShow: 2,
//           dots: true,
//           arrows: false,
//         },
//       },
//       {
//         breakpoint: 500,
//         settings: {
//           slidesToShow: 1,
//           dots: true,
//           arrows: false,
//         },
//       },
//     ],
//   };

//   return (
//     <>

//     <Slider {...settings} className="cs-gap-24 cs-arrow_style2">
//       {teamData.map((item, index) => (
//         <Div key={index}>
//           <div
//             className="col-lg-2 col-md-2 col-sm-4 enter-div-text-bg"
//             onClick={() => handleColClick(item)}
//             style={{ height: '250px', width: '250px' }}
//           >
//             <div className="">
//               {/* <h3>{item.memberImageOne}</h3> */}
//               <h3>{item.memberName}</h3>
//             </div>
//             <div className="bg-spaces-text"></div>
//           </div>
//         </Div>
//       ))}
//     </Slider>

//     <div className="container">
//       <div className="row">
//         <div className="col-md-12">
//           {selectedImage ? (
//             <img src={selectedImage} alt="Selected Image" style={{ height: '250px', width: '250px' }} />
//           ) : (
//             <img src="/images/demo/home-bg.png" style={{ height: '250px', width: '250px' }} />
//           )}
//         </div>
//       </div>
//     </div>

//   </>

//   );
// }

import { Icon } from "@iconify/react";

import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Div from "../Div";
import Cards from "../Team/cards";
export default function CardsSlider() {
  /** Team Member Data **/

  const teamData = [
    {
      id: 0,

      memberImage: "/images/demo/showcase.jpeg",
      memberVideo:
        "https://s3.amazonaws.com/design.metalok.io/Video/corporate-hall-w3-summit-event-room.mp4",
      memberImageOne: "/images/service_3.jpeg",

      memberName: "Corporate Hall",
      memberContent: "Suitable for professional & official events",

      memberDesignation: "W3 Summit event room",
    },

    {
      id: 1,

      memberImage: "/images/demo/home-bg.png",
      memberVideo:
        "https://s3.amazonaws.com/design.metalok.io/Video/exibition-hallways-w3-summit-stall-space.mp4",
      memberImageOne: "/images/service_1.jpeg",

      memberName: "Exhibition Hallways",
      memberContent: "Suitable for product / digital collectibles showcases",

      memberDesignation: "W3 Summit stall space",
    },

    {
      id: 2,

      memberImage: "/images/service_2.jpeg",
      memberVideo:
        "https://s3.amazonaws.com/design.metalok.io/Video/auditorium-foodverse.mp4",
      memberImageOne: "/images/service_3.jpeg",

      memberName: "Auditorium",
      memberContent: "Suitable for presentations and discussion forums",

      memberDesignation: "Foodverse auditorium",
    },

    {
      id: 3,

      memberImage: "/images/demo/home-bg.png",
      memberVideo:
        "https://s3.amazonaws.com/design.metalok.io/Video/conference-hall-blinx.mp4",

      memberImageOne: "/images/service_3.jpeg",

      memberName: "Conference Halls",
      memberContent: "Suitable for professional meetings/conferences",
      memberDesignation: "Blinxr",
    },

    {
      id: 4,

      memberImage: "/images/demo/home-bg.png",
      memberVideo:
        "https://s3.amazonaws.com/design.metalok.io/Video/private-vip-presidential.mp4",

      memberImageOne: "/images/service_3.jpeg",

      memberName: "VIP Event Lounge",
      memberContent: "Suitable for Private & VIP meetings/discussions",

      memberDesignation: "Presidential suite",
    },

    {
      id: 5,

      memberImage: "/images/demo/home-bg.png",
      memberVideo:
        "https://s3.amazonaws.com/design.metalok.io/Video/cloud-hall-wtl.mp4",

      memberImageOne: "/images/service_3.jpeg",

      memberName: "Cloud concourse",
      memberContent: "Suitable for events that focus an experiential affluence",

      memberDesignation: "WTL",
    },
  ];

  
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);

  const updateVideoIndex = (id) => {
    setSelectedVideoIndex(id);
  };
  useEffect(() => {
   
    setSelectedVideoIndex(0);
  }, []);

  /** Slider Settings **/

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={`slick-prev slick-arrow${
        currentSlide === 0 ? " slick-disabled" : ""
      } custom-left-arrow`}
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
    >
      <Icon icon="bi:arrow-left" />
    </div>
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={`slick-next slick-arrow${
        currentSlide === slideCount - 1 ? " slick-disabled" : ""
      } custom-right-arrow`}
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

  return (
    <>
      <Slider {...settings} className="cs-gap-24 cs-arrow_style2">
        {teamData.map((item, index) => (
          <Div key={index}>
            <Cards
              memberImageOne={item.memberImageOne}
              memberName={item.memberName}
              memberContent={item.memberContent}
              memberDesignation={item.memberDesignation}
              eachItem={item}
              updateVideoIndex={updateVideoIndex}
            />
          </Div>
        ))}
      </Slider>
      <br />
      <Div>
        <video
          src={teamData[selectedVideoIndex].memberVideo}
          autoPlay
          className="change-videos-size"
          playsInline
          loop
          muted
          alt="All the devices"
          
        />
      </Div>
    </>
  );
}
