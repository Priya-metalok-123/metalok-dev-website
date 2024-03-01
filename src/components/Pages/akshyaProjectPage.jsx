import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { pageTitle } from '../../helper'
import Button from '../Button'
import Cta from '../Cta'
import PageHeading from '../PageHeading'
import Div from '../Div'
import SectionHeading from '../SectionHeading'
import Spacing from '../Spacing'
import YouTube from 'react-youtube';
import { Icon } from '@iconify/react';


export default function AkshyaProjectPage() {
  const params = useParams()
  pageTitle('Akshaya');
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const videoId = 'f72e5JwylIQ';
  const opts = {
    playerVars: {
      controls: 1, // Show controls
      modestbranding: 1, // Hide YouTube logo
    },
    width: "100%",
    height: "700", // Adjust the height as needed for small size
  };
  return (
    <>
      <PageHeading 
        title='Akshaya'
        bgSrc='/images/service_hero_bg.jpeg'
        pageLinkText="Akshaya"
      />
      <Spacing lg='150' md='80'/>
      <Div className="container">
      {/* <video 
            style={{ maxWidth: "100",height:"auto" }}
            autoPlay
            className="video-metaverse"
            playsInline
            loop
            muted 
            alt="All the devices"
            src="https://s3.amazonaws.com/thecolosseum.metalok.io/metalok-website/Akshaya+Wtl.mp4"
            onContextMenu={(e) => e.preventDefault()}
          /> */}
            <Spacing lg='80' md='40'/>
            <YouTube videoId={videoId} opts={opts} className="youtube-link"  />
            <Spacing lg='180' md='40'/>
        <iframe src="https://metalok-2.s3.ap-south-1.amazonaws.com/wtl-metaverse/index.html" className='d-modal-div' />
        <Spacing lg='90' md='40'/>
        {/* <img src="/images/portfolio-home/akshaya.png" alt="Details" className="cs-radius_15 w-100" /> */}
        <Div className="row">
          <Div className="col-lg-6">
            <SectionHeading 
              title='Akshaya NFT – Blockchain Services ' 
              subtitle='Blockchain Services ' 
            >
              <Spacing lg='40' md='20'/>
              <p> We have designed and built digital collectibles under the Sports section for Akshaya NFT.   
                 </p>
              <Spacing lg='10' md='10'/>
              <p>Our project was a collaboration with the Web3 tech giant Akshay NFT and The greatest show on court – The World Tennis League. We have designed Tennis accessories- caps, balls, racquets; jerseys, MVP players, and Team NFTs for their first ever league held in the revered Coca Cola Stadium in Dubai. 
                 </p>
                 <p>We have also rendered our services in building a blockchain supported marketplace for interaction and trading of these tokens in the Web3 space. </p>
            </SectionHeading>
          </Div>
          <Div className="col-lg-5 offset-lg-1">
            <Spacing lg='60' md='40'/>
            <h2 className='cs-font_30 cs-font_26_sm cs-m0'>Project Info -</h2>
            <Spacing lg='50' md='30'/>
            <Div className="row">
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Category:</h3>
                <p className='cs-m0'>Blockchain Services – NFT Design & Marketplace support  </p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Technologies: </h3>
                <p className='cs-m0'>Blockchain </p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Software:</h3>
                <p className='cs-m0'>Unity, Unreal Engine, Polygon  </p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Device Compatibility: </h3>
                <p className='cs-m0'>Desktops, Laptops, Tablets, Mobile </p>
                <Spacing lg='30' md='30'/>
              </Div>
              
              
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>User Experience:  </h3>
                <p className='cs-m0'>NFT Interaction, Marketplace trading  </p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Client:</h3>
                <p className='cs-m0'>Akshaya NFT X WTL </p>
                <Spacing lg='30' md='30'/>
              </Div>
            </Div>

            

            <Div className =" parent_portfolio">
              <span className="cs-text_btn " >
              <a href="https://metalok-2.s3.ap-south-1.amazonaws.com/wtl-metaverse/index.html" target='_blank'>
                <span> 
                  Explore Akshaya NFT Metaverse 
                </span>
                <Icon icon="bi:arrow-right" /> 
                </a >
              </span>
            </Div>

          </Div>
        </Div>
        <Spacing lg='65' md='10'/>
        <Div className="cs-page_navigation cs-center">
            <Div>
              <Button btnLink='/sportsverseProjectPage' btnText='Prev Project' variant='cs-type1'/>
            </Div>
            <Div>
              <Button btnLink='/avaliptProjectPage' btnText='Next Project'/>
            </Div>
          </Div>
      </Div>
      <Spacing lg='145' md='80'/>
      {/* <Cta 
        title='agency@arino.com' 
        bgSrc='/images/cta_bg_2.jpeg'
        variant='rounded-0'
      /> */}
    </>
  )
}
