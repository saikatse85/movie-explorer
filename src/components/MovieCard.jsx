const MovieCard = ({ movie, onSeeDetails }) => {
  console.log(movie);

  const releaseYear = movie.premiered
    ? new Date(movie.premiered).getFullYear()
    : "N/A";
  const rating = movie.rating?.average || "N/A";
  const image =
    movie.image?.medium || "https://via.placeholder.com/500x750?text=No+Image";
  return (
    <div className="group bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-lg hover:-translate-y-2 hover:border-red-500/50 transition-all duration-300">
      {/* Movie Poster */}
      <div className="relative h-80 overflow-hidden bg-slate-800">
        <img
          src={image}
          alt={movie.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Rating Badge */}
        <div className="absolute top-3 right-3 bg-black/75 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-semibold text-white">
          ⭐ {rating}
        </div>
      </div>

      {/* Movie Information */}
      <div className="p-5">
        <h2 className="text-lg font-bold text-white truncate">{movie.name}</h2>

        <div className="mt-2 flex items-center gap-2 text-sm text-gray-400">
          <span>⭐ {rating}</span>
          <span>•</span>
          <span>📅 {releaseYear}</span>
        </div>

        {/* Details Button */}
        <button
          onClick={() => onSeeDetails(movie)}
          className="mt-5 w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2.5 rounded-lg transition-colors duration-300"
        >
          See Details
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
