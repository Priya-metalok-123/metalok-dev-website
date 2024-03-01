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


export default function SportsverseProjectPage() {
  // const params = useParams()
  pageTitle('sportsverse');
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const videoId = 'EWzH-H0H0Zk';
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
        title='Sportsverse'
        bgSrc='/images/service_hero_bg.jpeg'
        pageLinkText="sportsverse"
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
            src="https://metalok-testbucket.s3.ap-south-1.amazonaws.com/ipl+video.mp4"
            onContextMenu={(e) => e.preventDefault()}
          /> */}
          <Spacing lg='60' md='80'/>
          <YouTube videoId={videoId} opts={opts} className="youtube-link"  />
        <Spacing lg='190' md='40'/>
          <Spacing lg='90' md='40'/>
        <iframe src="https://www.spatial.io/s/Stadium-GCA-646632039f1231a1dbaa6f79?share=2980928928188301208" className='d-modal-div' />
        <Spacing lg='90' md='40'/>
        {/* <img src="/images/portfolio-home/stadium-img.png" alt="Details" className="cs-radius_15 w-100" /> */}
        <Div className="row">
          <Div className="col-lg-6">
            <SectionHeading 
              title='Sportsverse– Blockchain Services  ' 
              subtitle='Blockchain Services ' 
            >
              <Spacing lg='40' md='20'/>
              <p>   
              We have built the World’s First and Largest Sports Trading Platform for Sportsverse.  
              </p>
              <Spacing lg='10' md='10'/>
              <p>Our project for Sportsverse included designing of Sports, in partricular Cricket NFTs, technology integration & consultation and blockchain network enablement for building the platform from scratch. We have also developed the Website and Mobile Application integrated with Web3 technologies both on front-end and back-end services for Sportsverse. Our services also encompasses content development, UI/UX development, web development, NFT designing, building blockchain network and integration, wallet creation, smart contracts and other blockchain related services for platform establishment. 
                 </p>
            </SectionHeading>
          </Div>
          <Div className="col-lg-5 offset-lg-1">
            <Spacing lg='60' md='40'/>
            <h2 className='cs-font_30 cs-font_26_sm cs-m0'>Project Info -</h2>
            <Spacing lg='50' md='30'/>
            <Div className="row">
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Category:</h3>
                <p className='cs-m0'>Blockchain Services – Platform Building  </p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Technologies: </h3>
                <p className='cs-m0'>Blockchain, React JS, Metamask  </p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Software:</h3>
                <p className='cs-m0'>Polygon, Unreal Engine, Unity, AWS  </p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Device Compatibility: </h3>
                <p className='cs-m0'>Desktops, Laptops, Tablets, Mobile  </p>
                <Spacing lg='30' md='30'/>
              </Div>
              
              
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>User Experience:  </h3>
                <p className='cs-m0'>Social Interaction, Avatar Customization, Match performance, trading, Fan Community Building  </p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Client:</h3>
                <p className='cs-m0'>Sportsverse </p>
                <Spacing lg='30' md='30'/>
              </Div>
            </Div>
          </Div>
        </Div>
        <Spacing lg='65' md='10'/>
        <Div className="cs-page_navigation cs-center">
            <Div>
              <Button btnLink='/websummitProjectPage' btnText='Prev Project' variant='cs-type1'/>
            </Div>
            <Div>
              <Button btnLink='/akshyaProjectPage' btnText='Next Project'/>
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
