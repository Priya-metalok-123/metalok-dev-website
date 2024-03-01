import { Icon } from '@iconify/react';
import React, { useEffect } from 'react';
import Card from '../Card';
import Div from '../Div';
import FunFact2 from '../FunFact/FunFact2';
import MasonryGallery from '../Gallery/MasonryGallery';
import Hero2 from '../Hero/Hero2';
import PricingTableList from '../PricingTable/PricingTableList';
import SectionHeading from '../SectionHeading';
import PostSlider from '../Slider/PostSlider';
import TestimonialSlider from '../Slider/TestimonialSlider';
import Spacing from '../Spacing';
import { pageTitle } from '../../helper';

export default function PhotographyAgencyHome() {
  pageTitle('Photography Agency');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const heroData = [
    {
      title: 'Corporate Hall',
      imageUrl: 'https://www.metalok.io/images/portfolio-img/col-1.png',
      href: '/enterpriceMetaversePage',
    },
    {
      title: 'Exhibition hallways',
      imageUrl: 'https://www.metalok.io/images/portfolio-img/ram-2.png',
      href: '/service/service-details',
    },
    {
      title: 'Auditorium ',
      imageUrl: './images/commercial.jpeg',
      href: '/service/service-details',
    },
    {
      title: 'Conference Halls',
      imageUrl: './images/landscape.jpeg',
      href: '/service/service-details',
    },
    {
      title: 'Private & VIP Event Lounge ',
      imageUrl: './images/landscape.jpeg',
      href: '/service/service-details',
    },
    {
      title: 'Cloud concourse',
      imageUrl: './images/landscape.jpeg',
      href: '/service/service-details',
    },
  ];
 
  return (
    <>
      {/* Start Hero Section */}
      <Hero2 data={heroData}  />
      {/* End Hero Section */}

   


   

    



      
     
    </>
  );
}
