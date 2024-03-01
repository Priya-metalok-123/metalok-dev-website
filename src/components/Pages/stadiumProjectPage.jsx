import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { pageTitle } from '../../helper'
import Button from '../Button'
import Cta from '../Cta'
import PageHeading from '../PageHeading'
import Div from '../Div'
import SectionHeading from '../SectionHeading'
import Spacing from '../Spacing'

import { Icon } from '@iconify/react';

export default function WebsummitProjectPage() {
  // const params = useParams()
  pageTitle('Stadium');
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <PageHeading 
        title='Stadium'
        bgSrc='/images/service_hero_bg.jpeg'
        pageLinkText="Stadium"
      />
      <Spacing lg='150' md='80'/>
      <Div className="container">
        <img src="/images/portfolio-home/web-three.jpg" alt="Details" className="cs-radius_15 w-100" />
        <Spacing lg='90' md='40'/>
        <iframe src="https://www.spatial.io/s/Entrepreneur-Web-3-0-Summit-Web3-Stage-640b273f420342d550d3d436?share=441682595318771889" className='d-modal-div' />
        <Spacing lg='90' md='40'/>
        <Div className="row">
          <Div className="col-lg-6">
            <SectionHeading 
              title='W3 Summit 2023 – Metaverse Spaces ' 
              subtitle='Metaverse Spaces ' 
            >
              <Spacing lg='40' md='20'/>
              <p> 
              We built the Digital twin of the venue of the W3 Summit 2023 event enabled with avatar integration and social interactions.  
                 </p>
              <Spacing lg='10' md='10'/>
              <p>
              The space features avatar integrations for interactions, the entrance with a selfie booth as memoir, stalls for advertising for event attendees, and stage & seating for speeches of prominent speakers. For the ease of access of the attendees, we have segregated the stages as links for Web3, Metaverse and NFT stages. 
                 </p>
                 <p>
                 Our project has built-in features of avatar customization, space interaction, teleportation between spaces, viewing& interacting with advertisements at stalls, social interaction between attendees and a 360 degree exploration of space in the metaverse.  </p>
            </SectionHeading>
          </Div>
          <Div className="col-lg-5 offset-lg-1">
            <Spacing lg='60' md='40'/>
            <h2 className='cs-font_30 cs-font_26_sm cs-m0'>Project Info -</h2>
            <Spacing lg='50' md='30'/>
            <Div className="row">
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Category:</h3>
                <p className='cs-m0'>Metaverse Space – Virtual Events  </p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Technologies: </h3>
                <p className='cs-m0'>VR, Spatial, AR, AI   </p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Software:</h3>
                <p className='cs-m0'>Unity, Unreal Engine, 3D Vista   </p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Device Compatibility: </h3>
                <p className='cs-m0'>Desktops, Laptops, Tablets, Mobile, VR Glasses (Oculus)  </p>
                <Spacing lg='30' md='30'/>
              </Div>
              
              
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>User Experience:  </h3>
                <p className='cs-m0'>  VR Exploration, Social Interaction, Avatar Customization, 360 degree Space view, Space Interaction   </p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Client:</h3>
                <p className='cs-m0'>W3 Conference    </p>
                <Spacing lg='30' md='30'/>
              </Div>
            </Div>
          </Div>
        </Div>
        <Spacing lg='65' md='10'/>
        <Div className="cs-page_navigation cs-center">
            <Div>
              <Button btnLink='/zeeProjectPage' btnText='Prev Project' variant='cs-type1'/>
            </Div>
            <Div>
              <Button btnLink='/sportsverseProjectPage' btnText='Next Project'/>
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
