import React, { useEffect } from "react";

import CreativePortfolioHome from "./CreativePortfolioHome";
import FunFact from "../FunFact";
import Hero from "../Hero";
import Div from "../Div";
import SectionHeading from "../SectionHeading";
import Spacing from "../Spacing";
import Cta from "../Cta";
import LogoListClient from "../LogoListClient";
import YouTube from "react-youtube";
import MovingText from "../MovingText";
import PortfolioSlider from "../Slider/PortfolioSlider";
import PostSlider from "../Slider/PostSlider";
import TeamSlider from "../Slider/TeamSlider";
import TimelineSlider from "../Slider/TimelineSlider";
import { pageTitle } from "../../helper";
import HomeCardSlider from "../Slider/homeCardSlider";
//import CardsSlider from "../Slider/cardsSlider";
export default function Home() {
  pageTitle("Home");

  const heroSocialLinks = [
    {
      name: "Linkedin",
      links: "https://www.linkedin.com/company/metalokofficial/",
    },
    {
      name: "Twitter",
      links: "https://twitter.com/metalok_io?s=11&t=thNhdiyreqdTyOOnWlst0g",
    },
    {
      name: "Instagram",
      links:
        "https://www.instagram.com/metaloksolutions/?igshid=YmMyMTA2M2Y%3D",
    },
    {
      name: "Facebook",
      links: "https://www.facebook.com/people/Metalok/100088665795146/",
    },
    {
      name: "Threads",
      links: "https://www.threads.net/@metaloksolutions",
    },
  ];

  // FunFact Data
  const funfaceData = [
    {
      title: " Years of Experience",
      factNumber: "10+",
    },
    {
      title: " Competent Team members ",
      factNumber: "40+",
    },
    {
      title: "Product Demonstrations ",
      factNumber: "10+",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const videoId = "qdUMxdbn9uw";
  const opts = {
    playerVars: {
      controls: 1,
      modestbranding: 1,
    },
    width: "100%",
    height: "700",
  };
  return (
    <>
      <Hero
        title=" Building Your <br>Digital Dream "
        subtitle=" Explore, Scale and Expand your businesses into the metaverse by building diverse economic ecosystems & innovative Deep-Tech solutions  "
        btnText="Get a Quote"
        btnLink="/contact"
        scrollDownId="#service"
        socialLinksHeading="Follow Us"
        heroSocialLinks={heroSocialLinks}
        bgImageUrl="/images/demo/home-bg.png"
      />

      <div className="container">
        <FunFact
          variant="cs-type1"
          title="Our Strengths "
          subtitle="Born from the passion of individuals with foresighted vision and inspired from the profound Indian culture, Metalok represents the sixth element of nature, “Digital”- Meta meaning digital and Lok meaning World "
          data={funfaceData}
        />
      </div>

      <Spacing lg="150" md="80" />
      <div className="services-heading-center">
        <SectionHeading title=" Services we offer" subtitle="What Can We Do" />
      </div>
      <CreativePortfolioHome />

      <Div className="container">
        <Div className="row">
          <SectionHeading
            title="Enterprise Metaverse"
            subtitle="Our Expertise"
            btnText="See All Spaces"
            btnLink="/enterpriceMetaversePage"
          />
        </Div>
      </Div>
      <Spacing lg="50" md="30" />

         {/*<div className="container desktop-card-slider">
        <div className="row">
          <HomeCardSlider />
        </div>
      </div>*/}

       {/*<Div className="container mobile-card-slider">
        <CardsSlider />
    </Div>*/}
            {/* <Spacing lg="150" md="80" /> */}

      <Spacing lg="80" md="80" />
      <Div>
        <Div className="container">
          <SectionHeading
            title="Portfolio to explore"
            subtitle="Latest Projects"
            variant="cs-style1 text-center"
          />
          <Spacing lg="90" md="45" />
        </Div>
        <PortfolioSlider />
      </Div>

      <Spacing lg="150" md="80" />
      <Div className="cs-shape_wrap_2">
        <Div className="cs-shape_2">
          <Div />
        </Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title="We have been recognized and appreciated for our trailblazing works "
                subtitle="Accolades"
                variant="cs-style1"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-7 offset-xl-1">
              <TimelineSlider />
            </Div>
          </Div>
        </Div>
      </Div>

      <Spacing lg="130" md="70" />
      <Div className="container">
        <h2 className="cs-font_50 cs-m0 text-center cs-line_height_4">
          Remodel your dream project in the Virtual World through our innovative
          and state-of-the-art approach to Technologies & Concepts
        </h2>
        <Spacing lg="150" md="70" />

        <YouTube videoId={videoId} opts={opts} className="youtube-link" />
      </Div>

      <Spacing lg="85" md="80" />
      <Div className="container">
        <SectionHeading
          title="Awesome team <br/>members"
          subtitle="Our Team"
          variant="cs-style1"
        />
        <Spacing lg="85" md="45" />
        {/* <TeamSlider /> */}
      </Div>

      <Spacing lg="150" md="80" />
      <Div className="cs-shape_wrap_4">
        <Div className="cs-shape_4 shape_bg-img_home"></Div>
        <Div className="cs-shape_4 shape_bg-img_home"></Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title="Explore recent publication"
                subtitle="Our Blog"
                btnText="View More Blog"
                btnLink="/blog"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-7 offset-xl-1">
              <Div className="cs-half_of_full_width">
                <PostSlider />
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>

      <Spacing lg="125" md="70" />
      <MovingText text=" Partners sharing our vision |   " />
      <p></p>
      <Spacing lg="105" md="70" />

      <Div className="container">
        <LogoListClient />
      </Div>

      <Spacing lg="150" md="80" />

      <Div className="container">
        <Cta
          title="Let’s discuss to build <br />something <i>cool</i> together"
          btnText="Get in touch"
          btnLink="/contact"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div>
    </>
  );
}
