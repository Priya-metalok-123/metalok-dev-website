
import React, { useEffect } from 'react';
import { pageTitle } from '../../helper';
import Cta from '../Cta';
import PageHeading from '../PageHeading';
import Div from '../Div';
import Spacing from '../Spacing';





export default function CareerPage() {
  pageTitle('Careers');
  
 
  const Jobcommon = [
    {
      positionname:"Business Analyst",
      jobtype:"Hyderabad-work from office-Full Time. ",
      // location:"work from office",
      Education:"Any Graduate",
      Experience:"1-3yr",
   
    }
   
  ];
  const Jobdescription = [
    {
      discription:"We are looking for a Business Analyst to join our qualified team. The suitable candidate must possess a natural analytical way of thinking and must be able to explain complicated technical concepts to non-technical users. ",
      one:"Precisely capture business problems, value drivers, and functional/non-functional requirements. ",
      two:"Translate business requirements into functionality and assess the risks, feasibility, opportunities, and business impacts of various solution options.  ",
      three:"Assess and model processes, data flows, and technology to understand the current value and issues, and identify opportunities for improvement. ",
      four:"Create clear documentation to communicate requirements and related information; keep updated to align with the solution over the project lifecycle. ",
      five:"Ensure traceability of requirements from business needs and requirements, through testing and scope changes, to final solution. ",
      six:"Interact with software suppliers, designers and developers to understand software limitations, deliver elements of system and database design, and ensure that business requirements and use cases are handled. ",
      seven:"Configure and document software and processes, using agreed standards and tools. ",
      eight:"Create acceptance criteria and validate that solutions meet business needs through defining and coordinating testing. ",
      nine:"Create and present compelling business cases to justify solution value and establish approval, funding and prioritization. ",
      ten:"Initiate, plan, execute, monitor, and control Business Analysis activities on projects within agreed parameters of cost, time and quality. ",
      eleven:"Understand and stay abreast of relevant architectures and technologies related to a business area. Research potential solutions and innovative ideas, guide and manage interactions with technology vendors. ",
      twell:"Lead stakeholder management activities including facilitation of large design sessions. ",
    }
   
  ];
  
  const Jobrequirements = [
    {
      
      one:"Respond to organizational and environmental changes during in-progress activities",
      two:" Guide business stakeholders to gain acceptance / sign-off despite competing objectives. Manage requirements to the smallest set that will provide the biggest impact in advancing business objectives and end-user buy-in.  ",
      three:" Describe technology in terms easily understood by business customers and set realistic customer expectations for the project outcome. Adjust customer expectations in accordance with changes in scope. ",
      four:" Generate innovative approaches to existing problems or new opportunities. ",
      five:"Work closely with stakeholders to build trust and understand their goals, motivations, constraints, risks, and operating environment. ",
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
                <li> {item.twell}</li>
              </ul>
              {Jobdescription.length>index+1 && <Spacing lg='95' md='60'/>}
              </Div>
            ))}
              <h4>Special Challenges </h4>
              { Jobrequirements.map((item, index)=> (
              <Div key={index}>
                
              <ul className='job-bullet-style'>

                <li> {item.one} </li>
                <li>{item.two} </li>
                <li> {item.three}</li>
                <li> {item.four}</li>
                <li> {item.five}</li>
                
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
