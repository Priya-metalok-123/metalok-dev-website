import React, { useEffect } from 'react'
import { pageTitle } from '../../helper'
import Cta from '../Cta'
import PageHeading from '../PageHeading'
import Pagination from '../Pagination'
import PostStyle2 from '../Post/PostStyle2'
import Div from '../Div'
import Sidebar from '../Sidebar.jsx'
import Spacing from '../Spacing'

export default function GamificationBlogPage() {
  pageTitle('Gamification Blog Page');
  const postData = [
   
 
  
    
    {
      thumb:'images/blog-img/main/11.png',
      title:'GameFi',
      subtitle:' In November 2019, Jade Zhang, the founder of blockchain gaming platform Mixmarvel while delivering a speech at the Wuzhen World Blockchain Conference, said that technology and cryptocurrency have the potential to revolutionize the video gaming sector. In September 2020, Yearn founder Andre Cronje mentioned GameFi in his tweet, saying that blockchain technology and games are an important source of income. GameFi means earning from video gaming. It is a combination of two words, Game and Finance and is often used to refer to play-to-earn (P2E) games that offer economic incentive to players. Players typically earn in Crypto currencies or NFTs for completing various stages or tasks in the game. Here the game is played to earn and not just to win. Overall, it’s a great combination of fun, entertainment and earnings. It is important to note that GameFi is not gambling.',
      date:'04 Mar 2022',
      category:'Tech',
      categoryHref:'/blog',
      href:'https://medium.com/@metalok/gamify-61e43f59df82'
    }
    ,
  
  ]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <>
      <PageHeading 
        title='Gamification Blog Page'
        bgSrc='/images/blog_hero_bg.jpeg'
        pageLinkText='Gamification Blog Page'
      />
      <Spacing lg='150' md='80'/>
      <Div className="container">
        <Div className="row">
          <Div className="col-lg-8">
            {postData.map((item, index)=> (
              <Div key={index}>
                <PostStyle2 
                  thumb={item.thumb}
                  title={item.title}
                  subtitle={item.subtitle}
                  date={item.date}
                  category={item.category}
                  categoryHref={item.categoryHref}
                  href={item.href}
                />
                {postData.length>index+1 && <Spacing lg='95' md='60'/>}
              </Div>
            ))}
            <Spacing lg='60' md='40'/>
            <Pagination/>
          </Div>
          <Div className="col-xl-3 col-lg-4 offset-xl-1">
            <Spacing lg='0' md='80'/>
            <Sidebar/>
          </Div>
        </Div>
      </Div>
      <Spacing lg='150' md='80'/>
      {/* <Div className="container">
        <Cta 
          title='Let’s disscuse make <br />something <i>cool</i> together' 
          btnText='Get in touch' 
          btnLink='/contact' 
          bgSrc='/images/cta_bg.jpeg'
        />
      </Div> */}
    </>
  )
}
