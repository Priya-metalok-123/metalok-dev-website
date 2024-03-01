

 

import React from 'react'
import Div from '../Div'
import './logolist.scss'

export default function LogoListClient() {
  const partnerLogos = [
    {
      src: '/images/partner/client/client/5.svg', 
      alt:'Partner'
    },
    {
      src: '/images/partner/client/client/2.svg', 
      alt:'Partner'
    },
    {
      src: '/images/partner/client/client/3.svg', 
      alt:'Partner'
    },
    {
      src: '/images/partner/client/client/4.svg', 
      alt:'Partner'
    },
    
    
    
   
  ]
  const clientLogos = [
    {
      src: '/images/partner/client/client/shardeum.svg', 
      alt:'Partner'
    },
    {
      src: '/images/partner/client/client/1.svg', 
      alt:'Partner'
    },
   
    {
      src: '/images/partner/client/client/6.svg', 
      alt:'Partner'
    },
    {
      src: '/images/partner/client/client/sportsverse.svg', 
      alt:'Partner'
    },
   
   
   
   
  ]
  const partnerLogosec = [
     {
      src: '/images/partner/client/client/11.svg', 
      alt:'Partner'
    },
   
    {
      src: '/images/partner/client/client/61.svg', 
      alt:'Partner'
    },
    {
      src: '/images/partner/client/client/7.svg', 
      alt:'Partner'
    },
    {
      src: '/images/partner/client/client/9.svg', 
      alt:'Partner'
    },
    
    
   
  ]
  return (
    <>
    <Div className="cs-partner_logo_wrap">
      {partnerLogos.map((partnerLogo, index)=>
      <div className="cs-partner_logo" key={index}>
        <img src={partnerLogo.src} alt={partnerLogo.alt} />
      </div>)}
    </Div>
      <Div className="cs-partner_logo_wrap">
    {clientLogos.map((partnerLogo, index)=>
      <div className="cs-partner_logo" key={index}>
        <img src={partnerLogo.src} alt={partnerLogo.alt} />
      </div>)}
      </Div>
      <Div className="cs-partner_logo_wrap">
    {partnerLogosec.map((partnerLogo, index)=>
      <div className="cs-partner_logo" key={index}>
        <img src={partnerLogo.src} alt={partnerLogo.alt} />
      </div>)}
      </Div>
      </>
  )
}
