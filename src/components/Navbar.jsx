export default function Navbar() {
    return (
        <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl sm:text-2x1 font-bold text-gray-800 ">
            Intinya Ini Landing Page
          </h1>
          <nav className="hidden md:flex space-x-4">
            <a href="#home" className="text-gray-600 hover:text-blue-500">
              Home
            </a>
            <a href="#about" className="text-gray-600 hover:text-blue-500">
              About
            </a>
            <a href="#contact" className="text-gray-600 hover:text-blue-500">
              Contact
            </a>
          </nav>

          <nav className="md:hidden flex space-x-4 text-sm">
            <a href="#home" className="text-gray-600 hover:text-blue-500">
              Home
            </a>
            <a href="#about" className="text-gray-600 hover:text-blue-500">
              About
            </a>
            <a href="#contact" className="text-gray-600 hover:text-blue-500">
              Contact
            </a>
          </nav>
        </div>
      </header>
    )
}