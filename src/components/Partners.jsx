import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper";
import { useTranslation } from "react-i18next";
import { Fade } from "react-awesome-reveal";

// Import Swiper styles
import "swiper/css";

import "./Partners.css";

// import required modules

export default function Partners() {
  const { t } = useTranslation();

  const partners = [
    "assets\\1.png",
    "assets\\2.png",
    "assets\\3.png",
    "assets\\4.png",
    "assets\\5.png",
    "assets\\6.png",
    "assets\\7.png",
    "assets\\8.png",
    "assets\\9.png",
    "assets\\10.png",
    "assets\\11.png",
    "assets\\12.png",
    "assets\\13.png",
    "assets\\14.png",
    "assets\\15.png",
    "assets\\16.png",
    "assets\\17.png",
    "assets\\18.png",
  ];
  return (
    <section className="partners">
      <div className="voTextbox">
        <Fade>
          <h2 className="voPrimary">{t("mainPartenaires")}</h2>
        </Fade>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        speed={3500}
        freeMode={true}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
        }}
        breakpoints={{
          580: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        modules={[Autoplay, FreeMode]}
        className="mySwiper"
      >
        {partners.map((x) => {
          return (
            <SwiperSlide key={x}>
              <img src={`${x}`} alt="logoPartner" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
