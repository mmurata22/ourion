import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import PaperCardboard from "./pages/PaperCardboard";
import Plastics from "./pages/Plastics";
import Glass from "./pages/Glass";
import Aluminum from "./pages/Aluminum";
import Batteries from "./pages/Batteries";
import Electronics from "./pages/Electronics";
import Food from "./pages/Food";
import LawnMaterials from "./pages/LawnMaterials";
import UsedOil from "./pages/UsedOil";
import HouseholdHazardousWaste from "./pages/HouseholdHazardousWaste";
import Tires from "./pages/Tires";
import Metal from "./pages/Metal";
import Miscellaneous from "./pages/Miscellaneous";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/paper-cardboard" element={<PaperCardboard />} />
        <Route path="/plastics" element={<Plastics />} />
        <Route path="/glass" element={<Glass />} />
        <Route path="/aluminum" element={<Aluminum />} />
        <Route path="/batteries" element={<Batteries />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/food" element={<Food />} />
        <Route path="/lawn-materials" element={<LawnMaterials />} />
        <Route path="/used-oil" element={<UsedOil />} />
        <Route path="/household-hazardous-waste" element={<HouseholdHazardousWaste />} />
        <Route path="/tires" element={<Tires />} />
        <Route path="/metal" element={<Metal />} />
        <Route path="/miscellaneous" element={<Miscellaneous />} />
      </Routes>
    </Router>
  );
}

export default App;
