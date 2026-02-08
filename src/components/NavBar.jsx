"use client";

import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";

import { menu, logo } from "../Data/Data";
import { HiMenuAlt3, HiX, HiSearch } from "react-icons/hi";

/* Styles */
const glass =
  "bg-white/30 backdrop-blur-xl border border-white/30 shadow-lg rounded-xl";

const base =
  "relative text-sm font-medium transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-blue-600 after:origin-left after:scale-x-0 after:transition-transform after:duration-300";

const active = "text-blue-700 after:scale-x-100";
const idle = "text-gray-700 hover:text-blue-700";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [q, setQ] = useState("");

  const desktopRef = useRef(null);
  const mobileRef = useRef(null);

  /* Close menu + search */
  const close = () => {
    setOpen(false);
    setShow(false);
  };

  /* Outside click + ESC */
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
  }, []);

  /* Search submit */
  const submit = (e) => {
    e.preventDefault();

    if (!q.trim()) return;

    console.log("Search:", q);

    close();
  };

  /* Nav Links */
  const Links = ({ onClick }) =>
    menu.map((m) => (
      <NavLink
        key={m.link}
        to={m.link}
        onClick={onClick}
        className={({ isActive }) => `${base} ${isActive ? active : idle}`}
      >
        {m.title}
      </NavLink>
    ));

  return (
    <header className="fixed top-0 w-full z-[999]">
      {/* Top Bar */}
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <NavLink to="/" onClick={close}>
            <img src={logo.icon} alt={logo.altName} className="sm:h-12 h-8" />
          </NavLink>

          {/* Desktop Menu */}
          <div
            ref={desktopRef}
            className={`hidden md:flex items-center gap-4 px-5 py-2 ${glass}`}
          >
            <Links onClick={close} />

            {/* Search */}
            <form onSubmit={submit} className="flex items-center gap-2">
              {/* Animated Input */}
              <div
                className={`
                  overflow-hidden
                  transition-all duration-300 ease-in-out
                  ${show ? "w-40 opacity-100" : "w-0 opacity-0"}
                `}
              >
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Search..."
                  className="
                    w-full px-2 py-1 text-sm
                    bg-white/70 rounded outline-none
                  "
                />
              </div>

              {/* Submit Button */}
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

              {/* Toggle Button */}
              <button
                type="button"
                onClick={() => setShow((p) => !p)}
                className="text-lg text-gray-700 hover:text-blue-700"
              >
                {show ? <HiX /> : <HiSearch />}
              </button>
            </form>

            {/* Call */}
            <a href="tel:9876543210" className="btn-primary">
              Call Now
            </a>
          </div>

          {/* Mobile Button */}
          <button onClick={() => setOpen(true)} className="md:hidden text-3xl">
            <HiMenuAlt3 />
          </button>
        </div>
      </div>

      {/* Mobile Overlay */}
      <div
        className={`
          md:hidden fixed inset-0 z-[1001]
          bg-black/40 transition
          ${open ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
      >
        {/* Mobile Box */}
        <div
          ref={mobileRef}
          className={`
            absolute top-4 left-1/2 -translate-x-1/2
            w-[90%] max-w-sm
            flex flex-col gap-5 items-center
            p-6 ${glass}
            transition
            ${open ? "translate-y-0" : "-translate-y-6"}
          `}
        >
          {/* Close */}
          <button onClick={close} className="absolute top-3 right-3 text-2xl">
            <HiX />
          </button>

          <Links onClick={close} />

          {/* Mobile Search */}
          <form onSubmit={submit} className="flex w-full gap-2">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search..."
              className="
                w-full px-3 py-2 text-sm
                bg-white/70 rounded outline-none
              "
            />

            <button type="submit" className="text-xl text-blue-700">
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
