import "./Voyages.css";
import RightArrow from "./RightArrow";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Fade } from "react-awesome-reveal";

function Voyages() {
  const { t } = useTranslation();
  return (
    <section className="voyagesOrganisees mainVO" id="vo">
      <Fade direction="up">
        <div className="voTextbox">
          <h2 className="voPrimary">{t("NosVoyages")}</h2>
          <h3 className="voSecondary">{t("voSecondary")}</h3>
        </div>
      </Fade>
      <div className="allVoContainer">
        <div className="vobox vomainbox">
          <div className="voImage">
            <img src="assets\combine.webp" alt="" />
          </div>
          <Link to={"CircuitsMaroc"} className="voDescription">
            <h2 className="voSecondary">{t("navbarCircuitsMaroc")}</h2>
            <div className="rightArrow">
              <RightArrow></RightArrow>
            </div>
          </Link>
        </div>

        <div className="vobox vomainbox">
          <div className="voImage">
            <img src="assets\groupes.webp" alt="" />
          </div>
          <Link to={"Hebergement"} className="voDescription">
            <h2 className="voSecondary">{t("navbarHebergement")}</h2>

            <div className="rightArrow">
              <RightArrow></RightArrow>
            </div>
          </Link>
        </div>

        <div className="vobox vomainbox">
          <div className="voImage">
            <img src="assets\affaires.webp" alt="" />
          </div>
          <Link to={"Affaires"} className="voDescription">
            <h2 className="voSecondary">{t("navbarAffaires")}</h2>

            <div className="rightArrow">
              <RightArrow></RightArrow>
            </div>
          </Link>
        </div>
        <div className="vobox vomainbox">
          <div className="voImage">
            <img src="assets\omra.webp" alt="" />
          </div>
          <Link to={"Omra"} className="voDescription">
            <h2 className="voSecondary">Omra</h2>

            <div className="rightArrow">
              <RightArrow></RightArrow>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Voyages;
