import React from 'react'
import { Icon } from '@iconify/react';
import './team.scss'
import { Link } from 'react-router-dom';
import Div from '../Div';

export default function Team({memberImage,memberImageOne, memberName, memberDesignation, memberSocial}) {
  return (
    <Div className="cs-team cs-style1">
        <Div className="cs-member_thumb">
          <img src={memberImage} alt={memberName} className='black-image'/>
          <img src={memberImageOne} alt={memberName} className='color-image'/>
          <Div className="cs-member_overlay" />
        </Div>

        <Div className="cs-member_info">
          <h2 className="cs-member_name"><Link to="/team/team-details">{memberName}</Link></h2>
          <Div className="cs-member_designation">{memberDesignation}</Div>
        </Div>
        
      </Div>
  )
}
