import React from 'react'
import { Icon } from '@iconify/react';

export default function ContactInfoWidget({withIcon, title}) {
  return (
    <>
      {title && <h2 className="cs-widget_title">{title}</h2>}
      <ul className="cs-menu_widget cs-style1 cs-mp0">
        <li className='footer-number-mobileres'>
          {withIcon?<span className='cs-accent_color mobile-icon-align'><Icon icon="material-symbols:add-call-rounded" /></span>:''}
          +91 9908200056
        </li>
        <li className='m-mail footer-number-mobileres'>
          {withIcon?<span className='cs-accent_color'><Icon icon="mdi:envelope" /></span>:''}
          hello@metalok.io 
        </li>
        <li className='m-address'>
          {withIcon?<span className='cs-accent_color'><Icon icon="mdi:map-marker" /></span>:''}
          Metalok Solutions Pvt Ltd <br />Regd Office: Trendz Axis (AV HUB) ,<br/> 5th Floor,H.No: 1-89/A/7, <br/> Plot No.7, Survey Nos.28,29&30, <br/>Madhapur, Serilingampally Mandal, <br/>Ranga Reddy ,Hyderabad, Telangana-500081   
        </li>
      </ul>
    </>
  )
}
