import React from 'react'
import { Icon } from '@iconify/react';

export default function ContactInfoWidget({withIcon, title}) {
  return (
    <>
      {title && <h2 className="cs-widget_title con-title">Contact Us</h2>}
      <ul className="cs-menu_widget cs-style1 cs-mp0 contact-left">
        <li>
          {withIcon?<span className='cs-accent_color mobile-icon-align'><Icon icon="material-symbols:add-call-rounded" /></span>:''}
          +91 9908200056
        </li>
        <li className='m-mail'>
          {withIcon?<span className='cs-accent_color mail-icon'><Icon icon="mdi:envelope" /></span>:''}
          <p className='mail-icon-p'>hello@metalok.io </p>
        </li> 
        <li className='m-address'> 
          {withIcon?<span className='cs-accent_color add-icon'><Icon icon="mdi:map-marker" /></span>:''}
          <p className='add-icon-p'>Metalok Solutions Pvt Ltd <br></br>Regd Office: Trendz Axis (AV HUB) ,<br></br> 5th Floor, H.No: 1-89/A/7, on Plot No.7, <br></br>Survey No's.28,29&30, Madhapur, <br></br>Serilingampally Mandal, Ranga Reddy,<br></br> Hyderabad, Telangana-500081</p>
          {/* Metalok Solutions Pvt Ltd <br />Regd Office: Trendz Axis (AV HUB) , 5th Floor,<br/> H.No: 1-89/A/7, on Plot No.7, Survey Nos.28,29,&30, <br/>Madhapur, Serilingampally Mandal, Ranga Reddy,<br/> Hyderabad, Telangana-500081    */}
        </li>
      </ul>
    </>
  )
}
