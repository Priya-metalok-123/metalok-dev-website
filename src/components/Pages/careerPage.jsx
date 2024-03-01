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
import Portfolio7 from '../Portfolio/portfolio7';

// Function to generate random text
// function generateRandomText() {
//   const texts = [
//     'We require a talented and quality Unity developer who is experienced and understands working with the advanced technologies of Virtual Reality (VR) & Augmented Reality (AR)  ',
//     'We are looking for a Business Analyst to join our qualified team. The suitable candidate must possess a natural analytical way of thinking and must be able to explain complicated technical concepts to non-technical users. ',
//     'We require a Content Writer with experience and understanding in technical domain. The ideal candidate must be able to produceinformative and engaging content to help showcase the company brand and vision ',
//   ];

//   const randomIndex = Math.floor(Math.random() * texts.length);
//   const randomText = texts[randomIndex];
//   texts.splice(randomIndex, 1); // Remove selected text from the array
//   return randomText;
// }

export default function CareerPage() {
  pageTitle('Careers');
  const [active, setActive] = useState('all');
  const [itemShow, setItemShow] = useState(7);
  const portfolioData = [
    {
    //   title: 'ui/ux',
      subtitle: 'Know More',
      href: '/careerOne',
      src: '/images/portfolio-img/colloseum.jpg',
      category: 'Design',
      text: "We require a talented and quality Unity Developer who is experienced and understands working with the advanced technologies of Virtual Reality (VR) & Augmented Reality (AR)  ", // Assign random text here
      heading: 'Unity Developer',
      full:'Full Time , Hyderabad' ,// Heading for this item
    },
    {
    //   title: 'sap Developer',
      subtitle: 'Know More',
      href: '/careerTwo',
      src: '/images/portfolio-img/ram mandir.jpg',
      category: 'technical',
      text: "We are looking for a Business Analyst to join our qualified team. The suitable candidate must possess a natural analytical way of thinking and must be able to explain complicated technical concepts to non-technical users ",
    //   text: generateRandomText(), // Assign random text here
      heading: 'Business Analyst ', 
      full:'Full Time, Hyderabad'// Heading for this item
    },
   
   
    {
    //   title: 'ui/ux ',
      subtitle: 'Know More',
      href: '/careerThree',
      src: '/images/portfolio-img/zee.jpg',
      category: 'Operational',
      text: "We require a Content Writer with experience and understanding in technical domain. The ideal candidate must be able to produce informative and engaging content to help showcase the company brand and vision ",
    //   text: generateRandomText(), // Assign random text here
      heading: 'Content Writer',
      full:'Full Time ,Hyderabad', // Heading for this item
    },
    // Rest of the portfolioData array items
  ];

  const categoryMenu = [
    {
      title: 'Design',
      category: 'Design',
    },
    {
      title: 'Technical',
      category: 'technical',
    },
    {
      title: 'Operational',
      category: 'Operational',
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PageHeading
        title="Careers"
        bgSrc="images/portfolio_hero_bg.jpeg"
        pageLinkText="Career"
      />
      <Spacing lg="145" md="80" />
      <Div className="container">
        <Div className="cs-portfolio_1_heading">
          <SectionHeading title="Latest Job Listing" subtitle="Careers" />
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
                index === 3 || index === 6 ? 'col-lg-4' : 'col-lg-4'
              } ${
                active === 'all'
                  ? ''
                  : !(active === item.category)
                  ? 'd-none'
                  : ''
              }`}
              key={index}
            >
               {/* Added heading element */}
              <Portfolio7
                // title={item.title}
                subtitle={item.subtitle}
                href={item.href}
                heading={item.heading}
                text={item.text}
                full={item.full}
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

      <Spacing lg="150" md="80" />
      <Div className="container">
        <Cta
          title="Let’s discuss to build<br />something <i>cool</i> together"
          btnText="Get in touch"
          btnLink="/contact"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div>
    </>
  );
}
