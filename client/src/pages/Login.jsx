import React, { useState } from "react";
import login from "../assets/A4154e96f58f048d19a508886f52247b3n.png";

    const MyLogin = () => {
    const [panel, setPanel] = useState("login"); // "login" or "signup"

    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-gray-900 via-black to-gray-900">
        <div className="w-full max-w-4xl mx-auto flex flex-col md:flex-row bg-white/5 rounded-3xl shadow-2xl backdrop-blur-xl overflow-hidden">
            {/* Left Side - Illustration */}
            <div
            className="hidden md:block md:w-1/2 bg-cover bg-center transform transition-transform duration-500 hover:scale-105"
            style={{
                backgroundImage: `url(${login})`,
            }}
            />

            {/* Right Side - Forms */}
            <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
            {/* Logo */}
            <h1 className="text-5xl font-extrabold text-center mb-8">
                <span className="bg-linear-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                Edura
                </span>
            </h1>

            {/* Panel Toggle */}
            <div className="flex justify-center mb-8 space-x-4 text-gray-300">
                <button
                className={`px-6 py-2 font-semibold rounded-full transition ${
                    panel === "login"
                    ? "bg-indigo-500 text-white shadow-lg"
                    : "hover:bg-white/10"
                }`}
                onClick={() => setPanel("login")}
                >
                Login
                </button>
                <button
                className={`px-6 py-2 font-semibold rounded-full transition ${
                    panel === "signup"
                    ? "bg-purple-500 text-white shadow-lg"
                    : "hover:bg-white/10"
                }`}
                onClick={() => setPanel("signup")}
                >
                Signup
                </button>
            </div>

            {/* Forms Wrapper */}
            <div className="transition-all duration-500 ease-in-out">
                {/* Login Form */}
                {panel === "login" && (
                <form className="flex flex-col space-y-5">
                    <input
                    type="email"
                    placeholder="Email"
                    className="px-5 py-3 rounded-xl bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
                    />
                    <input
                    type="password"
                    placeholder="Password"
                    className="px-5 py-3 rounded-xl bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
                    />
                    <button
                    type="submit"
                    className="px-5 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-600 transition text-white font-semibold shadow-lg"
                    >
                    Login
                    </button>
                    <button
                    type="reset"
                    className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 transition text-white font-semibold"
                    >
                    Reset
                    </button>
                    <p className="text-gray-400 text-sm text-center mt-2">
                    Not a member?{" "}
                    <button
                        className="text-purple-500 font-medium hover:underline"
                        onClick={() => setPanel("signup")}
                    >
                        Signup now
                    </button>
                    </p>
                </form>
                )}

                {/* Signup Form */}
                {panel === "signup" && (
                <form className="flex flex-col space-y-5">
                    <input
                    type="email"
                    placeholder="Email"
                    className="px-5 py-3 rounded-xl bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm"
                    />
                    <input
                    type="password"
                    placeholder="Password"
                    className="px-5 py-3 rounded-xl bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm"
                    />
                    <input
                    type="password"
                    placeholder="Confirm Password"
                    className="px-5 py-3 rounded-xl bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm"
                    />
                    <button
                    type="submit"
                    className="px-5 py-3 rounded-xl bg-purple-500 hover:bg-purple-600 transition text-white font-semibold shadow-lg"
                    >
                    Signup
                    </button>
                    <p className="text-gray-400 text-sm text-center mt-2">
                    Already a member?{" "}
                    <button
                        className="text-indigo-500 font-medium hover:underline"
                        onClick={() => setPanel("login")}
                    >
                        Login here
                    </button>
                    </p>
                </form>
                )}
            </div>
            </div>
        </div>
        </div>
    );
    };

    export default MyLogin;
