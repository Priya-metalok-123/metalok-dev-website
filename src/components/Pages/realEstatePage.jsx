// RealEstatePage.js

import RealEstateHeader from './RealEstateHeader'; 
import Div from "../Div";
import Spacing from "../Spacing";
import React, { useEffect, useState } from "react";
import { pageTitle } from "../../helper";
import '../customStyes/Estate.css';

export default function RealEstatePage() {
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

  const [activeTab, setActiveTab] = useState('images'); // Default active tab

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <RealEstateHeader />
      <div>
        <div className="carousel-video">
          <video
            autoPlay
            className="reduced-opacity"
            playsInline
            loop
            muted
            alt="All the devices"
            src="https://storagecdn.propvr.ai/WebsiteAssets%2Fnew_hero_video.mp4?alt=media"
          />
        </div>
      </div>

      <Spacing lg="200" md="80" />
      <Spacing lg="200" md="80" />
      <Spacing lg="200" md="80" />
      <Spacing lg="200" md="80" />
      <Spacing lg="200" md="80" />
      <Spacing lg="20" md="80" />

      <Div className="enterprice-head-div">
        <h3>Come and Explore the Future of Real Estate? </h3> 
        <p>Disrupting the storytelling experience for customers using technology</p>
        <p>Launch find your space in the Metaverse with Metalok</p>
      </Div>

      <Spacing lg="100" md="70" />

      <div className="container">
      <div className=' tabs_custom'>
        <div className='row '>
          <div className='col-sm-4'>
            <div
              className={`tab ${activeTab === 'images' ? 'active' : ''}`}
              onClick={() => handleTabClick('images')}
            >
              Images
            </div>
          </div>
          <div className='col-sm-4'>
            <div
              className={`tab ${activeTab === 'details' ? 'active' : ''}`}
              onClick={() => handleTabClick('details')}
            >
              Details
            </div>
          </div>
          <div className='col-sm-4'>
            <div
              className={`tab ${activeTab === 'location' ? 'active' : ''}`}
              onClick={() => handleTabClick('location')}
            >
              Location
            </div>
          </div>
        </div>
        </div>
        {/* Tabs */}
        <div className="tab-container">
        </div>
        <div className='row '>
        <div className="tab-content">
          {activeTab === 'videos' && (
            <div>
              <h2>Videos</h2>
            </div>
          )}
          {activeTab === 'images' && (
            <div>
              <video
            autoPlay
            className="tabs_videos_custom"
            playsInline
            loop
            muted
            alt="All the devices"
            src="https://storagecdn.propvr.ai/WebsiteAssets%2Fnew_hero_video.mp4?alt=media"
          />
            </div>
          )}
          {activeTab === 'details' && (
            <div>
              <video
            autoPlay
            className="tabs_videos_custom"
            playsInline
            loop
            muted
            alt="All the devices"
            src="https://storagecdn.propvr.ai/WebsiteAssets%2Fnew_hero_video.mp4?alt=media"
          />
            </div>
          )}
          {activeTab === 'location' && (
            <div>
              <h2>bdhjasfjhasbfashvcf</h2>
            </div>
          )}
        </div>
        </div>
      </div>
      <section>
        
      <Spacing lg="100" md="80" />
      <Div className="enterprice-head-div">
        <h3>What we Do! </h3> 
        <p>We help brands, developers, architects and governments create inspiring digital spaces</p>
        <p>Launch find your space in the Metaverse with Metalok</p>
      </Div>
      <Spacing lg="40" md="80" />
        <div className='container'>
          <div className='row'>
            <div className='col-md-3 col-lg-3 col-xl-3 col-sm-12'>
              <div className='what_we_do_box'>
                <div className=''>
                  <img src='https://storagecdn.propvr.ai/propvr%2FMetaverse%2FFor-Developers.webp?alt=media' alt='developers' />
                </div>
                <h4>For Architects </h4>
                <p>Gear up to transform your planned structure into an experiential project by tapping into the metaverse. You can provide your clients an immersive experience and a 3D visualization with 
                  our services in this virtual world, and let them get the feel of it in the real world </p>
              </div>
             
            </div>
            <div className='col-md-3 col-xl-3 col-lg-3 col-sm-12'>
            <div className='what_we_do_box'>
              <div className=''>
                <img src="https://storagecdn.propvr.ai/propvr%2FMetaverse%2FFor-Architects.webp?alt=media" alt="archtects" />
              </div>
              <h4>For Developers</h4>
              <p>Build a digital twin of your property in the metaverse and grab the attention of your clients with an interactive and immersive property tour. 
                Be the torch-bearer of the futuristic approach of property search and tour in the real-estate world </p>
            </div>
            </div>
            <div className='col-md-3 col-xl-3 col-lg-3 col-sm-12'>
            <div className='what_we_do_box'>
            <div className=''>
                  <img src='https://storagecdn.propvr.ai/propvr%2FMetaverse%2FFor-Governments.webp?alt=media' alt='governament' />
                </div>
                <h4>For Agents</h4>
                <p>Channel the power of Metaverse into 3D property tours, client customizable digital elements, interactive property showcase and 3D walkthrough.
                   Transfer your clients to the Experience Zone of the Virtual World </p>
            </div>
            </div>
            <div className='col-md-3 col-xl-3 col-lg-3 col-sm-12'>
            <div className='what_we_do_box'>
            <div className=''>
                  <img src='https://storagecdn.propvr.ai/propvr%2FMetaverse%2FFor-Governments.webp?alt=media' alt='governament' />
                </div>
                <h4>For Government</h4>
                <p>The large and complicated plans of cities, townships and other public places can be easily modified and realistically displayed using the technologies of metaverse. 
                  In the future, residents of the areas can also utilize the opportunity of digital assets. </p>
            </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
