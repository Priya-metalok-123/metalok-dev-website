import React from 'react';
import { Icon } from '@iconify/react';
import Div from '../Div';
// import thread from '/images/partner/client/client/3.svg';

export default function SocialWidget() {
  return (
    <Div className="cs-social_btns cs-style1 footer-social-links-res">
      <a href="https://www.linkedin.com/company/metalokofficial/" target="_blank"  className="cs-center">
        <Icon icon="fa6-brands:linkedin-in" />
      </a>
      <a href="https://twitter.com/metalok_io?s=11&t=thNhdiyreqdTyOOnWlst0g" target="_blank" className="cs-center">
        <Icon icon="fa6-brands:twitter" />               
      </a>
      <a href="https://www.instagram.com/metaloksolutions/?igshid=YmMyMTA2M2Y%3D"  target="_blank" className="cs-center">
        <Icon icon="fa-brands:instagram" />             
      </a>
      <a href="https://www.facebook.com/people/Metalok/100088665795146/"  target="_blank" className="cs-center">
        <Icon icon="fa-brands:facebook" />
      </a>
      <a href="https://www.threads.net/@metaloksolutions"  target="_blank" className="cs-center"> 
        <img src='https://metalok-testbucket.s3.ap-south-1.amazonaws.com/thread.png'  alt='thread' className='thread'/>
      </a>
    </Div>
  );
}
