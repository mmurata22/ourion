import React, { createContext, useState, useEffect } from 'react';
import { supabase } from '../supabase/supabaseClient';

export const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  const [zipCode, setZipCode] = useState(null);
  const [loading, setLoading] = useState(true);

  // Function to fetch zip from the database
  const fetchUserZip = async (userId) => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('home_zip')
        .eq('id', userId)
        .single();

      if (error) throw error;
      if (data?.home_zip) {
        setZipCode(data.home_zip);
        console.log("📍 LocationContext: Zip loaded from profile:", data.home_zip);
      }
    } catch (err) {
      console.error("📍 LocationContext: Error fetching profile zip:", err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // 1. Initial check for session
    const initSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user) {
        await fetchUserZip(session.user.id);
      } else {
        setLoading(false);
      }
    };

    initSession();

    // 2. Listen for Auth changes (Login/Logout)
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (session?.user) {
        await fetchUserZip(session.user.id);
      } else {
        setZipCode(null);
        setLoading(false);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <LocationContext.Provider value={{ zipCode, setZipCode, loading }}>
      {children}
    </LocationContext.Provider>
  );
};