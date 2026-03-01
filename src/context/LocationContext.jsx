import React, { createContext, useState, useEffect } from 'react';

export const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  const [zipCode, setZipCode] = useState(localStorage.getItem('userZip') || null);
  const [city, setCity] = useState(localStorage.getItem('userCity') || null);

  const updateLocation = (zip, cityName) => {
    setZipCode(zip);
    setCity(cityName);
    localStorage.setItem('userZip', zip);
    localStorage.setItem('userCity', cityName);
  };

  const clearLocation = () => {
    setZipCode(null);
    setCity(null);
    localStorage.removeItem('userZip');
    localStorage.removeItem('userCity');
  };

  return (
    <LocationContext.Provider value={{ zipCode, city, updateLocation, clearLocation }}>
      {children}
    </LocationContext.Provider>
  );
};