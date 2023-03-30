import {
  IoBedOutline,
  IoAirplaneOutline,
  IoPeopleOutline,
  IoBusOutline,
  IoAccessibilityOutline,
  IoEarthOutline,
} from "react-icons/io5";
import { useTranslation } from "react-i18next";
import { Fade } from "react-awesome-reveal";

function Voyages() {
  const { t } = useTranslation();

  return (
    <section className="Services">
      <div className="voTextbox">
        <Fade direction="up">
          <h2 className="voPrimary">{t("NosServices")}</h2>
        </Fade>
      </div>

      <div className="servicesIcons">
        <Fade direction="right" cascade damping={0.2}>
          <div className="iconContainer">
            <IoEarthOutline className="serviceIcon"></IoEarthOutline>
            <h2 className="ServicePrimary">INCOMING</h2>
            <p className="ServiceSecondary">{t("NosServicesIncoming")}</p>
          </div>
          <div className="iconContainer">
            <IoAccessibilityOutline className="serviceIcon"></IoAccessibilityOutline>
            <h2 className="ServicePrimary">TEAM BUILDING</h2>
            <p className="ServiceSecondary">{t("NosServicesTB")}</p>
          </div>
          <div className="iconContainer">
            <IoBusOutline className="serviceIcon"></IoBusOutline>
            <h2 className="ServicePrimary">{t("TransfertMain")}</h2>
            <p className="ServiceSecondary">{t("NosServicesTransfert")}</p>
          </div>

          <div className="iconContainer">
            <IoAirplaneOutline className="serviceIcon"></IoAirplaneOutline>
            <h2 className="ServicePrimary">{t("BilleterieMain")}</h2>
            <p className="ServiceSecondary">{t("NosServicesBilleterie")}</p>
          </div>
          <div className="iconContainer">
            <IoBedOutline className="serviceIcon"></IoBedOutline>
            <h2 className="ServicePrimary">HOTEL</h2>
            <p className="ServiceSecondary">{t("NosServicesHotel")}</p>
          </div>

          <div className="iconContainer">
            <IoPeopleOutline className="serviceIcon"></IoPeopleOutline>
            <h2 className="ServicePrimary">MICE</h2>
            <p className="ServiceSecondary">{t("NosServicesMice")}</p>
          </div>
        </Fade>
      </div>
    </section>
  );
}

export default Voyages;
