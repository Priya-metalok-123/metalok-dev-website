import React from 'react'
import Div from '../Div'
import './logolist.scss'

export default function LogoListPress() {
  const partnerLogos = [
    {
      src: '/images/partner/in-the-press/ani news.png', 
      alt:'Partner'
    },
    {
      src: '/images/partner/in-the-press/dailyhunt.png', 
      alt:'Partner'
    },
    {
      src: '/images/partner/in-the-press/outlook.png', 
      alt:'Partner'
    },
    {
      src: '/images/partner/in-the-press/the print.png',  
      alt:'Partner'
    },
    {
      src: '/images/partner/in-the-press/zee 5.png', 
      alt:'Partner'
    }, 
    {
      src: '/images/partner/in-the-press/r.png', 
      alt:'Partner'
    }, 
    
    
    
   
  ]
  const partnerLogostwo = [
    
    
    
   
  ]
  return (
    <>
    <Div className="cs-partner_logo_wrap">
      {partnerLogos.map((partnerLogo, index)=><div className="cs-partner_logo" key={index}>
        <img src={partnerLogo.src} alt={partnerLogo.alt} /></div>)}
    </Div>
     {/* <Div className="cs-partner_logo_wrap">
     {partnerLogostwo.map((partnerLogo, index)=><div className="cs-partner_logo" key={index}>
       <img src={partnerLogo.src} alt={partnerLogo.alt} /></div>)}
   </Div> */}
   </>
  )
}
