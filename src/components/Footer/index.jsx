import React from 'react'
import Div from '../Div'
import ContactInfoWidget from '../Widget/ContactInfoWidget'
import MenuWidget from '../Widget/MenuWidget'
import Newsletter from '../Widget/Newsletter'
import SocialWidget from '../Widget/SocialWidget'
import TextWidget from '../Widget/TextWidget'
import './footer.scss'

export default function Footer({copyrightText, logoSrc, logoAlt, text}) {    
  const copyrightLinks = [
    {
      title: 'Terms of Use',
      href: '/termsConditions'
    },
    {
      title: 'Privacy Policy',
      href: '/privacyPolicy'
    }
  ]
  
  const serviceMenu = [
    {
      title: '3D Configurators ',
      href: '/service/service-details'
    },
    {
      title: 'Metaverse spaces',
      href: '/service/service-details'
    },
    {
      title: 'Blockchain Services ',
      href: '/service/service-details'
    },
    
  ]

  return (
    <footer className="cs-fooer">
      <Div className="cs-fooer_main">
        <Div className="container">
          <Div className="row">
            <Div className="col-lg-4 col-sm-12 col-md-8">
              <Div className="cs-footer_item"> 

                <TextWidget 
                  // logoSrc='/images/logo-header-new.png' 
                  logoSrc='/images/website-logo.png' 
                  logoAlt='Logo'
                  text ='Building Metaverse spaces and Web3 solutions to scale up businesses in the rapidly transforming Digital World'
                />
                <SocialWidget/>
              </Div>
            </Div>
            {/* <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <MenuWidget menuItems={serviceMenu} menuHeading='Services'/>
              </Div>
            </Div> */}
            <Div className="col-lg-4 col-sm-12 col-md-12 empty-div">
              {/* <Div className="cs-footer_item">
                <ContactInfoWidget title='Contact Us'/>
              </Div> */}
            </Div>
            {/* <Div className="col-lg-4 col-sm-6">
              <Div className="cs-footer_item">
                <Newsletter 
                  title=' Subscribers' 
                  subtitle='Subscribe with Metalok and get latest updates about innovative technologies and our newest projects' 
                  placeholder='hello@metalok.io '
                />
              </Div>
            </Div> */}
             <Div className="col-lg-4 col-sm-12 col-md-12">
              <Div className="cs-footer_item">
                <ContactInfoWidget title='Contact Us'/>
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      <Div className="container">
        <Div className="cs-bottom_footer">
          <Div className="cs-bottom_footer_left">    
            <Div className="cs-copyright">Copyright © 2022 Metalok</Div>
          </Div>
          <Div className="cs-bottom_footer_right">
            <MenuWidget menuItems={copyrightLinks} variant=' cs-style2'/>
          </Div>
        </Div>
      </Div>
    </footer>
  )
}
