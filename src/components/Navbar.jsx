import { Link, NavLink } from "react-router-dom";
import {
  FiHome,
  FiGrid,
  FiEdit3,
  FiUsers,
  FiSearch,
  FiLogIn,
} from "react-icons/fi";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-gray-950/80 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center gap-6">

        {/* LOGO */}
        <Link
          to="/"
          className="text-xl font-bold text-green-400 tracking-wide"
        >
          Codevirus
        </Link>

        {/* NAV ICON LINKS */}
        <nav className="flex items-center gap-1">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-2 px-3 py-1.5 rounded-full text-sm
               ${
                 isActive
                   ? "bg-green-500/10 text-green-400"
                   : "text-gray-300 hover:bg-gray-800"
               }`
            }
          >
            <FiHome size={16} />
            Home
          </NavLink>

          <NavLink
            to="/categories"
            className={({ isActive }) =>
              `flex items-center gap-2 px-3 py-1.5 rounded-full text-sm
               ${
                 isActive
                   ? "bg-green-500/10 text-green-400"
                   : "text-gray-300 hover:bg-gray-800"
               }`
            }
          >
            <FiGrid size={16} />
            Categories
          </NavLink>

          <NavLink
            to="/write"
            className={({ isActive }) =>
              `flex items-center gap-2 px-3 py-1.5 rounded-full text-sm
               ${
                 isActive
                   ? "bg-green-500/10 text-green-400"
                   : "text-gray-300 hover:bg-gray-800"
               }`
            }
          >
            <FiEdit3 size={16} />
            Write
          </NavLink>

          <NavLink
            to="/contributors"
            className={({ isActive }) =>
              `flex items-center gap-2 px-3 py-1.5 rounded-full text-sm
               ${
                 isActive
                   ? "bg-green-500/10 text-green-400"
                   : "text-gray-300 hover:bg-gray-800"
               }`
            }
          >
            <FiUsers size={16} />
            Contributors
          </NavLink>
        </nav>

        {/* SEARCH */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-full max-w-md">
            <FiSearch
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={14}
            />
            <input
              type="text"
              placeholder="Search cyber security knowledge"
              className="w-full bg-gray-900 border border-gray-700 rounded-full pl-9 pr-4 py-1.5 text-sm
                         focus:outline-none focus:border-green-500"
            />
            
          </div>
        </div>

        {/* Search button */}
        <div class="search-container">
          <button class="search-btn">
            <i class="fa fa-search"></i>
          </button>
        </div>

        {/* AUTH / PROFILE */}
        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="flex items-center gap-2 text-sm text-gray-300
                       px-3 py-1.5 rounded-full hover:bg-gray-800"
          >
            <FiLogIn size={14} />
            Login
          </Link>

          <Link
            to="/signup"
            className="text-sm px-4 py-1.5 rounded-full
                       bg-green-500 text-black font-medium"
          >
            Sign Up
          </Link>
        </div>

      </div>
    </header>
  );
};

export default Navbar;
