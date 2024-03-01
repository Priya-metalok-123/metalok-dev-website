// import React, { useEffect } from 'react';
// import { Outlet } from 'react-router-dom';
// import CustomCursor from '../CustomCursor';
// import Footer from '../Footer';
// import Header from '../Header';

// export default function Layout({ headerVariant }) {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);
//   return (
//     <>
//       <Header variant={headerVariant} />
//       <Outlet />
//       <CustomCursor />
//       <Footer />
//     </>
//   );
// }


// Layout.js
import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import CustomCursor from '../CustomCursor';
import Footer from '../Footer';
import Header from '../Header';

export default function Layout({ headerVariant }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const renderHeader = () => {
    if (headerVariant === 'realEstate') {
      // Render the default Header for all pages except the "realEstate" page
      return null;
    } else {
      // Render the original Header for all other pages
      return <Header variant={headerVariant} />;
    }
  };

  return (
    <>
      {renderHeader()}
      <Outlet />
      <CustomCursor />
      <Footer />
    </>
  );
}
