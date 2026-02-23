import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Information from './pages/Information';
import RecyclingInstructions from "./pages/RecyclingInstructions";
import SupportUs from "./pages/SupportUs";
import HowItWorks from "./pages/HowItWorks";
import AboutUs from "./pages/AboutUs";
import TermsOfService from "./pages/TermsOfService"; // Import the ToS
import PrivacyPolicy from "./pages/PrivacyPolicy";   // Import the Privacy Policy
import Layout from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/information" element={<Information />} />
          <Route path="/supportus" element={<SupportUs />} />
          <Route path="/howitworks" element={<HowItWorks />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/recycle/:category" element={<RecyclingInstructions />} />
          
          {/* Legal Routes inside Layout so they have the Navbar */}
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;