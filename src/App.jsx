import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LocationProvider } from './context/LocationContext';
import LocationNotification from './components/LocationNotification';
import Layout from './components/Layout';
import Home from './pages/Home';
import Information from './pages/Information';
import RecyclingInstructions from "./pages/RecyclingInstructions";
import SupportUs from "./pages/SupportUs";
import HowItWorks from "./pages/HowItWorks";
import AboutUs from "./pages/AboutUs";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";

import BeyondOurion from "./pages/BeyondOurion"; 
import ContactPoliticians from "./pages/ContactPoliticians";
import PoliticalClimates from "./pages/PoliticalClimates";
import ScopeEmissions from "./pages/ScopeEmissions";

function App() {
  return (
    <LocationProvider>
      <BrowserRouter>
        <LocationNotification />
        
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/information" element={<Information />} />
            <Route path="/supportus" element={<SupportUs />} />
            <Route path="/howitworks" element={<HowItWorks />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/recycle/:category" element={<RecyclingInstructions />} />
            
            <Route path="/beyond-ourion" element={<BeyondOurion />} />
            <Route path="/scope-emissions" element={<ScopeEmissions />} />
            <Route path="/political-climates" element={<PoliticalClimates />} />
            <Route path="/contact-politicians" element={<ContactPoliticians />} />
            
            {/* Legal Routes */}
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LocationProvider>
  );
}

export default App;