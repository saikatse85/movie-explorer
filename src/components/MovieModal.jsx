const MovieModal = ({ movie, onClose }) => {
  if (!movie) return null;

  const releaseDate = movie.premiered
    ? new Date(movie.premiered).toLocaleDateString()
    : "N/A";
  const rating = movie.rating?.average || "N/A";

  const image =
    movie.image?.original ||
    movie.image?.medium ||
    "https://via.placeholder.com/800x500?text=No+Image";

  const removeHtmlTag = (html) => {
    if (!html) return "No Summery Available";

    return html.replace(/<[^>]*>/g, "");
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      {/* Modal */}
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-black/70 text-white text-xl hover:bg-red-600 transition"
          aria-label="Close modal"
        >
          ✕
        </button>

        {/* Movie Poster / Backdrop */}
        <div className="relative h-64 sm:h-80 md:h-96">
          <img
            src={image}
            alt={movie.name}
            className="w-full h-full object-cover"
          />

          {/* Image Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
        </div>

        {/* Movie Information */}
        <div className="p-5 sm:p-7 md:p-8">
          {/* Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            {movie.name}
          </h2>
          {/* Rating & Release */}
          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm sm:text-base text-gray-300">
            <span className="flex items-center gap-1">⭐ Rating: {rating}</span>

            <span className="text-gray-600">|</span>

            <span className="flex items-center gap-1">
              📅 Release: {releaseDate}
            </span>

            {movie.genre && (
              <>
                <span className="text-gray-600">|</span>

                <span>🎬 {movie.genre}</span>
              </>
            )}
          </div>
          {/* Overview */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-white mb-2">Overview</h3>

            <p className="text-gray-400 leading-relaxed">
              {removeHtmlTag(movie.summary)}
            </p>
          </div>
          {/* Additional Information */}
          {movie.director && (
            <div className="mt-5">
              <h3 className="text-lg font-semibold text-white mb-2">
                Director
              </h3>

              <p className="text-gray-400">{movie.director}</p>
            </div>
          )}
          {/* Official Website */}
          {movie.officialSite && (
            <div className="mt-6">
              <a
                href={movie.officialSite}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-slate-800 hover:bg-slate-700 text-white px-5 py-3 rounded-lg transition"
              >
                Visit Official Site ↗
              </a>
            </div>
          )}
          {/* Close Button */}
          <div className="mt-7 flex justify-end">
            <button
              onClick={onClose}
              className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition"
            >
              ❌ Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
