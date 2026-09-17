const SearchBar = ({ search, onSearch }) => {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="relative">
        {/* Search Icon */}
        <span className="absolute left-5 top-1/2 -translate-y-1/2 text-xl text-gray-400">
          🔍
        </span>
        {/* Search Input */}
        <input
          type="text"
          value={search}
          onChange={(e) => onSearch(e.target.value)}
          placeholder="Search for a movie..."
          className="w-full bg-slate-900 border border-slate-700 text-white placeholder-gray-500 rounded-full px-14 py-4 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition"
        />
        {/* Clear Button */}{" "}
        {search && (
          <button
            onClick={() => onSearch("")}
            className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white text-lg"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
