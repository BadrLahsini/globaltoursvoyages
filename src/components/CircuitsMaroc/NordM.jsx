import { useTranslation } from "react-i18next";

function NordM() {
  const { t } = useTranslation();
  return (
    <section className="voyagesOrganisees" id="vo">
      <div className="voTextbox">
        <h2 className="voPrimary">{t("nord")}</h2>
      </div>
      <div className="allVoContainer">
        <div className="vobox">
          <div className="voImage">
            <img src="assets\tanger.webp" alt="" />
          </div>
        </div>
        <div className="vobox">
          <h2 className="CMPrimary">{t("tanger")}</h2>

          <h3 className="CMSecondary">
            {t("Tanger1")} <br></br>
            {t("Tanger2")}
          </h3>
        </div>
        <div className="allVoContainer">
          <div className="vobox order2 AlignCenterSelf">
            <h2 className="CMPrimary">Chefchaouen</h2>

            <h3 className="CMSecondary">{t("Chefchaouen")}</h3>
          </div>
          <div className="vobox">
            <div className="voImage">
              <img src="assets\chefchaouen.webp" alt="" />
            </div>
          </div>
        </div>

        <div className="vobox">
          <div className="voImage">
            <img src="assets\alhoceima.webp" alt="" />
          </div>
        </div>
        <div className="vobox">
          <h2 className="CMPrimary">Al Hoceima</h2>

          <h3 className="CMSecondary">
            {t("Hoceima1")}
            <br></br>
            {t("Hoceima2")}
          </h3>
        </div>
      </div>
    </section>
  );
}

export default NordM;
