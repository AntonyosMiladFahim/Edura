import { useState } from "react";
import logo from "./assets/Edura.png";
import butterfly from "./assets/butterfly.png"; 

function AuthPage() {
  const [isLogin, setIsLogin] = useState(false);

  
  const butterflies = [
    { top: '5%', duration: '12s', left: '-50px' },
    { top: '15%', duration: '15s', left: '-50px' },
    { top: '25%', duration: '10s', left: '-50px' },
    { top: '35%', duration: '18s', left: '-50px' },
    { top: '45%', duration: '14s', left: '-50px' },
    { top: '55%', duration: '16s', left: '-50px' },
    { top: '65%', duration: '13s', left: '-50px' },
    { top: '75%', duration: '20s', left: '-50px' },
    { top: '85%', duration: '17s', left: '-50px' },
    { top: '95%', duration: '19s', left: '-50px' },
  ];

  return (
    <div className="container">
      {/* Butterflies */}
      {butterflies.map((b, i) => (
        <img
          key={i}
          src={butterfly}
          alt="butterfly"
          className="butterfly"
          style={{
            top: b.top,
            left: b.left,
            animationDuration: b.duration,
          }}
        />
      ))}

      {/* Card */}
      <div className="card">
        <img src={logo} alt="Edura Logo" className="logo" />

        <p className="subtitle">
          {isLogin ? "Login to your account" : "Create your account and start with us"}
        </p>

        {/* Register Form */}
        {!isLogin && (
          <>
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />

            <select>
              <option value="">Academic Stage</option>
              <option value="primary">Primary</option>
              <option value="prep">Preparatory</option>
              <option value="secondary">Secondary</option>
            </select>

            
            <input type="tel" placeholder="Phone Number" />
            <input type="email" placeholder="Email Address" />
            <input type="password" placeholder="Password" />
            <button>Create Account</button>
          </>
        )}

        {/* Login Form */}
        {isLogin && (
          <>
            <input type="email" placeholder="Email Address" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
          </>
        )}

        {/* Toggle Register/Login */}
        <div className="login-link">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <span onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Register" : "Login"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
