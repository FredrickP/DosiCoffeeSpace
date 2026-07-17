import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen((currentValue) => !currentValue);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.navbar}`}>
        <a
          href="#home"
          className={styles.logo}
          onClick={closeMenu}
          aria-label="DOSI Coffee & Space"
        >
          <span className={styles.logoIcon}>D</span>
          <span>DOSI</span>
        </a>

        <button
          type="button"
          className={`${styles.menuButton} ${
            isMenuOpen ? styles.menuButtonOpen : ""
          }`}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation"
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          id="main-navigation"
          className={`${styles.navigation} ${
            isMenuOpen ? styles.navigationOpen : ""
          }`}
        >
          <a href="#story" onClick={closeMenu}>
            Our Story
          </a>

          <a href="#menu" onClick={closeMenu}>
            Menu
          </a>

          <a href="#space" onClick={closeMenu}>
            The Space
          </a>

          <a href="#visit" onClick={closeMenu}>
            Visit
          </a>

          <a
            href="#reservation"
            className={styles.reservationButton}
            onClick={closeMenu}
          >
            Reserve a Table
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;