import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Div from "../Div";
import Portfolio2 from "../Portfolio/Portfolio2";
import Portfolio3 from "../Portfolio/Portfolio3";
import Portfolio8 from "../Portfolio/portfolio8";
import SectionHeading from "../SectionHeading";
import Spacing from "../Spacing";
import { pageTitle } from "../../helper";
import CardsSlider from "../Slider/cardsSlider";

export default function EnterpriceMetaversePage() {
  pageTitle("Home");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
   
  };

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // Disable next and previous buttons
  };
  const [selectedImage, setSelectedImage] = useState("");

  const handleColClick = (newImage) => {
    setSelectedImage(newImage);
  };
 

  const portfolioDat = [
    {
      title: "Welcome & Virtual Introduction  ",
      subtitle:
        "	A video or avatar integrated welcoming session where our participants and attendees can freely 	interact with each other and with the virtual environment. Technological and AI integration 	adds a layer of virtual interactivity even on a personal level",

      imageUrl: "/images/enter-img/5.png",
    },
    {
      title: "Presentation & Keynote Speakers  ",
      subtitle:
        "Convinience to the speakers and presenters to put forth their viewpoints in an engaging way 	from the comfort of their residence. Data points such as statistics, financial data, company 	value, winnings, etc can be relayed in a graphical & immersive way",

      imageUrl: "/images/enter-img/6.png",
    },
    {
      title: "Q&A and Interactive session  ",
      subtitle:
        "Easy handling of the Q&A and Interactive sessions at any volume of attendees. Virtual 		environment gives access to implement the session in diverse & multiple methods involving 	group sessions, individual interactions or a combination of both.",

      imageUrl: "/images/enter-img/7.png",
    },
    {
      title: "Immersive Assessment & Games ",
      subtitle:
        "After an enlightening session, Metaverse allows for a self-assessment or a conditional 		assessment if implied by the event type in a gamified or interactive manner. Attendees can 	proceed to the event finale with a sense of achievement & enjoyment",

      imageUrl: "/images/enter-img/8.png",
    },
    {
      title: "Wrap- Up & Rewards ",
      subtitle:
        "The finale stage of the event can be organized with all the creative freedom offered by the 	metaverse. Metaverse can incorporate a reward system or a proof of attendance as a digital 	token secured with web 3 technologies that can have multiple digital, physical & phygital 	use cases",

      imageUrl: "/images/enter-img/9.png",
    },
  ];

  const portfolioDa = [
    {
      title: "Immersive Experiences ",
      subtitle:
        "AR/VR enabled metaverse allows the enterprise stakeholders to experience the virtual 		manifestation as close to the Real-life event/solution as possible ",
      imageUrl: "/images/enter-img/1.png",
    },
    {
      title: "Remote accessibility  ",
      subtitle:
        "Forgo the barriers of physical, financial, and geographical to attend a virtual enterprise event in 	the metaverse remotely from anywhere, anytime",
      imageUrl: "/images/enter-img/2.png",
    },
    {
      title: "Interactive Tools  ",
      subtitle:
        "The technological advancement of Metaverse preserves the essence of a real-life event by 	enabling social- interaction, and environmental interaction in virtual space. Talk with colleagues, 	participate in quizzes, play games and more in the enterprise metaverse",
      imageUrl: "/images/enter-img/3.png",
    },
    {
      title: "Digital & Phygital memoirs  ",
      subtitle:
        "Make memorable & unforgettable experiences in the enterprise metaverse and get rewarded 	with a digital or phygital token of proof to flaunt in the real world",
      imageUrl: "/images/enter-img/4.png",
    },
  ];

  return (
    <>
      <div className="enter-all-videos-slider">
        <Slider {...carouselSettings} className="slider-main-div">
          <div>
            <div className="carousel-video">
              <video
               
                autoPlay
                className=" reduced-opacity"
                playsInline
                loop
                muted
                alt="All the devices"
                src="https://s3.amazonaws.com/design.metalok.io/Video/Enterprise2.mp4"
                onContextMenu={(e) => e.preventDefault()}
              />
              
            </div>
          </div>
          <div>
            <div className="carousel-video">
              <video
              
                autoPlay
                className=" reduced-opacity"
                playsInline
                loop
                muted
                alt="All the devices"
                src="https://s3.amazonaws.com/design.metalok.io/Video/ENTERPRISE1.mp4"
                onContextMenu={(e) => e.preventDefault()}
              />
              
            </div>
          </div>
          <div>
            <div className="carousel-video">
              <video
               
                autoPlay
                className=" reduced-opacity"
                playsInline
                loop
                muted
                alt="All the devices"
                src="https://s3.amazonaws.com/design.metalok.io/Video/Enterprise4.mp4"
                onContextMenu={(e) => e.preventDefault()}
              />
             
            </div>
          </div>
         
        </Slider>
        <div className="carousel-text">
                <h2>Metaverse Powered Enterprise Solutions</h2>
                <p>
                  {" "}
                  Manage, Meet, Train & Collaborate in Virtual Spaces – A
                  synergy <br></br> of Management & Employees{" "}
                </p>
              </div>
      </div>

      
      <Div className="container">
        <div className="row">
          <div className="col-md-8 head-div">
          <Div className="">
        <Spacing lg="120" md="80" />
        <h2>What is Enterprise Metaverse? </h2>
        <p>
          A Virtual Realm of organizing and managing Enterprises. Conduct
          events, conferences, training sessions, fun meets, formal &
          informal celebrations and versatile enterprise activities in the
          metaverse spaces.{" "}
        </p>
      </Div>
          </div>
        </div>
      </Div>

      <Spacing lg="120" md="80" />
      <div className="services-heading-center">
        <SectionHeading
          title=" Enterprise Solutions "
          subtitle="How Metaverse Architects"
        />
      </div>
      <Spacing lg="20" md="80" />
      {portfolioDa.map((item, index) =>
        index % 2 === 0 ? (
          <Div key={index}>
            <Portfolio2
              title={item.title}
              subtitle={item.subtitle}
              imageUrl={item.imageUrl}
              category={item.category}
            />
            <Spacing lg="100" md="70" />
          </Div>
        ) : (
          <Div key={index}>
            <Portfolio3
              title={item.title}
              subtitle={item.subtitle}
              imageUrl={item.imageUrl}
              category={item.category}
            />
            <Spacing lg="100" md="50" /> 
          </Div>
        )
      )}

      {/* <Spacing lg="30" md="40" /> */}

      <Div className="enterprice-head-div">
        <h3>Looking to take your gathering to the metaverse? </h3> 
        <p>
          Be it a farewell party or a roast party, a corporate event or a
          training session, a trade show or a product ,
        </p>
        <p>launch find your
          space in the Metaverse with Metalok</p>
      </Div>
      {/* <Spacing lg="150" md="80" /> */}
      <Div className="container">
        <Spacing lg="85" md="45" />
        <CardsSlider />
      </Div>

      <Spacing lg="100" md="70" />
      {portfolioDat.map((item, index) =>
        index % 2 === 0 ? (
          <Div key={index}>
            <Portfolio3
              title={item.title}
              subtitle={item.subtitle}
              imageUrl={item.imageUrl}
              category={item.category}
            />

            <Spacing lg="100" md="70" />
          </Div>
        ) : (
          <Div key={index}>
            <Portfolio8
              title={item.title}
              subtitle={item.subtitle}
              imageUrl={item.imageUrl}
              category={item.category}
            />
            <Spacing lg="100" md="70" />
          </Div>
        )
      )}
    </>
  );
}
