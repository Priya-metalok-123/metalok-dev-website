import React ,{ useEffect, useState }from "react";
import { Icon } from "@iconify/react";
import Spacing from '../Spacing'
import Slider from "react-slick";
import Div from "../Div";
import Post from "../Post";

export default function PostSlider() {
  const [showDots, setShowDots] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      const isDesktop = window.innerWidth > 768;
      setShowDots(!isDesktop);
    };

    // Add event listener to window resize
    window.addEventListener("resize", handleResize);

    // Initial check on component mount
    handleResize();

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  const postData = [
    {
      url: "https://medium.com/metalok/how-to-buy-and-sell-in-metaverse-766132af3db8",
      src: "/images/blog-img/home/1.png",
      alt: "Post",
      date: "07 Mar 2022",
      title: "How to buy and sell in Metaverse?",
    },
    {
      url: "https://medium.com/metalok/the-metaverse-is-predicted-to-become-a-trillion-dollar-industry-by-2025-which-means-that-the-6d259b24017d",
      src: "/images/blog-img/home/2.png",
      alt: "Post",
      date: "10 Feb 2022",
      title: "Make money in Metaverse",
    },
    {
      url: "https://medium.com/metalok/what-is-metaverse-d2d529fb3530s",
      src: "/images/blog-img/home/3.png",
      alt: "Post",
      date: "05 Mar 2022",
      title: "What is Metaverse?",
    },
    {
      url: "https://medium.com/metalok/what-is-an-nft-83f63e39a162",
      src: "/images/blog-img/home/4.png",
      alt: "Post",
      date: "07 Mar 2022",
      title: "What is an NFT?",
    },
    {
      url: "https://medium.com/metalok/what-is-blockchain-dcfd63490fdf",
      src: "/images/blog-img/home/5.png",
      alt: "Post",
      date: "10 Feb 2022",
      title: "What is Blockchain?",
    },
    {
      url: "https://medium.com/metalok/applications-of-blockchain-innumerable-and-diverse-77c50649c7c8",
      src: "/images/blog-img/home/6.png",
      alt: "Post",
      date: "05 Mar 2022",
      title: "Applications of Blockchain",
    },
    {
      url: "https://medium.com/metalok/roadblocks-in-blockchain-adoption-7bdcc86c9364",
      src: "/images/blog-img/home/7.jpg",
      alt: "Post",
      date: "05 Mar 2022",
      title: "Roadblocks in Blockchain adoption",
    },
    {
      url: "https://medium.com/metalok/metaverse-real-estate-3f04556efebb",
      src: "/images/blog-img/home/8.png",
      alt: "Post",
      date: "05 Mar 2022",
      title: "Metaverse Real Estate",
    },
    {
      url: "https://metalok.io/how-nfts-and-tokenization-will-disrupt-tomorrows-economies/",
      src: "/images/blog-img/home/9.png",
      alt: "Post",
      date: "05 Mar 2022",
      title: "How NFTs and tokenisation will disrupt tomorrows economies ?",
    },
    ,
    {
      url: "https://metalok.io/environmental-concerns-of-blockchain/",
      src: "/images/blog-img/home/10.png",
      alt: "Post",
      date: "05 Mar 2022",
      title: "Environmental concerns of Blockchain",
    },
    ,
    {
      url: "https://metalok.io/gamefi/",
      src: "/images/blog-img/home/11.png",
      alt: "Post",
      date: "05 Mar 2022",
      title: "GameFi",
    },
    ,
    {
      url: "https://metalok.io/retail-and-metaverse/",
      src: "/images/blog-img/home/12.png",
      alt: "Post",
      date: "05 Mar 2022",
      title: "Retail and Metaverse",
    },
  ];
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        "post-slider-prev post-slider-arrow" +
        (currentSlide === 0 ? " post-slider-disabled" : "")
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
        "post-slider-next post-slider-arrow" +
        (currentSlide === slideCount - 1 ? " post-slider-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
    >
      <Icon icon="bi:arrow-right" />
    </div>
  );

  const settings = {
    dots: showDots, // Conditionally set dots property based on showDots state
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
    <div className="post-slider-wrapper relative">
     < Spacing lg="90" md="45" />
     
      <Slider {...settings} className="post-slider cs-gap-24"> 
        {postData.map((item, index) => (
          <Div key={index}>
            <Post src={item.src} alt={item.alt} date={item.date} title={item.title} />
          </Div>
        ))}
      </Slider>
    </div>
    
    </>

  );
}