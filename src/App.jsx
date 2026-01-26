import { BrowserRouter, Routes, Route } from "react-router-dom";
import ImageUpload from "./components/ImageUpload";
import RecyclingInstructions from "./pages/RecyclingInstructions";
import Layout from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
        {/* These pages show the Navbar */}
        <Route path="/" element={<ImageUpload />} />

        {/* This page also shows the Navbar, even though it's reached via a scan */}
        <Route path="/recycle/:category" element={<RecyclingInstructions />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;