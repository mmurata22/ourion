import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { supabase } from "./supabase/supabaseClient"; 
import { LocationProvider } from './context/LocationContext';
import Auth from "./pages/Auth";
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
import CompleteProfile from "./pages/CompleteProfile";
import Profile from './pages/Profile';

function App() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setSession(session);
      
      if (session) {
        await checkProfileCompletion(session.user.id);
      }
      setLoading(false);
    };

    initializeAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (_event, session) => {
      setSession(session);
      if (session) {
        await checkProfileCompletion(session.user.id);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const checkProfileCompletion = async (userId) => {
    const { data: profile } = await supabase
      .from('profiles')
      .select('home_zip')
      .eq('id', userId)
      .single();

    if (!profile || !profile.home_zip) {
      if (window.location.pathname !== '/complete-profile') {
        window.location.href = '/complete-profile';
      }
    }
  };

  if (loading) return null; 

  return (
    <LocationProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            {/* The notification only appears on Home now */}
            <Route path="/" element={
              <>
                <LocationNotification />
                <Home />
              </>
            } />
            
            <Route path="/auth" element={session ? <Navigate to="/" /> : <Auth />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/information" element={<Information />} />
            <Route path="/supportus" element={<SupportUs />} />
            <Route path="/howitworks" element={<HowItWorks />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/recycle/:category" element={<RecyclingInstructions />} />
            <Route path="/complete-profile" element={<CompleteProfile />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LocationProvider>
  );
}

export default App;