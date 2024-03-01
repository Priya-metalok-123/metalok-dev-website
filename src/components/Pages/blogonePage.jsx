import React, { useEffect } from 'react'
import { pageTitle } from '../../helper'
import Cta from '../Cta'
import PageHeading from '../PageHeading'
import Pagination from '../Pagination'
import PostStyle2 from '../Post/PostStyle2'
import Div from '../Div'
// import Sidebar from '../Sidebar.jsx'
import Spacing from '../Spacing'
import SidebarOne from '../SidebarOne.jsx'

export default function BlogonePage() {
  pageTitle('Blog');
  const postData = [
    
    {
      thumb:'/images/blog-img/main/4.png',
      title:'What are NFTs?',
      subtitle:' Three simple letters, NFTs- Non Fungible Tokens. While the Big B was the first Indian celebrity to launch his NFT Collection which included an audio file of the legendary poem Madhushala and autographed film posters, the NFT industry has already captured the attention of several superstars globally. NFTs may be in a nascent stage in India, however globally it is a 2.5 billion dollar industry.',
      date:'04 Mar 2022',
      category:'Tech',
      categoryHref:'/blog',
      href:'https://medium.com/metalok/what-is-an-nft-83f63e39a162'
    }
    ,
    {
      thumb:'images/blog-img/main/5.png',
      title:'What is Blockchain?',
      subtitle:' If you have a mental block when it comes to understanding what does Blockchain mean-well you’re not alone. However, there are plenty of reasons why you should be well versed in this particular aspect of our Metalok for its ability to save you from all fraud, forgery and data leakage.',
      date:'04 Mar 2022',
      category:'Tech',
      categoryHref:'/blog',
      href:'https://medium.com/metalok/what-is-blockchain-dcfd63490fdf'
    }
    ,
    {
      thumb:'images/blog-img/main/6.png',
      title:'Applications of Blockchain',
      subtitle:'  In our earlier article we removed the blocks around understanding what blockchain is.Now, let’s discuss how blockchain is proving to be a boon in our day to day life. Whether you’re a common man or a celebrity, blockchain is the most secure way to conduct transactions. Especially when trust between entities is not a given, blockchain allows all parties involved to feel secure nonetheless. Bitcoin was the first real world application of blockchain, however it can assist in may other services from hospitality to healthcare, to digital art, to any industry, where there is content and IP rights are crucial.',
      date:'04 Mar 2022',
      category:'Tech',
      categoryHref:'/blog',
      href:'https://medium.com/metalok/applications-of-blockchain-innumerable-and-diverse-77c50649c7c8'
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
            <SidebarOne/>
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
