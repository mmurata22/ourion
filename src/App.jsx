import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Information from './pages/Information'
import RecyclingInstructions from "./pages/RecyclingInstructions";
import SupportUs from "./pages/SupportUs";
import HowItWorks from "./pages/HowItWorks";
import AboutUs from "./pages/AboutUs";
import Layout from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
        {/* These pages show the Navbar */}
        <Route path="/" element={<Home />} />
        <Route path="/information" element={<Information />} />
        <Route path="/supportus" element={<SupportUs />} />
        <Route path="/howitworks" element={<HowItWorks />} />
        <Route path="/aboutus" element={<AboutUs />} />

        {/* This page also shows the Navbar, even though it's reached via a scan */}
        <Route path="/recycle/:category" element={<RecyclingInstructions />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;