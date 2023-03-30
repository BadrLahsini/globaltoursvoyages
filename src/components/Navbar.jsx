import { useState, useEffect, useRef } from "react";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import MenuItem from "./MenuItem";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Navbar({ stickyNav }) {
  const { t, i18n } = useTranslation();
  ///////////////////////////////////////
  // Make mobile navigation work
  const [navOpen, SetNavOpen] = useState(false);
  const btnNavHandler = (e) => {
    // e.preventDefault();
    SetNavOpen((current) => !current);
  };

  ///////////////////////////////////////

  const menuItems = [
    {
      title: t("navbarAccueil"),
      url: "/",
    },
    {
      title: "Incoming",
      url: "Incomings",
    },

    {
      title: t("navbarVoyages"),
      url: "#",
      submenu: [
        {
          title: t("navbarCircuitsMaroc"),
          url: "CircuitsMaroc",
        },
        {
          title: t("navbarAffaires"),
          url: "Affaires",
        },
        {
          title: t("navbarHebergement"),
          url: "Hebergement",
        },
        {
          title: "Omra",
          url: "Omra",
        },
      ],
    },
    {
      title: t("navbarEvenements"),
      url: "#",
      submenu: [
        {
          title: t("navbarSeminaires"),
          url: "Seminaires",
        },
        {
          title: t("navbarIncentives"),
          url: "Incentives",
        },
        {
          title: "Team building",
          url: "TeamBuilding",
        },
      ],
    },
    {
      title: "Transport",
      url: "Transport",
    },
    {
      title: t("navbarGallerie"),
      url: "Gallery",
    },
    {
      title: t("navbarContact"),
      url: "Contact",
    },
  ];

  const handleMenuHover = (e, val) => {
    if (e.target.classList.contains("main-nav-link")) {
      const link = e.target;
      const siblings = link
        .closest(".main-nav")
        .querySelectorAll(".main-nav-link");

      siblings.forEach((el) => {
        if (el !== link) el.style.opacity = val;
      });
    }
  };

  // LANGUAGE DROPDOWN ////

  const [islangOpen, setIsLangOpen] = useState(false);
  const [langOption, setlangOption] = useState(0);
  // const changeLanguageHandler = (e) => {
  //   const languageValue = e.target.value;
  //   i18n.changeLanguage(languageValue);
  // };

  const langOptionsList = ["EN", "FR", "ES", "PT", "DE"];
  const langImages = [
    "/assets/gb.svg",
    "/assets/fr.svg",

    "/assets/es.svg",
    "/assets/pt.svg",
    "/assets/de.svg",
  ];
  let ref = useRef();
  const setSelectedThenCloseDropdown = (index) => {
    setlangOption(index);
    islangOpen && setIsLangOpen(false);
  };

  useEffect(() => {
    i18n.changeLanguage(langOptionsList[langOption]);
  }, [langOption]);

  useEffect(() => {
    const handler = (event) => {
      if (islangOpen && ref.current && !ref.current.contains(event.target)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [islangOpen]);

  return (
    <nav
      className={`main-nav ${navOpen ? "nav-open" : ""} ${
        stickyNav ? "sticky" : ""
      }`}
      onMouseOver={(e) => handleMenuHover(e, 0.8)}
      onMouseOut={(e) => handleMenuHover(e, 1)}
    >
      <Link className="navbar-logo" to="/">
        <img src="/assets/logo-gtv.png" alt="logo" className="main-logo" />
      </Link>
      <ul className="main-nav-list">
        {menuItems.map((menu, index) => (
          <MenuItem
            item={menu}
            key={index}
            navHander={btnNavHandler}
          ></MenuItem>
        ))}
      </ul>
      <div className="languagewrapper" ref={ref}>
        <a onClick={() => setIsLangOpen((prev) => !prev)}>
          <img
            src={langImages[langOption]}
            alt={langOptionsList[langOption]}
            className="langIcon"
          />

          <span className="arrow">{langOptionsList[langOption]}</span>
        </a>
        <ul className={`dropdown ${islangOpen ? "show" : ""}`}>
          {langOptionsList.map((submenu, index) => (
            <li
              key={index}
              className="menu-item"
              onClick={() => setSelectedThenCloseDropdown(index)}
            >
              <img
                src={langImages[index]}
                alt={langOptionsList[index]}
                className="langIcon"
              />
              {submenu}
            </li>
          ))}
        </ul>
      </div>
      <button onClick={btnNavHandler} className="btnMobileNav">
        <IoMenuOutline name="menu-outline" className="NavIcon"></IoMenuOutline>
        <IoCloseOutline
          name="close-outline"
          className="NavIcon"
        ></IoCloseOutline>
      </button>
    </nav>
  );
}

export default Navbar;
