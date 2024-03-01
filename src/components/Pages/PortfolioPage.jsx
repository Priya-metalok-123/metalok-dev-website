import { Icon } from '@iconify/react';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { pageTitle } from '../../helper';
import Cta from '../Cta';
import PageHeading from '../PageHeading';
import Portfolio from '../Portfolio';
import Div from '../Div';
import SectionHeading from '../SectionHeading';
import Spacing from '../Spacing';
//import ThreeModle from './threeModle';

export default function PortfolioPage() {
  pageTitle('Portfolio');
  const [active, setActive] = useState('all');
  const [itemShow, setItemShow] = useState(6);
  const portfolioData = [
    {
      title: ' Colosseum 3D',
      subtitle: 'See Details',
      href: '/colleseumProjectPage',
      src: '/images/portfolio-img/9.png ',
      category: '3d_configurator',
    },  
    {
      title: 'Ram Mandir',
      subtitle: 'See Details',
      href: '/ramandirProjectPage',
      src: '/images/portfolio-img/2.png',
      category: 'metaverse',
    },
    {
      title: 'Zee Business ',
      subtitle: 'See Details',
      href: '/zeeProjectPage',
      src: '/images/portfolio-img/3.png',
      category: 'metaverse',
    },
    {
      title: 'W3 Summit  ',
      subtitle: 'See Details',
      href: '/websummitProjectPage',
      src: '/images/portfolio-img/4.png',
      category: 'metaverse',
    },
    {
      title: 'Sportsverse',
      subtitle: 'See Details',
      href: '/sportsverseProjectPage',
      src: '/images/portfolio-img/5.png',
      category: 'blockchain',
    },
    {
      title: 'Akshaya NFT',
      subtitle: 'See Details',
      href: '/akshyaProjectPage',
      src: '/images/portfolio-img/8.png',
      category: 'blockchain',
    },
    {
      title: 'Avalipt',
      subtitle: 'See Details',
      href: '/avaliptProjectPage',
      src: '/images/portfolio-img/6.png',
      category: 'metaverse',
    },
    {
      title: 'Foodverse',
      subtitle: 'See Details',
      href: '/foodverseProjectPage',
      src: '/images/portfolio-img/7.png',
      category: 'metaverse',
    },
    {
      title: ' Colosseum',
      subtitle: 'See Details',
      href: '/colleseummetaverseProjectPage',
      src: '/images/portfolio-img/1.png',
      category: 'metaverse',
    },
     
  ];
  const categoryMenu = [
     
    {
      title: '3D Configurators ',
      category: '3d_configurator',
    },
    {
      title: 'Metaverse spaces',
      category: 'metaverse',
    },
    {
      title: 'Blockchain Services ',
      category: 'blockchain',
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PageHeading
        title="Portfolio"
        bgSrc="images/portfolio_hero_bg.jpeg"
        pageLinkText="Portfolio"
      />
      <Spacing lg="145" md="80" />
      <Div className="container">
        <Div className="cs-portfolio_1_heading">
          <SectionHeading title="Some Recent Work" subtitle="Our Portfolio" />
          <Div className="cs-filter_menu cs-style1">
            <ul className="cs-mp0 cs-center">
              <li className={active === 'all' ? 'active' : ''}>
                <span onClick={() => setActive('all')}>All</span>
              </li>
              {categoryMenu.map((item, index) => (
                <li
                  className={active === item.category ? 'active' : ''}
                  key={index}
                >
                  <span onClick={() => setActive(item.category)}>
                    {item.title}
                  </span>
                </li>
              ))}
            </ul>
          </Div>
        </Div>
        <Spacing lg="90" md="45" />
        <Div className="row">
          {portfolioData.slice(0, itemShow).map((item, index) => (
            <Div
              className={`${
                index === 3 || index === 6 ? 'col-lg-6' : 'col-lg-6'
              } ${
                active === 'all'
                  ? ''
                  : !(active === item.category)
                  ? 'd-none'
                  : ''
              }`}
              key={index}
            >
              <Portfolio
                title={item.title}
                subtitle={item.subtitle}
                href={item.href}
                src={item.src}
                variant="cs-style1 cs-type1"
              />
              <Spacing lg="25" md="25" />
            </Div>
          ))}
        </Div>

        <Div className="text-center">
          {portfolioData.length <= itemShow ? (
            ''
          ) : (
            <>
              <Spacing lg="65" md="40" />
              <span
                className="cs-text_btn"
                onClick={() => setItemShow(itemShow + 3)}
              >
                <span>Load More</span>
                <Icon icon="bi:arrow-right" />
              </span>
            </>
          )}
        </Div>
      </Div>
     
      <Spacing lg="150" md="80"/>
      <Div className="container">
        <Cta
          title="Let’s discuss to build<br />something <i>cool</i> together"
          btnText="
          Get in touch"
          btnLink="/contact"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div>
    
      
    </>
  );
}
