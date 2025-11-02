import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-green-400 text-white shadow-md fixed w-full z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl sm:text-2x1 font-bold ">
          Educourse
        </h1>
        <nav className="hidden md:flex space-x-4">
          <Link to="/" className="text-white hover:text-gray-200">
            Home
          </Link>
          <a href="#about" className="text-white hover:text-gray-200">
            About
          </a>
          <Link to="/contact" className="text-white hover:text-gray-200">
            Contact
          </Link>
        </nav>

        <nav className="md:hidden flex space-x-4 text-sm">
          <Link to="/" className="text-white hover:text-gray-200">
            Home
          </Link>
          <a href="#about" className="text-white hover:text-gray-200">
            About
          </a>
          <Link to="/contact" className="text-white hover:text-gray-200">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
