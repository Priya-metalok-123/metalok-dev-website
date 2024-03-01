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
import { Link, NavLink } from 'react-router-dom';
import { Icon } from '@iconify/react';


export default function RamandirProjectPage() {
  // const params = useParams()
  pageTitle('Ram Mandir');
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const videoId = '6NPU24c3Yvs';
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
        title='Ram Mandir'
        bgSrc='/images/service_hero_bg.jpeg'
        pageLinkText="Ram Mandir"
      />
      <Spacing lg='100' md='80'/>
      <Div className="container">
      {/* <video 
              style={{ maxWidth: "100",height:"auto" }}
              autoPlay
              className="video-metaverse"
              playsInline
              loop
              muted 
              alt="All the devices"
              src="https://s3.amazonaws.com/thecolosseum.metalok.io/metalok-website/RAM+MANDIR.mp4"
              onContextMenu={(e) => e.preventDefault()}
            /> */}
              {/* <Spacing lg='60' md='80'/> */}
              <YouTube videoId={videoId} opts={opts} className="youtube-link"  />
        <Spacing lg='140' md='40'/>
        {/* <Spacing lg='90' md='40' /> */}
        <iframe src="https://rammandir.s3.ap-south-1.amazonaws.com/final/birdeye/index.html" className='d-modal-div' />
        <Spacing lg='90' md='40'/>
        {/* <img src="/images/portfolio-home/ram-mandir.jpg" alt="Details" className="cs-radius_15 w-100" /> */}
        <Div className="row">
          <Div className="col-lg-6">
            <SectionHeading 
              title='Ram Mandir – Metaverse Spaces  ' 
              subtitle='Metaverse Spaces ' 
            >
              <Spacing lg='40' md='20'/>
              <p> We aspire to build the Digital twin of the most awaited Ram Mandir in the Metaverse as a part of our Tourism venture under Spiritual Tourism. The mission is to enable the devotees of Lord Shri Ram an accessible, convenient and indiscriminating experience of pilgrimage irrespective of physical, financial and geographical limitations  </p>
              <Spacing lg='10' md='10'/>
              <p>Our project is enabled with VR mode where the devotee can interact with the Ram Mandir Metaverse space. With the Avatar Integration feature, the devotees can explore the Ram Mandir space which we built as Arena, Corridor and Main Mandir with architectural liberties. We have also enabled the space with a learning interface in the corridor section, where the user’s avatar can learn the entire epic of Ramayana depicted as a pictorial storytelling.   </p>
           <p> Further down the road, we plan to build the Spiritual Tourism as a DAO equipped with Blockchain Technology to enable offerings, receive the prasads, buy souvenirs and more as Digital Collectibles.  </p>
            </SectionHeading>
          </Div>
          <Div className="col-lg-5 offset-lg-1">
            <Spacing lg='60' md='40'/>
            <h2 className='cs-font_30 cs-font_26_sm cs-m0'>Project Info -</h2>
            <Spacing lg='50' md='30'/>
            <Div className="row">
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Category:</h3>
                <p className='cs-m0'>Metaverse Space – Virtual Events </p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Technologies: </h3>
                <p className='cs-m0'>VR, Spatial, AR, AI  </p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Software:</h3>
                <p className='cs-m0'>Unity, Unreal Engine, 3D Vista  </p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Device Compatibility: </h3>
                <p className='cs-m0'>Desktops, Laptops, Tablets, Mobile, VR Glasses (Oculus) </p>
                <Spacing lg='30' md='30'/>
              </Div>
              
              
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>User Experience:  </h3>
                <p className='cs-m0'>VR Exploration, Social Interaction, Avatar Customization, 360 degree Space view, Space Interaction   </p>
                <Spacing lg='30' md='30'/>
              </Div>
              {/* <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Client:</h3>
                <p className='cs-m0'>W3 Conference  </p>
                <Spacing lg='30' md='30'/>
              </Div> */}
            </Div>

            <Div className =" parent_portfolio">
              <span className="cs-text_btn " >
              <a target='_blank'  href="https://corridor.metalok.io/">
                <span> 
                   Explore Ram Mandir Metaverse 
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
              <Button btnLink='/colleseumProjectPage' btnText='Prev Project' variant='cs-type1'/>
            </Div>
            <Div>
              <Button btnLink='/zeeProjectPage' btnText='Next Project'/>
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
