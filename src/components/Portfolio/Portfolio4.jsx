import React, { useState } from 'react'
import Button from '../Button'
import Div from '../Div'
import Spacing from '../Spacing'
import YouTube from 'react-youtube';

export default function Portfolio4({title, subtitle, btnText, btnLink, imageUrl, category}) {
  const [hovered, setHovered] = useState(false);
  const videoId = 'ZBprHebjsdw'; // Extracted video ID from the URL

  const opts = {
    playerVars: {
      controls: 1, // Show controls
      modestbranding: 1, // Hide YouTube logo
    },
    width: "100%",
    height: "350", // Adjust the height as needed for small size
  };
  return (
    <Div className="cs-portfolio cs-style2 cs-type1">
      <Div className="cs-gradient_shape" />


      <Div className="container">
        <Div className="row align-items-center cs-column_reverse_lg">
          <Div className="col-xl-5 col-lg-6">
            <Spacing lg='0' md='35'/>
            <Div className="cs-section_heading cs-style1">
              <h3 className="cs-section_subtitle">{subtitle}</h3>
              <h2 className="cs-section_title">{title}</h2>
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
          <Div className="col-lg-6 offset-xl-1">
            <Div className={hovered?"cs-portfolio_img active":"cs-portfolio_img"}>
              <h3 className="cs-portfolio_img_title ">{category}</h3>
              <Div className="cs-portfolio_img_in cs-shine_hover_1 cs-radius_5">
                {/* <img src={imageUrl} alt="Portfolio" className="cs-w100" /> */}
                {/* <iframe src="https://metalok-testbucket.s3.ap-south-1.amazonaws.com/webglfiles/Fridge/index.html" title="W3Schools Free Online Web Tutorials"></iframe> */}

                {/* <iframe src=" https://s3.amazonaws.com/design.metalok.io/Shoe/index.htm" height="500px" width="100%" title="W3Schools Free Online Web Tutorials"></iframe>
                 */}
                 {/* <video
                  // style={{ maxWidth: "100%", height: "450px" }} 
                  autoPlay
                  className='video-metaverse config-responsive-title '
                  playsInline
                  loop
                  muted
                
                  alt="All the devices"
                  src="https://s3.amazonaws.com/design.metalok.io/Video/main+render.mp4"              
                />  */}
                 <YouTube videoId={videoId} opts={opts} className="youtube-link"  />
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>


    </Div>
  )
}
