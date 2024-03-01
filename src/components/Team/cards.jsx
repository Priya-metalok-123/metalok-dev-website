

// import React, { useState } from "react";

// import { Icon } from "@iconify/react";

// import "./team.scss";

// import { Link } from "react-router-dom";

// import Div from "../Div";

// export default function Cards({
//   memberImage,

//   memberImageOne,

//   memberName,

//   memberDesignation,

//   memberSocial,

//   handleColClick,
//   updateImageIndex,
//   eachItem,
// }) {
  

//   const onClickTeamCard = () => {
//     updateImageIndex(eachItem.id);
//   };

//   return (
//     <Div className="cs-team  hover-remove" onClick={onClickTeamCard}>
//       <Div className="cs-member_thumb">
//         <img src={memberImage} alt={memberName} className="black-image" />

//         <img src={memberImageOne} alt={memberName} className="black-image" />
//       </Div>

//       <Div className="cs-member_info">
//         <h2 className="cs-member_name">
//           <Link to="">{memberName}</Link>
//         </h2>

//         <Div className="cs-member_designation">{memberDesignation}</Div>
//       </Div>
//     </Div>
//   );
// }



// import React, { useState } from 'react';
// import { Icon } from '@iconify/react';
// import './team.scss';
// import { Link } from 'react-router-dom';
// import Div from '../Div';

// export default function Cards({
//   memberImage,
//   memberImageOne,
//   memberName,
//   memberDesignation,
//   memberSocial,
//   handleColClick,

// }) {
// //   const [selectedImage, setSelectedImage] = useState('');

// //   const handleClick = () => {
// //     handleColClick(memberImage);
// //   };
// // const onClickCard= () =>{
// //     updateTeamImg()

// // }

//   return ( 
//     <Div className="cs-team  hover-remove">
//       <Div className="cs-member_thumb">
//         <img src={memberImage} alt={memberName} className="black-image" />
//         <img src={  memberImageOne} alt={memberName} className="black-image" />

//       </Div>

//       <Div className="cs-member_info">
//         <h2 className="cs-member_name">
//           <Link to="">{memberName}</Link>
//         </h2>
//         <Div className="cs-member_designation">{memberDesignation}</Div>
//       </Div>
//     </Div>
//   );
// }

import React from "react";
import { Icon } from "@iconify/react";
import "./team.scss";
import { Link } from "react-router-dom";
import Div from "../Div";

export default function Cards({
  memberImage,
  memberImageOne,
  memberName,
  memberContent,
  memberDesignation,
  memberSocial,
  handleColClick,
  updateVideoIndex,
  eachItem,
  memberVideo
}) {
  const onClickTeamCard = () => {
    updateVideoIndex(eachItem.id);
  };

  return (
    <Div className="cs-team hover-remove" onClick={onClickTeamCard}>
      <Div className="cs-member_thumb">
        {memberVideo ? (
           <video src={memberVideo} alt={memberName}  autoPlay className="black-image" />
         ) : (
           <Div className="color-card" />
        )}
      </Div>

      <Div className="cs-member_info memb-info">
        <h2 className="cs-member_name">
          <Link to="">{memberName}</Link>
        </h2>
        <Div className="cs-member_content">
          <Link to="">{memberContent}</Link>
        </Div>
        <Div className="cs-member_designation">
          <Link to="">{memberDesignation}</Link>
        </Div>
      </Div>
    </Div>
  );
}
