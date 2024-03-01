import React from 'react'
import { useState } from 'react'
import Div from '../Div'

export default function MetaverseFaq() {
  const [selected, setSelected] = useState(0)
  const [selectedOne, setSelectedOne] = useState(1)

  const handelToggle = (index) => {
    if(selected === index) {
      return setSelected(null)
    }
    else if (selectedOne === index) {
      return setSelectedOne(null)
    }
    setSelected(index)
    setSelectedOne(index)

  }
  const arrpara = ()=>{
    return<>
        <p>What we can do in the real world, can be done in the Metaverse. Some examples of the trending 	use-cases of the Metaverse are;</p>
        <div className='faq-flex'> 
          <p><span className=''>Purchase & Monetize digital assets :</span> Real world assets such as land, art & artefacts, merchandize and more can be digitalized and used for carrying out commerce in the Metaverse </p>
        </div>
        <div className='faq-flex'> 
          <p><span className=''>Social Interactions :</span> Meet, collaborate, teach and celebrate in the Metaverse through avatars or digital representations. Metaverse enables entire offices, buildings and campuses to exist in a virtual world </p>
        </div>
        <div className='faq-flex'> 
          <p><span className=''>Immersive Experiences :</span> The existence of every real-life aspect in the digitalized format in the Virtual world opens an avenue of experiencing the spaces that are otherwise limited by geographical, physical, financial and other barriers </p>
        </div>
        <div className='faq-flex'> 
          <p><span className=''>Retail & Commercial Experience :</span> To both businesses and clientele, Metaverse creates a new and additional platform to indulge in the shopping experiences and use-cases as close to real-life experiences as possible </p>
        </div>

    </>
  }
  
  const handelToggleo = (index) => {
    if(selectedOne === index) {
      return setSelectedOne(null)
    }
    setSelectedOne(index)
  }
  const accordionData = [
    {
      question: 'What is a Metaverse? ',
      answer: 'Metaverse is a virtual realm or a digital space where users can interact with each other and the 	environment in real-time. Metaverse integrates the technologies of virtual reality, augmented 	reality, social interaction, extended reality, machine learning, Artificial Intelligence and various 	other digital experiences to provide the intended user experience & use-case', 
    },
    {
      question: 'What are the technologies behind Metaverse and how does it relate to the real world? ',
      answer: 'Advanced technologies such as virtual reality (VR), augmented reality (AR), blockchain, and 	cloud computing are the gears behind Metaverse. These allow users to interact, communicate, 	and engage with others and digital content for the purpose of work, entertainment, education, 	and socialization that transcend physical limitations. Users can explore metaverse on compatible 	devices such as compatible devices like VR headsets, smartphones, and computers', 
    },
    {
      question: 'What can we do in the Metaverse? ',
      answer:arrpara()
    },
    {
      question: 'What is the difference between Metaverse and Gaming? ',
      answer: 'Technically, gaming is a small part of Metaverse and Metaverse extends beyond gaming by 	providing an additional digital layer of interaction, communication, and engagement in 		education, commerce, art, and various other industries'
    },
    {
      question: 'Are there privacy and security concerns in the Metaverse space? ',
      answer: 'Through the use of technologies such as virtual reality (VR), augmented reality (AR), blockchain, 	artificial intelligence (AI), cloud computing, and 3D graphics rendering engines that are built on 	decentralization, transparency and interoperability. Metaverse is evolving to establish robust 	data protection, identity management, and secure transactions. User privacy and security has 	been a top priority in developing the Metaverse'
    },
  ]
  const accordionmetaData = [
    {
      question: 'What can we do in the Metaverse? ',
      answer: 'What we can do in the real world, can be done in the Metaverse. Some examples of the trending 	use-cases of the Metaverse are;',
      answerOne: 'Purchase & Monetize digital assets: Real world assets such as land, art & artefacts, merchandize and more can be digitalized and used for carrying out commerce in the Metaverse',
      answerTwo: 'Social Interactions: Meet, collaborate, teach and celebrate in the Metaverse through avatars or digital representations. Metaverse enables entire offices, buildings and campuses to exist in a virtual world',
      answerThree: 'Immersive Experiences: The existence of every real-life aspect in the digitalized format in the Virtual world opens an avenue of experiencing the spaces that are otherwise limited by geographical, physical, financial and other barriers',
      answerFour: 'Retail & Commercial Experience: To both businesses and clientele, Metaverse creates a new and additional platform to indulge in the shopping experiences and use-cases as close to real-life experiences as possible',
    }, 
    
  ]



  return (
    <Div className="cs-accordians cs-style1">
      {accordionData.map((item, index)=>(
        <Div className={`cs-accordian ${selected===index?'active':''}`} key={index}>
          <Div className="cs-accordian_head" onClick={()=>handelToggle(index)}>
            <h2 className="cs-accordian_title">{item.question}</h2>
            <span className="cs-accordian_toggle cs-accent_color">
              <svg width={15} height={8} viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0L7.5 7.5L15 0H0Z" fill="currentColor" />
              </svg>                    
            </span>
          </Div>
          <Div className='cs-accordian_body'>
            <Div className="cs-accordian_body_in">{item.answer}</Div>
            
            </Div>
        </Div>
      ))}

      {/* {accordionmetaData.map((item, index)=>(
        <Div className={`cs-accordian ${selectedOne===index?'active':''}`} key={index}>
          <Div className="cs-accordian_head" onClick={()=>handelToggleo(index)}> 
            <h2 className="cs-accordian_title">{item.question}</h2> 
            <span className="cs-accordian_toggle cs-accent_color"> 
              <svg width={15} height={8} viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0L7.5 7.5L15 0H0Z" fill="currentColor" /> 
              </svg>                    
            </span> 
          </Div>
          <Div className='cs-accordian_body'>
            <Div className="cs-accordian_body_in">{item.answer}</Div> 
            <Div className="cs-accordian_body_in">{item.answerOne}</Div>
            <Div className="cs-accordian_body_in"> {item.answerTwo}</Div>
            <Div className="cs-accordian_body_in">{item.answerThree}</Div>
            <Div className="cs-accordian_body_in">{item.answerFour}</Div>
            </Div>
        </Div>
      ))}  */}
    </Div>
  )
}
