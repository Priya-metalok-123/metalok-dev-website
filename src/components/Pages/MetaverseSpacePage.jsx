import React, { useEffect } from 'react' 
import { pageTitle } from '../../helper'
import Accordion from '../Accordion'
import Button from '../Button'
import Cta from '../Cta'
import IconBox from '../IconBox'
import PageHeading from '../PageHeading'
import Div from '../Div'
import SectionHeading from '../SectionHeading'
import TestimonialSlider from '../Slider/TestimonialSlider'
import Spacing from '../Spacing'
import MetaverseFaq from '../Accordion/metaverseFaq'
import '../Accordion/shapeStyle.scss'
import YouTube from 'react-youtube';
export default function MetaverseSpacePage() {
  pageTitle('Metaverse Space Service');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const videoId = '2c7HYSMwZ1Q';
  
  const opts = {
    playerVars: {
      controls: 1, // Show controls
      modestbranding: 1, // Hide YouTube logo
    },
    width: "100%",
    height: "500", // Adjust the height as needed for small size
  };
  return (
    <>
      {/* Start Page Heading Section */}
      <PageHeading
        title="Metaverse Space Service"
        bgSrc="images/about_hero_bg.jpeg"
        pageLinkText="Metaverse Space Service"
      />
      {/* End Page Heading Section */}


      {/* Start About Section */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-lg-12  col-xl-8">
            {/* <img
              src="/images/about_img_1.jpeg"
              alt="About"
              className="w-100 cs-radius_15"
            /> */}
            <iframe src="https://www.spatial.io/s/Metalok-Interior-64259a6ff7f68ef1ab6bd490?share=2374923892770101327" className='meta-div cs-radius_15 ' />
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-lg-12  col-xl-3 offset-xl-1"> 
            <SectionHeading
              title="Metaverse Spaces"
              subtitle="Metaverse Spaces"
            >
              {/* <Spacing lg="30" md="20" /> */}
              <p className="cs-m0">
              Leverage the advanced technologies of AR, VR, XR and Metaverse to generate immersive experiences to your customers. We provide end-to-end solutions customizable to our client needs including Architecture, Design and Technical Integration as Platform-as-a-Service (PAAS)  
              </p>
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="40" />
            </SectionHeading>
          </Div> 
        </Div>
      </Div> 
    {/* End About Section */}

      
      <Spacing lg='145' md='80'/>
      <Div className="container">
        <SectionHeading 
          title='Our Method ' 
          
          subtitle='' 
          variant='cs-style1 text-center'
          pageName={"metaverse"}
        />
       <Div>
       
       </Div>
        <Spacing lg='90' md='45'/>

        <Div className="row">
          <Div className="col-lg-4">
            <IconBox
              icon='/images/icons/service_icon_1.svg'
              title='Architecture Build'
              subtitle=' We conceptualize, build blueprints and 2D models of your space relevant to and compatible with the Web3 Technologies . We add-on the creative liberty in Architectural designs granted by Digital assimilation'
            />
            <Spacing lg='30' md='30'/>
          </Div>
          <Div className="col-lg-4">
            <IconBox
              icon='/images/icons/service_icon_2.svg'
              title='Designing Space'
              subtitle='In succession to the Architecture and 2D models, our designing team develops interiors, 3D models, Avatars and 3D assets for the Metaverse space as desired by the client. We design for the future  '
            />
            <Spacing lg='30' md='30'/>
          </Div>
          <Div className="col-lg-4">
            <IconBox
              icon='/images/icons/service_icon_3.svg'
              title='Technical Integration'
              subtitle='We make the design capable of generating sales by enhancing the user experience and interaction with the space through features of carting integration, payment gateways, avatar interaction and more '
            />
            <Spacing lg='30' md='30'/>
          </Div>
        </Div>

      </Div>

      <Spacing lg='120' md='50'/>
      <Div className="container">
        <Div className="row align-items-center">
          <Div className="col-xl-6 col-lg-6">
            <Div className="cs-radius_15 cs-shine_hover_1">
           
              {/* <iframe src="https://s3.amazonaws.com/thecolosseum.metalok.io/colessium+version+3+(1)/colessium+version+3/index.htm" 
               className='cs-radius_15 w-100 meta-div ' /> */}
                 <YouTube videoId={videoId}  opts={opts}
                className="youtube-link" />
            </Div>
            <Spacing lg='0' md='40'/>
          </Div>
          <Div className="col-lg-5 offset-xl-1">
            <h2 className="cs-font_50 cs-m0">How Metaverse Space drives sales </h2>
            <Spacing lg='50' md='30'/>
            <Div className="row">
              <Div className="col-lg-10">
                <Button btnLink='/metaversespacePage' btnText='Higher Customer Satisfaction ' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>
                <Button btnLink='/metaversespacePage' btnText='Innovative Advertising Through Virtual Events' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>
                <Button btnLink='/metaversespacePage' btnText='Customer Community Building  ' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>
                <Button btnLink='/metaversespacePage' btnText='Reward Customer Loyalty Through Digital Collectibles' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>
                <Button btnLink='/metaversespacePage' btnText='Break-away From E-commerce Monotony' variant='cs-type2'/> 
                <Spacing lg='20' md='10'/>
                <Button btnLink='/metaversespacePage' btnText='Build a Digital-first Business Network ' variant='cs-type2'/>
                <Spacing lg='0' md='10'/> 
              </Div>
              {/* <Div className="col-lg-6">
                <Button btnLink='/metaversespacePage' btnText='Gamification of Sales process ' variant='cs-type2'/>
                <Spacing lg='20' md='10'/> 
              </Div> */}
            </Div>
          </Div>
        </Div>
      </Div>
      {/* <Spacing lg='150' md='80'/>
      <TestimonialSlider /> */}
      <Spacing lg='145' md='80'/>
      <Div className="container cs-shape_wrap_4">
        <Div className="cs-shape_4 shape_bg-img_meta"></Div>
        <Div className="cs-shape_4 shape_bg-img_meta"></Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-5 col-lg-6">
              <SectionHeading
                title='Some pre questions and answers' 
                subtitle='FAQ’s'
              />
              <Spacing lg='90' md='45'/>
            </Div>
            <Div className="col-lg-6 offset-xl-1">  
              <MetaverseFaq/>
            </Div>
          </Div>
        </Div>
      </Div>



      <Spacing lg="150" md="80" />
      <Div className="container">
        <Cta
          title="Let’s discuss to build<br /> something <i> cool</i> together"
         
          btnText="
          Get in touch"
          btnLink="/contact"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div>
      {/* End CTA Section */}
    </>
  );
}
