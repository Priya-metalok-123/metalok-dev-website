import React, { useEffect } from 'react' 
import { pageTitle } from '../../helper'
import Accordion from '../Accordion'
import Button from '../Button'
import Cta from '../Cta'
import IconBox from '../IconBox'
import PageHeading from '../PageHeading'
import Div from '../Div'
import SectionHeading from '../SectionHeading' 
import Spacing from '../Spacing'
import ThreedconfigFaq from '../Accordion/threedconfigFaq'
import '../Accordion/shapeStyle.scss'

export default function Configurator() {
  pageTitle('3D Configurator  Service');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {/* Start Page Heading Section */}
      <PageHeading
        title="3D Configurator  Service"
        bgSrc="images/about_hero_bg.jpeg"
        pageLinkText="3D Configurator Service"
      />
      {/* End Page Heading Section */}
 

    {/* Start About Section */}
    <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
        <Div className="col-lg-7 ">
            {/* <img
              src="/images/about_img_1.jpeg"
              alt="About"
              className="w-100 cs-radius_15"
            /> */}
             <iframe src="https://s3.amazonaws.com/design.metalok.io/Shoe/index.htm" height="500px" width="100%" title="3d Configurator"></iframe>

            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-xl-3 col-lg-7 offset-xl-1">
            <SectionHeading
              title="3D Configurator "
              subtitle="3D Configurator"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
              Power your business with immersive Visualization of 3D Configurator. We build photorealistic 3D models of your products that can be customized and personalized in different colors, materials, sizes, and styles as desired by your customers  
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
        />
        <Spacing lg='90' md='45'/>
        <Div className="row">
          <Div className="col-lg-4">
            <IconBox
              icon='/images/icons/service_icon_1.svg'
              title='Designing Assets '
              subtitle=' We bring together creative concepts and latest software to build 3D digital assets consistent with the client needs and Web3 space promoting Digital Transformation'
            />
            <Spacing lg='30' md='30'/>
          </Div>
          <Div className="col-lg-4">
            <IconBox
              icon='/images/icons/service_icon_2.svg'
              title='Technology Integration '
              subtitle='We seamlessly integrate the 3D assets with pioneering technology giving the users a 360 degree view, customization and virtual try-in & try-out accessibility '
            />
            <Spacing lg='30' md='30'/>
          </Div>
          <Div className="col-lg-4">
            <IconBox
              icon='/images/icons/service_icon_3.svg'
              title='Real-Time Experience '
              subtitle='Combining the design and technology solutions with the concept of metaverse, AR, AI and blockchain, we offer an immersive experience as close to reality as possible '
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
              {/* <img src="/images/service_img_1.jpeg" alt="Service" className='cs-radius_15 w-100' /> */}
              
              
              <iframe src="https://s3.amazonaws.com/design.metalok.io/sofaset/index.htm" height="500px" width="100%" title="3d Configurator"></iframe>

{/* <iframe src=" https://s3.amazonaws.com/design.metalok.io/masterbedroomwebversion/index.htm" height="500px" width="100%" title="3d Configurator"></iframe> */}

            </Div>
            <Spacing lg='0' md='40'/>
          </Div>
          <Div className="col-lg-5 offset-xl-1">
            <h2 className="cs-font_50 cs-m0">How 3D Configurators help businesses </h2>
            <Spacing lg='50' md='30'/>
            <Div className="row">
              <Div className="col-lg-6">
                <Button btnLink='/threedconfigPage' btnText='Higher Customer Satisfaction ' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>
                <Button btnLink='/threedconfigPage' btnText='Better Optimized Products ' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>
                <Button btnLink='/threedconfigPage' btnText='Greater ROI ' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>
                <Button btnLink='/threedconfigPage' btnText='Reduced Product Returns ' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>
                <Button btnLink='/threedconfigPage' btnText='Favour Cross-selling and Upselling ' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>
                <Button btnLink='/threedconfigPage' btnText='Increase Customer Loyalty ' variant='cs-type2'/>
                <Spacing lg='0' md='10'/>
              </Div>
              <Div className="col-lg-6">
                <Button btnLink='/threedconfigPage' btnText='Gamification of Sales Process ' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>
                 
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      


      <Spacing lg='145' md='80'/>
      <Div className="container cs-shape_wrap_4">
        <Div className="cs-shape_4"></Div>
        <Div className="cs-shape_4 shape_bg-img_thred"></Div>
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
              {/* <Accordion/> */}
              <ThreedconfigFaq/>
            </Div>
          </Div>
        </Div>
      </Div>



      <Spacing lg="150" md="80" />
      <Div className="container">
        <Cta
          title="Let’s discuss to build <br />something <i>cool </i> together" 
          btnText="Get in touch"
          btnLink="/contact"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div>
      {/* End CTA Section */}
    </>
  );
}
