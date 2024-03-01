import React, { useEffect } from "react";
import { pageTitle } from "../../helper";
import Cta from "../Cta";
import PageHeading from "../PageHeading";

import Div from "../Div";
import SectionHeading from "../SectionHeading";
import Spacing from "../Spacing";

export default function PrivacyPolicy() {
  pageTitle("Privacy Policy");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* <PageHeading
        title="Privacy Policy"
        bgSrc="images/portfolio_hero_bg.jpeg"
        pageLinkText="Privacy Policy"
      /> */}
      <Spacing lg="190" md="90" />
      <Div className="container">
        <Div className="row bg-privacy">
          <Div className="col-lg-12 col-md-12 col-xl-12 col-sm-12">
            <Div className="privacy-main-head-align">
              <h1>PRIVACY POLICY </h1>
              <p>Effective Date: June 21, 2023</p>
            </Div>
          </Div>
        </Div>
      </Div>
      <Spacing lg="145" md="80" />
      {/* content section start here  */}
      <Div className="container-fluid bg-privacy-below-color">
        <Div className="container">
          <Div className="row">
            <Div className="col-lg-12 col-md-12 col-sm-12 col-xl-12">
              <ul className="privacy-policy-ul-links">
                <Spacing lg="50" md="80" />
                <h4>1.GENERAL</h4>
                <li>
                  a. This Website with URL of https://www.metalok.io
                  ("Website/Site") is operated by Metalok Solutions Pvt Ltd
                  ("/We/Our/Us"). We are committed to protecting and respecting
                  your privacy. We do collect your personal information and
                  process your personal data in accordance with the IT Act, 2000
                  (21 of 2000) and other national and state laws which relate to
                  the processing of personal data. Please read the following
                  carefully to understand our views and practices regarding your
                  personal data.{" "}
                </li>
                <li>
                  b. Downloading, accessing, or otherwise using the Website
                  indicates that you have read this Privacy Policy and consent
                  to its terms. If you do not consent to the terms of this
                  Privacy Policy, do not proceed to download, access, or
                  otherwise use the Website.{" "}
                </li>
                <li>
                  c. We collect your personal information in order to provide
                  and continually improve our products and services.{" "}
                </li>
                <li>
                  d. Our privacy policy is subject to change at any time without
                  notice. To make sure you are aware of any changes, please
                  review this policy periodically. The last updated date can be
                  found at the beginning of this policy.{" "}
                </li>
                <li>
                  e. All partner firms and any third-party working with or for
                  Us, and who have access to personal information, will be
                  expected to read and comply with this policy. No third party
                  may access, or process personal information held by Us without
                  having first entered into a confidentiality agreement.{" "}
                </li>
              </ul>
              <ul className="privacy-policy-ul-links">
                <h4>2. HOW WE COLLECT THE INFORMATION </h4>
                <li>
                  a. From you directly and through this Site: We may collect
                  information through the Website when you visit. The data we
                  collect depends on the context of your interactions with our
                  Website.{" "}
                </li>
                <li>
                  b. Through business interaction: We may collect information
                  through business interaction with you or your employees.{" "}
                </li>
                <li>
                  c. From other sources: We may receive information from other
                  sources, such as public databases; joint marketing partners;
                  social media platforms; or other third parties such as:{" "}
                </li>
                <ul className="privacy-policy-ul-links">
                  <li>
                    I. Updated delivery and address information from our
                    carriers or other third parties, which we use to correct our
                    records and deliver your next purchase or communication more
                    easily.{" "}
                  </li>
                  <li>
                    II. Information about your interactions with the products
                    and services offered by our subsidiaries.{" "}
                  </li>
                </ul>
              </ul>
              <ul className="privacy-policy-ul-links">
                <h4>3.INFORMATION WE COLLECT</h4>
                <li>
                  a. We collect information primarily to provide better services
                  to all of our customers.{" "}
                </li>
                <li>
                  b. We collect the following information from you when you use
                  or signup on our Website: <br></br>Name, email address, phone
                  number and other data with the user's consent.{" "}
                </li>
                <li>
                  c. When you visit our Site, some information is automatically
                  collected. This may include information such as the type of
                  mobile device, Operating System (OS) running on your device,
                  Internet Protocol (IP) address, unique user ID, access times,
                  device type, language, browser type and website you visited
                  before our site. We also collect information about how you use
                  Our products or services.{" "}
                </li>
                <li>
                  d. We automatically collect purchase or content use history,
                  which we sometimes aggregate with similar information from
                  other customers to create features such as Best Seller, Top
                  Rated, etc...{" "}
                </li>
                <li>
                  e. The full Uniform Resource Locators (URL) clickstream to,
                  through and from our website (including date and time); cookie
                  number; products and/or content you viewed or searched for,
                  page response times; download errors; length of visits to
                  certain pages; page interaction information (such as
                  scrolling, clicks, and mouse-overs).{" "}
                </li>
                <li>
                  f. We automatically collect information using "Cookies".
                  Cookies are small data files stored on hard drive. Among other
                  things, cookies help us to improve our Site, our marketing
                  activities, and your experience. We use cookies to see which
                  areas and features are popular and to count visits to our
                  Site.{" "}
                </li>
                <li>
                  g. Most Web browsers are set to accept cookies by default. If
                  you prefer, you can choose to set your browser to remove
                  cookies and to reject cookies. If you set your browser to
                  reject cookies, some features will be unavailable. For more
                  information on how to reject cookies, see your browser's
                  instructions on changing your cookie settings.{" "}
                </li>
                <li>
                  h. By using this Website, you are agreeing that We may
                  advertise your feedback on the Website and other marketing
                  materials.{" "}
                </li>
                <li>
                  i. We will retain your information as long as we require this
                  to provide you with the goods and services and for such period
                  as mandated by the laws concerned.{" "}
                </li>
                <li>
                  j. If you opt to receive marketing correspondence from us,
                  subscribe to our mailing list or newsletters, enter into any
                  of our competitions or provide us with your details at
                  networking events, we may use your personal data for our
                  legitimate interests in order to provide you with details
                  about our goods, services, business updates and events.{" "}
                </li>
              </ul>
              <ul className="privacy-policy-ul-links">
                <h4>4. HOW WE USE INFORMATION</h4>
                <li>
                  a. We use the information we collect primarily to provide,
                  maintain, protect, and improve our current products and
                  services.{" "}
                </li>
                <li>
                  b. We use the information collected through this Website as
                  described in this policy and we may use your information to:
                  <br></br>{" "}
                </li>
                <ul className="privacy-policy-ul-links">
                  <li>
                    I. Improve our services, Website and how we operate our
                    businesses;{" "}
                  </li>
                  <li>
                    II. Understand and enhance your experience using our
                    Website, products and services;{" "}
                  </li>
                  <li>
                    III. Personalize our products or services and make
                    recommendations;{" "}
                  </li>
                  <li>
                    IV. Provide and deliver products and services you request;{" "}
                  </li>
                  <li>
                    V. Process, manage, complete, and account for transactions;{" "}
                  </li>
                  <li>
                    VI. Provide customer support and respond to your requests,
                    comments, and inquiries;{" "}
                  </li>
                  <li>
                    VII. Create and manage the online accounts you manage on our
                    Website;{" "}
                  </li>
                  <li>
                    VIII. Send you related information, including confirmations,
                    invoices, technical notices, updates, security alerts and
                    support and administrative messages;{" "}
                  </li>
                  <li>
                    IX. Communicate with you about promotions, upcoming events,
                    and news about products and services;{" "}
                  </li>
                  <li>
                    X. We may process your personal information without your
                    knowledge or consent where required by applicable law or
                    regulation for the purposes of verification of identity or
                    for prevention, detection, or investigation, including of
                    cyber incidents, prosecution, and punishment of offences;{" "}
                  </li>
                  <li>
                    XI. Protect, investigate, and deter against fraudulent,
                    unauthorized, or illegal activity.{" "}
                  </li>
                </ul>
              </ul>
              <ul className="privacy-policy-ul-links">
                <h4>5. DATA TRANSFER </h4>
                <li>
                  a. Information about our users is an important part of our
                  business and we take due care to protect the same.{" "}
                </li>
                <li>
                  b.We share your data with your consent or to complete any
                  transaction or provide any product or service you have
                  requested or authorized. We also share data with our
                  affiliates and subsidiaries, with vendors working on our
                  behalf.{" "}
                </li>
                <li>
                  c. We may employ other companies and individuals to perform
                  functions on our behalf. The functions include fulfilling
                  orders for products or services, delivering packages, sending
                  postal mail and e-mail, removing repetitive information from
                  customer lists, providing marketing assistance, providing
                  search results and links (including paid listings and links),
                  processing payments, transmitting content, scoring credit
                  risk, and providing customer service.{" "}
                </li>
                <li>
                  d. These third-party service providers have access to personal
                  information needed to perform their functions but may not use
                  it for other purposes. Further, they must process the personal
                  information in accordance with this Privacy Policy and as
                  permitted by applicable data protection laws.{" "}
                </li>
                <li>
                  e. We release accounts and other personal information when we
                  believe it is appropriate to comply with the law, enforce or
                  apply our conditions of use, and other agreements, protect the
                  rights, property or safety of Us, our users, or others. This
                  includes exchanging information with other companies and
                  organizations for fraud protection and credit risk reduction.
                </li>
              </ul>
              <ul className="privacy-policy-ul-links">
                <h4>6. COOKIES</h4>
                <li>
                  a. To optimize our web presence, we use cookies. These are
                  small text files stored on your computer's main memory. These
                  cookies are deleted after you close the browser. Other cookies
                  remain on your computer (long-term cookies) and permit its
                  recognition on your next visit. This allows us to improve your
                  access to our site. This helps us to learn more about your
                  interests, and provides you with essential features and
                  services, including{" "}
                </li>

                <ul className="privacy-policy-ul-links">
                  <li>
                    I. Keeping track of items stored in your shopping basket.{" "}
                  </li>
                  <li>
                    II. Conducting research and diagnostics to improve the
                    content, products, and services.{" "}
                  </li>
                  <li>III. Preventing fraudulent activity. </li>
                  <li>IV. Improving security. </li>
                </ul>
                <li>
                  b. Our cookies allow you to take advantage of some of our
                  essential features. For instance, if you block or otherwise
                  reject our cookies, you will not be able to add items to your
                  shopping basket proceed to checkout, or use any products or
                  services that require you to sign in.{" "}
                </li>
                <li>
                  c. Approved third parties also may set cookies when you
                  interact with Our services.{" "}
                </li>
                <li>
                  d. Third parties include search engines, providers of
                  measurement and analytics services, social media networks, and
                  advertising companies{" "}
                </li>
                <li>
                  e. Third parties use cookies in the process of delivering
                  content, including ads relevant to your interests, to measure
                  the effectiveness of their ads, and to perform services on
                  behalf of Us.{" "}
                </li>
                <li>
                  f. You can prevent the storage of cookies by choosing a
                  "disable cookies" option in your browser settings. But this
                  can limit the functionality of our services.{" "}
                </li>
              </ul>
              <ul className="privacy-policy-ul-links">
                <h4>7. DATA SECURITY </h4>
                <li>
                  a. We take due care to protect customer data. Technical
                  measures are in place to prevent unauthorized or unlawful
                  access to data and against accidental loss or destruction of,
                  or damage to the data. The employees who are dealing with the
                  data have been trained to protect the data from any illegal or
                  unauthorized usage.{" "}
                </li>
                <li>
                  b. We follow the Payment Card Industry Data Security Standard
                  (PCI DSS) when handling branded credit cards from the major
                  card schemes.{" "}
                </li>
                <li>
                  c. We maintain physical, electronic, and procedural safeguards
                  in connection with the collection, storage, and disclosure of
                  personal customer information.{" "}
                </li>
                <li>
                  d. We take reasonable steps to help protect your personal
                  information in an effort to prevent the loss, misuse, and
                  unauthorized access, disclosure alteration and destruction. It
                  is your responsibility to protect your user names and
                  passwords to help prevent anyone from accessing or abusing
                  your accounts and services. You should not use or reuse the
                  same passwords you use with other accounts as your password
                  for our services.{" "}
                </li>
                <li>
                  e. It is important for you to protect against unauthorized
                  access to your password and your computers, devices, and
                  applications. Be sure to sign off when you finish using a
                  non-personal device or a shared computer.{" "}
                </li>
                <li>
                  f. The information you provide to us is shared on our secure
                  servers. We have implemented appropriate physical, technical
                  and organizational measures designed to secure your
                  information against accidental loss and unauthorized access,
                  use, alteration, or disclosure. In addition, we limit access
                  to personal data to those employees, agents, contractors, and
                  other third parties that have a legitimate business need for
                  such access.{" "}
                </li>
                <li>
                  g. Information collected from you will be stored for such
                  period as required to complete the transaction entered into
                  with you or such period as mandated under the applicable laws.{" "}
                </li>
                <li>
                  h. We work to protect the security of your information during
                  transmission by using Secure Sockets Locker (SSL) software,
                  which encrypts information you input. SSL allows sensitive
                  information such as credit card numbers, UID's and login
                  credentials to be transmitted securely.{" "}
                </li>
              </ul>
              <ul className="privacy-policy-ul-links">
                <h4>8. LINKS TO THIRD PARTY SITE/APPS</h4>
                <li>
                  Our Site may, from time to time, contain links to and from
                  other Websites of third parties. Please note that if you
                  follow a link to any of these Websites, such Websites will
                  apply different terms to the collection and privacy of your
                  personal data, and we do not accept any responsibility or
                  liability for these policies. When you leave our Site, we
                  encourage you to read the privacy policy of every Website you
                  visit.{" "}
                </li>
              </ul>
              <ul className="privacy-policy-ul-links">
                <h4>9. SHARING OF PERSONAL INFORMATION </h4>
                <li>
                  a. We do not share your personal data with third parties
                  without your prior consent other than:{" "}
                </li>
                <ul className="privacy-policy-ul-links">
                  <li>
                    I. With third parties who work on our behalf provided such
                    third parties adhere to the data protection principles set
                    out in the IT Act, 2000 (21 of 2000) and other applicable
                    legislation, or enter into a written agreement with Us
                    requiring that the third party provide at least the same
                    level of privacy protection as is required by such
                    principles;{" "}
                  </li>
                  <li>
                    II. To comply with laws or to respond to lawful requests and
                    legal process;{" "}
                  </li>
                  <li>
                    III. To protect the rights and property of Us, our agents,
                    customers, and others including to enforce our agreements,
                    policies and terms of use;{" "}
                  </li>
                  <li>
                    IV. In an emergency, including to protect the personal
                    safety of any person; and{" "}
                  </li>
                  <li>
                    V. For the purpose of a business deal (or negotiation of a
                    business deal) involving the sale or transfer of all or a
                    part of our business or assets (business deals may include,
                    for example, any merger, financing, acquisition, divestiture
                    or bankruptcy transaction or proceeding).{" "}
                  </li>
                </ul>
              </ul>
              <ul className="privacy-policy-ul-links">
                <h4>10. CHILDREN </h4>
                <li>
                  If you are under the age of 18 or the age of majority in the
                  jurisdiction in which you reside, you may only use Our Website
                  with the consent of your parent or legal guardian. In any
                  case, We will not be liable for any cause of action that arose
                  due to non-compliance with this section.{" "}
                </li>
              </ul>
              <ul className="privacy-policy-ul-links">
                <h4>11. YOUR INFORMATION CHOICES AND CHANGES</h4>
                <li>
                  a. You can also make choices about the collection and
                  processing of your data by Us. You can access your personal
                  data and opt-out of certain services provided by the Us. In
                  some cases, your ability to control and access to your data
                  will be subject to applicable laws.{" "}
                </li>
                <li>
                  b. You may opt-out of receiving promotional emails from Us by
                  following the instructions in those emails. If you opt-out, we
                  may still send you non-promotional emails, such as emails
                  about our ongoing business relationship. You may also send
                  requests about you got preferences, changes and deletions to
                  your information including requests to opt-out of sharing your
                  personal information with third parties by sending an email to
                  the email address provided at the bottom of this document.{" "}
                </li>
              </ul>
              <ul className="privacy-policy-ul-links">
                <h4>12. CHANGES TO THIS POLICY</h4>
                <li>
                  We may change this policy from time to time. If we make any
                  changes to this policy, we will change the "Last Updated" date
                  above. You agree that your continued use of our services after
                  such changes have been published to our services will
                  constitute your acceptance of such revised policy.{" "}
                </li>
              </ul>
              <ul className="privacy-policy-ul-links">
                <h4>13. NEWSLETTER </h4>
                <li>
                  a. Following subscription to the newsletter, your e-mail
                  address is used for our advertising purposes until you cancel
                  the newsletter again. Cancellation is possible at any time.
                  The following consent has been expressly granted by you
                  separately, or possibly in the course of an ordering process:
                  (I am accepting to receive newsletter from this Website), you
                  may revoke your consent at any time with future effect. If you
                  no longer want to receive the newsletter, then unsubscribe by
                  clicking on unsubscribe option given in the email footer.{" "}
                </li>
                <li>
                  If you have any concern about privacy or grievances with Us,
                  please contact us with a thorough description and we will try
                  to resolve the issue for you.{" "}
                </li>
              </ul>
              <ul className="privacy-policy-ul-links">
              <Spacing lg="10" md="20" />
                <h4 className="privacy-contact-footer"> Contact Details: </h4>
                <li className="privacy-contact-footer-li">
                  Grievance Redressal Officer: <span>Shrvan Kumar Lahoti </span>
                </li>
                <li className="privacy-contact-footer-li">
                  Email: <span>hello@metalok.io </span>
                </li>
                <li className="privacy-contact-footer-li">
                  Contact Number:<span>+91 9669144551</span>
                </li>
              </ul>
            </Div>
          </Div>
        </Div>
      </Div>

      {/* <Spacing lg="150" md="80" />
      <Div className="container">
        <Cta
          title="Let’s discuss to build<br />something <i>cool</i> together"
          btnText="Get in touch"
          btnLink="/contact"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div> */}
    </>
  );
}
