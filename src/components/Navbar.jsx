import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/epochfolio-logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll shrink effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <header
        className={`
          sticky top-0 z-50 w-full
          bg-white/80 backdrop-blur-md shadow-sm
          transition-all duration-300
          
          ${scrolled ? "h-16" : "h-20"}
        `}
      >
        <div className="w-full px-6 h-full flex items-center justify-between">

          {/* LOGO */}
          <img
            src={logo}
            alt="EpochFolio"
            className={`object-contain transition-all duration-300 translate-x-[30px],${
              scrolled ? "h-10" : "h-14"
            }`}
          />

          {/* RIGHT ICONS */}
          <div className="flex items-center gap-6">

            {/* SEARCH */}
            <div className="flex items-center mr-10">
              <div
                className={`
                  flex items-center
                  rounded-full
                  transition-all duration-300 ease-in-out
                  overflow-hidden
                  transform translate-x-[-30px],
                  ${searchOpen ? "bg-gray-100 w-64 px-3" : "w-10"}
                `}
              >
                <button
                  onClick={() => setSearchOpen(!searchOpen)}
                  className="
                    w-10 h-10 flex items-center justify-center
                    rounded-full
                    transition-colors duration-300
                    hover:bg-gray-200
                  "
                >
                  <FiSearch size={20} />
                </button>

                <input
                  type="text"
                  placeholder="Search..."
                  className={`
                    bg-transparent outline-none
                    transition-all duration-300 ease-in-out
                    ${searchOpen
                      ? "w-full opacity-100 px-2"
                      : "w-0 opacity-0 px-0"}
                  `}
                />
              </div>
            </div>

            {/* MENU BUTTON */}
            <button
              onClick={() => setMenuOpen(true)}
              className="
                w-10 h-10 flex items-center justify-center
                rounded-full transform translate-x-[-30px],
                transition-all duration-300
                hover:bg-gray-100 hover:rotate-90
              "
            >
              <FiMenu size={24} />
            </button>

          </div>
        </div>
      </header>

      {/* SLIDE-IN MENU */}
      <div
        className={`
          fixed top-0 right-0 h-full w-72 bg-white z-50
          shadow-2xl
          transform transition-transform duration-300 ease-in-out
          ${menuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* MENU HEADER */}
        <div className="px-6 h-20 flex items-center justify-between border-b">
          <span className="text-lg font-semibold">Menu</span>
          <FiX
            size={22}
            className="cursor-pointer transition-transform duration-300 hover:rotate-90"
            onClick={() => setMenuOpen(false)}
          />
        </div>

        {/* MENU LINKS */}
        <nav className="px-6 py-6 flex flex-col gap-3">
          {["/", "/about", "/blog", "/contact"].map((path, i) => (
            <NavLink
              key={i}
              to={path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `
                  px-4 py-3 rounded-lg text-base
                  transition-all duration-200
                  ${
                    isActive
                      ? "bg-gray-100 font-semibold text-black"
                      : "text-gray-600 hover:bg-gray-50"
                  }
                `
              }
            >
              {path === "/" ? "Home" : path.replace("/", "")}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* OVERLAY */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
        />
      )}

      
    </>
  );
}
