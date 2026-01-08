import { useState } from "react";

const menuItems = [
  { label: "Home", link: "home" },
  { label: "About Us", link: "about" },
  { label: "Services", link: "services" },
  { label: "Contact", link: "footer" },
];

export default function Navbar() {
  const [active, setActive] = useState("Home");

  // 🔥 SCROLL + OFFCANVAS CLOSE HANDLER
  const handleMenuClick = (sectionId, label) => {
    setActive(label);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile menu if open
    const offcanvasEl = document.getElementById("mobileMenu");
    if (offcanvasEl) {
      const instance = window.bootstrap?.Offcanvas.getInstance(offcanvasEl);
      instance?.hide();
    }
  };

  return (
    <>
      {/* ===== NAVBAR ===== */}
      <nav
        className="navbar navbar-expand-lg fixed-top custom-navbar"
        style={{
          width: "92%",
          minHeight: "64px",
          marginTop: "18px",
          borderRadius: "15px 0px 15px 0px",
          background:
            "linear-gradient(90deg,#4b4fd8 0%,#6b4ce6 40%,#a84bd8 70%,#2f80ed 100%)",
          backdropFilter: "blur(6px)",
          zIndex: 1000,
        }}
      >
        <div className="container px-4">
          {/* LOGO */}
          <a
            className="navbar-brand fw-bold text-white"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleMenuClick("home", "Home");
            }}
          >
            Univercell Mobile
          </a>

          {/* HAMBURGER */}
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#mobileMenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* DESKTOP MENU */}
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav gap-5 mx-auto align-items-center">
              {menuItems.map((item) => (
                <li className="nav-item" key={item.label}>
                  <a
                    href="#"
                    className={`nav-link fw-semibold ${
                      active === item.label ? "active-link" : "text-white"
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleMenuClick(item.link, item.label);
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="#"
              className="btn rounded-pill px-4 ms-4"
              style={{
                background: "#2f80ed",
                color: "#fff",
                fontWeight: 600,
              }}
              onClick={(e) => {
                e.preventDefault();
                handleMenuClick("footer", "Contact");
              }}
            >
              Get a Quote
            </a>
          </div>
        </div>
      </nav>

      {/* ===== MOBILE OFFCANVAS MENU ===== */}
      <div
        className="offcanvas offcanvas-end w-100 mobile-offcanvas"
        id="mobileMenu"
        tabIndex="-1"
      >
        {/* TOP BAR */}
        <div className="d-flex justify-content-between align-items-center px-4 py-3">
          <span className="fw-bold text-white fs-5">Menu</span>

          <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
          ></button>
        </div>

        {/* MENU BODY */}
        <div className="offcanvas-body mobile-menu-body">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href="#"
              className={`mobile-link ${
                active === item.label ? "mobile-active" : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
                handleMenuClick(item.link, item.label);
              }}
            >
              {item.label}
            </a>
          ))}

          <a
            href="#"
            className="btn mobile-cta mt-4"
            onClick={(e) => {
              e.preventDefault();
              handleMenuClick("footer", "Contact");
            }}
          >
            Get a Quote
          </a>
        </div>
      </div>
    </>
  );
}
