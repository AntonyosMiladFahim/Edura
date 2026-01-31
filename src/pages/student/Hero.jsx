import React from "react";
import SearchBar from "./SearchBar";

const Hero = () => {
    return (
      <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-900 via-slate-800 to-black px-6">
        <div className="max-w-4xl text-center">
          {/* Badge */}
          <span className="inline-block mb-6 px-4 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-sm font-semibold tracking-wide">
            Gamified Learning Platform
          </span>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
            Welcome to{" "}
            <span className="bg-linear-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
              Edura
            </span>
          </h1>

          {/* Subtitle */}
          <h2 className="mt-5 text-lg md:text-2xl text-gray-300 font-medium">
            The Ultimate Learning Experience
          </h2>

          {/* Description */}
          <p className="mt-6 mx-auto max-w-2xl text-gray-400 text-base md:text-lg leading-relaxed">
            Learn through gaming! Master subjects with our retro Atari-style
            educational platform.
          </p>

          {/* Search */}
          <div className="mt-10 flex justify-center">
            <div className="w-full max-w-md">
              <SearchBar />
            </div>
          </div>
        </div>
      </div>
    );
};

export default Hero;
