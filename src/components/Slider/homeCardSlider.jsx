import React, { useState, useEffect } from "react";
import HomeCards from "../Team/homeCard";
import VideoPlayerErrorBoundary from "./videoPlayerErrorBoundary"
import '../Team/team.scss'
import VideoPlayer from "./videoPlayer";
export default function HomeCardSlider() {
  const videos = [
    'https://s3.amazonaws.com/design.metalok.io/Video/corporate-hall-w3-summit-event-room.mp4',
    'https://s3.amazonaws.com/design.metalok.io/Video/exibition-hallways-w3-summit-stall-space.mp4',
    'https://s3.amazonaws.com/design.metalok.io/Video/auditorium-foodverse.mp4',
    'https://s3.amazonaws.com/design.metalok.io/Video/conference-hall-blinx.mp4',
    'https://s3.amazonaws.com/design.metalok.io/Video/private-vip-presidential.mp4',
    'https://s3.amazonaws.com/design.metalok.io/Video/cloud-hall-wtl.mp4',
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleVideoClick = (index) => {
    setCurrentVideoIndex(index);
  };

  const handleVideoEnded = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  useEffect(() => {
    setCurrentVideoIndex(0);
  }, []);

  const teamData = [
    {
      id: 0,
      memberImage: "/images/demo/showcase.jpeg",
      memberName: "Corporate Hall",
      memberContent: "Suitable for professional & official events",
    },
    {
      id: 1,
      memberImage: "/images/demo/home-bg.png",
      memberName: "Exhibition hallways",
      memberContent: "Suitable for product/ Digital Collectibles showcases",
    },
    {
      id: 2,
      memberImage: "/images/service_2.jpeg",
      memberName: "Auditorium",
      memberContent: "Suitable for presentations and discussion forums",
    },
  ];

  const teamDatas = [
    {
      id: 3,
      memberImage: "/images/demo/home-bg.png",
      memberName: "Conference Halls",
      memberContent: "Suitable for Professional meetings/conferences",
    },
    {
      id: 4,
      memberImage: "/images/demo/home-bg.png",
      memberName: "VIP Event Lounge",
      memberContent: "Suitable for Private & VIP meetings/discussions",
    },
    {
      id: 5,
      memberImage: "/images/demo/home-bg.png",
      memberName: "Cloud concourse",
      memberContent: "Suitable for events that focus on experiential affluence",
    },
  ];

  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);

  const updateVideoIndex = (id) => {
    setSelectedVideoIndex(id);
    setCurrentVideoIndex(id);
  };

  useEffect(() => {
    setSelectedVideoIndex(0);
  }, []);

  const combinedTeamData = [...teamData, ...teamDatas];

  return (
    <>
      <div className="container" >
        <div className="row" >
          <div className="col-md-3" >
            {teamData.map((item) => (
              <HomeCards
                key={item.id}
                memberImage={item.memberImage}
                memberName={item.memberName}
                eachItem={item}
                updateVideoIndex={updateVideoIndex}
              />
            ))}
          </div>
          <div className="col-md-3" >
            {teamDatas.map((item) => (
              <HomeCards
                key={item.id}
                memberImage={item.memberImage}
                memberName={item.memberName}
                eachItem={item}
                updateVideoIndex={updateVideoIndex}
              />
            ))}
          </div>
          <div className="col-md-6 col-lg-6 col-xl-6 " >
          
           
             <VideoPlayerErrorBoundary>
        <VideoPlayer
          videos={videos}
          currentVideoIndex={currentVideoIndex}
          handleVideoEnded={handleVideoEnded}
        />
      </VideoPlayerErrorBoundary>
          </div>
         
        </div>
      </div>
    </>
  );
}



{/* <div  className='rectan' >
            <ReactPlayer
              url={videosP[currentVideoIndex]}
              playing
              loop={false}
              autoPlay
             
            
              muted
           
              onEnded={handleVideoEnded} 
              className='rectan-videos'
              
            />
             </div> */}
            //  import ReactPlayer from 'react-player';