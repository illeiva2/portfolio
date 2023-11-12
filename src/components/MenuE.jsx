import { useEffect } from "react";

export default function MenuE() {
  const handleToggleClick = () => {
    document.body.classList.toggle("nav-open");
  };

  const handleNavLinkClick = () => {
    document.body.classList.remove("nav-open");
  };

  useEffect(() => {
    const navToggle = document.querySelector(".nav-toggle");
    const navLinks = document.querySelectorAll(".nav__link");

    if (navToggle) {
      navToggle.addEventListener("click", handleToggleClick);
    }

    if (navLinks) {
      navLinks.forEach((link) => {
        link.addEventListener("click", handleNavLinkClick);
      });
    }

    return () => {
      if (navToggle) {
        navToggle.removeEventListener("click", handleToggleClick);
      }

      if (navLinks) {
        navLinks.forEach((link) => {
          link.removeEventListener("click", handleNavLinkClick);
        });
      }
    };
  }, []);

  return <></>;
}
