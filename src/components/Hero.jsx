import { Link } from "react-router";

const Hero = () => {
  return (
    <section className="relative min-h-[calc(100vh-64px)] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=2000&q=80')",
        }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-5 text-center text-white">
        {/* Small Label */}
        <p className="mb-4 text-red-400 font-semibold tracking-[0.3em] uppercase text-sm sm:text-base">
          Welcome to MovieExplorer
        </p>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
          Discover
          <span className="text-red-500"> Amazing Movies</span>
        </h1>

        {/* Description */}
        <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
          Explore and discover your favorite movies and TV shows from around the
          world. Find new stories, amazing characters, and unforgettable
          entertainment.
        </p>

        {/* CTA Button */}
        <div className="mt-8">
          <Link
            to="/movies"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 px-7 py-3.5 rounded-full font-bold text-base sm:text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-red-600/30"
          >
            Explore Now
            <span>→</span>
          </Link>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent"></div>
    </section>
  );
};

export default Hero;
