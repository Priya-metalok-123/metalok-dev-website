import { Route, Routes } from 'react-router-dom';
import AboutPage from './components/Pages/AboutPage';
import BlogPage from './components/Pages/BlogPage';
import BlogDetailsPage from './components/Pages/BlogDetailsPage';
import ContactPage from './components/Pages/ContactPage';
import ErrorPage from './components/Pages/ErrorPage';
import Home from './components/Pages/Home';
 import PortfolioDetailsPage from './components/Pages/PortfolioDetailsPage';
import ServiceDetailsPage from './components/Pages/ServiceDetailsPage';
import ServicesPage from './components/Pages/ServicesPage'; 
import TeamPage from './components/Pages/TeamPage';
import PortfolioPage from './components/Pages/PortfolioPage';
import TeamDetails from './components/Pages/TeamDetails';
import PhotographyAgencyHome from './components/Pages/PhotographyAgencyHome';
import CreativePortfolioHome from './components/Pages/CreativePortfolioHome';
import DigitalAgencyHome from './components/Pages/DigitalAgencyHome';
import MarketingAgencyHome from './components/Pages/MarketingAgencyHome';
import ShowcasePortfolioHome from './components/Pages/ShowcasePortfolioHome';
import CaseStudyShowcaseHome from './components/Pages/CaseStudyShowcaseHome';
import Layout from './components/Layout';
import CaseStudyDetailsPage from './components/Pages/CaseStudyDetailsPage';
import FaqPage from './components/Pages/FaqPage';
import ThreedConfigPage from './components/Pages/ThreedConfigPage';
import ColleseumProjectPage from './components/Pages/colleseumProjectPage'
import ColleseumMetaverseProjectPage from './components/Pages/colleseummetaverseProjectPage';
import RamandirProjectPage from './components/Pages/ramandirProjectPage'
import ZeeProjectPage from './components/Pages/zeeProjectPage'
import WebsummitProjectPage from './components/Pages/websummitProjectPage';
import AkshyaProjectPage from './components/Pages/akshyaProjectPage';
import SportsverseProjectPage from './components/Pages/sportsverseProjectPage';
import BusinessPage from './components/Pages/businessPage';
import MetaverseBlogPage from './components/Pages/metaverseBlogPage';
import CryptoBlogPage from './components/Pages/cryptoBlogPage';
import NftBlogPage from './components/Pages/nftBlogPage';
import BlockchainBlogPage from './components/Pages/blockchainBlogPage';
import GamificationBlogPage from './components/Pages/gamificationBlogPage';
import ThreedconfiguratorPage from './components/Pages/ThreedconfiguratorPage'; 
import MetaverseSpacePage from './components/Pages/MetaverseSpacePage';
import BlockchainServicePage from './components/Pages/BlockchainServicePage';
import CareerPage from './components/Pages/careerPage';
import CareerOne from './components/Pages/careerOne'
import CareerTwo from './components/Pages/careerTwo';
import CareerThree from './components/Pages/careerThree'
import AvaliptProjectPage from './components/Pages/avaliptProjectPage';
import FoodverseProjectPage from './components/Pages/foodverseProjectPage';
import BlogonePage from './components/Pages/blogonePage';
import BlogTwoPage from './components/Pages/blogTwoPage';
import BlogThreePage from './components/Pages/blogThreePage';
import EnterpricePage from './components/Pages/enterpricePage'
import EnterpriceMetaversePage from './components/Pages/enterpriceMetaversePage';
import PrivacyPolicy from './components/Pages/privacyPolicy';
import RealEstatePage from './components/Pages/realEstatePage';
import TermsConditions from './components/Pages/termsConditions'




function App() {
  return (
    <Routes>
      {/* Routes with the default header */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="photography-agency" element={<PhotographyAgencyHome />} />
        <Route path="digital-agency" element={<DigitalAgencyHome />} />
        <Route path="marketing-agency" element={<MarketingAgencyHome />} />
        <Route path="termsConditions" element={<TermsConditions />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="threedconfiguratorPage" element={<ThreedconfiguratorPage />} />
        <Route path="metaversespacePage" element={<MetaverseSpacePage />} />
        <Route path="blockchainServicePage" element={<BlockchainServicePage />} />
        <Route path="service" element={<ServicesPage />} />
        <Route path="service/:serviceDetailsId" element={<ServiceDetailsPage />} />
        <Route path="service/:threedConfigId" element={<ThreedConfigPage />} />
        <Route path="blogonePage" element={<BlogonePage />} />
        <Route path="blogTwoPage" element={<BlogTwoPage />} />
        <Route path="blogThreePage" element={<BlogThreePage />} />
        <Route path="portfolio" element={<PortfolioPage />} />
        <Route path="" element={<PortfolioDetailsPage />} />
        <Route path="colleseumProjectPage" element={<ColleseumProjectPage />} />
        <Route path="ramandirProjectPage" element={<RamandirProjectPage />} />
        <Route path="zeeProjectPage" element={<ZeeProjectPage />} />
        <Route path="websummitProjectPage" element={<WebsummitProjectPage />} />
        <Route path="akshyaProjectPage" element={<AkshyaProjectPage />} />
        <Route path="sportsverseProjectPage" element={<SportsverseProjectPage />} />
        <Route path="careerPage" element={<CareerPage />} />
        <Route path="careerOne" element={<CareerOne />} />
        <Route path="careerTwo" element={<CareerTwo />} />
        <Route path="careerThree" element={<CareerThree />} />
        <Route path="enterpriceMetaversePage" element={<EnterpriceMetaversePage />} />
        <Route path="enterpricePage" element={<EnterpricePage />} />
        <Route path="avaliptProjectPage" element={<AvaliptProjectPage />} />
        <Route path="foodverseProjectPage" element={<FoodverseProjectPage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="blog/:blogDetailsId" element={<BlogDetailsPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="team" element={<TeamPage />} />
        <Route path="businessPage" element={<BusinessPage />} />
        <Route path="metaverseBlogPage" element={<MetaverseBlogPage />} />
        <Route path="cryptoBlogPage" element={<CryptoBlogPage />} />
        <Route path="blockchainBlogPage" element={<BlockchainBlogPage />} />
        <Route path="NftBlogPage" element={<NftBlogPage />} />
        <Route path="GamificationBlogPage" element={<GamificationBlogPage />} />
        <Route path="team/:teamDetails" element={<TeamDetails />} />
        <Route path="privacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/case-study/:caseStudyDetailsId" element={<CaseStudyDetailsPage />} />
        <Route path="faq" element={<FaqPage />} />

        <Route path="ColleseummetaverseProjectPage" element={<ColleseumMetaverseProjectPage />} />
      </Route>

      {/* Routes with a specific header variant */}
      <Route path="/creative-portfolio" element={<Layout headerVariant="cs-site_header_full_width" />}>
        <Route index element={<CreativePortfolioHome />} />
      </Route>
      <Route path="/showcase-portfolio" element={<Layout headerVariant="cs-site_header_full_width" />}>
        <Route index element={<ShowcasePortfolioHome />} />
      </Route>
      <Route path="/case-study-showcase" element={<Layout headerVariant="cs-site_header_full_width" />}>
        <Route index element={<CaseStudyShowcaseHome />} />
      </Route>

      {/* Real Estate Page with a different header */}
      <Route path="/realEstatePage" element={<RealEstatePage />} />

      {/* Error Page */}
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;