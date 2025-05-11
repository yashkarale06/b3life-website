import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import WorkPage from './pages/WorkPage';
import BrandingServicePage from './pages/services/BrandingServicePage';
import DigitalMarketingPage from './pages/services/DigitalMarketingPage';
import EventsPage from './pages/services/EventsPage';
import FilmsPage from './pages/services/FilmsPage';
import TechnologyPage from './pages/services/TechnologyPage';
import MedicalCommunicationsPage from './pages/services/MedicalCommunicationsPage';
import BrandActivationPage from './pages/services/BrandActivationPage';
import PrintingPage from './pages/services/PrintingPage';
import WebcastingPage from './pages/services/WebcastingPage';
import MarketResearchPage from './pages/services/MarketResearchPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/contact" element={<ContactPage />} />
        
        {/* Service subpages */}
        <Route path="/services/branding" element={<BrandingServicePage />} />
        <Route path="/services/digital-marketing" element={<DigitalMarketingPage />} />
        <Route path="/services/events" element={<EventsPage />} />
        <Route path="/services/films" element={<FilmsPage />} />
        <Route path="/services/technology" element={<TechnologyPage />} />
        <Route path="/services/medical-communications" element={<MedicalCommunicationsPage />} />
        <Route path="/services/brand-activation" element={<BrandActivationPage />} />
        <Route path="/services/printing" element={<PrintingPage />} />
        <Route path="/services/webcasting" element={<WebcastingPage />} />
        <Route path="/services/market-research" element={<MarketResearchPage />} />
      </Routes>
    </Router>
  );
}

export default App;