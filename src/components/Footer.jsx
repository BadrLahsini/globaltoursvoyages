import {
  IoMailOutline,
  IoLogoWhatsapp,
  IoLogoFacebook,
  IoCallOutline,
  IoLogoInstagram,
} from "react-icons/io5";
import { useTranslation } from "react-i18next";

import { Link } from "react-router-dom";

function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-adress">
          <img src="/assets/logo-gtv.png" alt="logo" className="main-logo" />
          <p>
            Secteur 3, N 468. En face de l'institut du tourisme Autoroute
            Casablanca, sortie Hay Ryad, Rabat, Maroc
          </p>
        </div>
        <div className="footer-quicklink">
          <h2 className="footer-header">{t("footerLinks")}</h2>
          <div className="footer-divider">
            <ul className="footer-quicklink-list">
              <li className="footer-el">
                <Link className="footer-nav-link" to="/">
                  {t("navbarAccueil")}
                </Link>
              </li>
              <li className="footer-el">
                <Link className="footer-nav-link" to="CircuitsMaroc">
                  {t("navbarCircuitsMaroc")}
                </Link>
              </li>
              <li className="footer-el">
                <Link className="footer-nav-link" to="Affaires">
                  {t("navbarAffaires")}
                </Link>
              </li>
              <li className="footer-el">
                <Link className="footer-nav-link" to="Omra">
                  Omra
                </Link>
              </li>
              <li className="footer-el">
                <Link className="footer-nav-link" to="Hebergement">
                  {t("navbarHebergement")}
                </Link>
              </li>
            </ul>
            <ul className="footer-quicklink-list">
              <li className="footer-el">
                <Link className="footer-nav-link" to="Seminaires">
                  {t("navbarSeminaires")}
                </Link>
              </li>
              <li className="footer-el">
                <Link className="footer-nav-link" to="Incentives">
                  {t("navbarIncentives")}
                </Link>
              </li>
              <li className="footer-el">
                <Link className="footer-nav-link" to="TeamBuilding">
                  Team Building
                </Link>
              </li>
              <li className="footer-el">
                <Link className="footer-nav-link" to="Gallery">
                  {t("navbarGallerie")}
                </Link>
              </li>
              <li className="footer-el">
                <Link className="footer-nav-link" to="Contact">
                  {t("navbarContact")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-socials">
          <ul className="footer-quicklink-list">
            <li className="footer-el">
              <IoLogoWhatsapp
                name="call-outline"
                className="footerIcon"
              ></IoLogoWhatsapp>
              <a href="https://wa.me/+212661188078">
                <p>+212 6 61 18 80 78</p>
              </a>
            </li>
            <li className="footer-el">
              <IoCallOutline
                name="call-outline"
                className="footerIcon"
              ></IoCallOutline>
              <a href="tel:+212530055770">
                <p>+212 5 30 05 57 70</p>
              </a>
            </li>
            <li className="footer-el">
              <IoMailOutline
                name="mail-open-outline"
                className="footerIcon"
              ></IoMailOutline>
              <a href="mailto:contact@globaltoursvoyages.ma">
                <p>contact@globaltoursvoyages.ma</p>
              </a>
            </li>
            <li className="footer-el">
              <IoLogoFacebook
                name="logo-facebook"
                className="footerIcon"
              ></IoLogoFacebook>
              <a href="https://www.facebook.com/GlobalToursVoyages/">
                <p>/globaltoursvoyages</p>
              </a>
            </li>
            <li className="footer-el">
              <IoLogoInstagram
                name="logo-facebook"
                className="footerIcon"
              ></IoLogoInstagram>
              <a href="https://www.instagram.com/globaltoursvoyages.officiel/">
                <p className="contactSecondary">/globaltoursvoyages.officiel</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
