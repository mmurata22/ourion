import React, { useState, useEffect, useCallback } from 'react';
import { supabase } from '../supabase/supabaseClient';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [scans, setScans] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const getProfile = useCallback(async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return navigate('/auth');

      // Fetch Profile AND the last 3 scans
      const [profileReq, scansReq] = await Promise.all([
        supabase.from('profiles').select('id, username, home_zip, total_impact_points').eq('id', user.id).single(),
        supabase.from('scan_history').select('item_name, brand, scanned_at').eq('profile_id', user.id).order('scanned_at', { ascending: false }).limit(3)
      ]);

      if (profileReq.error) throw profileReq.error;
      setProfile(profileReq.data);
      setScans(scansReq.data || []);
    } catch (error) {
      console.error('Error:', error.message);
    } finally {
      setLoading(false);
    }
  }, [navigate]);

  useEffect(() => { getProfile(); }, [getProfile]);

  const handleSignOut = async () => { await supabase.auth.signOut(); navigate('/'); };

  if (loading) return <div style={containerStyle}>Loading Ourion Profile...</div>;

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <div style={avatarStyle}>{profile?.username?.charAt(0).toUpperCase() || "U"}</div>
        <h2 style={nameStyle}>{profile?.username || "Anonymous"}</h2>
        
        <div style={infoSectionStyle}>
          <div style={infoRowStyle}><span style={labelStyle}>Location</span><span style={valueStyle}>{profile?.home_zip || "18015"}</span></div>
          <div style={infoRowStyle}><span style={labelStyle}>Impact Points</span><span style={valueStyle}>{profile?.total_impact_points || 0}</span></div>
        </div>

        <h3 style={{color: '#38761D', fontSize: '14px', textAlign: 'left', marginBottom: '10px'}}>Recent Scans</h3>
        <div style={{marginBottom: '20px'}}>
          {scans.length > 0 ? scans.map((scan, i) => (
            <div key={i} style={scanRowStyle}>
              <div style={{textAlign: 'left'}}><div style={valueStyle}>{scan.item_name}</div><div style={labelStyle}>{scan.brand}</div></div>
              <div style={labelStyle}>{new Date(scan.scanned_at).toLocaleDateString()}</div>
            </div>
          )) : <p style={labelStyle}>No scans logged yet!</p>}
        </div>

        <button onClick={handleSignOut} style={logoutButtonStyle}>Log Out</button>
      </div>
    </div>
  );
};

// --- STYLES ---
const containerStyle = { display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: '#F3F3E7', fontFamily: "'Inria Sans', sans-serif", padding: '20px' };
const cardStyle = { background: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', width: '100%', maxWidth: '350px', textAlign: 'center' };
const avatarStyle = { width: '80px', height: '80px', background: '#6B9E3E', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '32px', fontWeight: 'bold', margin: '0 auto 20px' };
const nameStyle = { color: '#38761D', marginBottom: '25px' };
const infoSectionStyle = { textAlign: 'left', background: '#F9F9F4', padding: '15px', borderRadius: '12px', marginBottom: '20px' };
const infoRowStyle = { display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #eee' };
const scanRowStyle = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', background: '#fff', border: '1px solid #eee', borderRadius: '8px', marginBottom: '8px' };
const labelStyle = { color: '#888', fontSize: '11px', fontWeight: '600' };
const valueStyle = { color: '#333', fontSize: '13px', fontWeight: '600' };
const logoutButtonStyle = { width: '100%', padding: '12px', background: 'none', border: '2px solid #e74c3c', color: '#e74c3c', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' };

export default Profile;