import { useTranslation } from "react-i18next";

function SudM() {
  const { t } = useTranslation();

  return (
    <section className="voyagesOrganisees" id="vo">
      <div className="voTextbox">
        <h2 className="voPrimary">{t("Sud")}</h2>
      </div>
      <div className="allVoContainer">
        <div className="vobox">
          <div className="voImage">
            <img src="assets\agadir.webp" alt="" />
          </div>
        </div>
        <div className="vobox">
          <h2 className="CMPrimary">Agadir</h2>

          <h3 className="CMSecondary">{t("Agadir")}</h3>
        </div>
        <div className="allVoContainer">
          <div className="vobox order2">
            <h2 className="CMPrimary">Dakhla</h2>

            <h3 className="CMSecondary">{t("Dakhla")}</h3>
          </div>
          <div className="vobox">
            <div className="voImage">
              <img src="assets\dakhla.webp" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SudM;
