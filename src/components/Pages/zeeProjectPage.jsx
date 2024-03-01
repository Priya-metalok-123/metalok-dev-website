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


export default function ZeeProjectPage() {
  // const params = useParams()
  pageTitle('Zee Business');
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const videoId = 'OnxGlJuYdls';
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
        title='Zee Business'
        bgSrc='/images/service_hero_bg.jpeg'
        pageLinkText="Zee Business"
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
              src="https://s3.amazonaws.com/thecolosseum.metalok.io/metalok-website/zee.mp4"
              onContextMenu={(e) => e.preventDefault()}
            /> */}
            <Spacing lg='60' md='80'/>
            <YouTube videoId={videoId} opts={opts} className="youtube-link"  />
        <Spacing lg='180' md='40'/>
        <Spacing lg='90' md='40'/>
        <iframe src="https://metalok-2.s3.ap-south-1.amazonaws.com/zee+business/index.html" className='d-modal-div' />
        <Spacing lg='90' md='40'/>
        {/* <img src="/images/portfolio-home/zee.jpg" alt="Details" className="cs-radius_15 w-100" /> */}

        <Div className="row">
          <Div className="col-lg-6">
            <SectionHeading 
              title='Zee Business – Metaverse Spaces  ' 
              subtitle='Metaverse Spaces ' 
            >
              <Spacing lg='40' md='20'/>
              <p>  We built an interactive metaverse space for Zee Business. With collaborative effort from Architecture, design and technical teams, Our Zee Business Metaverse has an office building equipped with studio space, reception, interview spaces and avatars.  </p>
              <Spacing lg='10' md='10'/>
              <p>Our project is enabled with VR mode where the user can experience the News studio space in the Metaverse. This space is designed especially for the users looking to pursue and experience the world of journalism or Media.   </p>
            <p>In our project users can experience a 360 degree space view, advertisements and news videos in space, news studio overview with multiple 3D avatars interacting in the virtual space. The popular Anil Singhvi avatar stands as a main attraction of our Zee Business Virtual Space. </p>
            </SectionHeading>
          </Div>
          <Div className="col-lg-5 offset-lg-1">
            <Spacing lg='60' md='40'/>
            <h2 className='cs-font_30 cs-font_26_sm cs-m0'>Project Info -</h2>
            <Spacing lg='50' md='30'/>
            <Div className="row">
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Category:</h3>
                <p className='cs-m0'>Metaverse Space – Virtual Studio  </p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Technologies: </h3>
                <p className='cs-m0'>VR, AI  </p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Software:</h3>
                <p className='cs-m0'>Unity, Unreal Engine  </p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Device Compatibility: </h3>
                <p className='cs-m0'>Desktops, Laptops, Tablets, Mobile, VR Glasses (Oculus)  </p>
                <Spacing lg='30' md='30'/>
              </Div>
              
              
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>User Experience:  </h3>
                <p className='cs-m0'>VR Exploration, Avatar Customization, 360 degree Space view   </p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Client:</h3>
                <p className='cs-m0'>Zee Business  </p>
                <Spacing lg='30' md='30'/>
              </Div>
            </Div>

            <Div className =" parent_portfolio">
              <span className="cs-text_btn " >
              <a href="https://metalok-2.s3.ap-south-1.amazonaws.com/zee+business/index.html" target='_blank'> 
                <span> 
                 Explore Zee Business Metaverse 
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
              <Button btnLink='/ramandirProjectPage' btnText='Prev Project' variant='cs-type1'/>
            </Div>
            <Div>
              <Button btnLink='/websummitProjectPage' btnText='Next Project'/>
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
