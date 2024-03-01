import React, { useEffect } from "react";
import CaseStudy from "../CaseStudy";
import Cta from "../Cta";
import Div from "../Div";
import Portfolio2 from "../Portfolio/Portfolio2";
import Portfolio3 from "../Portfolio/Portfolio3";
import Portfolio4 from "../Portfolio/Portfolio4";
import Portfolio5 from "../Portfolio/Portfolio5";
import Portfolio8 from "../Portfolio/portfolio8";

// import TestimonialSlider from '../Slider/TestimonialSlider';
import Spacing from "../Spacing";
import { pageTitle } from "../../helper";

export default function EnterpriceMetaversePage() {
  pageTitle("Home");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const heroSocialLinks = [
    {
      name: "Behance",
      links: "/",
    },
    {
      name: "Twitter",
      links: "/",
    },
  ];
  const portfolioData = [
    {
      title: "Immersive Experiences  ",
      subtitle: "3D Configurator",
      btnText: "See Details",
      btnLink: "/threedconfigPage",
      imageUrl: "/images/portfolio_35.jpeg",
      category: "3D Configurators ",
    },
    {
      title:
        "We combine Architecture, Design & Technology to build your Digital store ",
      subtitle: "Metaverse Spaces",
      btnText: "See Details",
      btnLink: "/metaversespacePage",
      imageUrl: "/images/portfolio_36.jpeg",
      category: "Metaverse spaces",
    },
    {
      title: "We bring Decentralization & Immutability to your Business ",
      subtitle: "Blockchain services",
      btnText: "See Details",
      btnLink: "/blockchainServicePage",
      imageUrl: "/images/service-bck.png",
      category: "Blockchain Services ",
    },
  ];
  const portfolioDat = [
    {
      title: "We Build customizable 3D products driving sales  ",
      subtitle: "3D Configurators",
      btnText: "See Details",
      btnLink: "/threedconfigPage ",
      category: "3D Configurators",
      imageUrl: "/images/service-bck.png",
    },
    {
      title: "We bring Decentralization & Immutability to your Business ",
      subtitle: "Blockchain services",
      btnText: "See Details",
      btnLink: "/blockchainServicePage",
      imageUrl: "/images/service-bck.png",
      category: "Blockchain Services ",
    },
  ];

  const portfolioDa = [
    {
      subtitle:
        "AR/VR enabled metaverse allows the enterprise stakeholders to experience the virtual 		manifestation as close to the Real-life event/solution as possible ",

      title: "Immersive Experiences ",
      btnText: "See Details",
      btnLink: "/metaversespacePage",
      imageUrl: "/images/service-bck.png",
      category: " Metaverse spaces",
    },
  ];

  return (
    <>
      <video
        style={{ maxWidth: "100", height: "auto" }}
        autoPlay
        className="video-metaverse"
        playsInline
        loop
        muted
        alt="All the devices"
        src="https://s3.amazonaws.com/thecolosseum.metalok.io/metalok-website/RAM+MANDIR.mp4"
        onContextMenu={(e) => e.preventDefault()}
      />
      <Spacing lg="150" md="80" />
      <Div className="enterprice-head-div">
        <h1>Metaverse Powered Enterprise Solutions </h1>
        <h4>
          Manage, Meet, Train & Collaborate in Virtual Spaces – a synergy of
          Management & Employees{" "}
        </h4>
        <Spacing lg="150" md="80" />
        <h3>What is Enterprise Metaverse? </h3>
        <p>
          A Virtual Realm of organizing and managing Enterprises. Conduct
          events, conferences, training sessions, fun meets,<br></br> formal &
          informal celebrations and versatile enterprise activities in the
          metaverse spaces.{" "}
        </p>
      </Div>

      <Spacing lg="150" md="80" />
      <h3>What is Enterprise Metaverse? </h3>
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row align-items-center">
          <Div className="col-lg-5"></Div>
          <Div className="col-lg-6"></Div>
          {/* 2nd row  */}
          <Div className="col-lg-5"></Div>
          <Div className="col-lg-6"></Div>
                 {/* 3nd row  */}
          <Div className="col-lg-5"></Div>
          <Div className="col-lg-6"></Div>
                 {/* 4nd row  */}
          <Div className="col-lg-5"></Div>
          <Div className="col-lg-6"></Div>
                 {/* 5nd row  */}
          <Div className="col-lg-5"></Div>
          <Div className="col-lg-6"></Div>
                 {/* 2nd row  */}
          <Div className="col-lg-5"></Div>
          <Div className="col-lg-6"></Div>
          </Div>
          </Div>

     

  
      
    </>
  );
}
