import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Div from '../Div';
import './career.scss';
import Spacing from '../Spacing';

export default function Portfolio7({ href, color, title, subtitle, variant, text, heading, full }) {
  const bgStyle = {
    backgroundColor: color || '#122450', // Use the provided color or default to transparent
  };

  return (
    <div className="equal-height-cards">
      <Card className='career-bg-entire'>
        <Link
          to={href}
          className={`cs-portfolio-career cs-bg ${variant ? variant : 'cs-style1-career'}`}
        >
          <>
            <Div className="cs-portfolio_hover-career" />
            <Div className="cs-portfolio_bg-career" style={bgStyle} /> {/* Apply the background color */}
            <Div className="cs-portfolio_info-career">
              <Div className="cs-portfolio_info_bg-career ">
                <Div className="cs-portfolio_heading ">
                  <h1 className="career-heading">{heading}</h1> <p className="full-time-text">{full} </p>{' '}
                </Div>
                <Div className="cs-portfolio_text-career career_text">{text}</Div>
                {/* Display the text */}
                <Div className="cs-portfolio_heading_content">
                  <h2 className="cs-portfolio_title">{title}</h2>
                  <Spacing lg="5" md="10" />
                  <Div className="know-more-btn-career">{subtitle}</Div>
                </Div>
              </Div>
            </Div>
          </>
        </Link>
      </Card>
    </div>
  );
}
