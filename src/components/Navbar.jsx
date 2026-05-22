const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-orange-500">
          Recipe Finder
        </h1>

        <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
          <li>
            <a
              href="/"
              className="hover:text-orange-500 transition-colors"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#"
              className="hover:text-orange-500 transition-colors"
            >
              Recipes
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;