import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

import Logo from "./Logo";
import "./Navbar.css";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Dashboard", path: "/dashboard" },
  { name: "Trips", path: "/trips" },
  { name: "Saved Trips", path: "/saved-trips" },
  { name: "Profile", path: "/profile" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <>
      <motion.nav
        className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="navbar-container">
          <Logo />

          <div className="nav-right">
            {/* Desktop Navigation */}
            <div className="nav-links">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            {/* Desktop Logout */}
            <button
              className="primary-btn"
              onClick={handleLogout}
            >
              Logout
            </button>

            {/* Mobile Menu Button */}
            <button
              className="menu-btn"
              onClick={toggleMenu}
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="menu-overlay"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <div className="mobile-menu-header">
          <Logo />

          <button
            className="close-btn"
            onClick={() => setMenuOpen(false)}
          >
            <X size={26} />
          </button>
        </div>

        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              isActive ? "mobile-link active" : "mobile-link"
            }
            onClick={() => setMenuOpen(false)}
          >
            {link.name}
          </NavLink>
        ))}

        <button
          className="primary-btn"
          onClick={() => {
            setMenuOpen(false);
            handleLogout();
          }}
        >
          Logout
        </button>
      </div>
    </>
  );
}

export default Navbar;