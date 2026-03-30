import React, { useState } from "react";
import { supabase } from "../supabase/supabaseClient.jsx";
import { useNavigate } from "react-router-dom";

function Auth() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [zip, setZip] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);

  const navigate = useNavigate();

  const handleAuth = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (isSignUp) {
      // SIGN UP LOGIC
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { username, home_zip: zip } // Matches the Trigger we discussed!
        }
      });
      if (error) alert(error.message);
      else alert("Check your email for the confirmation link!");
    } else {
      // LOGIN LOGIC
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) alert(error.message);
      else navigate("/"); // Go back to home after login
    }
    setLoading(false);
  };

  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
        // This tells Supabase where to send the user AFTER they come back from Google
        redirectTo: window.location.origin 
        }
    });
    
    if (error) alert(error.message);
    };

  return (
    <div style={authContainerStyle}>
      <h2 style={{ color: "#38761D" }}>{isSignUp ? "Create Ourion Account" : "Welcome Back"}</h2>
      
      <form onSubmit={handleAuth} style={formStyle}>
        {isSignUp && (
          <>
            <input placeholder="Username" onChange={(e) => setUsername(e.target.value)} style={inputStyle} required />
            <input placeholder="Home ZIP Code" onChange={(e) => setZip(e.target.value)} style={inputStyle} required />
          </>
        )}
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} style={inputStyle} required />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} style={inputStyle} required />
        
        <button type="submit" disabled={loading} style={buttonStyle}>
          {loading ? "Processing..." : isSignUp ? "Sign Up" : "Login"}
        </button>
      </form>

      {/* --- Divider --- */}
      <div style={{ margin: "20px auto", maxWidth: "300px", display: "flex", alignItems: "center" }}>
        <div style={{ flex: 1, height: "1px", background: "#ccc" }}></div>
        <span style={{ margin: "0 10px", color: "#888", fontSize: "12px" }}>OR</span>
        <div style={{ flex: 1, height: "1px", background: "#ccc" }}></div>
      </div>

      {/* --- Google Login Button --- */}
      <button onClick={handleGoogleLogin} style={googleButtonStyle}>
        <img 
          src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" 
          alt="Google logo" 
          style={{ width: '18px', marginRight: '10px' }} 
        />
        Continue with Google
      </button>

      <p onClick={() => setIsSignUp(!isSignUp)} style={{ cursor: "pointer", marginTop: 20, fontSize: 14 }}>
        {isSignUp ? "Already have an account? Login" : "Don't have an account? Sign Up"}
      </p>
    </div>
  );
}

// Quick Styles to match your "Inria Sans" aesthetic
const authContainerStyle = { padding: "100px 20px", textAlign: "center", fontFamily: "Inria Sans", background: "#F3F3E7", minHeight: "100vh" };
const formStyle = { display: "flex", flexDirection: "column", maxWidth: "300px", margin: "0 auto", gap: "10px" };
const inputStyle = { padding: "12px", borderRadius: "8px", border: "1px solid #ccc" };
const buttonStyle = { padding: "12px", borderRadius: "8px", border: "none", background: "#6B9E3E", color: "white", fontWeight: "bold", cursor: "pointer" };
const googleButtonStyle = {
  display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '12px', borderRadius: '8px', border: '1px solid #ddd', background: 'white', color: '#444',
  fontWeight: 'bold', cursor: 'pointer', margin: '0 auto', width: '100%', maxWidth: '300px', fontFamily: 'Inria Sans' 
};

export default Auth;