import i18n, { Resource } from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"

import { ja } from "./locales/ja"
import { en } from "./locales/en"

const resources: Resource = {
  ja,
  en
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources
  })

export default i18n
