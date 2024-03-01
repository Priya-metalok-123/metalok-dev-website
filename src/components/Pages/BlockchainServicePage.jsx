import React, {useState,useEffect } from 'react' 
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
import BlockchainFaq from '../Accordion/blockchainFaq'
import '../Accordion/shapeStyle.scss'
import YouTube from 'react-youtube';

export default function BlockchainServicePage() {
  const videoId = 'NnKtL17BKy8'; 
  const opts = {
    playerVars: {
      controls: 1, // Show controls
      modestbranding: 1, // Hide YouTube logo
    },
    width: "100%",
    height: "450", // Adjust the height as needed for small size
  };
 
  const [isLoading1, setIsLoading1] = useState(true);
  const [isLoading2, setIsLoading2] = useState(true);
  pageTitle('Blockchain Service');

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      setIsLoading1(false);
    }, 9000); // Delay for the first iframe
    setTimeout(() => {
      setIsLoading2(false);
    }, 6000);
  }, []);
  return (
    <>
      {/* Start Page Heading Section */}
      <PageHeading
        title="Blockchain Services"
        bgSrc="images/about_hero_bg.jpeg"
        pageLinkText="Blockchain Services"
      />
      {/* End Page Heading Section */}


      {/* Start About Section */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
        <Div className="col-lg-5 ">
            <img
              // src="/images/about_img_1.jpeg"
              src="/images/service-bck.png"
              alt="About"
              className="w-100 cs-radius_15"
            />
            {/* <video  
              style={{ maxWidth: "100" }}
              autoPlay
              className="video-metaverse"
              playsInline
              loop
              muted 
              // controls
              alt="All the devices"
              src="https://s3.amazonaws.com/thecolosseum.metalok.io/metalok-website/poap-video.mp4"
            /> */}
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-xl-5 col-lg-7 offset-xl-1">
            <SectionHeading
              title="Blockchain Services"
              subtitle="Blockchain Services"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
              Blockchain is an emerging Web3 Technology that imbibes decentralization, transparency, traceability and immutability to services. Blockchain as a service can be used for Data management, Supply-chain management, Quality assurance, Smart contracts and more to improve and manage businesses
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
              title='Identifying the Crisis'
              subtitle=' We analyze and identify the problem statement with the current services, management or operations of a business with respect to the transforming digital space supported with Web3 technologies   '
            />
            <Spacing lg='30' md='30'/>
          </Div>
          <Div className="col-lg-4">
            <IconBox
              icon='/images/icons/service_icon_2.svg'
              title='Designing Solutions'
              subtitle='Develop solutions Integrated with the Blockchain technologies to make your business compatible with the Web3 space adding decentralization, transparency and immutability '
            />
            <Spacing lg='30' md='30'/>
          </Div>
          <Div className="col-lg-4">
            <IconBox
              icon='/images/icons/service_icon_3.svg'
              title='Technology Integration '
              subtitle='We integrate the developed solutions with your existing business model, customize according to your business needs or provide consultancy services to enable you to build your own solutions '
            />
            <Spacing lg='30' md='30'/>
          </Div>
        </Div>
      </Div>
      <Spacing lg='120' md='50'/>
      <Div className="container">
        <Div className="row align-items-center">
          <Div className="col-xl-5 col-lg-6">
            <Div className="cs-radius_15 cs-shine_hover_1">
              {/* <img src="/images/service_img_1.jpeg" alt="Service" className='cs-radius_15 w-100' /> */}
              
              {/* {isLoading1 ? (
        <div className="">
          <img src="https://s3.amazonaws.com/design.metalok.io/Video/Loading+screen.gif" alt="" />
        </div>
      ) : (
              
              <video 
              style={{ maxWidth: "100" }}
              autoPlay
              className="video-metaverse w-100 cs-radius_15"
              playsInline
              loop
              muted 
              alt="All the devices"
              src="https://s3.amazonaws.com/design.metalok.io/Video/blockchain_1.mp4"
            />
            )} */}
    
  <YouTube videoId={videoId} opts={opts} className="youtube-link"  />
            </Div>
            <Spacing lg='0' md='40'/>
          </Div>
          <Div className="col-lg-6 offset-xl-1">
            <h2 className="cs-font_50 cs-m0">How Blockchain improves business management </h2>
            <Spacing lg='50' md='30'/>
            <Div className="row">
              <Div className="col-lg-6">
                <Button btnLink='/blockchainServicePage' btnText='Smart Contracts Among Partners ' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>
                <Button btnLink='/blockchainServicePage' btnText='Traceability & Retrievability in Supply Chain ' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>
                <Button btnLink='/blockchainServicePage' btnText='Secured Transactions' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>
                <Button btnLink='/blockchainServicePage' btnText='Record-keeping ' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>
                <Button btnLink='/blockchainServicePage' btnText='Identifying Business Limitations ' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>
                <Button btnLink='/blockchainServicePage' btnText='Fast Processing  ' variant='cs-type2'/>
                <Spacing lg='0' md='10'/>
              </Div>
              <Div className="col-lg-5">
                <Button btnLink='/blockchainServicePage' btnText='Building Digital Economy ' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>
                 
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      {/* <Spacing lg='150' md='80'/>
      <TestimonialSlider /> */}
      <Spacing lg='145' md='80'/>
      <Div className="container cs-shape_wrap_4">
        <Div className="cs-shape_4 shape_bg-img_block"></Div>
        <Div className="cs-shape_4 shape_bg-img_block"></Div>
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
             <BlockchainFaq/>
            </Div>
          </Div>
        </Div>
      </Div>



      <Spacing lg="180" md="70" />
      <Div className="container">
        <Cta
          title="Let’s discuss to build<br />something <i>cool</i> together"
         
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
