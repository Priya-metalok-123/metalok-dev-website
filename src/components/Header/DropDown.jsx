import React, { useState } from 'react';

export default function DropDown({children}) {
  // Mobile Toggle
  const [mobileToggle, setMobileToggle] = useState(false);
  const handelMobileToggle = () => { 
      setMobileToggle(!mobileToggle)
  }  
  return (
    <>
    <h5

onClick={handelMobileToggle}

style={{

  position: "absolute",

  top: "10px",

  width: "100px",

  height: "20px",

  opacity: "0",

}}

></h5>
      <span className={mobileToggle?"cs-munu_dropdown_toggle active":"cs-munu_dropdown_toggle"} onClick={handelMobileToggle}></span>
      {children}
    </>
  )
}