import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Importing translation files

import translationEN from "./locales/translationen.json";
import translationFR from "./locales/translationfr.json";
import translationDE from "./locales/translationde.json";

import translationES from "./locales/translationesp.json";

import translationPT from "./locales/translationpt.json";

//Creating object with the variables of imported translation files
const resources = {
  EN: {
    translation: translationEN,
  },
  FR: {
    translation: translationFR,
  },
  PT: {
    translation: translationPT,
  },
  ES: {
    translation: translationES,
  },
  DE: {
    translation: translationDE,
  },
};

//i18N Initialization

i18n.use(initReactI18next).init({
  resources,
  lng: "EN", //default language
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
