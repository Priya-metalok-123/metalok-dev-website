import React, { useEffect } from 'react'
import { pageTitle } from '../../helper'
import Cta from '../Cta'
import PageHeading from '../PageHeading'
import Pagination from '../Pagination'
import PostStyle2 from '../Post/PostStyle2'
import Div from '../Div'
import Sidebar from '../Sidebar.jsx'
import Spacing from '../Spacing'

export default function BusinessPage() {
  pageTitle('Business');
  const postData = [
    {
      thumb:'/images/post_4.jpeg',
      title:'How to buy and sell in Metaverse',
      subtitle:' To put it simply, each tech giant’s Metaverse will be a completely immersive digital world which you will enter through a VR headset or in some cases even without a VR headset, with just one click on the company’s app or website. Just like a high end video game, the metaverse is a multi dimensional virtual world and you enter that virtual world via your avatar.',
      date:'07 Mar 2022',
      category:'Tech',
      categoryHref:'/blog',
      href:'/blog/blog-details'
    },
    {
      thumb:'/images/post_5.jpeg',
      title:'Make money in Metaverse',
      subtitle:' The Metaverse is predicted to become a trillion dollar industry by 2025 which means that the Moolah and the Metaverse go hand in hand. There are seemingly endless opportunities to make money in the Metaverse whether you’re an individual or a multi-national giant.',
      date:'05 Mar 2022',
      category:'Photography',
      categoryHref:'/blog',
      href:'/blog/blog-details'
    },
    {
      thumb:'/images/post_6.jpeg',
      title:'What is Metaverse?',
      subtitle:'Defining the Metaverse at this point is similar to trying to describe the Internet in the 1970’s. The internet existed then but what it would eventually become and look like was far from clear. So beyond the buzzword that is the Metaverse, what does the term metaverse encompass beyond the hype?',
      date:'04 Mar 2022',
      category:'Tech',
      categoryHref:'/blog',
      href:'/blog/blog-details'
    }
    ,
    {
      thumb:'/images/post_6.jpeg',
      title:'What are NFTs?',
      subtitle:' Three simple letters, NFTs- Non Fungible Tokens. While the Big B was the first Indian celebrity to launch his NFT Collection which included an audio file of the legendary poem Madhushala and autographed film posters, the NFT industry has already captured the attention of several superstars globally. NFTs may be in a nascent stage in India, however globally it is a 2.5 billion dollar industry.',
      date:'04 Mar 2022',
      category:'Tech',
      categoryHref:'/blog',
      href:'/blog/blog-details'
    }
    ,
    {
      thumb:'/images/post_6.jpeg',
      title:'What is Blockchain?',
      subtitle:' If you have a mental block when it comes to understanding what does Blockchain mean-well you’re not alone. However, there are plenty of reasons why you should be well versed in this particular aspect of our Metalok for its ability to save you from all fraud, forgery and data leakage.',
      date:'04 Mar 2022',
      category:'Tech',
      categoryHref:'/blog',
      href:'/blog/blog-details'
    }
    ,
    {
      thumb:'/images/post_6.jpeg',
      title:'Gamefi',
      subtitle:' In November 2019, Jade Zhang, the founder of blockchain gaming platform Mixmarvel while delivering a speech at the Wuzhen World Blockchain Conference, said that technology and cryptocurrency have the potential to revolutionize the video gaming sector. In September 2020, Yearn founder Andre Cronje mentioned GameFi in his tweet, saying that blockchain technology and games are an important source of income. GameFi means earning from video gaming. It is a combination of two words, Game and Finance and is often used to refer to play-to-earn (P2E) games that offer economic incentive to players. Players typically earn in Crypto currencies or NFTs for completing various stages or tasks in the game. Here the game is played to earn and not just to win. Overall, it’s a great combination of fun, entertainment and earnings. It is important to note that GameFi is not gambling.',
      date:'04 Mar 2022',
      category:'Tech',
      categoryHref:'/blog',
      href:'/blog/blog-details'
    }
    ,
    {
      thumb:'/images/post_6.jpeg',
      title:'How nfts and tokenization will disrupt tomorrows economies',
      subtitle:' NFT is actually a contract on the Blockchain network, which is also smart and secure.Economies based on Distributed Ledger technologies are expected to be adopted by all major investment players in a few years and tokens such as NFTs will be the lifeblood of this system. The most exciting part of a token economy accordingly to experts is that everyone with an Internet connection can interact and contribute in a meaningful way for example instead of paying brokers to invest on your behalf investors can invest directly even in previously out of reach spheres like real estate. Artists don’t have to lose out on half their earnings to streaming sites but instead can be paid directly',
      
      
    
      date:'04 Mar 2022',
      category:'Tech',
      categoryHref:'/blog',
      href:'/blog/blog-details'
    }
  ]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <>
      <PageHeading 
        title='Business Blog'
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
