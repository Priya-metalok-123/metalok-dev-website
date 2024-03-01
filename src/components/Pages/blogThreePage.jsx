import React, { useEffect } from 'react'
import { pageTitle } from '../../helper'
import Cta from '../Cta'
import PageHeading from '../PageHeading'
import Pagination from '../Pagination'
import PostStyle2 from '../Post/PostStyle2'
import Div from '../Div'
import SidebarThre from '../SidebarThre.jsx'
import Spacing from '../Spacing'

export default function BlogThreePage() {
  pageTitle('Blog');
  const postData = [
    
    {
        thumb:'images/blog-img/main/10.png',
        title:'Environmental Concerns Of Blockchain',
        subtitle:' Blockchain technology came into larger public awareness in 2008 with Bitcoin technology, which has since led to the rise of several other cryptocurrencies. While it is largely agreed that blockchain technology can have far reaching impacts on society and the economy, it’s effect on the environment has been a matter of deep concern. The Cambridge Bitcoin Electricity Consumption Index estimates that Bitcoin, used an estimated 26.73 Terawatt-hours of electricity per year and 167.72 Terawatt-hours of electricity more than the Netherlands, Argentina, or the United Arab Emirates in 2020.',
        date:'04 Mar 2022',
        category:'Tech',
        categoryHref:'/blog',
        href:'https://medium.com/@metalok/environmental-concerns-of-blockchain-babd4230686e'
      },
    
      {
        thumb:'images/blog-img/main/11.png',
        title:'GameFi',
        subtitle:' In November 2019, Jade Zhang, the founder of blockchain gaming platform Mixmarvel while delivering a speech at the Wuzhen World Blockchain Conference, said that technology and cryptocurrency have the potential to revolutionize the video gaming sector. In September 2020, Yearn founder Andre Cronje mentioned GameFi in his tweet, saying that blockchain technology and games are an important source of income. GameFi means earning from video gaming. It is a combination of two words, Game and Finance and is often used to refer to play-to-earn (P2E) games that offer economic incentive to players. Players typically earn in Crypto currencies or NFTs for completing various stages or tasks in the game. Here the game is played to earn and not just to win. Overall, it’s a great combination of fun, entertainment and earnings. It is important to note that GameFi is not gambling.',
        date:'04 Mar 2022',
        category:'Tech',
        categoryHref:'/blog',
        href:'https://medium.com/@metalok/gamify-61e43f59df82'
      },
   

      {
        thumb:'images/blog-img/main/12.png',
        title:'Retail and Metaverse',
        subtitle:' Shopping in the metaverse brings to mind immersive experiences and VR suits. But if you’re still the old school variety who needs time to get used to the idea of shopping with a headset and gloves, well not to worry you probably have a decade to get used to the idea.But while this new retail style in the Metaverse will take time to become mainstream according to experts, and customers can sit back and wait for the future of shopping to come to them, brands have to start getting future ready right now. Many are already making strides in that direction and have already set up shop, so to speak, in the Metaverse with great success. Luxury fashion brands from Gucci to Louis Vuitton to Burberry and Balenciaga as well as huge global brands such as Nike and Adidas are now selling their NFTs aka their virtual digital collections on different Metaverse platforms.',
  
        date:'04 Mar 2022',
        category:'Tech',
        categoryHref:'/blog',
        href:'https://medium.com/@metalok/retail-and-metaverse-b4d99506a980'
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
            <SidebarThre/>
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
