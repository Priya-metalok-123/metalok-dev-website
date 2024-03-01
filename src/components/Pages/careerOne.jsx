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
      positionname:"Unity Developer  ",
      jobtype:"Hyderabad-work from office-Full Time ",
      // location:"work from office",
      Education:"B-Tech in game programming / 2 years diploma in game programming ",
      Experience:"3+yr",
   
    }
   
  ];
  const Jobdescription = [
    { 
      discription:" Writing functions for gameplay features implementation, should have good knowledge in Augmented Reality (AR core), Analytics implementation. Must have proven skills in the areas of: ",
      one:"   Profiler and 3D assets optimisation ",
      two:"  Should know graphics configuration in unity and limitations of the quest 2 (important) ",
      three:"Should atleast have 2 to 3 compulsory shipped titles on quest 2 platform (compulsory) ",
      four:"  ",
      five:"  ",
      six:"  ",
      seven:" ",
      eight:"  ",
      nine:" ",
      ten:"  ", 
      discription:"  We are seeking a talented Unity Developer and Technical Artist with a passion for metaverse gaming to join our team in a lead role. As a Unity Developer and Technical Artist, you will play a key role in developing and implementing high-quality game mechanics, visual effects, and immersive experiences for our metaverse gaming projects. You will work closely with cross-functional teams, including artists, designers, and engineers, to create compelling and cutting-edge metaverse gaming experiences ",
      one:"   Lead the development and implementation of metaverse gaming projects using Unity engine.  ",
      two:"  Collaborate with designers, artists, and engineers to conceptualize and implement game mechanics, character interactions, and visual effects. ",
      three:"Design and develop optimized and scalable game systems, ensuring high performance and responsiveness.  ",
      four:"  Create and maintain technical documentation, including design specifications, asset pipelines, and coding standards.",
      five:" Mentor and guide junior team members, providing technical leadership and expertise. ",
      six:"   Stay updated with the latest trends and advancements in metaverse gaming and leverage that knowledge to enhance the quality and innovation of our projects.",
      seven:" Troubleshoot and resolve technical issues, optimize game performance, and ensure overall project quality.",
      eight:"  Collaborate with cross-functional teams to define project requirements, timelines, and deliverables. ",
      nine:" Conduct code reviews and provide constructive feedback to ensure code quality and maintainability",
      ten:" Continuously explore and implement new tools, technologies, and workflows to improve the development process and enhance the overall player experience. ", 
      eleven:"",
      twell:" ",
    }
   
  ];
  
  const Jobrequirements = [
    {
      
      one:"  Bachelor's degree in computer science, Software Engineering, or a related field (or equivalent work experience).",
      two:"    2-4 years of professional experience as a Unity Developer, Technical Artist, or a similar role.   ",
      three:" Expertise in Unity engine, including proficiency in C# programming and Unity's scripting API. ",
      four:"  Strong understanding of game development principles, including game mechanics, physics, and AI. ",
      five:"  Experience with shader programming and visual Effects creation in Unity.",
      six:"  Proficiency in 3D modeling, animation, and rigging. ",
      seven:"  Excellent problem-solving and debugging skills, with the ability to optimize code and performance.",
      eight:" Strong communication and interpersonal skills, with the ability to collaborate effectively with cross-functional teams. ",
      nine:" Prior experience in a lead or senior role, mentoring and guiding junior team members.",
      ten:"  Passion for metaverse gaming and a keen interest in exploring new technologies and trends in the industry. ",
      eleven:" ",
      twell:" ",
    }
   
  ];
  const Jobprefered = [
    {
      
      one:" Experience with multiplayer and networking in Unity.",
      two:"    Familiarity with virtual reality (VR) and augmented reality (AR) Development.     ",
      three:" Knowledge of other game engines and frameworks (e.g., Unreal Engine, CryEngine). ",
      four:" Familiarity with art tools such as Adobe Photoshop, Maya, or Blender.  ",
      five:" Experience working in an Agile Development environment. ",
      six:"   ",
      seven:"  ",
      eight:"  ",
      nine:"",
      ten:"  ",
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
              <h4>Responsibilities:  </h4>
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
                 {/* <li> {item.eleven}</li> */}
                
              </ul>
              {Jobdescription.length>index+1 && <Spacing lg='95' md='60'/>}
              </Div>
            ))}
              <h4>Qualifications:  </h4>
              { Jobrequirements.map((item, index)=> (
              <Div key={index}>
                
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
               
                
              </ul>
              { Jobrequirements.length>index+1 && <Spacing lg='95' md='60'/>}
              </Div>
            ))}
              
              <h4>Preferred Qualifications:   </h4>
              { Jobprefered.map((item, index)=> (
              <Div key={index}>
                
              <ul className='job-bullet-style'>

                <li> {item.one} </li>
                <li>{item.two} </li>
                <li> {item.three}</li>
                <li> {item.four}</li>
               
                <li> {item.five}</li>
                {/* <li> {item.six}</li>
                <li> {item.seven}</li>
                <li> {item.eight}</li>
                <li> {item.nine}</li>
                <li> {item.ten}</li>
                */}
                
              </ul>
              { Jobprefered.length>index+1 && <Spacing lg='95' md='60'/>}
              </Div>
            ))}
          </Div>
          <Div className="col-md-4 col-lg-4">
           <Div className="job-apply-btn">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSe7JhtCz2U2CAUW2Wls8SeknbX-InbeRzMf-mYyU1RSDJTX0Q/viewform"  target="blank" className='apply-btn-text-career'>APPLY FOR THIS ROLE</a>
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
