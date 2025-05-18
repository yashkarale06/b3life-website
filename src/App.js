import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loader3D from './components/ui/Loader3D'; // Import the loader component
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
  // Add loading state
  const [initialLoading, setInitialLoading] = useState(true);
  
  useEffect(() => {
    // Show loader for a short period on initial app load
    // This gives the loader time to display its animation
    const timer = setTimeout(() => {
      setInitialLoading(false);
    }, 3000); // 3 seconds loading time - adjust as needed
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <>
      {/* The loader component */}
      <Loader3D isLoading={initialLoading} fullScreen={true} />
      
      {/* Only render the main app content after loading is complete */}
      <div style={{ opacity: initialLoading ? 0 : 1, transition: 'opacity 0.5s ease-in-out' }}>
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
      </div>
    </>
  );
}

export default App;