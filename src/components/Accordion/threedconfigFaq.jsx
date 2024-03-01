import React from 'react'
import { useState } from 'react'
import Div from '../Div'

export default function ThreedconfigFaq() {
  const [selected, setSelected] = useState(0)
  const handelToggle = (index) => {
    if(selected === index) {
      return setSelected(null)
    }
    setSelected(index)
  }
  const accordionData = [
    {
      question: 'What is a 3D configurator and how does it work? ',
      answer: '3D Configurators are an interactive tool powered by new-end technologies of AI, AR and 		Machine Learning that allows users to visualize and customize products in the 3D space. Real 	time changes to product features like color, texture, size, and components, can be made by the 	user to create a personalized version of the product. The configurator may use pre-rendered 	images or real-time rendering to provide a realistic visual experience '
    },
    {
      question: 'What product categories can be configured using a 3D configurator? ',
      answer: 'Most popular in the B2C sector right now, 3D configurators are also a rapidly growing market in 	the B2B sector. The industries that are currently utilizing and benefiting from the services of 3D 	configurators are furniture, automobiles, fashion items, electronic devices, jewelry, and home 	appliances ' 
    },
    {
      question: 'Is a 3D configurator compatible with e-commerce platforms? ',
      answer: 'The technologies that render a 3D configurator possible can integrate with e-commerce platforms seamlessly. The customer experience till date establishes configurators as a tool 	providing a smooth transition from customization to the checkout process, ensuring an enhanced user experience'
    },
    {
      question: 'Can a 3D configurator be used for virtual reality (VR) or augmented reality (AR) experiences? ',
      answer: 'The technologies supporting a 3D configurator are flexible to indulge the emerging deep-tech 	such as AR and VR. Using VR headsets or AR-enabled devices, users can experience the product 	immersively and interactively apart from the web experience offered to many products pre-	web3 era'
    },
    {
      question: 'How expensive is a 3D configurator to develop and implement? ',
      answer: 'Depending on the desired experience the business is looking for, factors such as complexity, 	customization options, integration requirements, and the chosen technology stack are taken 	into consideration in developing & implementing a 3D Configurator service'
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
    </Div>
  )
}
