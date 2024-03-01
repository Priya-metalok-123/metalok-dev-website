import React, { useEffect } from 'react';
import { pageTitle } from '../../helper';
import Cta from '../Cta';
import FunFact from '../FunFact';
import LogoList from '../LogoList';
import LogoListClient from '../LogoListClient';
import LogoListMedia from '../LogoListMedia';
import LogoListPress from '../LogoListPress';
import PageHeading from '../PageHeading';
import Div from '../Div';
import SectionHeading from '../SectionHeading';
import TeamSlider from '../Slider/TeamSlider';
import Spacing from '../Spacing';
import MovingText from '../MovingText';
import ServiceList from '../ServiceList';


export default function AboutPage() {
  pageTitle('About');

  const funfaceData = [
    {
      title: 'Novelty with technology ',
      factNumber: 'Innovation  ',
    },
    {
      title: 'Consumers first approach ',
      factNumber: 'Customer- Focus',
    },
    {
      title: 'In-field Expertise ',
      factNumber: 'Niche Competence',
    },
    {
      title: 'Build for future',
      factNumber: 'Futuristic ',
    },
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {/* Start Page Heading Section */}
      <PageHeading
        title="About Us"
        bgSrc="images/about_hero_bg.jpeg"
        pageLinkText="About Us"
      />
      {/* End Page Heading Section */}

      {/* Start About Section */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-xl-5 col-lg-7">
            <SectionHeading
              title="A one-stop destination to all your Virtual Needs "
              subtitle="About Our Agency"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
              We are an agency creating, building and thriving digital transformation, experiential platforms, 
              change management, and data management through
               human-centric futuristic technologies of AI, AR, VR, XR, Mixed Reality, and Blockchain
              </p>
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg" ></Div>
              <Spacing lg="25" md="40" />
            </SectionHeading>
          </Div>
          <Div className="col-lg-5 offset-xl-2">
            <img
              src="/images/about/about-1.png"
              alt="About"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-lg-7">
            <img
              src="/images/about/about-3.jpg"
              alt="About"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-lg-5">
            <img
              src="/images/about/about-4.png"
              alt="About"
              className="w-100 cs-radius_15 "
            />
            <Spacing lg="25" md="25" />
          </Div>
        </Div>
      </Div>
      <Spacing lg="75" md="55" />
      {/* End About Section */}

      {/* Start Services Section */}  
      <Div className="container">
        <SectionHeading
          title="Our Vision & Mission"
          subtitle="Vision & Mission"
          variant="cs-style1 text-center"
        />
        <Spacing lg="70" md="45" />
        <ServiceList />
        <Spacing lg="70" md="45" />
      </Div>
      <br/>
      {/* End Services Section */}

      {/* Start Fun Fact Section */}
      <Div className="container">
        <FunFact
          title="Our Core Values"
          subtitle=" Metalok believes in and strives for complementary growth among employees, partners and competitors alike. We define ourselves with principles and values we abide by"
          data={funfaceData}
        />
      </Div>
      {/* End Fun Fact Section */}

      {/* Start Why Choose Section */}
      <Spacing lg="100" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-xl-5 col-lg-6">
            <Div className="cs-image_layer cs-style1">
              <Div className="cs-image_layer_in">
                <img
                  src="/images/about/pioneers.png"
                  alt="About"
                  className="w-100 cs-radius_15"
                />
              </Div>
            </Div>
            <Spacing lg="0" md="40" />
          </Div>
          <Div className="col-xl-5 offset-xl-1 col-lg-6 vision-subtitle">
            <SectionHeading
              title="Metaverse Pioneers"
              subtitle="Why Choose Us"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
              Metalok offers its services in the emerging Web3 space. We offer Platform-as-a-service (PaaS),
               Software-as-a-service (SaaS), Lifestyle-as-a-service (LSaaS), 
              Experience-as-a-service (EaaS), and Learning-as-a-service (LaaS)
              </p>
              <Spacing lg="15" md="15" />
              <p className="cs-m0">
              These categories include departmentalized services and consultation for businesses
               under Architecture, Design and Technology sections independently and as end-to-end solutions
              </p>
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="0" />
            </SectionHeading>
          </Div>
        </Div>
      </Div>
      {/* End Why Choose Section */}

      {/* Start Team Section */}
      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="Awesome team <br/>members"
          subtitle="Our Team"
          variant="cs-style1"
        />
        <Spacing lg="85" md="45" />
        <TeamSlider />
      </Div>
      {/* End Team Section */}
      <Spacing lg="125" md="70" />
      <MovingText text=" Partners & Collaborators |" />
      <Spacing lg="75" md="70" />
      <Div className="container">
      <Spacing lg="50" md="80" />
        <h1 className='partners_heading_about'>Clients & Partners </h1>
        <p className='partners_subtext_about'>We have strong partnerships with industry leaders and patrons sharing our futuristic vision</p>
        <Spacing lg="50" md="80" />
        <LogoListClient />
      </Div>
      <Div className="container">
        {/* <LogoListClient /> */}
      </Div>
      <Spacing lg="150" md="80" />
      <Div className="container">
      <h1 className='partners_heading_about'>Built With </h1>
        <p className='partners_subtext_about'>Our associates rendering tech-support and advisory promoting contemporary growth  </p>
        <Spacing lg="50" md="80" />
        <LogoList />
      </Div>
      <Spacing lg="150" md="80" />
      <Div className="container">
      <h1 className='partners_heading_about'> In The Press </h1>
        <p className='partners_subtext_about'> Our broadcasting partners featuring our achievements and success  </p>
        <Spacing lg="50" md="80" />
        <LogoListPress />
      </Div>
      {/* Start CTA Section */}
      <Spacing lg="150" md="80" />
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
