import * as Localization from "expo-localization";
import i18n from "i18n-js";

import { english } from "./en";
import { swedish } from "./sv";

export const translate = (key: string) => i18n.t(key);

const getLocale = () => {
    console.log(Localization.locale);
  return Localization.locale.slice(0, 2); //to overcome the difference between ios and android returned locale. 
};
export const setI18nConfig =  () => {
  i18n.translations = { en: english, sv: swedish };
  i18n.fallbacks = true;
  i18n.locale = getLocale();
};
