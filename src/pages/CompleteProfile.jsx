import React, { useState } from 'react';
import { supabase } from '../supabase/supabaseClient';
import { useNavigate } from 'react-router-dom';

const CompleteProfile = () => {
  const [zip, setZip] = useState('');
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleCompleteProfile = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { data: { user } } = await supabase.auth.getUser();

    if (user) {
      // Update the profile with the new data
      const { error } = await supabase
        .from('profiles')
        .update({ 
            home_zip: zip,
            username: username 
        })
        .eq('id', user.id);

      if (error) {
        alert("Error updating profile: " + error.message);
      } else {
        // Success! Send them to the home page or dashboard
        navigate('/');
      }
    }
    setLoading(false);
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2 style={titleStyle}>One last step!</h2>
        <p style={textStyle}>To give you accurate recycling rules for your area, we just need a few details.</p>
        
        <form onSubmit={handleCompleteProfile} style={formStyle}>
          <label style={labelStyle}>Choose a Username</label>
          <input 
            type="text" 
            placeholder="RecycleKing2026" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={inputStyle}
            required
          />

          <label style={labelStyle}>Your Home ZIP Code</label>
          <input 
            type="text" 
            placeholder="18015" 
            value={zip}
            onChange={(e) => setZip(e.target.value)}
            style={inputStyle}
            maxLength="5"
            required
          />

          <button type="submit" disabled={loading} style={buttonStyle}>
            {loading ? 'Saving...' : 'Start Recycling'}
          </button>
        </form>
      </div>
    </div>
  );
};

// --- STYLES ---

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '80vh',
  fontFamily: "'Inria Sans', sans-serif",
  backgroundColor: '#F3F3E7'
};

const cardStyle = {
  backgroundColor: 'white',
  padding: '40px',
  borderRadius: '16px',
  boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
  maxWidth: '400px',
  width: '90%',
  textAlign: 'center'
};

const titleStyle = { color: '#38761D', marginBottom: '10px' };
const textStyle = { color: '#666', fontSize: '14px', marginBottom: '25px', lineHeight: '1.5' };
const formStyle = { display: 'flex', flexDirection: 'column', gap: '15px', textAlign: 'left' };
const labelStyle = { fontSize: '12px', fontWeight: 'bold', color: '#38761D', marginBottom: '-10px' };
const inputStyle = { padding: '12px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '16px' };

const buttonStyle = {
  padding: '14px',
  borderRadius: '8px',
  border: 'none',
  backgroundColor: '#6B9E3E',
  color: 'white',
  fontWeight: 'bold',
  fontSize: '16px',
  cursor: 'pointer',
  marginTop: '10px',
  transition: 'background 0.3s'
};

export default CompleteProfile;