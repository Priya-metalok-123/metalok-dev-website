import React, { useEffect } from "react";
import { pageTitle } from "../../helper";
import Cta from "../Cta";
import PageHeading from "../PageHeading";

import Div from "../Div";
import SectionHeading from "../SectionHeading";
import Spacing from "../Spacing";

export default function PrivacyPolicy() {
  pageTitle("Terms & Conditions");

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
              <h1>TERMS AND CONDITIONS </h1>
              <p>Effective Date: June 21, 2023 </p>
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
              <ul className="terms-condition-ul-links">
                <Spacing lg="50" md="80" />

                <li>
                  <span>THE AGREEMENT:</span> The use of this website and
                  services on this website provided by Metalok Solutions Pvt.
                  Ltd. (hereinafter referred to as <span>"Owner")</span> are
                  subject to the following Terms & Conditions (hereinafter the{" "}
                  <span>"Terms of Service")</span>, all parts and sub-parts of
                  which are specifically incorporated by reference here together
                  with the Privacy Policy. Following are the Terms of Service
                  governing your use of www.metalok.io (the
                  <span>"Website") </span>, all pages on the Website and any
                  services provided by or on this Website{" "}
                  <span> ("Services")</span>.
                </li>
                <li className="pt-1">
                  By accessing either directly or through a hyperlink, the
                  Website, and/ or purchasing something from us, you engage in
                  our "Service" and agree to be bound by the Terms of Service
                  including those additional terms and conditions and policies
                  referenced herein and/or available by hyperlink. These Terms
                  of Service apply to all users of the site, including without
                  limitation vendors, buyers, customers, merchants, browsers
                  and/ or contributors of content. You acknowledge and agree
                  that the Website may use your personal information in the
                  manner described in our Privacy Policy which sets forth how
                  information collected about you is collected, used and stored.{" "}
                </li>
              </ul>
              <ul className="privacy-policy-ul-links">
                <h4>1) DEFINITIONS </h4>
                <li>
                  The parties referred to in these Terms of Service shall be
                  defined as follows:{" "}
                </li>
                <li>
                  a) Owner, Us, We: The Owner, as the creator, operator, and
                  publisher of the Website, makes the Website, and certain
                  Services on it, available to users. Metalok Solutions Pvt.
                  Ltd., Owner, Us, We, Our, Ours and other first-person pronouns
                  will refer to the Owner, as well as all employees and
                  affiliates of the Owner.{" "}
                </li>
                <li>
                  b) You, the User, the Client: You, as the user of the Website,
                  will be referred to throughout these Terms of Service with
                  second-person pronouns such as You, Your, Yours, or as User or
                  Client. For the purpose of these Terms of Service, the term
                  "User" or "you" shall mean any natural or legal person who
                  person is accessing the Website. The term '"Your" shall be
                  construed accordingly.{" "}
                </li>

                <li>
                  c) Parties: Collectively, the parties to these Terms of
                  Service (the Owner and You) will be referred to as Parties.{" "}
                </li>
              </ul>
              <ul className="privacy-policy-ul-links">
                <h4>2) ASSENT & ACCEPTANCE</h4>
                <li>
                  By using the Website, You warrant that You have read and
                  reviewed these Terms of Service and that You agree to be bound
                  by it. If You do not agree to be bound by these Terms of
                  Service, please leave the Website immediately. The Owner only
                  agrees to provide use of this Website and Services to You if
                  You assent to these Terms of Service. Further, based on the
                  Services obtained by a User, additional terms and conditions
                  in respect of the specific Services may apply, which shall be
                  deemed an agreement between the Users and the Owner.{" "}
                </li>
              </ul>
              <ul className="privacy-policy-ul-links">
                <h4>3) AGE RESTRICTION</h4>
                <li>
                  You must be at least 18 (eighteen) years of age to use this
                  Website, or any Services contained herein. By using this
                  Website, You represent and warrant that You are at least 18
                  years of age and may legally agree to these Terms of Service.
                  The Owner assumes no responsibility or liability for any
                  misrepresentation of Your age.{" "}
                </li>
              </ul>
              <ul className="privacy-policy-ul-links">
                <h4> 4) ABOUT THE SITE</h4>
                <li>
                  The Website is a medium to demonstrate, explain and carry-out
                  transactions on the products and services we offer. Under
                  Products and Services, we offer 3D Configuration Services,
                  Metaverse Services, and Blockchain Technology Services with a
                  scope for inclusion of more Web 3.0 and Advanced Technology
                  services. Our site presents our services in the gamut of AR,
                  VR, MR, XR, AI and Metaverse domains providing both end-to-end
                  solutions, consultations and specialized/fractionalised
                  services.{" "}
                </li>
                <li>
                  The Website does not screen or censor the users who register
                  on and access the Website. You assume all risks associated
                  with dealing with other users with whom you come in contact
                  through the Website. You agree to use the Website only for
                  lawful purposes without infringing the rights of or
                  restricting the use of this Website by any third party.{" "}
                </li>
              </ul>
              <ul className="privacy-policy-ul-links">
                <h4>5) LICENSE TO USE WEBSITE</h4>
                <li>
                  The Owner may provide You with certain information as a result
                  of Your use of the Website or Services. Such information may
                  include but is not limited to, documentation, data, or
                  information developed by the Owner, and other materials which
                  may assist in Your use of the Website or Services ("Owner
                  Materials"). Subject to these Terms of Service, the Owner
                  grants You a non-exclusive, limited, non-transferable and
                  revocable license to use the Owner Materials solely in
                  connection with Your use of the Website and Services. The
                  Owner Materials may not be used for any other purpose and this
                  license terminates upon Your cessation of use of the Website
                  or Services or at the termination of these Terms of Service.{" "}
                </li>

                <li>
                  You agree not to collect contact information of other Users
                  from the Website or download or copy any information by means
                  of unsolicited access so as to communicate directly with them
                  or for any reason whatsoever.{" "}
                </li>
                <li>
                  Any unauthorized use by you shall terminate the permission or
                  license granted to you by the Website and You agree that you
                  shall not bypass any measures used by the Owner to prevent or
                  restrict access to the Website.{" "}
                </li>
              </ul>
              <ul className="privacy-policy-ul-links">
                <h4>6) INTELLECTUAL PROPERTY </h4>
                <li>
                  You agree that the Website and all Services provided by the
                  Owner are the property of the Owner, including all copyrights,
                  trademarks, trade secrets, patents, and other intellectual
                  property ("Owner IP"). You agree that the Owner owns all
                  rights, title, and interest in and to the Owner IP and that
                  You will not use the Owner IP for any unlawful or infringing
                  purpose. You agree not to reproduce or distribute the Owner IP
                  in any way, including electronically or via registration of
                  any new trademarks, trade names, service marks or Uniform
                  Resource Locators (URLs), without express written permission
                  from the Owner.{" "}
                </li>
              </ul>
              <ul className="privacy-policy-ul-links">
                <h4>7) USER OBLIGATIONS</h4>
                <li>
                  As a user of the Website or Services, You may be asked to
                  register with Us. When You do so, You will choose a user
                  identifier, which may be Your email address or another term,
                  as well as a password. You may also provide personal
                  information, including, but not limited to, Your name. You are
                  responsible for ensuring the accuracy of this information.
                  This identifying information will enable You to use the
                  Website and Services. You must not share such identifying
                  information with any third party and if You discover that Your
                  identifying information has been compromised, You agree to
                  notify Us immediately in writing. An email notification will
                  suffice. You are responsible for maintaining the safety and
                  security of Your identifying information as well as keeping Us
                  apprised of any changes to Your identifying information. The
                  billing information You provide us, including credit card,
                  billing address and other payment information, is subject to
                  the same confidentiality and accuracy requirements as the rest
                  of Your identifying information. Providing false or inaccurate
                  information, or using the Website or Services to further fraud
                  or unlawful activity is grounds for immediate termination of
                  these Terms of Service. The Owner reserves the right to refuse
                  service, terminate accounts, or remove or edit content in its
                  sole discretion.{" "}
                </li>
              </ul>
              <ul className="privacy-policy-ul-links">
                <h4> 8) PAYMENT & FEES</h4>
                <li>
                  Should You register for any of the paid Services on this
                  website or purchase any product or service on this website,
                  You agree to pay Us the specific monetary amounts required for
                  that product or those Services. These monetary amounts
                  ("Fees") will be described to You during Your account
                  registration and/or confirmation process. The final amount
                  required for payment will be shown to You immediately prior to
                  purchase.{" "}
                </li>
                <li>
                  We reserve the right to refuse service or refuse to sell the
                  products on the Website at our sole discretion to anyone for
                  any reason at any time.{" "}
                </li>
              </ul>
              <ul className="privacy-policy-ul-links">
                <h4>9) ACCEPTABLE USE </h4>
                <li>
                  You agree not to use the Website or Services for any unlawful
                  purpose or any purpose prohibited under this clause. You agree
                  not to use the Website or Services in any way that could
                  damage the Website, Services or general business of the Owner.{" "}
                </li>
                <li>
                  a) You further agree not to use the Website or Services:{" "}
                </li>

                <ul className="privacy-policy-ul-links">
                  <li>
                    I) To harass, abuse, or threaten others or otherwise violate
                    any person's legal rights;{" "}
                  </li>
                  <li>
                    II) To violate any intellectual property rights of the Owner
                    or any third party;{" "}
                  </li>
                  <li>
                    III) To upload or otherwise disseminate any computer viruses
                    or other software that may damage the property of another;{" "}
                  </li>
                  <li>IV) To perpetrate any fraud; </li>
                  <li>
                    V) To engage in or create any unlawful gambling,
                    sweepstakes, or pyramid scheme;{" "}
                  </li>
                  <li>
                    VI) To publish or distribute any obscene or defamatory
                    material;{" "}
                  </li>
                  <li>
                    VII) To publish or distribute any material that incites
                    violence, hate or discrimination towards any group;{" "}
                  </li>
                  <li>VIII) To unlawfully gather information about others. </li>
                  <li>
                    You are prohibited from using the site or its content: (a)
                    for any unlawful purpose; (b) to solicit others to perform
                    or participate in any unlawful acts; (c) to infringe on any
                    third party's intellectual property or proprietary rights,
                    or rights of publicity or privacy, whether knowingly or
                    unknowingly; (d) to violate any local, federal or
                    international law, statute, ordinance or regulation; ((e) to
                    harass, abuse, insult, harm, defame, slander, disparage,
                    intimidate, or discriminate based on gender, sexual
                    orientation, religion, ethnicity, race, age, national
                    origin, or disability; (f) to submit false or misleading
                    information or any content which is defamatory, libelous,
                    threatening, unlawful, harassing, indecent, abusive,
                    obscene, or lewd and lascivious or pornographic, or exploits
                    minors in any way or assists in human trafficking or content
                    that would violate rights of publicity and/or privacy or
                    that would violate any law; (g) to upload or transmit
                    viruses or any other type of malicious code that will or may
                    be used in any way that will affect the functionality or
                    operation of the Service or of any related website, other
                    websites, or the Internet; (h) to collect or track the
                    personal information of others; (i) to damage, disable,
                    overburden, or impair the Website or any other party's use
                    of the Website; (j) to spam, phish, pharm, pretext, spider,
                    crawl, or scrape; (j) for any obscene or immoral purpose; or
                    (k) to interfere with or circumvent the security features of
                    the Service or any related website, other websites, or the
                    Internet; (l) to personally threaten or has the effect of
                    personally threatening other Users. We reserve the right to
                    terminate your use of the Service or any related website for
                    violating any of the prohibited uses. The Company has the
                    full authority to review all content posted by Users on the
                    Website. You acknowledge that the Website is not responsible
                    or liable and does not control the content of any
                    information that may be posted to the Website by You or
                    other User of the Website and you are solely responsible for
                    the same. You agree that You shall not upload, post, or
                    transmit any content that you do not have a right to make
                    available (such as, the intellectual property of another
                    party).{" "}
                  </li>
                  <li>
                    You agree to comply with all applicable laws, statutes and
                    regulations concerning your use of the Website and further
                    agree that you will not transmit any information, data,
                    text, files, links, software, chats, communication or other
                    materials that are abusive, invasive of another's privacy,
                    harassing, defamatory, vulgar, obscene, unlawful, false,
                    misleading, harmful, threatening, hateful or racially or
                    otherwise objectionable, including without limitation
                    material of any kind or nature that encourages conduct that
                    could constitute a criminal offence, give rise to civil
                    liability or otherwise violate any applicable local, state,
                    provincial, national, or international law or regulation, or
                    encourage the use of controlled substances.{" "}
                  </li>
                  <li>
                    We may, but have no obligation to, monitor, edit or remove
                    content that we determine in our sole discretion are
                    unlawful, offensive, threatening, libellous, defamatory,
                    pornographic, obscene or otherwise objectionable or violates
                    any party's intellectual property or these Terms of Service.{" "}
                  </li>
                  <li>
                    You may not use our products for any illegal or unauthorized
                    purpose nor may you, in the use of the Service, violate any
                    laws in your jurisdiction (including but not limited to
                    copyright laws).{" "}
                  </li>
                </ul>
              </ul>
              <ul className="privacy-policy-ul-links">
                <h4>10) COMMUNICATION</h4>
                <li>
                  You understand that each time uses the Website in any manner,
                  you agree to these Terms. By agreeing to these Terms, you
                  acknowledge that you are interested in availing and purchasing
                  the Services that you have selected and consent to receive
                  communications via phone or electronic records from the
                  Website including e-mail messages telling you about products
                  and services offered by the Website (or its affiliates and
                  partners) and understanding your requirements. Communication
                  can also be by posting any notices on the Website. You agree
                  that the communications sent to You by the Website shall not
                  be construed as spam or bulk under any law prevailing in any
                  country where such communication is received.{" "}
                </li>
              </ul>
              <ul className="privacy-policy-ul-links">
                <h4>11) AFFILIATE MARKETING & ADVERTISING</h4>
                <li>
                  The Owner, through the Website and Services, may engage in
                  affiliate marketing whereby the Owner receives a commission on
                  or percentage of the sale of goods or services on or through
                  the Website. The Owner may also accept advertising and
                  sponsorships from commercial businesses or receive other forms
                  of advertising compensation.{" "}
                </li>
              </ul>
              <ul className="privacy-policy-ul-links">
                <h4>12) PRIVACY INFORMATION</h4>
                <li>
                  Through Your Use of the Website and Services, You may provide
                  Us with certain information. By using the Website or the
                  Services, you authorize the Owner to use Your information in
                  India and any other country where We may operate.Please read
                  Privacy Policy for Details.{" "}
                </li>
                <li>
                  a) Information We May Collect or Receive: When You register
                  for an account, You provide Us with a valid email address and
                  may provide Us with additional information, such as Your name
                  or billing information. Depending on how You use Our Website
                  or Services, We may also receive information from external
                  applications You use to access Our Website, or We may receive
                  information through various web technologies, such as cookies,
                  log files, clear gifs, web beacons or others.{" "}
                </li>
                <li>
                  b) How We Use Information: We use the information gathered
                  from You to ensure Your continued good experience on Our
                  website, including through email communication. We may also
                  track certain of the passive information received to improve
                  Our marketing and analytics, and for this, We may work with
                  third-party providers.{" "}
                </li>
                <li>
                  c) How You Can Protect Your Information: If You would like to
                  disable Our access to any passive information We receive from
                  the use of various technologies, You may choose to disable
                  cookies in Your web browser. Please be aware that the Owner
                  will still receive information about You that You have
                  provided, such as Your email address. If You choose to
                  terminate Your account, the Owner may store some information
                  about You for the future reference for the following number of
                  days: 90. After that time, it will be deleted.{" "}
                </li>
              </ul>
              <ul className="privacy-policy-ul-links">
                <h4>13) SALE OF GOODS/SERVICES</h4>
                <li>
                  The Owner may sell goods or services or allow third parties to
                  sell goods or services on the Website. The Owner undertakes to
                  be as accurate as possible with all information regarding the
                  goods and services. including product descriptions and images.
                  However, the Owner does not guarantee the accuracy or
                  reliability of any product information and You acknowledge and
                  agree that You purchase such products at Your own risk. if You
                  are unhappy with a service being sold on Our Website. You may
                  request a refund. We will make reimbursements for returns
                  without undue delay, and not later than 30 days after the day
                  on which we are informed about your decision to cancel this
                  contract in accordance with refund policy of our company.{" "}
                </li>
                <li>
                  We will make the reimbursement using the same means of payment
                  as you used for the initial transaction unless you have
                  expressly agreed otherwise; in any event, you will not incur
                  any fees as a result of the reimbursement.{" "}
                </li>
              </ul>
              <ul className="privacy-policy-ul-links">
                <h4>14) REVERSE ENGINEERING & SECURITY</h4>
                <li>
                  You agree not to undertake any of the following actions:{" "}
                </li>
                <li>
                  a) Reverse engineer, or attempt to reverse engineer or
                  disassemble any code or software from or on the Website or
                  Services;{" "}
                </li>
                <li>
                  b) Violate the security of the Website or Services through any
                  unauthorized access, circumvention of encryption or other
                  security tools, data mining or interference to any host, user
                  or network.{" "}
                </li>
              </ul>
              <ul className="privacy-policy-ul-links">
                <h4>15) DATA LOSS</h4>
                <li>
                  The Owner does not accept responsibility for the security of
                  Your account or content. You agree that Your use of the
                  Website or Services is at Your own risk.{" "}
                </li>
              </ul>
              <ul className="privacy-policy-ul-links">
                <h4>16) INDEMNIFICATION</h4>
                <li>
                  You agree to defend and indemnify the Owner and any of its
                  affiliates (if applicable) and hold Us harmless against any
                  and all legal claims and demands, including reasonable
                  attorney's fees, which may arise from or relate to Your use or
                  misuse of the Website or Services, Your breach of these Terms
                  of Service, or Your conduct or actions. You agree that the
                  Owner shall be able to select its own legal counsel and may
                  participate in its own defence if the Owner wishes.{" "}
                </li>
              </ul>{" "}
              <ul className="privacy-policy-ul-links">
                <h4>17) SPAM POLICY </h4>
                <li>
                  You are strictly prohibited from using the Website or any of
                  the Owner's Services for illegal spam activities, including
                  gathering email addresses and personal information from others
                  or sending any mass commercial emails.{" "}
                </li>
              </ul>
              <ul className="privacy-policy-ul-links">
                <h4>18) THIRD-PARTY LINKS & CONTENT</h4>
                <li>
                  The Owner may occasionally post links to third-party websites
                  or other services. You agree that the Owner is not responsible
                  or liable for any loss or damage caused as a result of Your
                  use of any third party services linked to from Our Website.{" "}
                </li>
              </ul>
              <ul className="privacy-policy-ul-links">
                <h4>19) MODIFICATION & VARIATION</h4>
                <li>
                  The Owner may, from time to time and at any time without
                  notice to You, modify these Terms of Service. You agree that
                  the Owner has the right to modify these Terms of Service or
                  revise anything contained herein. You further agree that all
                  modifications to these Terms of Service are in full force and
                  effect immediately upon posting on the Website and that
                  modifications or variations will replace any prior version of
                  these Terms of Service unless prior versions are specifically
                  referred to or incorporated into the latest modification or
                  variation of these Terms of Service.{" "}
                </li>
                <li>
                  a) To the extent any part or sub-part of these Terms of
                  Service is held ineffective or invalid by any court of law,
                  You agree that the prior, effective version of these Terms of
                  Service shall be considered enforceable and valid to the
                  fullest extent.{" "}
                </li>
                <li>
                  b) You agree to routinely monitor these Terms of Service and
                  refer to the Effective Date posted at the top of these Terms
                  of Service to note modifications or variations. You further
                  agree to clear Your cache when doing so to avoid accessing a
                  prior version of these Terms of Service. You agree that Your
                  continued use of the Website after any modifications to these
                  Terms of Service is a manifestation of Your continued assent
                  to these Terms of Service.{" "}
                </li>
                <li>
                  c) In the event that You fail to monitor any modifications to
                  or variations of these Terms of Service, You agree that such
                  failure shall be considered an affirmative waiver of Your
                  right to review the modified Agreement.{" "}
                </li>
              </ul>
              <ul className="privacy-policy-ul-links">
                <h4>20) ENTIRE AGREEMENT</h4>
                <li>
                  This Agreement constitutes the entire understanding between
                  the Parties with respect to any and all use of this Website.
                  This Agreement supersedes and replaces all prior or
                  contemporaneous agreements or understandings, written or oral,
                  regarding the use of this Website.{" "}
                </li>
              </ul>
              <ul className="privacy-policy-ul-links">
                <h4>21) SERVICE INTERRUPTIONS</h4>
                <li>
                  The Owner may need to interrupt Your access to the Website to
                  perform maintenance or emergency services on a scheduled or
                  unscheduled basis. You agree that Your access to the Website
                  may be affected by unanticipated or unscheduled downtime, for
                  any reason, but that the Owner shall have no liability for any
                  damage or loss caused as a result of such downtime.{" "}
                </li>
              </ul>
              <ul className="privacy-policy-ul-links">
                <h4>22) TERM, TERMINATION & SUSPENSION </h4>
                <li>
                  The Owner may terminate these Terms of Service with You at any
                  time for any reason, with or without cause. The Owner
                  specifically reserves the right to terminate these Terms of
                  Service if You violate any of the terms outlined herein,
                  including, but not limited to, violating the intellectual
                  property rights of the Owner or a third party, failing to
                  comply with applicable laws or other legal obligations, and/or
                  publishing or distributing illegal material. If You have
                  registered for an account with Us, You may also terminate
                  these Terms of Service at any time by contacting Us and
                  requesting termination. Please keep in mind that any
                  outstanding fees will still be due even after termination of
                  Your account. At the termination of these Terms of Service,
                  any provisions that would be expected to survive termination
                  by their nature shall remain in full force and effect.{" "}
                </li>
              </ul>
              <ul className="privacy-policy-ul-links">
                <h4>23) NO WARRANTIES</h4>
                <li>
                  You agree that Your use of the Website and Services is at Your
                  sole and exclusive risk and that any Services provided by Us
                  are on an "As Is" basis. The Owner hereby expressly disclaims
                  any and all express or implied warranties of any kind,
                  including, but not limited to the implied warranty of fitness
                  for a particular purpose and the implied warranty of
                  merchantability. The Owner makes no warranties that the
                  Website or Services will meet Your needs or that the Website
                  or Services will be uninterrupted, error-free, or secure. The
                  Owner also makes no warranties as to the reliability or
                  accuracy of any information on the Website or obtained through
                  the Services. You agree that any damage that may occur to You,
                  through Your computer system, or as a result of the loss of
                  Your data from Your use of the Website or Services is Your
                  sole responsibility and that the Owner is not liable for any
                  such damage or loss.{" "}
                </li>
                <li>
                  All information, software, products, services and related
                  graphics are provided on this site is "as is" and "as
                  available" basis with without warranty of any kind, either
                  expressed or implied. The Website disclaims all warranties,
                  expressed or implied including, without limitation, all
                  implied warranties of merchantability, fitness for a
                  particular purpose, title and non-infringement or arising from
                  a course of dealing, usage, or trade practice. The company
                  makes no representation about the suitability of the
                  information, software, products, and services contained on
                  this Website for any purpose, and the inclusion or offering of
                  any products or services on this Website does not constitute
                  any endorsement or recommendation of such products or
                  services.{" "}
                </li>
                <li>
                  The Website makes no warranty that the use of the Website will
                  be uninterrupted, timely, secure, without defect or
                  error-free. You expressly agree that use of the site is at
                  your own risk. The Website shall not be responsible for any
                  content found on the Website.{" "}
                </li>
                <li>
                  Your use of any information or materials on this site or
                  otherwise obtained through use of this Website is entirely at
                  your own risk, for which we shall not be liable. It shall be
                  your own responsibility to ensure that any products, services
                  or information available through this website meet your
                  specific requirements.{" "}
                </li>
                <li>
                  The Website assumes no responsibility for the accuracy,
                  currency, completeness or usefulness of information, views,
                  opinions, or advice in any material contained on the Website.
                  Any information from third parties or advertisers is made
                  available without making any changes and so the Website cannot
                  guarantee accuracy and is not liable for any inconsistencies
                  arising thereof. All postings, messages, advertisements,
                  photos, sounds, images, text, files, video, or other materials
                  posted on, transmitted through, or linked from the Website,
                  are solely the responsibility of the person from whom such
                  Content originated, and the Website does not control and is
                  not responsible for Content available on the Website.{" "}
                </li>
                <li>
                  There may be instances when incorrect information is published
                  inadvertently on our Website or in the Service such as
                  typographical errors, inaccuracies or omissions that may
                  relate to product descriptions, pricing, promotions, offers,
                  product shipping charges, transit times and availability. Any
                  errors, inaccuracies, or omissions may be corrected at our
                  discretion at any time, and we may change or update
                  information or cancel orders if any information in the Service
                  or on any related website is inaccurate at any time without
                  prior notice (including after you have submitted your order).{" "}
                </li>
                <li>
                  We undertake no obligation to update, amend or clarify
                  information in the Service or on any related website,
                  including without limitation, pricing information, except as
                  required by law. No specified update or refresh date applied
                  in the Service or on any related website should be taken to
                  indicate that all information in the Service or on any related
                  website has been modified or updated.{" "}
                </li>
                <li>
                  The Website shall not be responsible for any interaction
                  between you and the other users of the Website. Under no
                  circumstances will the Website be liable for any goods,
                  services, resources, or content available through such
                  third-party dealings or communications, or for any harm
                  related thereto. The Website is under no obligation to become
                  involved in any disputes between you and other users of the
                  Website or between you and any other third parties. You agree
                  to release the Website from any and all claims, demands, and
                  damages arising out of or in connection with such dispute.{" "}
                </li>
                <li>
                  You agree and understand that while the Website has made
                  reasonable efforts to safeguard the Website, it cannot and
                  does not ensure or make any representations that the Website
                  or any of the information provided by You cannot be hacked by
                  any unauthorised third parties. You specifically agree that
                  the Website shall not be responsible for unauthorized access
                  to or alteration of Your transmissions or data, any material
                  or data sent or received or not sent or received, or any
                  transactions entered into through the Website.{" "}
                </li>
                <li>
                  You hereby agree and confirm that the Website shall not be
                  held liable or responsible in any manner whatsoever for such
                  hacking or any loss or damages suffered by you due to
                  unauthorized access of the Website by third parties or for any
                  such use of the information provided by You or any spam
                  messages or information that You may receive from any such
                  unauthorised third party (including those which are although
                  sent representing the name of the Website but have not been
                  authorized by the Website) which is in violation or
                  contravention of this Terms of Service or the Privacy Policy.{" "}
                </li>
                <li>
                  You specifically agree that the Website is not responsible or
                  liable for any threatening, defamatory, obscene, offensive, or
                  illegal content or conduct of any other party or any
                  infringement of another's rights, including intellectual
                  property rights. You specifically agree that the Website is
                  not responsible for any content sent using and/or included on
                  the Website by any third party.{" "}
                </li>
                <li>
                  The Website has no liability and will make no refund in the
                  event of any delay, cancellation, strike, force majeure, or
                  other causes beyond their direct control, and they have no
                  responsibility for any additional expense omissions delays or
                  acts of any government or authority.{" "}
                </li>
                <li>
                  You will be solely responsible for any damage to your computer
                  system or loss of data that results from the download of any
                  information and/or material. Some jurisdictions do not allow
                  the exclusion of certain warranties, so some of the above
                  exclusions may not apply to you.{" "}
                </li>
                <li>
                  In no event shall the Website be liable for any direct,
                  indirect, punitive, incidental, special, consequential damages
                  or any damages whatsoever including, without limitation,
                  damages for loss of use, data or profits, arising out of or in
                  any way connected with the use or performance of the site,
                  with the delay or inability to use the site or related
                  services, the provision of or failure to provide Services, or
                  to deliver the products or for any information, software,
                  products, services and related graphics obtained through the
                  site, or any interaction between you and other participants of
                  the Website or otherwise arising out of the use of the
                  Website, damages resulting from use of or reliance on the
                  information present, whether based on contract, tort,
                  negligence, strict liability or otherwise, even if the Website
                  or any of its affiliates/suppliers has been advised of the
                  possibility of damages. If despite the limitation above, the
                  Company is found liable for any loss or damage which arises
                  out of or in any way connected with the use of the Website
                  and/ or provision of Services, then the liability of the
                  Company will in no event exceed, 50% (Fifty percent) of the
                  amount you paid to the Company in connection with such
                  transaction(s) on this Website.{" "}
                </li>
                <li>
                  You accept all responsibility for and hereby agree to
                  indemnify and hold harmless the company from and against, any
                  actions taken by you or by any person authorized to use your
                  account, including without limitation, disclosure of passwords
                  to third parties. By using the Website, you agree to defend,
                  indemnify, and hold harmless the indemnified parties from any
                  and all liability regarding your use of the site or
                  participation in any site's activities. If you are
                  dissatisfied with the Website, or the Services or any portion
                  thereof, or do not agree with these terms, your only recourse
                  and exclusive remedy shall be to stop using the site.{" "}
                </li>
              </ul>
              <ul className="privacy-policy-ul-links">
                <h4>24) LIMITATION ON LIABILITY</h4>
                <li>
                  The Owner is not liable for any damage that may occur to You
                  as a result of Your use of the Website or Services, to the
                  fullest extent permitted by law. The maximum liability of the
                  Owner arising from or relating to these Terms of Service is
                  limited to the lesser of Rs. 1000 (Rupees One Thousand only)
                  or the amount You paid to the Owner in the last six (6)
                  months. This section applies to any and all claims by You,
                  including, but not limited to, lost profits or revenues,
                  consequential or punitive damages, negligence, strict
                  liability, fraud, or torts of any kind.{" "}
                </li>
              </ul>
              <ul className="terms-condition-ul-links">
                <h4> 25) GENERAL PROVISIONS: </h4>
                <li className=""></li>
                <li>
                  <span>a) LANGUAGE:</span>All communications made or notices
                  given pursuant to these Terms of Service shall be in the
                  English language.{" "}
                </li>
                <li>
                  <span>b) JURISDICTION, VENUE & GOVERNING LAW: </span>Through
                  Your use of the Website or Services, You agree that the laws
                  of India shall govern any matter or dispute relating to or
                  arising out of these Terms of Service, as well as any dispute
                  of any kind that may arise between You and the Owner, with the
                  exception of its conflict of law provisions. In case any
                  litigation specifically permitted under these Terms of Service
                  is initiated, the Parties agree to submit to the exclusive
                  jurisdiction of the courts at Hyderabad, Telengana, India. The
                  Parties agree that this choice of law, venue, and jurisdiction
                  provision is not permissive, but rather mandatory in nature.
                  You hereby waive the right to any objection of venue,
                  including assertion of the doctrine of forum non-conveniens or
                  similar doctrine.{" "}
                </li>
                <li>
                  <span>c) ASSIGNMENT: </span>This Agreement, or the rights
                  granted hereunder, may not be assigned, sold, leased or
                  otherwise transferred in whole or part by You. Should these
                  Terms of Service, or the rights granted hereunder, by
                  assigned, sold, leased or otherwise transferred by the Owner,
                  the rights and liabilities of the Owner will bind and inure to
                  any assignees, administrators, successors and executors.{" "}
                </li>
                <li>
                  <span>d) SEVERABILITY:</span>If any part or sub-part of these
                  Terms of Service is held invalid or unenforceable by a court
                  of law or competent arbitrator, the remaining parts and
                  sub-parts will be enforced to the maximum extent possible. In
                  such condition, the remainder of these Terms of Service shall
                  continue in full force.{" "}
                </li>
                <li>
                  <span>e) NO WAIVER: </span>In the event that We fail to
                  enforce any provision of these Terms of Service, this shall
                  not constitute a waiver of any future enforcement of that
                  provision or of any other provision. Waiver of any part or
                  sub-part of these Terms of Service will not constitute a
                  waiver of any other part or sub-part.{" "}
                </li>
                <li>
                  <span>f) HEADINGS FOR CONVENIENCE ONLY:</span>Headings of
                  parts and sub-parts under these Terms of Service are for
                  convenience and organization, only. Headings shall not affect
                  the meaning of any provisions of these Terms of Service.{" "}
                </li>
                <li>
                  <span>g) NO AGENCY, PARTNERSHIP OR JOINT VENTURE: </span>No
                  agency, partnership, or joint venture has been created between
                  the Parties as a result of these Terms of Service. No Party
                  has any authority to bind the other to third parties.
                </li>
                <li>
                  <span>h) FORCE MAJEURE: </span>The Owner is not liable for any
                  failure to perform due to causes beyond its reasonable control
                  including, but not limited to, acts of God, acts of civil
                  authorities, acts of military authorities, riots, embargoes,
                  acts of nature and natural disasters, and other acts which may
                  be due to unforeseen circumstances.{" "}
                </li>
                <ul className="terms-condition-ul-links">
                  <li>
                    <span>i) ELECTRONIC COMMUNICATIONS PERMITTED: </span>
                    Electronic communications are permitted to both Parties
                    under these Terms of Service, including e-mail or fax. For
                    any questions or concerns, please feel free to contact us :{" "}
                  </li>
                </ul>
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
    </>
  );
}
