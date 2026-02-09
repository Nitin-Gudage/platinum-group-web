"use client";

import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  memo,
} from "react";

import { NavLink } from "react-router-dom";

import { menu, logo } from "../Data/Data";

import {
  HiMenuAlt3,
  HiX,
  HiSearch,
} from "react-icons/hi";

/* ================= STYLES ================= */

const glass =
  "bg-white/30 backdrop-blur-xl border border-white/30 shadow-lg rounded-xl";

const base =
  "relative text-sm font-medium transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-blue-600 after:origin-left after:scale-x-0 after:transition-transform after:duration-300";

const active =
  "text-blue-700 after:scale-x-100";

const idle =
  "text-gray-700 hover:text-blue-700";

/* ================= LINKS ================= */

const Links = memo(({ onClick }) =>
  menu.map((m) => (
    <NavLink
      key={m.link}
      to={m.link}
      onClick={onClick}
      className={({ isActive }) =>
        `${base} ${isActive ? active : idle}`
      }
    >
      {m.title}
    </NavLink>
  ))
);

/* ================= NAVBAR ================= */

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [q, setQ] = useState("");

  const desktopRef = useRef(null);
  const mobileRef = useRef(null);

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

      if (
        (d && d.contains(e.target)) ||
        (m && m.contains(e.target))
      ) {
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
    [q, close]
  );

  return (
    <header className="fixed top-0 w-full z-[999]">

      {/* ================= TOP BAR ================= */}
      <div className="max-w-7xl mx-auto px-4 py-3">

        <div className="flex justify-between items-center">

          {/* Logo */}
          <NavLink to="/" onClick={close}>
            <img
              src={logo.icon}
              alt={logo.altName}
              className="sm:h-12 h-8"
              loading="eager"
            />
          </NavLink>

          {/* ================= DESKTOP ================= */}
          <div
            ref={desktopRef}
            className={`
              hidden md:flex
              items-center gap-4
              px-5 py-2
              ${glass}
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
                  overflow-hidden
                  transition-all duration-300
                  ${show ? "w-40 opacity-100" : "w-0 opacity-0"}
                `}
              >
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Search..."
                  aria-label="Search"

                  className="
                    w-full px-2 py-1 text-sm
                    bg-white/70
                    rounded outline-none
                  "
                />
              </div>

              {/* Submit */}
              {show && (
                <button
                  type="submit"
                  className="
                    text-sm px-3 py-1
                    rounded
                    bg-blue-600 text-white
                    hover:bg-blue-700
                    transition
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
                  text-lg
                  text-gray-700
                  hover:text-blue-700
                "
              >
                {show ? <HiX /> : <HiSearch />}
              </button>
            </form>

            {/* Call */}
            <a
              href="tel:9876543210"
              className="btn-primary"
            >
              Call Now
            </a>
          </div>

          {/* ================= MOBILE BTN ================= */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-3xl"
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
          bg-black/40 transition
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
            ${glass}
            transition
            ${open ? "translate-y-0" : "-translate-y-6"}
          `}
        >
          {/* Close */}
          <button
            onClick={close}
            aria-label="Close menu"

            className="absolute top-3 right-3 text-2xl"
          >
            <HiX />
          </button>

          <Links onClick={close} />

          {/* Mobile Search */}
          <form
            onSubmit={submit}
            className="flex w-full gap-2"
          >
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search..."
              aria-label="Search"

              className="
                w-full px-3 py-2 text-sm
                bg-white/70
                rounded outline-none
              "
            />

            <button
              type="submit"
              className="text-xl text-blue-700"
            >
              <HiSearch />
            </button>
          </form>

          {/* Call */}
          <a
            href="tel:9876543210"
            onClick={close}
            className="btn-primary w-full text-center"
          >
            Call Now
          </a>

        </div>
      </div>

    </header>
  );
};

export default NavBar;
