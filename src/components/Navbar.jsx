import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FiHome,
  FiGrid,
  FiEdit3,
  FiUsers,
  FiSearch,
  FiLogIn,
  FiMenu,
  FiX,
} from "react-icons/fi";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-gray-950/80 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between gap-4">

        {/* LOGO */}
        <Link to="/" className="text-xl font-bold text-green-400 tracking-wide">
          Codevirus
        </Link>

        {/* MOBILE SEARCH (only mobile) */}
        <div className="flex-1 md:hidden">
          <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-gray-900 border border-gray-700 rounded-full pl-9 pr-4 py-1 text-sm focus:outline-none focus:border-green-500"
            />
          </div>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-1">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-2 px-3 py-1.5 rounded-full text-sm ${
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
              `flex items-center gap-2 px-3 py-1.5 rounded-full text-sm ${
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
              `flex items-center gap-2 px-3 py-1.5 rounded-full text-sm ${
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
              `flex items-center gap-2 px-3 py-1.5 rounded-full text-sm ${
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

        {/* DESKTOP SEARCH */}
        <div className="hidden md:flex flex-1 justify-center">
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

        {/* DESKTOP AUTH */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/login"
            className="flex items-center gap-2 text-sm text-gray-300 px-3 py-1.5 rounded-full hover:bg-gray-800"
          >
            <FiLogIn size={14} />
            Login
          </Link>

          <Link
            to="/signup"
            className="text-sm px-4 py-1.5 rounded-full bg-green-500 text-black font-medium"
          >
            Sign Up
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-gray-300"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU (without search) */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-950/95 border-t border-gray-800 px-6 py-4 space-y-3">
          <NavLink
            to="/"
            className="flex items-center gap-2 px-3 py-2 rounded-full text-sm text-gray-300 hover:bg-gray-800"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <FiHome size={16} />
            Home
          </NavLink>

          <NavLink
            to="/categories"
            className="flex items-center gap-2 px-3 py-2 rounded-full text-sm text-gray-300 hover:bg-gray-800"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <FiGrid size={16} />
            Categories
          </NavLink>

          <NavLink
            to="/write"
            className="flex items-center gap-2 px-3 py-2 rounded-full text-sm text-gray-300 hover:bg-gray-800"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <FiEdit3 size={16} />
            Write
          </NavLink>

          <NavLink
            to="/contributors"
            className="flex items-center gap-2 px-3 py-2 rounded-full text-sm text-gray-300 hover:bg-gray-800"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <FiUsers size={16} />
            Contributors
          </NavLink>

          {/* Auth links */}
          <div className="flex flex-col gap-2 mt-2">
            <Link
              to="/login"
              className="flex items-center gap-1 text-sm text-gray-300 px-3 py-1.5 rounded-full hover:bg-gray-800 whitespace-nowrap"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <FiLogIn size={14} /> Login
            </Link>

            <Link
              to="/signup"
              className="text-sm px-3 py-1.5 rounded-full bg-green-500 text-black font-medium whitespace-nowrap"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
