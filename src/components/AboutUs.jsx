import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Fade } from "react-awesome-reveal";

function AboutUs() {
  const { t } = useTranslation();
  return (
    <section className="about-us">
      <div className="about-us-img"></div>
      <Fade direction="right">
        <div className="about-us-textbox">
          <h2 className="about-us-primary">{t("aboutUsTitle")}</h2>
          <p className="about-us-secondary">{t("aboutUsSecondary1")}</p>
          <p className="about-us-secondary">{t("aboutUsSecondary2")}</p>
          <Link to="/Contact" className="main-btn">
            &#9743; {t("ContactUs")}
          </Link>
        </div>
      </Fade>
    </section>
  );
}

export default AboutUs;
