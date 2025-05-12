import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { Layout } from './components/Layout';
import HomePage from './pages/HomePage';
import BookaCall from './pages/BookaCall';
import AIPhoneCallers from './pages/AIPhoneCallers';
import AIAgents from './pages/AIAgents';
import WebsiteAppCreation from './pages/WebsiteAppCreation';
import SocialMediaOutreach from './pages/SocialMediaOutreach';
import StrategyPage from './pages/StrategyPage';
import ScalePage from './pages/ScalePage';
import ContactUsPage from './pages/ContactUsPage';
import VisualContentPack from './pages/VisualContentPack';
import PricingPage from './pages/PricingPage';

function App() {
  return (
    <Layout>
      <ScrollToTop /> 
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<BookaCall />} />
        <Route path="/ai-phone-callers" element={<AIPhoneCallers />} />
        <Route path="/ai-agents" element={<AIAgents />} />
        <Route path="/website-app-creation" element={<WebsiteAppCreation />} />
        <Route path="/social-media-outreach" element={<SocialMediaOutreach />} />
        <Route path="/strategy" element={<StrategyPage />} />
        <Route path="/scale" element={<ScalePage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/visual-content-pack" element={<VisualContentPack />} />
        <Route path="/pricing" element={<PricingPage />} />
      </Routes>
    </Layout>
  );
}

export default App;