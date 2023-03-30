import VilleImp from "./CircuitsMaroc/VillesImp";
import NordM from "./CircuitsMaroc/NordM";
import SudM from "./CircuitsMaroc/SudM";
import Desert from "./CircuitsMaroc/Desert";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function CircuitsMaroc() {
  const { t } = useTranslation();

  return (
    <section className="CM">
      <VilleImp></VilleImp>
      <NordM></NordM>
      <SudM></SudM>

      <Desert></Desert>
      <div className="ButtonContactUs">
        <Link to="/Contact" className="main-btn">
          &#9743; {t("ContactUs")}
        </Link>
      </div>
    </section>
  );
}

export default CircuitsMaroc;
