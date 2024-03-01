import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import SocialWidget from "../Widget/SocialWidget";
import Newsletter from "../Widget/Newsletter";
import "./header.scss";
import ContactInfoWidget from "../Widget/ContactInfoWidget";
import ContactWidget from "../Widget/ContactWidget";
import Div from "../Div";
import DropDown from "./DropDown";

export default function Header({ variant, children }) {
  const [isSticky, setIsSticky] = useState(false);
  const [sideHeaderToggle, setSideHeaderToggle] = useState(false);
  const [mobileToggle, setMobileToggle] = useState(false);

  const handelMobileToggle = () => {
    setMobileToggle(!mobileToggle);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    });
  }, []);

  const [droptrue, setdroptrue] = useState(false);

  const servicedrop = () => {
    setdroptrue(!droptrue);
  };
  return (
    <>
      <header
        className={`cs-site_header cs-style1 text-uppercase ${variant ? variant : ""
          } cs-sticky_header ${isSticky ? "cs-sticky_header_active" : ""}`}
      >
        <Div className="cs-main_header">
          <Div className="container">
            <Div className="cs-main_header_in">
              <Div className="cs-main_header_left">
                <Link className="cs-site_branding" to="/">
                  {/* <img src="/images/logo-header-new.png" alt="Logo" /> */}
                  <img
                    src="/images/website-logo.png"
                    alt="Logo"
                  />
                </Link>
              </Div>
              <Div className="cs-main_header_center">
                <Div className="cs-nav cs-primary_font cs-medium">
                  <ul
                    className="cs-nav_list"
                    style={{ display: `${mobileToggle ? "block" : "none"}` }}
                  >
                    <li className="">
                      <NavLink to="/" onClick={() => setMobileToggle(false)}>
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="about"
                        onClick={() => setMobileToggle(false)}
                      >
                        About
                      </NavLink>
                    </li>
                    <li className="menu-item-has-children">
                      <NavLink className="active-service" onClick={servicedrop}>
                        Services
                      </NavLink>

                      <DropDown>
                        <ul>
                          <li>
                            <Link
                              to="metaversespacePage"
                              onClick={() => setMobileToggle(false)}
                            >
                              {" "}
                              Metaverse spaces{" "}
                            </Link>
                          </li>
                          <li>
                          <Link
                              to="threedconfiguratorPage" 
                              onClick={() => setMobileToggle(false)}
                            >
                              {" "}
                              3D Configurators{" "}
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="blockchainServicePage"
                              onClick={() => setMobileToggle(false)}
                            >
                              {" "}
                              Blockchain Services{" "}
                            </Link>
                          </li>
                        </ul>
                      </DropDown>
                    </li>
                    <li className="">
                      <NavLink
                        to="portfolio"
                        onClick={() => setMobileToggle(false)}
                      >
                        Portfolio
                      </NavLink>
                    </li>
                    <li className="">
                      <NavLink to="blog" onClick={() => setMobileToggle(false)}>
                        Blog
                      </NavLink>
                    </li>
                    <li className="">
                      <NavLink to="careerPage" onClick={() => setMobileToggle(false)}>
                        Career
                      </NavLink>
                    </li>
                    {/* <li className="menu-item-has-children">
                      <Link>
                        More
                        <span
                          className={
                            mobileToggle
                              ? "cs-munu_dropdown_toggle active"
                              : "cs-munu_dropdown_toggle"
                          }
                          onClick={handelMobileToggle}
                        ></span>
                      </Link>
                      <DropDown>
                        <ul>
                          <li>
                            <Link
                              to="/contact"
                              onClick={() => setMobileToggle(false)}
                            >
                              Contact
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/careerPage"
                              onClick={() => setMobileToggle(false)}
                            >
                              Career
                            </Link>
                          </li>
                          
                        </ul>
                      </DropDown>
                    </li> */}
                    <li >
                      <NavLink to="enterpriceMetaversePage"  onClick={() => setMobileToggle(false)} >
                      <span className="cs-btn cs-style1 metaverse-header-btn"> Enterprise Metaverse </span>
                      </NavLink>
                    </li>
                    <li className="">
                      <NavLink to="contact" onClick={() => setMobileToggle(false)}>
                        Contact
                      </NavLink>
                    </li>
                  </ul>
                  <span
                    className={
                      mobileToggle
                        ? "cs-munu_toggle cs-toggle_active"
                        : "cs-munu_toggle"
                    }
                    onClick={() => setMobileToggle(!mobileToggle)}
                  >
                    <span></span>
                  </span>
                </Div>
              </Div>
              <Div className="cs-main_header_right">
                <Div className="cs-toolbox">
                  <span
                    className="cs-icon_btn"
                    onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
                  >
                    <span className="cs-icon_btn_in">
                      <span />
                      <span />
                      <span />
                      <span />
                    </span>
                  </span>
                </Div>
              </Div>
            </Div>
          </Div>
        </Div>
      </header>

      <Div
        className={
          sideHeaderToggle ? "cs-side_header active" : "cs-side_header"
        }
      >
        <button
          className="cs-close"
          onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
        />
        <Div
          className="cs-side_header_overlay"
          onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
        />
        <Div className="cs-side_header_in">
          <Div className="cs-side_header_shape" />
          <Link className="cs-site_branding" to="/">
            {/* <img src="/images/logo-header-new.png" alt="Logo" /> */}
            <img
              src="/images/website-logo.png"
              alt="Logo"
            />
          </Link>
          <Div className="cs-side_header_box">
            <h2 className="cs-side_header_heading">
              Do you have a project in your <br /> mind? Connect with us
            </h2>
          </Div>
          <Div className="cs-side_header_box">
            <ContactWidget title="Contact Us" withIcon />
          </Div>
          <Div className="cs-side_header_box">
            <Newsletter
              // title="Subscribe"
              subtitle="Building Metaverse spaces and Web3 solutions to scale up businesses in the rapidly transforming Digital World"
              placeholder="hello@metalok.io
              "
            />
          </Div>
          <Div className="cs-side_header_box">
            <SocialWidget />
          </Div>
        </Div>
      </Div>
    </>
  );
}
