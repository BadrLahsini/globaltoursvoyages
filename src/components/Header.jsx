import { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Fade } from "react-awesome-reveal";

function Header() {
  const heroRef = useRef();
  const { t } = useTranslation();

  return (
    <section className="header-container">
      <header>
        <div className="hero" ref={heroRef}>
          <Fade direction="right" cascade>
            <div className="hero-text-box">
              <h1 className="heading-primary">{t("headerPrimary")}</h1>
              <span className="GTV"> Global Tours Voyages</span>
              <p className="heading-secondary">{t("headerSecondary")}</p>
              <Link to="/Contact" className="main-btn">
                &#9743; {t("ContactUs")}
              </Link>
            </div>
          </Fade>
        </div>
      </header>
    </section>
  );
}

export default Header;
