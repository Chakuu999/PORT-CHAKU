export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Hire Me", href: "#hire" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
      <button
        className="mobile-close"
        onClick={() => setMenuOpen(false)}
        aria-label="Close menu"
      >
        &times;
      </button>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          onClick={() => setMenuOpen(false)}
        >
          {link.label}
        </a>
      ))}
    </div>
  );
};
