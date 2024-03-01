import React, { useState } from 'react'
import Button from '../Button'
import Div from '../Div'
import Spacing from '../Spacing'
import YouTube from 'react-youtube';

export default function Portfolio6({title, subtitle, btnText, btnLink, imageUrl, category}) {
  const videoId = 'uar7CCB8LcY'; 
  const opts = {
    playerVars: {
      controls: 1, // Show controls
      modestbranding: 1, // Hide YouTube logo
    },
    width: "100%",
    height: "350", // Adjust the height as needed for small size
  };
  const [hovered, setHovered] = useState(false);
  return (
    <Div className="cs-portfolio cs-style2"> 
      <Div className="cs-gradient_shape" />
      <Div className="container">
        <Div className="row align-items-center"> 
          <Div className="col-lg-6">
            <Div className={hovered?"cs-portfolio_img active":"cs-portfolio_img"}> 
              <h3 className="cs-portfolio_img_title">{category}</h3> 
              <Div className="cs-portfolio_img_in cs-shine_hover_1 cs-radius_5">
                
                {/* <img src={imageUrl} alt="Portfolio" className="cs-w100" />  */}
                {/* <video
                  // style={{ maxWidth: "100%", height: "450px" }} 
                  autoPlay
                  className='video-metaverse'
                  playsInline
                  loop
                  muted
                  controls
                  alt="All the devices"
                  src="https://s3.amazonaws.com/thecolosseum.metalok.io/final+(2)_1.mp4"              
                />  */}
                    <YouTube videoId={videoId} opts={opts} className="youtube-link"  />
                {/* <iframe src="https://s3.amazonaws.com/design.metalok.io/automation%26lightingweb/index.htm"  height="500px" width="100%"/>
                 */}
              </Div>
            </Div>
          </Div>
          <Div className="col-xl-5 col-lg-6 offset-xl-1">
            <Spacing lg='0' md='35'/>
            <Div className="cs-section_heading cs-style1">
              <h3 className="cs-section_subtitle">{subtitle}</h3>
              {/* <h2 className="cs-section_title"> We Build customizable 3D products driving sales </h2> */}
              <h2 className="cs-section_title"> We combine Architecture, Design & Technology to build your Digital store </h2>
              <Spacing lg='45' md='20'/>
              <span 
                onMouseEnter={()=>setHovered(true)} 
                onMouseLeave={()=>setHovered(false)} 
              > 
              <Button 
                btnLink={btnLink} 
                btnText={btnText} 
              />
              </span>
            </Div>
          </Div>
        </Div>
      </Div>

      

    </Div>
  )
}
