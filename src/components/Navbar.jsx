import { useState } from "react";
import { Link } from "react-router-dom";
import educourse from "../assets/img/icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white text-teal-500 shadow-lg fixed w-full z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="max-w-[150px]">
              <img src={educourse} alt="educourse" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className=" hover:text-teal-600 font-medium transition-colors duration-200 py-2"
            >
              Beranda
            </Link>
            <a
              href="#features"
              className=" hover:text-teal-600 font-medium transition-colors duration-200 py-2"
            >
              Fitur
            </a>
            <Link
              to="/contact"
              className=" hover:text-teal-600 font-medium transition-colors duration-200 py-2"
            >
              Kontak
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-green-700 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FontAwesomeIcon icon={faBars}>
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </FontAwesomeIcon>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-teal-500 absolute min-h-screen z-10 right-0 w-1/2">
            <div className="flex flex-col">
              <Link
                to="/"
                className="text-white hover:text-green-100 font-medium py-3 px-4 rounded-lg hover:bg-green-700 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Beranda
              </Link>
              <a
                href="#features"
                className="text-white hover:text-green-100 font-medium py-3 px-4 rounded-lg hover:bg-green-700 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Fitur
              </a>
              <Link
                to="/contact"
                className="text-white hover:text-green-100 font-medium py-3 px-4 rounded-lg hover:bg-green-700 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Kontak
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
