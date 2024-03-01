import React from 'react'
import Div from '../Div'
import './logolist.scss'

export default function LogoListMedia() {
  const partnerLogos = [
    {
      src: '/images/partner_1.svg', 
      alt:'Partner'
    },
    {
      src: '/images/partner_1.svg', 
      alt:'Partner'
    },
    {
      src: '/images/partner_1.svg', 
      alt:'Partner'
    },
    {
      src: '/images/partner_1.svg', 
      alt:'Partner'
    },
    {
      src: '/images/partner_1.svg', 
      alt:'Partner'
    }, 
    
   
  ]
  return (
    <Div className="cs-partner_logo_wrap">
      {partnerLogos.map((partnerLogo, index)=><div className="cs-partner_logo" key={index}><img src={partnerLogo.src} alt={partnerLogo.alt} /></div>)}
    </Div>
  )
}
