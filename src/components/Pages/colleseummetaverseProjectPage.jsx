import React, { useEffect, useRef } from 'react'
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


export default function ColleseumMetaverseProjectPage() {
  const videoRef = useRef(null)
  const playVideo = () => {
    videoRef.current.play();
  };
  const pauseVideo = () => {
    videoRef.current.pause();
  };

  const videoId = 'uar7CCB8LcY'; // Extracted video ID from the URL

  const opts = {
    playerVars: {
      controls: 1, // Show controls
      modestbranding: 1, // Hide YouTube logo
    },
    width: "100%",
    height: "700", // Adjust the height as needed for small size
  };
 const params = useParams()
  pageTitle('The Colloseum Metaverse' );
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  return (
    <>
      <PageHeading
        title='The Colloseum Metaverse'
        bgSrc='/images/service_hero_bg.jpeg'
        pageLinkText="The Colloseum Metaverse"
      />
      <Spacing lg='150' md='80' />
      <Div className="container">
      {/* <video 
              style={{ maxWidth: "100",height:"auto" }}
              autoPlay
              className="video-metaverse"
              playsInline
              controls
              loop
              // muted 
              alt="All the devices"
              src="https://s3.amazonaws.com/thecolosseum.metalok.io/metalok-website/metaverse.mp4"
              onContextMenu={(e) => e.preventDefault()}
            /> */}
            <YouTube videoId={videoId} opts={opts} className="youtube-link"  />
      
        <Spacing lg='90' md='40' />
        <iframe src="https://www.spatial.io/s/The-Colosseum-Ground-Floor-6435784ac02f064c976335e2?share=0" className='d-modal-div' />
        <Spacing lg='90' md='40' />
 
        {/* <Spacing lg='90' md='40' /> */}
        <Div className="row">
          <Div className="col-lg-6">
            <SectionHeading
              title='The Colloseum – Customizable Metaverse Space '
              subtitle='The Colloseum '
            >
              <Spacing lg='40' md='20' />
              <p> The Metaverse space of Colloseum is developed for users with customizable and configurable spaces. Designed as a retail space to showcase furniture, the Colloseum space can be used as a template for multiple real estate and other industrial usecases. </p>
              <Spacing lg='10' md='10' />
              <p>Built with compatibility with AR and VR technology, The colloseum space allows users to customize floor, walls, and other fixed interiors of a space with respect to colours, textures, materials and more. </p>
            </SectionHeading>
          </Div>
          <Div className="col-lg-5 offset-lg-1">
            <Spacing lg='60' md='40' />
            <h2 className='cs-font_30 cs-font_26_sm cs-m0'>Project Info -</h2>
            <Spacing lg='50' md='30' />
            <Div className="row">
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Category:</h3>
                <p className='cs-m0'>Metaverse Space – Home Space </p>
                <Spacing lg='30' md='30' />
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Technologies: </h3>
                <p className='cs-m0'>VR, AR </p>
                <Spacing lg='30' md='30' />
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Software:</h3>
                <p className='cs-m0'>Unity, 3D Vista, Unreal Engine </p>
                <Spacing lg='30' md='30' />
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Device Compatibility: </h3>
                <p className='cs-m0'>Desktops, Laptops, Tablets, Mobile, VR Glasses (Oculus) </p>
                <Spacing lg='30' md='30' />
              </Div> 
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>User Experience:  </h3>
                <p className='cs-m0'>Product Interaction, Space Customization, 360 degree Space view, Virtual Tour  </p>
                <Spacing lg='30' md='30' />
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Client:</h3>
                <p className='cs-m0'>The Colleseum </p>
                <Spacing lg='30' md='30' />
              </Div>
            </Div>


            <Div className =" parent_portfolio cs-page_navigation">
              <span className="cs-text_btn " >
                <span> 
                  <a href="https://www.spatial.io/s/The-Colleseum-Ground-Floor-6435784ac02f064c976335e2?share=0" target='_blank'> Explore Colleseum Metaverse 
                  <Icon icon="bi:arrow-right" /> 
                  </a> 
                </span>
                
              </span>
            </Div>
           

          </Div>
        </Div>
        <Spacing lg='65' md='10' />
        <Div className="cs-page_navigation cs-center">
          <Div>
            <Button btnLink='/foodverseProjectPage' btnText='Prev Project' variant='cs-type1' />
          </Div>
          <Div>
            
           <Button btnLink='/colleseumProjectPage' btnText='Next Project' />
          </Div>
        </Div>
      </Div>
      <Spacing lg='145' md='80' />
      {/* <Cta
        title='agency@arino.com'
        bgSrc='/images/cta_bg_2.jpeg'
        variant='rounded-0'
      /> */}
    </>
  )
}
 