const SearchBar = ({
  searchTerm,
  setSearchTerm,
  handleSearch,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-4 justify-center items-center my-10"
    >
      <input
        type="text"
        placeholder="Search recipes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full sm:w-[400px] px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-orange-400"
      />

      <button
        type="submit"
        className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg transition duration-300"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;