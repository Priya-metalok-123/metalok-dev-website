import React, { useEffect } from 'react';
import { pageTitle } from '../../helper';
import Cta from '../Cta';
import PageHeading from '../PageHeading';
import Div from '../Div';
import SectionHeading from '../SectionHeading';
import Spacing from '../Spacing';
import Team from '../Team';

export default function TeamPage() {
  pageTitle('Team');
  const teamData = [
    {
      memberImage: '/images/team/mohit goel.png',
      memberImageOne: '/images/team/mohit goel.jpg',
      memberName: 'Mohit Goel',
      memberDesignation: 'CEO - Chief Executive Officer',
      memberSocial: {
        linkedin: '/',
        twitter: '/',
        // youtube: '/',
        facebook: '/',
      },
    },
    {
      memberImage: '/images/team/anchal.png',
      memberImageOne: '/images/team/anchal-goel.png',
      memberName: 'Aanchal Goel ',
      memberDesignation: 'CFO - Chief Financial Officer',
      memberSocial: {
        linkedin: '/',
        twitter: '/',
        // youtube: '/',
        facebook: '/',
      },
    },
    {
      memberImage: '/images/team/smitha pm.png',
      memberImageOne: '/images/team/smitha.jpg',
      memberName: 'Smitha PM',
      memberDesignation: 'CHRO - Chief Human Resource Officer',
      memberSocial: {
        linkedin: '/',
        twitter: '/',
        // youtube: '/',
        facebook: '/',
      },
    },
    {
      memberImage: '/images/team/parth.png',
      memberImageOne: '/images/team/parth.jpg',
      memberName: 'Parth Saradhi Reddy',
      memberDesignation: 'CPO - Chief Procurement Product Officer',
      memberSocial: {
        linkedin: '/',
        twitter: '/',
        // youtube: '/',
        facebook: '/',
      },
    },
    // {
    //   memberImage: '/images/team/him aal.jpg',
    //   memberName: 'Him Agarwal',
    //   memberDesignation: 'CTO - Chief Technical Officer',
    //   memberSocial: {
    //     linkedin: '/',
    //     twitter: '/',
    //     // youtube: '/',
    //     facebook: '/',
    //   },
    // },
    // {
    //   memberImage: '/images/member_4.jpeg',
    //   memberName: 'Pourush Dhingra',
    //   memberDesignation: 'CDO - Chief Design Officer',
    //   memberSocial: {
    //     linkedin: '/',
    //     twitter: '/',
    //     // youtube: '/',
    //     facebook: '/',
    //   },
    // },
    // {
    //   memberImage: '/images/member_4.jpeg',
    //   memberName: 'Raghuram',
    //   memberDesignation: 'CAO - Chief Architect Officer',
    //   memberSocial: {
    //     linkedin: '/',
    //     twitter: '/',
    //     // youtube: '/',
    //     facebook: '/',
    //   },
    // },
  ];


  const advisoryTeam = [
    {
      memberImage: '/images/member_4.jpeg',
      memberName: 'Shankar Kaliaperumal ',
      memberDesignation: 'MD, Accenture',
      memberSocial: {
        linkedin: '/',
        twitter: '/',
        // youtube: '/',
        facebook: '/',
      },
    },
    {
      memberImage: '/images/member_4.jpeg',
      memberName: 'Robert Saini',
      memberDesignation: 'CEO, KYYTE',
      memberSocial: {
        linkedin: '/',
        twitter: '/',
        // youtube: '/',
        facebook: '/',
      },
    },
    {
      memberImage: '/images/member_4.jpeg',
      memberName: 'Ganesh Raju',
      memberDesignation: 'CEO, Akshaya NFT',
      memberSocial: {
        linkedin: '/',
        twitter: '/',
        // youtube: '/',
        facebook: '/',
      },
    },
    {
      memberImage: '/images/member_4.jpeg',
      memberName: 'Narayan Manivaram ',
      memberDesignation: 'Global Head, SAP America',
      memberSocial: {
        linkedin: '/',
        twitter: '/',
        // youtube: '/',
        facebook: '/',
      },
    },
    
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PageHeading
        title="Our Team"
        bgSrc="images/team_hero_bg.jpeg"
        pageLinkText="Team"
      />
      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="Management Team"
          subtitle="Our Team"
          variant="cs-style1 text-center"
        />
        <Spacing lg="90" md="45" />
        {/* Management ---------------------------------------------------------*/}
        <Div className="row">
          {teamData.map((item, index) => (
            <Div key={index} className="col-lg-3 col-sm-6">
              <Team
                memberImage={item.memberImage}
                memberImageOne={item.memberImageOne}
                memberName={item.memberName}
                memberDesignation={item.memberDesignation}
                memberSocial={item.memberSocial}
              />
              <Spacing lg="80" md="30" />
            </Div>
          ))}
        </Div>

        {/* Advisory team ------------------------------------------------------*/}
        {/* <Div className="container">
        <SectionHeading
          title="Advisory Board"
          subtitle="Our Team"
          variant="cs-style1 text-center"
        />
        </Div>
        <Spacing lg="90" md="45" />
        <Div className="row">
          {advisoryTeam.map((item, index) => (
            <Div key={index} className="col-lg-3 col-sm-6">
              <Team
                memberImage={item.memberImage}
                memberName={item.memberName}
                memberDesignation={item.memberDesignation}
                memberSocial={item.memberSocial}
              />
              <Spacing lg="80" md="30" />
            </Div>
          ))}
        </Div>
        <Spacing lg="70" md="50" /> */}
        <Div className="container">
          <Cta
            title="Let’s disscuse make <br />something <i>cool</i> together"
            btnText="Get in touch"
            btnLink="/contact"
            bgSrc="/images/cta_bg.jpeg"
          />
        </Div>
      </Div>
    </>
  );
}
