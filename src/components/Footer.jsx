import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-gray-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Application Name */}
          <div className="text-center md:text-left">
            <Link to="/" className="text-2xl font-bold text-white">
              🎬 MovieExplorer
            </Link>

            <p className="mt-2 text-sm text-gray-400">
              Discover movies. Explore stories.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              GitHub
            </a>

            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              Facebook
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 py-5 text-center">
          <p className="text-sm text-gray-500">
            © 2026 MovieExplorer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
