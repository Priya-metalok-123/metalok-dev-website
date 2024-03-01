import React , {useState}from 'react';
import parse from 'html-react-parser';
import Button from '../Button';
import Spacing from '../Spacing';
import Div from '../Div';

export default function SectionHead({ title, subtitle, btnLink, btnText, variant, children, icon , pageName}) {
  const [isHovered, setIsHovred] = useState(false);
  const handleMouseEnter = () => {
    setIsHovred(true);
  };
  const handleMouseLeave = () => {
    setIsHovred(false);
  };
  const notHoveredImg = "/images/icons/spatial-yellow-1.svg";
  const hoveredImg = "/images/icons/spatial-white-1.svg";

  const onHoverImg = isHovered ? hoveredImg : notHoveredImg;
  return (
    <Div className={variant ? `cs-section_heading ${variant}` : `cs-section_heading cs-style1`}  onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}>
           <h2 className=" looking-metaverse-head cs-section_title">{parse(title)}</h2>
      <h3 className="looking-metaverse-subhead cs-section_subtitle">{parse(subtitle)}</h3>
   
      <Spacing lg='90' md='30'/>
      {(title == "Our Method " && pageName== "metaverse") && (
        <Div className="cs-iconbox_icon">
          <a
            href="https://www.spatial.io/@Metalok"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={onHoverImg} alt="Icon" />
          </a>
        </Div>
      )}
      {children}
      {btnText && (
        <>
          <Spacing lg='45' md='20'/>
          <Button btnLink={btnLink} btnText={btnText}/>
        </>
      )}
    </Div>
  );
}
