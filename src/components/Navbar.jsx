import { useState } from "react";
import { Link } from "react-router";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="bg-slate-950 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-xl sm:text-2xl font-bold tracking-wide">
            🎬 MovieExplorer
          </Link>
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-slate-300 hover:text-white transition">
              Home
            </Link>
            <Link
              to="/movies"
              className="text-slate-300 hover:text-white transition"
            >
              Movies
            </Link>
            <Link
              to="/movies"
              className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-full font-semibold transition"
            >
              Explore Movies
            </Link>
          </div>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-2xl p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-3 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white transition"
            >
              Home
            </Link>
            <Link
              to="/movies"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-3 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white transition"
            >
              Movies
            </Link>
            <Link
              to="/movies"
              onClick={() => setIsMenuOpen(false)}
              className="block text-center bg-red-600 hover:bg-red-700 px-5 py-3 rounded-full font-semibold transition"
            >
              Explore Movies
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
