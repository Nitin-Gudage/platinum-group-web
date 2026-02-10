
import  { useState, useRef, useEffect, useCallback, memo } from "react";

import { NavLink } from "react-router-dom";

import { menu, logo } from "../Data/Data";

import { HiMenuAlt3, HiX, HiSearch, HiPhone } from "react-icons/hi";

/* ================= STYLES ================= */

const base =
  "relative text-sm font-medium transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-blue-600 after:origin-left after:scale-x-0 after:transition-transform after:duration-300";

const active = "text-blue-600 after:scale-x-100";

const idle = "text-gray-600 hover:text-blue-600";

/* ================= LINKS ================= */

const Links = memo(({ onClick }) =>
  menu.map((m) => (
    <NavLink
      key={m.link}
      to={m.link}
      onClick={onClick}
      className={({ isActive }) => `${base} ${isActive ? active : idle}`}
    >
      {m.title}
    </NavLink>
  )),
);

/* ================= NAVBAR ================= */

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [q, setQ] = useState("");

  const desktopRef = useRef(null);
  const mobileRef = useRef(null);

  /* ================= SCROLL EFFECT ================= */

  /* ================= CLOSE ================= */

  const close = useCallback(() => {
    setOpen(false);
    setShow(false);
  }, []);

  /* ================= OUTSIDE + ESC ================= */

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") {
        close();
        return;
      }

      const d = desktopRef.current;
      const m = mobileRef.current;

      if ((d && d.contains(e.target)) || (m && m.contains(e.target))) {
        return;
      }

      close();
    };

    document.addEventListener("mousedown", handler);
    document.addEventListener("keydown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("keydown", handler);
    };
  }, [close]);

  /* ================= SEARCH ================= */

  const submit = useCallback(
    (e) => {
      e.preventDefault();

      if (!q.trim()) return;

      console.log("Search:", q);

      close();
    },
    [q, close],
  );

  return (
    <header
      className={`
        fixed top-0 w-full z-[999] transition-all duration-300 bg-white/0 backdrop-blur-md shadow-xl
        
      `}
    >
      {/* ================= TOP BAR ================= */}
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <NavLink to="/" onClick={close} className="relative z-10">
            <img
              src={logo.icon}
              alt={logo.altName}
              className="sm:h-12 h-10 object-contain"
              loading="eager"
            />
          </NavLink>

          {/* ================= DESKTOP ================= */}
          <div
            ref={desktopRef}
            className={`
              hidden md:flex
              items-center gap-6
              px-6 py-2.5
              bg-white/50 backdrop-blur-xl
              border border-gray-100
              rounded-2xl shadow-sm
              transition-all duration-300
            `}
          >
            <Links onClick={close} />

            {/* Search */}
            <form
              onSubmit={submit}
              className="flex items-center gap-2"
              role="search"
            >
              {/* Input */}
              <div
                className={`
                  overflow-hidden transition-all duration-300
                  ${show ? "w-48 opacity-100" : "w-0 opacity-0"}
                `}
              >
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Search services..."
                  aria-label="Search"
                  className="
                    w-full px-3 py-2 text-sm
                    bg-gray-50
                    rounded-xl outline-none
                    border border-transparent
                    focus:bg-white focus:border-blue-200
                    transition-all duration-200
                  "
                />
              </div>

              {/* Submit */}
              {show && (
                <button
                  type="submit"
                  className="
                    text-sm px-4 py-2
                    rounded-xl
                    bg-gradient-to-r from-blue-600 to-blue-700 text-white
                    hover:from-blue-700 hover:to-blue-800
                    transition-all duration-200
                    shadow-md shadow-blue-500/20
                  "
                >
                  Search
                </button>
              )}

              {/* Toggle */}
              <button
                type="button"
                onClick={() => setShow((p) => !p)}
                aria-label="Toggle search"
                className="
                  text-lg p-2
                  text-gray-500
                  hover:text-blue-600
                  hover:bg-blue-50
                  rounded-xl
                  transition-all duration-200
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2
                "
              >
                {show ? <HiX /> : <HiSearch />}
              </button>
            </form>

            {/* Call */}
            <a
              href="tel:9876543210"
              className="
                flex items-center gap-2
                bg-gradient-to-r from-blue-600 to-blue-700
                text-white
                px-5 py-2.5
                rounded-xl
                font-medium
                text-sm
                hover:from-blue-700 hover:to-blue-800
                transition-all duration-200
                shadow-lg shadow-blue-500/25
                hover:shadow-xl hover:shadow-blue-500/30
                focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2
              "
            >
              <HiPhone className="text-sm" />
              Call Now
            </a>
          </div>

          {/* ================= MOBILE BTN ================= */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-3xl p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            aria-label="Open menu"
          >
            <HiMenuAlt3 />
          </button>
        </div>
      </div>

      {/* ================= MOBILE OVERLAY ================= */}
      <div
        className={`
          md:hidden fixed inset-0 z-[1001]
          bg-black/40 backdrop-blur-sm transition-opacity duration-300
          ${open ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
      >
        {/* Box */}
        <div
          ref={mobileRef}
          className={`
            absolute top-4 left-1/2 -translate-x-1/2
            w-[90%] max-w-sm
            flex flex-col gap-5 items-center
            p-6
            bg-white/90 backdrop-blur-xl
            border border-gray-100
            shadow-2xl
            rounded-3xl
            transition-all duration-300 ease-out
            ${open ? "translate-y-0 opacity-100" : "-translate-y-6 opacity-0"}
          `}
        >
          {/* Close */}
          <button
            onClick={close}
            aria-label="Close menu"
            className="absolute top-4 right-4 text-2xl p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
          >
            <HiX />
          </button>

          <div className="mt-2">
            <img
              src={logo.icon}
              alt={logo.altName}
              className="h-12 object-contain"
            />
          </div>

          <Links onClick={close} />

          {/* Mobile Search */}
          <form onSubmit={submit} className="flex w-full gap-2">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search services..."
              aria-label="Search"
              className="
                w-full px-4 py-3 text-sm
                bg-gray-50
                rounded-xl outline-none
                border border-transparent
                focus:bg-white focus:border-blue-200
              "
            />
            <button
              type="submit"
              className="text-xl p-3 text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-xl transition-all duration-200"
            >
              <HiSearch />
            </button>
          </form>

          {/* Call */}
          <a
            href="tel:9876543210"
            onClick={close}
            className="
              flex items-center justify-center gap-2 w-full
              bg-gradient-to-r from-blue-600 to-blue-700
              text-white
              px-6 py-3.5
              rounded-xl
              font-semibold
              text-base
              transition-all duration-200
              shadow-lg shadow-blue-500/25
            "
          >
            <HiPhone className="text-lg" />
            Call Now
          </a>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
