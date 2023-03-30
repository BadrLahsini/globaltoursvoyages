import React from "react";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Gallery = () => {
  const { t } = useTranslation();

  const images = [
    { src: "assets\\yassineconf.webp" },
    { src: "assets\\rabat.webp" },
    { src: "assets\\meknes.webp" },
    { src: "assets\\gtvconf.webp" },
    { src: "assets\\fes.webp" },
    { src: "assets\\marrakech.webp" },
    { src: "assets\\agadir.webp" },
    { src: "assets\\chefchaouen.webp" },
    { src: "assets\\alhoceima.webp" },
    { src: "assets\\dakhla.webp" },
    { src: "assets\\ouarzazat.webp" },
    { src: "assets\\merzouga.webp" },
  ];
  return (
    <section className="vaffaires">
      <section className="voyagesOrganisees">
        <div className="voTextbox">
          <h2 className="voPrimary"> {t("navbarGallerie")}</h2>
          <div className="carousel-container">
            <Carousel
              images={images}
              isRTL={false}
              isAutoPlaying={true}
              hasIndexBoard={false}
              autoPlayInterval={3500}
              style={{ height: 350, maxWidth: 500 }}
            />
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
};

export default Gallery;
