import React from 'react'
import { useState } from 'react'
import Div from '../Div'

export default function BlockchainFaq() {
  const [selected, setSelected] = useState(0)
  const handelToggle = (index) => {
    if(selected === index) {
      return setSelected(null)
    }
    setSelected(index)
  }

  const arrpara = ()=>{
    return<>
        <p>Blockchain services enable businesses with the following benefits; </p>
        <div className='faq-flex'> 
          <p><span className=''>Scalability :</span> Enable large volumes of businesses through the scalability of the blockchain featured platform </p>
        </div>
        <div className='faq-flex'> 
          <p><span className=''>Security & Privacys :</span> Ensure compliance & protection in business related data and documents through blockchain support </p>
        </div>
        <div className='faq-flex'> 
          <p><span className=''>Ease of Governance and consensus :</span> Blockchain interoperability, and multi-device compatibility simplifies the governance and consensus in a business model </p>
        </div>
        <div className='faq-flex'> 
          <p><span className=''>Cost and feasibility :</span> Blockchain supported platforms function efficiently and simplifies the operations thereby saving costs and energies </p>
        </div>

    </>
  }
  const blockchainpara = ()=>{
    return<>
        <p>Our modus operandi in relevance with Blockchain services runs as follows; </p>
        <div className='faq-flex-arrow'> 
          <p> <span className='flex-arrow'>  &#x2192;</span> Enable large volumes of businesses through the scalability of the blockchain featured platform </p>
        </div>
        <div className='faq-flex-arrow'> 
          <p> <span className='flex-arrow'>  &#x2192;</span> Choosing the right blockchain platform for the identified problem statement or business 	requirement </p>
        </div>
        <div className='faq-flex-arrow'> 
          <p> <span className='flex-arrow'>  &#x2192;</span> Developing the solution through customization of the existing blockchain features to suit the 	current business needs</p>
        </div>
        <div className='faq-flex-arrow'> 
          <p> <span className='flex-arrow'>  &#x2192;</span>  Integrating the solution to your existing business platform or developing a separate platform 	or entity to provide the developed solution </p>
        </div>
        <div className='faq-flex-arrow'> 
          <p>Reach out to us at hello@metalok.io for developing a blockchain solution to your business.</p>
        </div>
         

    </>
  }
  



  const accordionData = [
    {
      question: 'What is Blockchain Technology and what encompasses Blockchain services? ',
      answer: 'Blockchain is a decentralized digital database that records transactions across multiple computers or nodes. It is characterized by features such as transparency, security, immutability, and decentralization ',
      answerOne: 'Blockchain is a decentralized digital database that records transactions across multiple computers or nodes. It is characterized by features such as transparency, security, immutability, and decentralization ',
      answerTwo: 'Get in touch with us at hello@metalok.io to explore blockchain services for your business'
    },
    {
      question: 'What industries can use Blockchain services? ',
      answer: 'Secure and transparent transactions in Finance & Banking Industry, traceability and transparency in Supply chain and logistics Industry, store and share medical records, & facilitate 	interoperability in Healthcare Industry, secure property transactions, ownership and land 	registry systems in Real Estate Industry, peer-to-peer energy trading, and track renewable 	energy certificates in Energy Solutions, ownership and trading of in-game assets & new revenue 	models in Gaming & Entertainment Industry and more',
      answerOne: 'Contact us at hello@metalok.io to find a blockchain solution to your industrial domain'
    },
    {
      question: 'How Blockchain services benefit the businesses?',
      answer: arrpara() 

    },
    {
      question: 'How do we develop & integrate a blockchain service to an existing business? ',
      answer: blockchainpara() 
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
