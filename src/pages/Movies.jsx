import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import MovieGrid from "../components/MovieGrid";
import MovieModal from "../components/MovieModal";
import { useEffect, useState } from "react";
import { getAllMovies, searchMovies } from "../services/movieApi";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [currentPage, setCurrentPage] = useState(1);

  const moviesPerPage = 16;

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        setError("");
        const data = await getAllMovies();
        console.log(data);
        setMovies(data);
        setCurrentPage(1);
      } catch (error) {
        console.error(error);
        setError("Failed to load movies. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  const handleSearch = async (value) => {
    setSearch(value);
    setCurrentPage(1);
    if (!value.trim()) {
      try {
        setLoading(true);
        const data = await getAllMovies();
        setMovies(data);
      } catch (error) {
        console.log(error.message);
        setError("Failed to load movies.");
      } finally {
        setLoading(false);
      }
      return;
    }
    try {
      setLoading(true);
      setError("");
      const data = await searchMovies(value);
      setMovies(data);
    } catch (error) {
      console.error(error);
      setError("Failed to search movies.");
    } finally {
      setLoading(false);
    }
  };

  const totalPages = Math.ceil(movies.length / moviesPerPage);
  const lastMovieIndex = currentPage * moviesPerPage;
  const firstMovieIndex = lastMovieIndex - moviesPerPage;

  const currentMovies = movies.slice(firstMovieIndex, lastMovieIndex);

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-10 sm:py-14">
        {/* Page Heading */}
        <div className="text-center mb-10">
          <p className="text-red-500 font-semibold uppercase tracking-widest text-sm mb-3">
            Explore Our Collection
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Discover Movies
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-gray-400">
            Search and explore your favorite movies and discover new stories to
            watch.
          </p>
        </div>

        {/* Search */}
        <SearchBar search={search} onSearch={handleSearch} />

        {/* Movie Section */}
        <section className="mt-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">All Movies</h2>

            <span className="text-sm text-gray-400">
              {movies.length} Movies
            </span>
          </div>

          {/* Loading */}
          {loading && (
            <div className="flex justify-center items-center py-20">
              <div className="text-center">
                <div className="w-12 h-12 border-4 border-slate-700 border-t-red-500 rounded-full animate-spin mx-auto"></div>
                <p className="mt-4 text-gray-400"> Loading movies... </p>
              </div>
            </div>
          )}
          {/* Error */}
          {!loading && error && (
            <div className="text-center py-20">
              <p className="text-red-400 text-lg"> {error} </p>
            </div>
          )}

          {/* No Result */}
          {!loading && !error && movies.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg"> No movies found. </p>
            </div>
          )}

          {/* Movie Cards */}
          <MovieGrid
            movies={currentMovies}
            onSeeDetails={(movie) => setSelectedMovie(movie)}
          />

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2 mt-10">
            <button
              onClick={handlePrevious}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-lg border transition ${currentPage === 1 ? "border-slate-800 text-slate-600 cursor-not-allowed" : "border-slate-700 text-white hover:bg-red-600"}`}
            >
              ← Previous
            </button>

            {Array.from({ length: totalPages }, (_, index) => index + 1).map(
              (page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 rounded-lg transition ${currentPage === page ? "bg-red-600 text-white" : "bg-slate-900 text-gray-400 hover:bg-slate-800 hover:text-white"}`}
                >
                  {page}
                </button>
              ),
            )}
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-lg border transition ${currentPage === totalPages ? "border-slate-800 text-slate-600 cursor-not-allowed" : "border-slate-700 text-white hover:bg-red-600"}`}
            >
              Next →
            </button>
          </div>
          <p className="text-center text-gray-500 text-sm mt-4">
            Page {currentPage} of {totalPages}
          </p>
        </section>
      </main>

      {/* Footer */}
      <Footer />
      {/* Movie Details Modal */}
      <MovieModal
        movie={selectedMovie}
        onClose={() => setSelectedMovie(null)}
      />
    </div>
  );
};

export default Movies;
