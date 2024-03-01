import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import SocialWidget from "../Widget/SocialWidget";
import Newsletter from "../Widget/Newsletter";
import "../Header/header.scss";
import ContactInfoWidget from "../Widget/ContactInfoWidget";
import ContactWidget from "../Widget/ContactWidget";
import Div from "../Div";
import DropDown from "../Header/DropDown";

export default function RealEstateHeader({ variant, children }) {
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
                                    <img src="/images/website-logo.png" alt="Logo" />
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
                                            <NavLink to="/about" onClick={() => setMobileToggle(false)}>
                                                Experience Centres
                                            </NavLink>
                                        </li>
                                        <li className="">
                                            <NavLink to="portfolio" onClick={() => setMobileToggle(false)}>
                                                Digital Twin
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/portfolio" onClick={() => setMobileToggle(false)}>
                                                Projects
                                            </NavLink>
                                        </li>

                                        <li className="">
                                            <NavLink to="contact" onClick={() => setMobileToggle(false)} >
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
                        <img src="/images/website-logo.png" alt="Logo" />
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
                            placeholder="hello@metalok.io"/>
                    </Div>
                    <Div className="cs-side_header_box">
                        <SocialWidget />
                    </Div>
                </Div>
            </Div>
        </>
    );
}
