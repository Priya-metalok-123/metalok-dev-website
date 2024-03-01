import React from 'react'
import Div from '../Div'
import './logolist.scss'

export default function LogoList() {
  const partnerLogos = [
    {
      src: '/images/partner/built-with/1.svg', 
      alt:'Partner'
    },
    {
      src: '/images/partner/built-with/2.svg', 
      alt:'Partner'
    },
    {
      src: '/images/partner/built-with/3.svg', 
      alt:'Partner'
    },
    {
      src: '/images/partner/built-with/4.svg', 
      alt:'Partner'
    },
   
    
   
  ]
  const partnerLogostwo = [
    
   
    {
      src: '/images/partner/built-with/5.svg', 
      alt:'Partner'
    },
    {
      src: '/images/partner/built-with/6.svg', 
      alt:'Partner'
    },
    {
      src: '/images/partner/built-with/7.svg', 
      alt:'Partner'
    },
    {
      src: '/images/partner/built-with/8.svg', 
      alt:'Partner'
    },
   
  ]
  const partnerLogosthree = [
   
    {
      src: '/images/partner/built-with/9.svg', 
      alt:'Partner'
    },
    {
      src: '/images/partner/built-with/10.svg', 
      alt:'Partner'
    },
    {
      src: '/images/partner/built-with/11.svg', 
      alt:'Partner'
    },
    {
      src: '/images/partner/built-with/9.png', 
      alt:'Partner'
    },
    {
      src: '/images/partner/built-with/12.svg', 
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
      {partnerLogostwo.map((partnerLogotwo, index)=>
      <div className="cs-partner_logo" key={index}>
        <img src={partnerLogotwo.src} alt={partnerLogotwo.alt} />
        </div>)}
    </Div>
    <Div className="cs-partner_logo_wrap">
      {partnerLogosthree.map((partnerLogotwo, index)=>
      <div className="cs-partner_logo" key={index}>
        <img src={partnerLogotwo.src} alt={partnerLogotwo.alt} />
        </div>)}
    </Div>
    </>
  )
}
