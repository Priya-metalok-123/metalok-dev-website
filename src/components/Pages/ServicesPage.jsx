import React, { useEffect } from 'react'
import { pageTitle } from '../../helper'
import Card from '../Card'
import Cta from '../Cta'
import PageHeading from '../PageHeading'
import CreativePortfolioHome from './CreativePortfolioHome';
import PricingTableList from '../PricingTable/PricingTableList'
import Div from '../Div'
import SectionHeading from '../SectionHeading'
import TestimonialSlider from '../Slider/TestimonialSlider'
import Spacing from '../Spacing'

export default function ServicesPage() {
  pageTitle('Service');
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <PageHeading 
        title='Services'
        bgSrc='images/service_hero_bg.jpeg'
        pageLinkText='Services'
      />
       <Spacing lg="50" md="50" />
      <div   className="services-heading-center">
      <SectionHeading
                title=" Services we offer"
                subtitle="What Can We Do"
                btnText="See All Services"
                btnLink="/service"
             />
               </div>
     <Div>
      <CreativePortfolioHome />
     </Div>
      <Div className="container">
        <Cta 
          title='Let’s discuss to build <br />something <i>cool</i> together' 
     
          btnText='Get in touch' 
          btnLink='/contact' 
          bgSrc='/images/cta_bg.jpeg'
        />
      </Div>
    </>
  )
}
