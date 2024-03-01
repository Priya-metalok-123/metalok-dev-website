import { Icon } from '@iconify/react';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { pageTitle } from '../../helper';
import Cta from '../Cta';
import PageHeading from '../PageHeading';
import Portfolio from '../Portfolio';
import Div from '../Div';
import SectionHeading from '../SectionHeading';
import Spacing from '../Spacing';





export default function CareerPage() {
  pageTitle('Careers');
  
 
  const Jobcommon = [
    {
      positionname:"Content Writer ",
      jobtype:"Hyderabad-work from office-Full Time ",
      // location:"work from office",
      Education:"Any Graduate",
      Experience:"0.5-1yr",
   
    }
   
  ];
  const Jobdescription = [
    {
      discription:"We require a Content Writer with experience and understanding in technical domain. The ideal candidate must be able to produce informative and engaging content to help showcase the company brand and vision ",
      one:" Brainstorm, craft stories and build brand awareness through campaign-level thinking and execution whether through digital ads/videos, email, landing pages or Social ",
      two:" Leverage creative storytelling and an engaging copywriting style to push brand awareness to a new level ",
      three:"From headlines to scripts, long copy to site copy, the right person for this role can write across products, campaigns, and channels (sites, banners, notifications, e-mails, social, videos etc delivering work that breaks through ",
      four:" Able to create or has potential to ideate in Pitch Decks, Whitepapers and Internal Documents ",
      five:"Envision and create the tone and personality of a brand/campaign.  ",
      six:"Strategize and create tactical and topical campaigns around key business initiatives  ",
      seven:" Deliver creative outputs basis the brief, and drive them from ideation to execution ",
      eight:" Ideating copy and content for communication pieces across different digital platforms ",
      nine:"Maintain a consistent and engaging tone of voice for the brand across platforms ",
      ten:" Drive and boost the creative quotient in brand creatives ",
      eleven:" Scale the creative outputs for the digital as well as offline campaign",
      twell:" ",
    }
   
  ];
  
  const Jobrequirements = [
    {
      
      one:"Is detail-oriented with a good eye for overall output ",
      two:" Is a fresh thinker who embraces challenges and new methods of thinking   ",
      three:"Is self-motivated with a positive attitude and strong communications skills  ",
      four:" Start-up experience is an add-on  ",
      five:" ",
      six:" ",
      seven:" ",
      eight:" ",
      nine:" ",
      ten:" ",
      eleven:" ",
      twell:" ",
    }
   
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PageHeading
        title="Careers"
        bgSrc="images/portfolio_hero_bg.jpeg"
        pageLinkText="Career"
      />
      <Spacing lg="145" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-md-8 col-lg-8">
          {Jobcommon.map((item, index)=> (
          <Div key={index}>
            <h1> {item.positionname}</h1>
            <p>{item.jobtype}</p>
          
            <p>Education: <span>{item.Education}</span></p>
            <p>Experience: <span>{item.Experience}</span></p>
            
           
            {Jobcommon.length>index+1 && <Spacing lg='95' md='60'/>}
              </Div>
            ))}
            {Jobdescription.map((item, index)=> (
              <Div key={index}>
                <h4>Job Description </h4>
                <p>{item.discription}</p>
              <ul className='job-bullet-style'>

                <li> {item.one} </li>
                <li>{item.two} </li>
                <li> {item.three}</li>
                <li> {item.four}</li>
                <li> {item.five}</li>
                <li> {item.six}</li>
                <li> {item.seven}</li>
                <li> {item.eight}</li>
                <li> {item.nine}</li>
                <li> {item.ten}</li>
                <li> {item.eleven}</li>
                
              </ul>
              {Jobdescription.length>index+1 && <Spacing lg='95' md='60'/>}
              </Div>
            ))}
              <h4>Requirements </h4>
              { Jobrequirements.map((item, index)=> (
              <Div key={index}>
                
              <ul className='job-bullet-style'>

                <li> {item.one} </li>
                <li>{item.two} </li>
                <li> {item.three}</li>
                <li> {item.four}</li>
               
                
              </ul>
              { Jobrequirements.length>index+1 && <Spacing lg='95' md='60'/>}
              </Div>
            ))}
              
           
          </Div>
          <Div className="col-md-4 col-lg-4">
           <Div className="job-apply-btn">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSe7JhtCz2U2CAUW2Wls8SeknbX-InbeRzMf-mYyU1RSDJTX0Q/viewform" target="blank" className='apply-btn-text-career'>APPLY FOR THIS ROLE</a>
           </Div>
          </Div>

        </Div>

      </Div>

      <Spacing lg="150" md="80" />
      <Div className="container">
        <Cta
          title="Let’s discuss to build<br />something <i>cool</i> together"
          btnText="Get in touch"
          btnLink="/contact"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div>
    </>
  );
}
