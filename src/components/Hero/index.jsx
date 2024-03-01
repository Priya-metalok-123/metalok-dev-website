// import React from 'react';
// import parse from 'html-react-parser';
// import './hero.scss';
// import Button from '../Button';
// import Div from '../Div';
// import VerticalLinks from '../VerticalLinks';
// import Spacing from '../Spacing';

// export default function Hero({
//   title,
//   subtitle,
//   btnText,
//   btnLink,
//   scrollDownId,
//   socialLinksHeading,
//   heroSocialLinks,
//   bgImageUrl,
// }) {
//   return (
//     <Div
//       className="cs-hero cs-style1 cs-bg cs-fixed_bg cs-shape_wrap_1"
//       style={{ backgroundImage: `url(${bgImageUrl})` }}
//     >
//       <Div className="cs-shape_1" />
//       <Div className="cs-shape_1" />
//       <Div className="cs-shape_1" />
//       <Div className="container">
        
//         <Div className="row">
//              <Div className="d-flex responsive-div-main">
//           <Div className="col-lg-6 col-sm-12 col-md-12">
//           <Div> 
//                <h1 className="hero_title_home"> Building Your Digital Dream</h1> 
//                <Div className="cs-hero_subtitle">{subtitle}</Div> 
//               <br/>
//               <Button btnLink={btnLink} btnText={btnText} /> 
//             </Div> 
//           </Div>
//           <Div className="col-md-6 col-sm-12">
//           <Div>
             
//              <iframe src=" https://app.vectary.com/p/1q0NYWAB008gtLI6QRDKEz"  className='home-div-width'/>  
//             </Div>
//           </Div>
//           </Div>
//         </Div>
//       </Div>
//       <VerticalLinks data={heroSocialLinks} title={socialLinksHeading} />
//       <a href={scrollDownId} className="cs-down_btn">
//         .
//       </a>
//     </Div>
//   );
// }
import React from 'react';
import parse from 'html-react-parser';
import './hero.scss';
import Button from '../Button';
import Div from '../Div';
import VerticalLinks from '../VerticalLinks';
import Spacing from '../Spacing';

export default function Hero({
  title,
  subtitle,
  btnText,
  btnLink,
  scrollDownId,
  socialLinksHeading,
  heroSocialLinks,
  bgImageUrl,
}) {
  return (
  

    <Div
  
        className="cs-hero cs-style1 cs-bg cs-fixed_bg cs-shape_wrap_1"
  
        style={{ backgroundImage: `url(${bgImageUrl})` }}
  
      >
  
        <Div className="cs-shape_1" />
  
        <Div className="cs-shape_1" />
  
        <Div className="cs-shape_1" />
  
        <Div className="container">
  
          <Div className="cs-hero_text">
  
            <h1 className="cs-hero_title">{parse(title)}</h1>
  
            {/* <iframe src="https://s3.amazonaws.com/thecolosseum.metalok.io/rm/index.htm"  /> */}
  
            <Div className="cs-hero_info">
  
              <Div>
  
                {/* <h1> Building Your Digital Dream</h1> */}
  
                {/* <Div className="cs-hero_subtitle">{subtitle}</Div> */}
  
                <br/>
  
                <Button btnLink={btnLink} btnText={btnText} />
  
              </Div>
  
              <Div>
  
                <Div className="cs-hero_subtitle">{subtitle}</Div>
  
                {/* <iframe src="https://app.vectary.com/p/1q0NYWAB008gtLI6QRDKEz"  className='home-div-width'/> */}
  
                {/* <iframe src="https://dist.unlimited3d.com/dists/47696/cb9f810f-de09-4f2b-b3d5-22ab927a18bf/"  className='home-div-width'/>  */}
  
              </Div>
  
            </Div>
  
          </Div>
  
        </Div>
  
        <VerticalLinks data={heroSocialLinks} title={socialLinksHeading} />
  
        <a href={scrollDownId} className="cs-down_btn">
  
          
  
        </a>
  
      </Div>
  );
}