import React from 'react'
import Div from '../Div'
import AuthorWidget from '../Widget/AuthorWidget'
import RecentPost from '../Widget/RecentPost'
import SearchWidget from '../Widget/SearchWidget'
import SideMenuWidget from '../Widget/SideMenuWidget'
import TagWidget from '../Widget/TagWidget'

export default function Sidebar() {
  const tagData = [
    // {
    //   title: 'Business ',
    //   href: '/businessPage',
    // },
    {
      title: 'Metaverse ',
      href: '/metaverseBlogPage',
    },
    // {
    //   title: 'Crypto ',
    //   href: '/cryptoBlogPage',
    // },
    {
      title: 'NFT ',
      href: '/nftBlogPage',
    },
    {
      title: 'Blockchain ',
      href: '/blockchainBlogPage',
    },
    {
      title: 'Gamification ',
      href: '/gamificationBlogPage',
    },
    // {
    //   title: 'Wordpress',
    //   url:'/'
    // },
  ]
  
  const recentPostData = [
    {
      title: "What are NFT's...",
      thumb: '/images/blog-img/mini/4.png',
      href: 'https://medium.com/metalok/what-is-an-nft-83f63e39a162',
      date: '19 Aug 2022'
    },
    {
      title: 'What is BlockChain...',
      thumb: '/images/blog-img/mini/5.png',
      href: 'https://medium.com/metalok/what-is-blockchain-dcfd63490fdf',
      date: '13 Aug 2022'
    },
    {
      title: 'Application of Block...',
      thumb: '/images/blog-img/mini/6.png',
      href: 'https://medium.com/metalok/applications-of-blockchain-innumerable-and-diverse-77c50649c7c8',
      date: ' 13 Aug 2022'
    },
    // {
    //   title: 'You should now add...',
    //   thumb: '/images/recent_post_4.jpeg',
    //   href: '/blog/blog-details',
    //   date: '12 Aug 2022'
    // },
  ]
//   tagData.forEach(tag => {
//     const title = tag.title;
//     const href = tag.href;
//      // Do something with the title and href
//   // For example, you can append them to a HTML element
//   const listItem = document.createElement('li');
//   listItem.textContent = `${title}: ${href}`;

//   // Append the list item to an existing HTML element (e.g., a <ul>)
//   const listContainer = document.getElementById('tagList');
//   listContainer.appendChild(listItem);
// });
  return (
    <>
      {/* <Div className="cs-sidebar_item">
        <AuthorWidget 
          src='/images/avatar_1.png'
          name='Kuber Jontra' 
          description='At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.'
        />
      </Div> */}
      {/* <Div className="cs-sidebar_item">
        <SearchWidget title='Search'/>
      </Div> */}
      {/* <Div className="cs-sidebar_item">
        <SideMenuWidget title='Categories' data={categoryData}/>
      </Div> */}
      <Div className="cs-sidebar_item">
        <RecentPost title='Archives' data={recentPostData}/>
      </Div>
      {/* <Div className="cs-sidebar_item">
        <SideMenuWidget title='Archives' data={archiveData}/>
      </Div> */}
      <Div className="cs-sidebar_item">
        <TagWidget title='Tags' data={tagData}/>
      </Div>
    </>
  )
}
