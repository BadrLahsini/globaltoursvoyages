import { useTranslation } from "react-i18next";

function VilleImp() {
  const { t } = useTranslation();

  return (
    <section className="voyagesOrganisees" id="vo">
      <div className="voTextbox">
        <h2 className="voPrimary">{t("VI")}</h2>
      </div>
      <div className="allVoContainer">
        <div className="vobox AlignCenterSelf">
          <div className="voImage">
            <img src="assets\rabat.webp" alt="" />
          </div>
        </div>
        <div className="vobox">
          <h2 className="CMPrimary">Rabat</h2>
          <h3 className="CMSecondary">
            {t("rabat1")} <br></br> {t("rabat2")}
          </h3>
        </div>
        <div className="allVoContainer">
          <div className="vobox order2">
            <h2 className="CMPrimary">Marrakech</h2>

            <h3 className="CMSecondary">{t("Marrakech")}</h3>
          </div>
          <div className="vobox AlignCenterSelf">
            <div className="voImage">
              <img src="assets\marrakech.webp" alt="" />
            </div>
          </div>
        </div>

        <div className="vobox AlignCenterSelf">
          <div className="voImage">
            <img src="assets\fes.webp" alt="" />
          </div>
        </div>
        <div className="vobox">
          <h2 className="CMPrimary">Fes</h2>

          <h3 className="CMSecondary">
            {t("Fes1")}
            <br></br>
            {t("Fes2")}
          </h3>
        </div>
        <div className="allVoContainer">
          <div className="vobox order2">
            <h2 className="CMPrimary">Meknes</h2>

            <h3 className="CMSecondary">{t("Meknes")}</h3>
          </div>
          <div className="vobox AlignCenterSelf">
            <div className="voImage">
              <img src="assets\meknes.webp" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VilleImp;
