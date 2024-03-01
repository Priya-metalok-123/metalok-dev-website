import React, { useEffect } from 'react';
import CaseStudy from '../CaseStudy';
import Cta from '../Cta';
import Div from '../Div';
import Hero3 from '../Hero/Hero3';
import LogoList from '../LogoList';
import MovingText from '../MovingText';
import Portfolio2 from '../Portfolio/Portfolio2';
import Portfolio3 from '../Portfolio/Portfolio3';
import Portfolio4 from '../Portfolio/Portfolio4';
import Portfolio5 from '../Portfolio/Portfolio5';
import Portfolio6 from '../Portfolio/Portfolio6';
import SectionHeading from '../SectionHeading';
// import TestimonialSlider from '../Slider/TestimonialSlider';
import Spacing from '../Spacing';
import { pageTitle } from '../../helper';

export default function CreativePortfolioHome() {
  pageTitle("Home");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const heroSocialLinks = [
    {
      name: 'Behance',
      links: '/',
    },
    {
      name: 'Twitter',
      links: '/',
    },
  ];
  const portfolioData = [
    {
      title: 'We Build customizable 3D products driving sales ', 
      subtitle: '3D Configurator',
      btnText: 'See Details',
      btnLink: '/threedconfigPage',
      imageUrl: '/images/portfolio_35.jpeg',
      category: '3D Configurators ',
    },
    {
      title: 'We combine Architecture, Design & Technology to build your Digital store ',
      subtitle: 'Metaverse Spaces',
      btnText: 'See Details',
      btnLink: '/metaversespacePage',
      imageUrl: '/images/portfolio_36.jpeg',
      category: 'Metaverse spaces',
    },
    {
      title: 'We bring Decentralization & Immutability to your Business ',
      subtitle: 'Blockchain services',
      btnText: 'See Details',
      btnLink: '/blockchainServicePage',
      imageUrl: '/images/service-bck.png',
      category: 'Blockchain Services ',
    }, 
  ];
  const portfolioDat = [ 
    {
      title: 'We Build customizable 3D products driving sales  ',
      subtitle: '3D Configurators',
      btnText: 'See Details',
      btnLink: '/threedconfigPage ',  
      category: '3D Configurators',
    },
    {
      title: 'We bring Decentralization & Immutability to your Business ',
      subtitle: 'Blockchain services',
      btnText: 'See Details',
      btnLink: '/blockchainServicePage',
      imageUrl: '/images/service-bck.png',
      category: 'Blockchain Services ',
    },
    // {
    //   title: ' revolutionizing the real estate industry with advanced Web3 technology ',
    //   subtitle: 'Real Estate Services   ',
    //   btnText: 'See Details',
    //   btnLink: '/realEstatePage',
    //   imageUrl: '/images/service-bck.png',
    //   category: 'Real Estate Services ',
    // },
  ];

  const portfolioDa = [
    {
      title: 'We combine Architecture, Design & Technology to build your Digital store ', 
      subtitle: 'Metaverse spaces',
      btnText: 'See Details',
      btnLink: '/metaversespacePage',
      imageUrl: '/images/portfolio_36.jpeg',
      category: ' Metaverse spaces',
    } ,
     
  ];



  return (
    <>
      {/* Start Hero Section */}
      {/* <Hero3
        title="Arino Creative <br />Portfolio"
        btnLink="contact"
        btnText={`Let's talk`}
        socialLinksHeading="Follow Us"
        heroSocialLinks={heroSocialLinks}
        bgImageUrl="./images/hero_bg_4.jpeg"
      /> */}
      {/* End Hero Section */}

      {/* Start Portfolio Section */} 
      {/* <Spacing lg="150" md="80" /> */}
      {/* {portfolioData.map((item, index) =>
        index % 2 === 0 ? (
          <Div key={index}>
            <Portfolio2
              title={item.title}
              subtitle={item.subtitle}
              btnText={item.btnText}
              btnLink={item.btnLink}
              imageUrl={item.imageUrl}
              category={item.category}
            />
            <Spacing lg="100" md="70"/>
          </Div>
        ) : (
          <Div key={index}>
            <Portfolio3
              title={item.title}
              subtitle={item.subtitle}
              btnText={item.btnText}
              btnLink={item.btnLink}
              imageUrl={item.imageUrl}
              category={item.category}
            />
            <Spacing lg="100" md="70" />
          </Div>
        ),
      )} */}


      {/* new added 19-05-2023 start*/}

      <Spacing lg="0" md="80" />
      {portfolioDa.map((item, index) => 
        index % 2 === 0 ? (
          <Div key={index}>
            <Portfolio6 
              title={item.title}
              subtitle={item.subtitle}
              btnText={item.btnText}
              btnLink={item.btnLink}
              imageUrl={item.imageUrl}
              category={item.category}
            /> 
          </Div> 
        ) : (
          <Div key={index}>
            <Portfolio4
              title={item.title}
              subtitle={item.subtitle}
              btnText={item.btnText}
              btnLink={item.btnLink}
              imageUrl={item.imageUrl}
              category={item.category}
            />
            <Spacing lg="100" md="70" />
          </Div>
        ) ,
      )}



      <Spacing lg="100" md="80" />
      {portfolioDat.map((item, index) => 
        index % 2 === 0 ? (
          <Div key={index}>
            <Portfolio4
              title={item.title}
              subtitle={item.subtitle}
              btnText={item.btnText}
              btnLink={item.btnLink}
              imageUrl={item.imageUrl}
              category={item.category}
            />
            
            <Spacing lg="100" md="70"/>
          </Div> 
        ) : (

          <Div key={index}> 
            <Portfolio5 
              title={item.title}
              subtitle={item.subtitle}
              btnText={item.btnText}
              btnLink={item.btnLink}
              imageUrl={item.imageUrl}
              category={item.category}
            />
            <Spacing lg="100" md="70" />
          </Div>
        ) ,
      )}


      {/* new added 19-05-2023 end */}
      

    
      
      {/* End Portfolio Section */}

      {/* Start Case Study Section */}
      {/* <Spacing lg="45" md="10" />
      <Div className="container">
        <SectionHeading
          title="Featured case study"
          subtitle="Case Study"
          variant="cs-style1 text-center"
        />
        <Spacing lg="90" md="45" />
      </Div>
      <CaseStudy
        title="Analysis lead <br /> more efficiently"
        bgUrl="/images/case_study_2.jpeg"
        href="/case-study/case-study-details"
        variant="cs-style2"
      />
      <CaseStudy
        title="Ubar food app <br /> case study"
        bgUrl="/images/case_study_1.jpeg"
        href="/case-study/case-study-details"
      />
      <Spacing lg="150" md="80" /> */}
      {/* End Case Study Section */}

      {/* Start Testimonial Section */}
      {/* <TestimonialSlider /> */}
      {/* End Testimonial Section */}

      {/* Start MovingText Section */}
      {/* <Spacing lg="125" md="70" />
      <MovingText text="Our reputed world wide partners" />
      <Spacing lg="105" md="70" /> */}
      {/* End MovingText Section */}

      {/* Start LogoList Section */}
      {/* <Div className="container">
        <LogoList />
      </Div> */}
      {/* <Spacing lg="150" md="80" /> */}
      {/* End LogoList Section */}

      {/* Start CTA Section */}
      {/* <Div className="container">
        <Cta
          title="Let’s disscuse make <br />something <i>cool</i> together"
          btnText="Apply For Meeting"
          btnLink="/contact"
          bgSrc="/images/cta_bg_3.jpeg"
        />
      </Div> */}
      {/* End CTA Section */} 

    </>
  );
}
