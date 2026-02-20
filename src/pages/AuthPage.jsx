import { useState } from "react";
import butterfly from "../assets/butterfly.png";
import logo from "../assets/Edura.png";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function AuthPage() {
  const [panel, setPanel] = useState("login");
  const navigate = useNavigate();

  const butterflies = [
    { top: "5%", duration: "12s" },
    { top: "15%", duration: "15s" },
    { top: "25%", duration: "10s" },
    { top: "35%", duration: "18s" },
    { top: "45%", duration: "14s" },
    { top: "55%", duration: "16s" },
    { top: "65%", duration: "13s" },
    { top: "75%", duration: "20s" },
    { top: "85%", duration: "17s" },
    { top: "95%", duration: "19s" },
  ];

  return (
    <div
      className="relative min-h-screen flex items-center justify-center overflow-hidden
      bg-linear-to-r from-gray-900 via-black to-gray-900"
    >
      {/* Butterflies */}
      {butterflies.map((b, i) => (
        <img
          key={i}
          src={butterfly}
          alt="butterfly"
          className="absolute w-11 opacity-60 animate-fly"
          style={{
            top: b.top,
            left: "-60px",
            animationDuration: b.duration,
          }}
        />
      ))}

      {/* Card */}
      <div
        className="relative z-10 w-full max-w-sm
        bg-white/5 backdrop-blur-xl
        rounded-3xl shadow-2xl px-8 py-8 text-white"
      >
        {/* Logo */}
        <img src={logo} alt="Edura" className="w-36 mx-auto mb-6" />

        {/* Toggle */}
        <div className="flex justify-center mb-6 space-x-3">
          <button
            onClick={() => { setPanel("login"); navigate("/login"); }}
            className={`px-5 py-1.5 rounded-full text-sm font-semibold transition
              ${
                panel === "login"
                  ? "bg-indigo-500 shadow-md"
                  : "hover:bg-white/10"
              }`}
          >
            Login
          </button>

          <button
            onClick={() => { setPanel("signup"); navigate("/register"); }}
            className={`px-5 py-1.5 rounded-full text-sm font-semibold transition
              ${
                panel === "signup"
                  ? "bg-purple-500 shadow-md"
                  : "hover:bg-white/10"
              }`}

          >
            Signup
          </button>
        </div>

        {/* Forms */}
        <div className="transition-all duration-300">
          {/* Login */}
          {panel === "login" && (
            <form className="flex flex-col space-y-4 animate-fade-in">
              <input className="auth-input" type="email" placeholder="Email" />
              <input
                className="auth-input"
                type="password"
                placeholder="Password"
              />

              <button className="auth-btn bg-indigo-500 hover:bg-indigo-600">
                Login
              </button>
            </form>
          )}

          {/* Signup */}
          {panel === "signup" && (
            <form className="flex flex-col space-y-4 animate-fade-in">
              {/* Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input className="auth-input" placeholder="First Name" />
                <input className="auth-input" placeholder="Last Name" />
              </div>

              {/* Academic Stage */}
              {/* <select className="auth-input bg-white/20 text-white">
                <option value="" className="bg-gray-900 text-gray-300">
                  Academic Stage
                </option>
                <option value="primary" className="bg-gray-900 text-white">
                  Primary
                </option>
                <option value="prep" className="bg-gray-900 text-white">
                  Preparatory
                </option>
                <option value="secondary" className="bg-gray-900 text-white">
                  Secondary
                </option>
              </select> */}

              {/* Contact */}
              <input className="auth-input" placeholder="Phone Number" />
              <input
                className="auth-input"
                type="email"
                placeholder="Email Address"
              />

              {/* Passwords (same width) */}
              <input
                className="auth-input"
                type="password"
                placeholder="Password"
              />
              <input
                className="auth-input"
                type="password"
                placeholder="Confirm Password"
              />

              <button className="auth-btn bg-purple-500 hover:bg-purple-600 mt-1">
                Create Account
              </button>

              <p className="text-xs text-gray-400 text-center">
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={() => setPanel("login")}
                  className="text-indigo-400 font-medium hover:underline"
                >
                  Login
                </button>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
