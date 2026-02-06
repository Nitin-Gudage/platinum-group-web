import React, { useState, useRef, useCallback, memo } from "react";
import { NavLink } from "react-router-dom";
import { menu, logo } from "../Data/Data";
import { HiMenuAlt3, HiX, HiSearch } from "react-icons/hi";

/* ================= Styles ================= */

const glassBox =
  "bg-white/25 backdrop-blur-2xl md:backdrop-blur-xl border border-white/30 shadow-lg rounded-xl";

const linkBase =
  "relative font-medium text-sm transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-blue-600 after:origin-left after:scale-x-0 after:transition-transform after:duration-300";

const linkActive = "text-blue-700 after:scale-x-100";
const linkInactive = "text-gray-700 hover:text-blue-700";

/* ================= Components ================= */

const ContactButton = memo(({ onClick, full }) => (
  <button
    onClick={onClick}
    className={`btn-primary ${full ? "w-full py-2" : ""}`}
  >
    Call Now
  </button>
));

const MenuLinks = memo(({ onClick }) =>
  menu.map((item) => (
    <NavLink
      key={item.link}
      to={item.link}
      onClick={onClick}
      className={({ isActive }) =>
        `${linkBase} ${isActive ? linkActive : linkInactive}`
      }
    >
      {item.title}
    </NavLink>
  )),
);

/* ================= Main ================= */

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const inputRef = useRef(null);

  /* Handlers */

  const closeMenu = useCallback(() => setOpen(false), []);
  const openMenu = useCallback(() => setOpen(true), []);

  const handleSearch = useCallback(
    (e) => {
      e.preventDefault();

      const v = inputRef.current?.value.trim();
      if (!v) return;

      console.log("Search:", v);

      inputRef.current.value = "";
      setShowSearch(false);
      closeMenu();
    },
    [closeMenu],
  );

  const toggleSearch = () => {
    setShowSearch((p) => !p);
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  return (
    <header className="fixed top-0 w-full z-[999]">
      <div className="max-w-7xl mx-auto px-4 py-3">
        {/* Top Bar */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/">
            <img
              src={logo.icon}
              alt={logo.altName}
              className="h-10 object-contain"
            />
          </NavLink>

          {/* Desktop Menu */}
          <div
            className={`hidden md:flex items-center gap-4 px-5 py-2 ${glassBox}`}
          >
            <MenuLinks />

            {/* Search */}
            <form onSubmit={handleSearch} className="flex items-center gap-2">
              {showSearch && (
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Search..."
                  className="w-36 px-2 py-1 text-sm bg-white/60 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
                />
              )}

              <button
                type="button"
                onClick={toggleSearch}
                className="text-lg text-gray-700 hover:text-blue-700"
              >
                <HiSearch />
              </button>
            </form>

            <ContactButton onClick={() => console.log("Calling...")} />
          </div>

          {/* Mobile Button */}
          <button
            onClick={openMenu}
            className="md:hidden text-3xl text-gray-700"
          >
            <HiMenuAlt3 />
          </button>
        </div>
      </div>

      {/* Mobile Overlay */}
      <div
        className={`
          md:hidden fixed inset-0 z-[1001]
          bg-black/40 backdrop-blur-xl
          transition
          ${
            open
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }
        `}
      >
        {/* Mobile Box */}
        <div
          className={`
            absolute top-4 left-1/2 -translate-x-1/2
            w-[90%] max-w-sm
            flex flex-col items-center gap-5
            py-6 px-4
            ${glassBox}
            transition
            ${open ? "translate-y-0 opacity-100" : "-translate-y-6 opacity-0"}
          `}
        >
          {/* Close */}
          <button
            onClick={closeMenu}
            className="absolute top-3 right-3 text-2xl text-gray-700"
          >
            <HiX />
          </button>

          <MenuLinks onClick={closeMenu} />

          {/* Mobile Search */}
          <form
            onSubmit={handleSearch}
            className="flex items-center gap-2 w-full"
          >
            <input
              ref={inputRef}
              type="text"
              placeholder="Search..."
              className="w-full px-3 py-2 text-sm bg-white/60 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button type="submit" className="text-xl text-blue-700">
              <HiSearch />
            </button>
          </form>

          <ContactButton full onClick={closeMenu} />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
