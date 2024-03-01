import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
// import "./team.scss";
import Div from "../Div";
import Spacing from '../Spacing';

export default function HomeCards({
  memberImage,
  memberName,
  memberContent,
  memberDesignation,
  updateImageIndex,
  eachItem,
  memberVideo,
  updateVideoIndex,
}) {
  const [isActive, setIsActive] = useState(false);

  const onClickTeamCard = () => {
    setIsActive(true);
    updateVideoIndex(eachItem.id);
  };

  return (
    <div className="col-md-12">
      <div className="cs-team hover-remove" onClick={onClickTeamCard}>
        <Div className="cs-member_thumb">
          {memberVideo ? (
            <video src={memberVideo} alt={memberName} autoPlay className="black-image" />
          ) : (
            <Div className="color-card"  />
          )}
        </Div>

        <div className="cs-member_info memb-info">
          <h2 className="memeber_name">
            <Link to="">{memberName}</Link>
          </h2>
          <div className="cs-member_content"><Link to="">{memberContent}</Link></div>
          <div className="cs-member_designation"><Link to="">{memberDesignation}</Link></div>
        </div>
      </div>
      <Spacing lg="20" md="50" />
    </div>
  );
}
