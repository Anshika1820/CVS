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
    <header className="sticky top-0 z-50 backdrop-blur bg-black/80 border-b border-gray-800">
      {/* FULL WIDTH BAR */}
      <div className="w-full flex items-center h-14 px-4 sm:px-6">

        {/* LOGO – FIXED LEFT */}
        <Link
          to="/"
          className="text-lg sm:text-xl font-extrabold tracking-widest text-green-400
                     drop-shadow-[0_0_6px_rgba(34,197,94,0.45)]
                     hover:text-green-300 transition"
        >
          Code<span className="text-white">Virus</span>
        </Link>

        {/* RIGHT SIDE CONTENT */}
        <div className="flex-1 flex items-center justify-end md:justify-between ml-6">

          {/* MOBILE SEARCH */}
          <div className="flex-1 md:hidden">
            <div className="relative">
              <FiSearch
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={16}
              />
              <input
                type="text"
                placeholder="Search..."
                className="w-full bg-gray-900 border border-gray-700 rounded-full
                           pl-9 pr-4 py-1 text-sm focus:outline-none
                           focus:border-green-500"
              />
            </div>
          </div>

          {/* DESKTOP NAV LINKS */}
          <nav className="hidden md:flex items-center gap-1">
            {[
              { to: "/", label: "Home", icon: <FiHome size={16} /> },
              { to: "/categories", label: "Categories", icon: <FiGrid size={16} /> },
              { to: "/write", label: "Write", icon: <FiEdit3 size={16} /> },
              { to: "/contributors", label: "Contributors", icon: <FiUsers size={16} /> },
            ].map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center gap-2 px-3 py-1.5 rounded-full text-sm transition ${
                    isActive
                      ? "bg-green-500/10 text-green-400"
                      : "text-gray-300 hover:bg-gray-800"
                  }`
                }
              >
                {item.icon}
                {item.label}
              </NavLink>
            ))}
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
                className="w-full bg-gray-900 border border-gray-700 rounded-full
                           pl-9 pr-4 py-1.5 text-sm focus:outline-none
                           focus:border-green-500"
              />
            </div>
          </div>

          {/* DESKTOP AUTH */}
          <div className="hidden md:flex items-center gap-3">
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

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-gray-300 ml-3"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-950/95 border-t border-gray-800 px-6 py-4 space-y-3">
          {[
            { to: "/", label: "Home", icon: <FiHome size={16} /> },
            { to: "/categories", label: "Categories", icon: <FiGrid size={16} /> },
            { to: "/write", label: "Write", icon: <FiEdit3 size={16} /> },
            { to: "/contributors", label: "Contributors", icon: <FiUsers size={16} /> },
          ].map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-2 px-3 py-2 rounded-full
                         text-sm text-gray-300 hover:bg-gray-800"
            >
              {item.icon}
              {item.label}
            </NavLink>
          ))}

          <div className="flex flex-col gap-2 pt-2">
            <Link
              to="/login"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-1 text-sm text-gray-300
                         px-3 py-1.5 rounded-full hover:bg-gray-800"
            >
              <FiLogIn size={14} /> Login
            </Link>

            <Link
              to="/signup"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-sm px-3 py-1.5 rounded-full
                         bg-green-500 text-black font-medium"
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
