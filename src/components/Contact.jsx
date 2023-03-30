import {
  IoMailOutline,
  IoLogoWhatsapp,
  IoLogoFacebook,
  IoCallOutline,
  IoLogoInstagram,
} from "react-icons/io5";

import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();
  return (
    <section className="vaffaires">
      <section className="voyagesOrganisees">
        <div className="voTextbox">
          <h2 className="voPrimary">Contact</h2>
        </div>
        <div className="contactContainer">
          <div className="Contactbox">
            <h2 className="ContactSecondary">Contact:</h2>
            <ul className="Contact-list">
              <li className="Contact-el">
                <IoCallOutline className="contactIcon"></IoCallOutline>
                <a href="tel:+212530055770">
                  <p className="contactSecondary">+212 5 30 05 57 70</p>
                </a>
              </li>
              <li className="Contact-el">
                <IoLogoWhatsapp className="contactIcon"></IoLogoWhatsapp>
                <a href="https://wa.me/+212661188078">
                  <p className="contactSecondary">+212 6 61 18 80 78</p>
                </a>
              </li>
              <li className="Contact-el">
                <IoMailOutline className="contactIcon"></IoMailOutline>
                <a href="mailto:contact@globaltoursvoyages.ma">
                  <p className="contactSecondary">
                    contact@globaltoursvoyages.ma
                  </p>
                </a>
              </li>
              <li className="Contact-el">
                <IoLogoFacebook className="contactIcon"></IoLogoFacebook>
                <a href="https://www.facebook.com/GlobalToursVoyages/">
                  <p className="contactSecondary">/globaltoursvoyages</p>
                </a>
              </li>
              <li className="Contact-el">
                <IoLogoInstagram className="contactIcon"></IoLogoInstagram>
                <a href="https://www.instagram.com/globaltoursvoyages.officiel/">
                  <p className="contactSecondary">
                    /globaltoursvoyages.officiel
                  </p>
                </a>
              </li>
            </ul>
            <br></br>
            {/* <h3 className="contactSecondary">
              Adresse :<br></br>
            </h3> */}
            <br />
            <br />
            <p className="contactSecondary">
              Secteur 3, N 468. En face de l'institut du tourisme Autoroute
              Casablanca, sortie Hay Ryad, Rabat, Maroc
            </p>
          </div>
          <div className="mapsBox">
            <iframe
              //   style="border: 0;"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d413.7523052495749!2d-6.891353051408082!3d33.94065378054144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda712c2f957893d%3A0x23dc7cff3a5d61d4!2sGlobal%20Tours%20Voyages!5e0!3m2!1sfr!2sma!4v1624289364714!5m2!1sfr!2sma"
              width="350"
              height="400"
              allowFullScreen="allowfullscreen"
            ></iframe>
          </div>
        </div>
      </section>
      <section className="voyagesOrganisees">
        <div className="voTextbox">
          <h2 className="voPrimary">{t("navbarContact")}</h2>
        </div>
        <div className="about-us-textbox about-us-contact">
          <p className="about-us-secondary">{t("aboutUsSecondary1")}</p>
          <p className="about-us-secondary">{t("headerSecondary")}</p>
          <p className="about-us-secondary">{t("about1")}</p>
          <h2 className="about-us-contact">{t("about2")}</h2>
          <p className="about-us-secondary">
            &#10003; {t("about3")} <br />
            &#10003; {t("about4")}
            <br /> &#10003; {t("about5")}
            <br />
            &#10003; {t("about6")} <br /> &#10003; {t("about7")} <br /> &#10003;{" "}
            {t("about8")}
          </p>
        </div>
      </section>
    </section>
  );
}

export default Contact;
