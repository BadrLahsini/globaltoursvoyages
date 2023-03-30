import { useTranslation } from "react-i18next";

function Desert() {
  const { t } = useTranslation();
  return (
    <section className="voyagesOrganisees" id="vo">
      <div className="voTextbox">
        <h2 className="voPrimary">{t("Desert1")}</h2>
      </div>
      <div className="allVoContainer">
        <div className="vobox">
          <div className="voImage">
            <img src="assets\ouarzazat.webp" alt="" />
          </div>
        </div>
        <div className="vobox">
          <h2 className="CMPrimary">Ouarzazat</h2>

          <h3 className="CMSecondary">{t("Ouarzazat")}</h3>
        </div>
        <div className="allVoContainer">
          <div className="vobox order2">
            <h2 className="CMPrimary">Merzouga</h2>

            <h3 className="CMSecondary">{t("Merzouga")}</h3>
          </div>
          <div className="vobox">
            <div className="voImage">
              <img src="assets\merzouga.webp" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Desert;
