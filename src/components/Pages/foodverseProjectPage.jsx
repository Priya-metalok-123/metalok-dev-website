import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { pageTitle } from '../../helper';
import Button from '../Button';
import Cta from '../Cta';
import PageHeading from '../PageHeading';
import Div from '../Div';
import SectionHeading from '../SectionHeading';
import Spacing from '../Spacing';
import { Icon } from '@iconify/react';
import YouTube from 'react-youtube';

export default function FoodverseProjectPage() {
  // const params = useParams()
  pageTitle('Foodverse');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const videoId = 'I7MWSMN18aE'; // Extracted video ID from the URL

  const opts = {
    playerVars: {
      controls: 1, // Show controls
      modestbranding: 1, // Hide YouTube logo
    },
    width: "100%",
    height: "700", // Adjust the height as needed for small size
  };

  return (
    <>
      <PageHeading 
        title='Foodverse'
        bgSrc='/images/service_hero_bg.jpeg'
        pageLinkText="Foodverse"
      />
      <Spacing lg='150' md='80'/>
      <Div className="container">
      <YouTube videoId={videoId} opts={opts} className="youtube-link"  />
        <Spacing lg='180' md='40'/>
        <iframe src="https://www.spatial.io/s/Food-Verse-63f623bda0a4c59a94c5dc4f?share=568172552513524497" className='d-modal-div' />
        {/* <Spacing lg='90' md='40'/>
        <iframe src="https://www.spatial.io/s/Food-Verse-63f623bda0a4c59a94c5dc4f?share=568172552513524497" className='d-modal-div' /> */}
        <Spacing lg='90' md='40'/>
        <Div className="row">
          <Div className="col-lg-6">
            <SectionHeading 
              title='Foodverse – Metaverse Spaces  ' 
              subtitle='Metaverse Spaces ' 
            >
              <Spacing lg='40' md='20'/>
              <p> 
                Built for commemorating the Culinary art, Foodverse is one of the largest Metaverse Spaces for Chefs, Restaurants, Culinary Students and food-lovers to indulge in the world of Tastes
              </p>
              <Spacing lg='10' md='10'/>
              <p>
                Foodverse is conceptualized to provide an immersive food experience through advanced technologies of AR, VR, AI, XR and Blockchain. In our food metaverse, we have dedicated Kitchen – for Masterchefs like Vikas Khanna to train and present their exclusive recipes, Bookstore – A collection of exceptional recipes accessible through web, Dining space – for a grand metaverse dining experience in the Virtual World for special occasions and an amphitheater for master classes from renowned chefs around the globe
              </p>
              <p>
                Experience our Foodverse in a relatable and customized avatars with multiple web interactions, exclusive food digital collectibles (#Phygital NFTs) and a 360 degree virtual tour of the arena with many more interactive indulgences ahead
              </p>
            </SectionHeading>
          </Div>
          <Div className="col-lg-5 offset-lg-1">
            <Spacing lg='60' md='40'/>
            <h2 className='cs-font_30 cs-font_26_sm cs-m0'>Project Info -</h2>
            <Spacing lg='50' md='30'/>
            <Div className="row">
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Category:</h3>
                <p className='cs-m0'>Metaverse Spaces – Virtual Food Space   </p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Technologies: </h3>
                <p className='cs-m0'>VR, AI, 3D Vista  </p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Software:</h3>
                <p className='cs-m0'>Unity, Unreal Engine, Polygon    </p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Device Compatibility: </h3>
                <p className='cs-m0'>Desktops, Laptops, Tablets, Mobile   </p>
                <Spacing lg='30' md='30'/>
              </Div>
              
              
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>User Experience:  </h3>
                <p className='cs-m0'>360 degree Experience. VR tour, 3D interactions, VR Exploration, Avatar Customization.   </p>
                <Spacing lg='30' md='30'/>
              </Div>
              {/* <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Client:</h3>
                <p className='cs-m0'>W3 Conference  </p>
                <Spacing lg='30' md='30'/>
              </Div> */}
            </Div>
          </Div>
        </Div>
        <Spacing lg='65' md='10'/>
        <Div className="cs-page_navigation cs-center">
          <Div>
            <Button btnLink='/avaliptProjectPage' btnText='Prev Project' variant='cs-type1'/>
          </Div>
          <Div>
          <Button btnLink='/colleseummetaverseProjectPage' btnText='Next Project'/>
         </Div>
        </Div>
      </Div>
      <Spacing lg='145' md='80'/>
    </>
  );
}
