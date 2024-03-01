import React, { useEffect } from 'react'
import { pageTitle } from '../../helper'
import Cta from '../Cta'
import PageHeading from '../PageHeading'
import Pagination from '../Pagination'
import PostStyle2 from '../Post/PostStyle2'
import Div from '../Div'
import Sidebar from '../Sidebar.jsx'
import Spacing from '../Spacing' 

export default function CryptoBlogPage() {
  pageTitle('Blockchain Blog Page');
  const postData = [
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
      subtitle:' In our earlier article we removed the blocks around understanding what blockchain is.Now, let’s discuss how blockchain is proving to be a boon in our day to day life. Whether you’re a common man or a celebrity, blockchain is the most secure way to conduct transactions. Especially when trust between entities is not a given, blockchain allows all parties involved to feel secure nonetheless. Bitcoin was the first real world application of blockchain, however it can assist in may other services from hospitality to healthcare, to digital art, to any industry, where there is content and IP rights are crucial.',
      date:'04 Mar 2022',
      category:'Tech',
      categoryHref:'/blog',  
      href:'https://medium.com/metalok/applications-of-blockchain-innumerable-and-diverse-77c50649c7c8'
    }
    ,
    {
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
      thumb:'images/blog-img/main/10.png',
      title:'Environmental Concerns Of Blockchain Services',
      subtitle:' Blockchain technology came into larger public awareness in 2008 with Bitcoin technology, which has since led to the rise of several other cryptocurrencies. While it is largely agreed that blockchain technology can have far reaching impacts on society and the economy, it’s effect on the environment has been a matter of deep concern. The Cambridge Bitcoin Electricity Consumption Index estimates that Bitcoin, used an estimated 26.73 Terawatt-hours of electricity per year and 167.72 Terawatt-hours of electricity more than the Netherlands, Argentina, or the United Arab Emirates in 2020.',
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
        title='Blockchain Blog Page'
        bgSrc='/images/blog_hero_bg.jpeg'
        pageLinkText='Blockchain Blog Page'
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
