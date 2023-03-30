import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function TeamBuilding() {
  const { t } = useTranslation();
  return (
    <section className="vaffaires">
      <section className="voyagesOrganisees" id="vo">
        <div className="voTextbox">
          <h2 className="voPrimary">Team building</h2>
        </div>
        <div className="allVoContainer">
          <div className="vobox AlignCenterSelf">
            <div className="voImage">
              <img src="assets\teambuilding.webp" alt="" />
            </div>
          </div>
          <div className="vobox">
            <h3 className="affairesSecondary">
              {t("teamBuilding")}
              <br></br>
              {t("teamBuilding2")}
            </h3>
          </div>
        </div>
      </section>
      <div className="ButtonContactUs">
        <Link to="/Contact" className="main-btn">
          &#9743; {t("ContactUs")}
        </Link>
      </div>
    </section>
  );
}

export default TeamBuilding;
