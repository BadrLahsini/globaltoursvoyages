import { useTranslation } from "react-i18next";
import "./Transport.css";

function Transport() {
  const { t } = useTranslation();

  return (
    <section className="voyagesOrganiseesIncomings" id="vo">
      <div className="voTextbox">
        <h2 className="voPrimary">Transport</h2>
      </div>
      <div className="TransportTextbox">
        <h2 className="CMSecondary"> {t("mainTransportText1")}</h2>
        <h2 className="CMSecondary"> {t("mainTransportText2")}</h2>
        <h2 className="CMSecondary"> {t("mainTransportText3")}</h2>
        <h2 className="CMSecondary"> {t("mainTransportText4")}</h2>
      </div>
      <div className="allVoContainer">
        <div className="vobox AlignCenterSelf">
          <div className="voImage">
            <img src="assets\SantaFe.webp" alt="" />
          </div>
        </div>
        <div className="vobox AlignCenterSelf">
          <div className="voImage">
            <img src="assets\ford.webp" alt="" />
          </div>
        </div>
        <div className="vobox AlignCenterSelf">
          <div className="voImage">
            <img src="assets\18places.webp" alt="" />
          </div>
        </div>
        <div className="vobox AlignCenterSelf">
          <div className="voImage">
            <img src="assets\MercedesC220.webp" alt="" />
          </div>
        </div>
        <div className="vobox AlignCenterSelf">
          <div className="voImage">
            <img src="assets\NissanMurano.webp" alt="" />
          </div>
        </div>
        <div className="vobox AlignCenterSelf">
          <div className="voImage">
            <img src="assets\48places.webp" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Transport;
