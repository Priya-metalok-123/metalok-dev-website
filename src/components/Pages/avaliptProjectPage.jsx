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

export default function AvaliptProjectPage() {
  // const params = useParams()
  pageTitle('Avalipt');
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const videoId = 'b0r9T71LCSs';
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
        title='Avalipt'
        bgSrc='/images/service_hero_bg.jpeg'
        pageLinkText="Avalipt"
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
            src="https://s3.amazonaws.com/thecolosseum.metalok.io/metalok-website/avalipt.mp4"
            onContextMenu={(e) => e.preventDefault()}
          /> */}
          <Spacing lg='60' md='80'/>
          <YouTube videoId={videoId} opts={opts} className="youtube-link"  />
        <Spacing lg='190' md='40'/>
        {/* <Spacing lg='90' md='40'/> */}
        {/* <iframe src=" " className='d-modal-div' />
        <Spacing lg='90' md='40'/> */}
        {/* <img src="/images/portfolio-home/web-three.jpg" alt="Details" className="cs-radius_15 w-100" /> */}

        <Div className="row">
          <Div className="col-lg-6">
            <SectionHeading 
              title='Avalipt – Metaverse Spaces  ' 
              subtitle='Metaverse Spaces ' 
            >
              <Spacing lg='40' md='20'/>
              <p> 
              Catering to the retail sector as well as the fashion enthusiasts, fashion Metaverse is a rapidly emerging market, for which our Avalipt fashion studio is a fine masterpiece.  
                 </p>
              <Spacing lg='10' md='10'/>
              <p>
              Avalipt Fashion Metaverse is a Virtual Studio designed to carry the brand essence of Avalipt into the Virtual Space. With an identity of customized luxurious fashion, Avalipt in the metaverse recreates the same experience through the Metaverse Fashion Studio. 
                 </p>
                 <p>
                 From Architecture to interiors and 3D fashion products, Metalok Design and Architecture team has expended creativity and effort to realize the dream fashion studio in the metaverse. An immersive shopping experience, Virtual Product trials, interactive shopping with family & friends, customizable fashion products, avatar customization, Virtual tour of the studio, and carting & payment gateways as future goals, The Avalipt Fashion Studio aims to be one of the best Metaverse Fashion Studios in the Virtual Spectrum.  </p>
            </SectionHeading>
          </Div>
          <Div className="col-lg-5 offset-lg-1">
            <Spacing lg='60' md='40'/>
            <h2 className='cs-font_30 cs-font_26_sm cs-m0'>Project Info -</h2>
            <Spacing lg='50' md='30'/>
            <Div className="row">
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Category:</h3>
                <p className='cs-m0'>Metaverse Spaces – Virtual Fashion Studio  </p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Technologies: </h3>
                <p className='cs-m0'>VR, AI, 3D Vista  </p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Software:</h3>
                <p className='cs-m0'>Unity, Unreal Engine, Polygon    </p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Device Compatibility: </h3>
                <p className='cs-m0'>Desktops, Laptops, Tablets, Mobile  </p>
                <Spacing lg='30' md='30'/>
              </Div>
              
              
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>User Experience:  </h3>
                <p className='cs-m0'>  360 degree Experience. VR tour, 3D interactions, VR Exploration, Avatar Customization, Virtual Product Try-on </p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Client:</h3>
                <p className='cs-m0'>Avalipt    </p>
                <Spacing lg='30' md='30'/>
              </Div>
            </Div>
          </Div>
        </Div>
        <Spacing lg='65' md='10'/>
        <Div className="cs-page_navigation cs-center">
            <Div>
              <Button btnLink='/akshyaProjectPage' btnText='Prev Project' variant='cs-type1'/> 
            </Div>
            <Div>
              <Button btnLink='/foodverseProjectPage' btnText='Next Project'/>
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
