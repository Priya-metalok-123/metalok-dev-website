import React from 'react'
import Div from '../Div'
import AuthorWidget from '../Widget/AuthorWidget'
import RecentPost from '../Widget/RecentPost'
import SearchWidget from '../Widget/SearchWidget'
import SideMenuWidget from '../Widget/SideMenuWidget'
import TagWidget from '../Widget/TagWidget'

export default function SidebarOne() {
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
  // const archiveData = [
  //   {
  //     title: 'Archives',
  //     url:'/'
  //   },
  //   {
  //     title: '15 Aug 2022',
  //     url:'/'
  //   },
  //   {
  //     title: '20 march 2023',
  //     url:'/'
  //   },
    
  // ]
  // const categoryData = [
  //   {
  //     title: 'Blockchain ',
  //     url:'/',
  //   },
  //   {
  //     title: 'NFT ',
  //     url:'/'
  //   },
  //   {
  //     title: 'Digital Twin ',
  //     url:'/'
  //   },
  //   {
  //     title: 'Metaverse ',
  //     url:'/'
  //   },
  //   {
  //     title: '3D Technology ',
  //     url:'/'
  //   }
  // ]
  const recentPostData = [
    {
      title: "Roadblocks in ....",
      thumb: '/images/blog-img/mini/7.png',
      href: 'https://medium.com/metalok/roadblocks-in-blockchain-adoption-7bdcc86c9364',
      date: '15 Aug 2022'
    },
    {
      title: ' Metaverse Real...',
      thumb: '/images/blog-img/mini/8.png',
      href: 'https://medium.com/metalok/metaverse-real-estate-3f04556efebb',
      date: '14 Aug 2022'
    },
    {
      title: "How NFT's and ...",
      thumb: '/images/blog-img/mini/9.png',
      href: 'https://medium.com/@metalok/how-nfts-and-tokenisation-will-disrupt-tomorrows-economies-e32b09ecadd2',
      date: '13 Aug 2022'
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
