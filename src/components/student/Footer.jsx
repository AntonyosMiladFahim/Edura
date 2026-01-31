import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-linear-to-r from-black via-gray-900 to-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Logo & Description */}
        <div>
          <h2 className="text-3xl font-extrabold">
            <span className="bg-linear-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
              Edura
            </span>
          </h2>
          <p className="mt-4 text-gray-400 text-sm leading-relaxed">
            Master new skills, explore subjects by grade, and enhance your
            learning journey with our interactive platform.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            {["Home", "Grades", "About", "Contact"].map((link) => (
              <li key={link}>
                <Link
                  to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                  className="hover:text-indigo-400 transition duration-300"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-6">Contact</h3>
          <p className="text-gray-400 text-sm">
            Email:{" "}
            <a
              href="mailto:support@edura.com"
              className="hover:text-indigo-400 transition"
            >
              support@edura.com
            </a>
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Phone:{" "}
            <a
              href="tel:+201234567890"
              className="hover:text-indigo-400 transition"
            >
              +20 123 456 7890
            </a>
          </p>

          <div className="flex space-x-4 mt-6">
            {["🐦", "📘", "📸"].map((icon, i) => (
              <a
                key={i}
                href="#"
                className="text-gray-400 hover:text-indigo-400 hover:scale-110 transition transform duration-300 text-xl"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-12 border-t border-white/10 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Edura. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
