import React from 'react';
import parse from 'html-react-parser';
import './hero.scss';
import Button from '../Button';
import Div from '../Div';
import VerticalLinks from '../VerticalLinks';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const videos = [
  'https://s3.amazonaws.com/design.metalok.io/Video/ENTERPRISE1.mp4',
  'https://s3.amazonaws.com/design.metalok.io/Video/Enterprise4.mp4',
  'https://example.com/video3.mp4',
];

export default function Hero8({
  title,
  subtitle,
  btnText,
  btnLink,
  scrollDownId,
  socialLinksHeading,
  heroSocialLinks,
}) {
  return (
    <div className="cs-hero cs-style1 cs-bg cs-fixed_bg cs-shape_wrap_1">
      <div className="cs-shape_1" />
      <div className="cs-shape_1" />
      <div className="cs-shape_1" />
      <Carousel>
        {videos.map((videoUrl, index) => (
          <div key={index} className="cs-hero-video">
            <video autoPlay loop muted>
              <source src={videoUrl} type="video/mp4" />
            </video>
          </div>
        ))}
      </Carousel>
      <div className="container">
        <div className="cs-hero_text">
          <h1 className="cs-hero_title">{parse(title)}</h1>
          <div className="cs-hero_info">
            <div>
              <Button btnLink={btnLink} btnText={btnText} />
            </div>
            <div>
              <div className="cs-hero_subtitle">{subtitle}</div>
            </div>
          </div>
        </div>
      </div>
      <VerticalLinks data={heroSocialLinks} title={socialLinksHeading} />
      <a href={scrollDownId} className="cs-down_btn">
        .
      </a>
    </div>
  );
}
