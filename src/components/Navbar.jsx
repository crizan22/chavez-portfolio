import { useState, useEffect, useRef } from 'react';
import ProjectsTray from './ProjectsTray';
import './Navbar.css';

function Navbar() {
  // State: is the dropdown open? (React's version of classList.toggle)
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  // Close on outside click and on Escape
  useEffect(() => {
    function handleClickOutside(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    function handleEscape(e) {
      if (e.key === 'Escape') setIsOpen(false);
    }

    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    // cleanup when the component unmounts
    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  return (
    <header className="nav" ref={navRef}>
      <div className="nav__inner">
        <nav className="nav__links">
          <button
            className="nav__drop-btn"
            aria-expanded={isOpen}
            aria-controls="dropdownMenu"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            projects
            <span className="nav__caret" aria-hidden="true">
              {isOpen ? '▴' : '▾'}
            </span>
          </button>

          <a href="#skills">skills</a>
        </nav>
      </div>

      <ProjectsTray isOpen={isOpen} />
    </header>
  );
}

export default Navbar;