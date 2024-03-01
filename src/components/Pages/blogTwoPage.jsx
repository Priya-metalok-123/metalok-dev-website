import React, { useEffect } from 'react'
import { pageTitle } from '../../helper'
import Cta from '../Cta'
import PageHeading from '../PageHeading'
import Pagination from '../Pagination'
import PostStyle2 from '../Post/PostStyle2'
import Div from '../Div'
import Sidebar from '../Sidebar.jsx'
import Spacing from '../Spacing';
import SidebarTwo from "../SidebarTwo.jsx"

export default function BlogTwoPage() {
  pageTitle('Blog');
  const postData = [
    
    ,{
      thumb:'images/blog-img/main/7.png',
      title:'Roadblocks in Blockchain adoption?',
      subtitle:'  Blockchain is hailed as a boon for technology due to its ability to reduce risk, stamp out fraud due to its decentralised nature and bring about transparency in a scalable way for several industries from healthcare to hospitality, finances to films, supply and distribution amongst other industries. In addition to securing transactions between people who don’t share the trust factor, blockchain importantly enables sharing of data in an ecosystem where no single entity is exclusively incharge.',
      date:'04 Mar 2022',
      category:'Tech',
      categoryHref:'/blog',
      href:'https://medium.com/metalok/roadblocks-in-blockchain-adoption-7bdcc86c9364'
    }
    
    ,
    {
      thumb:'images/blog-img/main/8.png',
      title:'Metaverse Real Estate',
      subtitle:' if you’re keen to know the hottest real estate address these days, the property which everyone from Rihanna to Snoop Dogg to Daler Mehendi have invested in, the property that might give you millions of Dollars of ROI, well then don’t start looking for its address on Google Maps because this place is in a whole new universe. Yes, quite literally- its the Metaverse which is a multidimensional virtual universe that only exists on the internet.',
      date:'04 Mar 2022',
      category:'Tech',
      categoryHref:'/blog',
      href:'https://medium.com/metalok/metaverse-real-estate-3f04556efebb'
    }
    ,
    {
      thumb:'images/blog-img/main/9.png',
      title:"How NFT's and Tokenisation will disrupt tomorrow's economies?",
      subtitle:'The evolution of civilization and the creativity of human beings often go hand in hand and as humans have evolved, so has music, art and architecture. Today however creativity has entered the digital age and many expressions of art are now being digitised. Besides being a new way for creators to express themselves, digitisation technology is crucial to protect creative rights and property. Nowadays when people hear the term digital art for many of them the first term that comes to mind is NFT.',
      date:'04 Mar 2022',
      category:'Tech',
      categoryHref:'/blog',
      href:'https://medium.com/@metalok/how-nfts-and-tokenisation-will-disrupt-tomorrows-economies-e32b09ecadd2'
    }
 
    
   
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
            <SidebarTwo/>
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
