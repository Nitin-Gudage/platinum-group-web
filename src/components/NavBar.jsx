import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { menu, logo } from "../Data/Data";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import DarkTheme from "../utils/DarkTheme";

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className="index-[999]
        bg-white dark:bg-secondary
        backdrop-blur-md
        shadow-2xl dark:shadow-black/40
      "
    >
      {/* Main Bar */}
      <div className="px-6 py-2 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="">
          <img
            src={logo.icon}
            alt="Logo"
            className="h-[60px] w-[220px] object-cover"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 items-center">
          {menu.map((item, index) => (
            <NavLink
              key={index}
              to={item.link}
              className={({ isActive }) =>
                `
                  relative font-bold

                  ${
                    isActive
                      ? "text-primary"
                      : "text-secondary dark:text-myGray hover:text-primary"
                  }

                  after:content-['']
                  after:absolute
                  after:left-0
                  after:-bottom-1
                  after:h-[2px]
                  after:w-0
                  after:bg-primary
                  after:transition-all
                  after:duration-300

                  hover:after:w-full
                `
              }
            >
              {item.title}
            </NavLink>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Dark Mode Toggle */}

          {/* <DarkTheme /> */}

          {/* Login Button (Desktop) */}
          <Link to="/login" className="hidden md:inline-block btn-primary">
            Login
          </Link>

          {/* Hamburger (Mobile) */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="
              md:hidden text-2xl
              text-secondary dark:text-white
              transition
            "
          >
            {mobileOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          md:hidden overflow-hidden
          transition-all duration-300 ease-in-out

          ${mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <nav
          className="
            flex flex-col gap-4
            px-6 py-6

            bg-background dark:bg-secondary
            border-t border-black/5 dark:border-white/10
          "
        >
          {menu.map((item, index) => (
            <NavLink
              key={index}
              to={item.link}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `
                  font-semibold text-lg
                  transition

                  ${
                    isActive
                      ? "text-primary"
                      : "text-secondary dark:text-myGray hover:text-primary"
                  }
                `
              }
            >
              {item.title}
            </NavLink>
          ))}

          {/* Login (Mobile) */}
          <Link
            to="/login"
            onClick={() => setMobileOpen(false)}
            className="btn-primary mt-3 text-center"
          >
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
