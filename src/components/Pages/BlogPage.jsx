import React, { useEffect } from 'react'
import { pageTitle } from '../../helper'
import Cta from '../Cta'
import PageHeading from '../PageHeading'
import Pagination from '../Pagination'
import PostStyle2 from '../Post/PostStyle2'
import Div from '../Div'
import Sidebar from '../Sidebar.jsx'
import Spacing from '../Spacing'

export default function BlogPage() {
  pageTitle('Blog');
  const postData = [
    {
      thumb:'/images/blog-img/main/1.png',
      title:'How to buy and sell in Metaverse?',
      subtitle:' To put it simply, each tech giant’s Metaverse will be a completely immersive digital world which you will enter through a VR headset or in some cases even without a VR headset, with just one click on the company’s app or website. Just like a high end video game, the metaverse is a multi dimensional virtual world and you enter that virtual world via your avatar.',
      date:'07 Mar 2022',
      category:'Tech',
      categoryHref:'/blog',
      href:'https://medium.com/metalok/how-to-buy-and-sell-in-metaverse-766132af3db8'
    },
    {
      thumb:'/images/blog-img/main/2.png',
      title:'Make money in Metaverse',
      subtitle:' The Metaverse is predicted to become a trillion dollar industry by 2025 which means that the Moolah and the Metaverse go hand in hand. There are seemingly endless opportunities to make money in the Metaverse whether you’re an individual or a multi-national giant.',
      date:'05 Mar 2022',
      category:'Photography',
      categoryHref:'/blog',
      href:'https://medium.com/metalok/the-metaverse-is-predicted-to-become-a-trillion-dollar-industry-by-2025-which-means-that-the-6d259b24017d'
    },
    {
      thumb:'/images/blog-img/main/3.png',
      title:'What is Metaverse?',
      subtitle:'Defining the Metaverse at this point is similar to trying to describe the Internet in the 1970’s. The internet existed then but what it would eventually become and look like was far from clear. So beyond the buzzword that is the Metaverse, what does the term metaverse encompass beyond the hype?',
      date:'04 Mar 2022',
      category:'Tech',
      categoryHref:'/blog',
      href:'https://medium.com/metalok/what-is-metaverse-d2d529fb3530',
    },
    
    
    
    
    
   
  ]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <>
      <PageHeading 
        title='Our Blog'
        bgSrc='/images/blog_hero_bg.jpeg'
        pageLinkText='Blog'
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
      <Div className="container">
        <Cta 
          title='Let’s discuss to build <br />something <i>cool</i> together' 
          btnText='Get in touch' 
          btnLink='/contact' 
          bgSrc='/images/cta_bg.jpeg'
        />
      </Div>
    </>
  )
}
