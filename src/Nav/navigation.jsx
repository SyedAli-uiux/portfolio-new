import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookF,
  faXTwitter,
  faPinterestP,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../assets/images/main-logo.png";

const sections = ["home", "about", "experience", "portfolio", "contact"];

function Navigation() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) =>
              a.boundingClientRect.top - b.boundingClientRect.top
          );

        if (visible.length > 0) {
          setActive(visible[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: "0px 0px -50% 0px",
        threshold: 0.1,
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const navLinkStyle = (id) => ({
    position: "relative",
    display: "inline-block",
    padding: "8px 0",
    color: "#000",
    textDecoration: "none",
    fontWeight: active === id ? 600 : 500,
  });

  const underlineStyle = (id) => ({
    content: '""',
    position: "absolute",
    left: 0,
    bottom: 0,
    width: active === id ? "100%" : "0%",
    height: "2px",
    backgroundColor: "#000",
    transition: "width 0.3s ease",
  });

  return (
    <>
      {/* MOBILE MENU BUTTON */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          position: "fixed",
          top: 15,
          right: 15,
          zIndex: 1000,
          fontSize: 28,
          background: "#fff",
          border: "none",
          padding: "5px 12px",
          cursor: "pointer",
        }}
        className="d-lg-none"
      >
        ☰
      </button>

      {/* SIDEBAR */}
      <header
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          zIndex: 999,
          width: 260,
          height: "100vh",
          padding: "0 40px",
          background: "#fff",
          transform:
            window.innerWidth <= 991 && !menuOpen
              ? "translateX(-100%)"
              : "translateX(0)",
          transition: "transform 0.3s ease-in-out",
          boxShadow:
            window.innerWidth <= 991
              ? "2px 0 15px rgba(0,0,0,0.1)"
              : "none",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          {/* TOP */}
          <div>
            {/* LOGO */}
            <div style={{ marginTop: 40 }}>
              <a href="#home" onClick={() => setMenuOpen(false)}>
                {/* <img
                  src="/src/assets/images/main-logo.png"
                  alt="logo"
                  width={130}
                /> */}<img src={logo} alt="logo" width={130} />
              </a>
            </div>

            {/* NAV */}
            <nav style={{ marginTop: 50 }}>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {sections.map((item) => (
                  <li key={item} style={{ marginBottom: 10 }}>
                    <a
                      href={`#${item}`}
                      onClick={() => setMenuOpen(false)}
                      style={navLinkStyle(item)}
                      onMouseEnter={(e) =>
                        (e.currentTarget.lastChild.style.width =
                          "100%")
                      }
                      onMouseLeave={(e) =>
                        active !== item &&
                        (e.currentTarget.lastChild.style.width =
                          "0%")
                      }
                    >
                      {item === "home"
                        ? "Home"
                        : item === "about"
                        ? "About"
                        : item === "experience"
                        ? "Skillset & Toolset"
                        : item === "portfolio"
                        ? "Works"
                        : "Contact"}

                      <span style={underlineStyle(item)} />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* FOOTER */}
          <div style={{ marginBottom: 30 }}>
            <a
              href="mailto:syedali1820010@gmail.com"
              style={{
                display: "block",
                marginBottom: 15,
                color: "#000",
                textDecoration: "none",
                fontSize: 14,
              }}
            >
              syedali1820010@gmail.com
            </a>

            <div style={{ display: "flex", gap: 15 }}>
              {[
                {
                  icon: faInstagram,
                  link: "https://www.instagram.com/mr__o_p_t_i_m_i_s_m?igsh=MWU5amQxdmluZTY3Yw==",
                },
                {
                  icon: faFacebookF,
                  link: "https://www.facebook.com/share/17oQ9efCrk/",
                },
                {
                  icon: faXTwitter,
                  link: "https://x.com/syedsn001?s=21",
                },
                {
                  icon: faPinterestP,
                  link: "https://pin.it/77xwAyuaa",
                },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: 18,
                    color: "#000",
                    transition: "transform 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform =
                      "translateY(-3px)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform =
                      "translateY(0)")
                  }
                >
                  <FontAwesomeIcon icon={item.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navigation;
