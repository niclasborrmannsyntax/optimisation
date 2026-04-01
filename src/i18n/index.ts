import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import enCommon from './locales/en/common.json'
import enLanding from './locales/en/landing.json'
import enAbout from './locales/en/about.json'
import deCommon from './locales/de/common.json'
import deLanding from './locales/de/landing.json'
import deAbout from './locales/de/about.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        common: enCommon,
        landing: enLanding,
        about: enAbout,
      },
      de: {
        common: deCommon,
        landing: deLanding,
        about: deAbout,
      },
    },
    fallbackLng: 'en',
    supportedLngs: ['en', 'de'],
    ns: ['common', 'landing', 'about'],
    defaultNS: 'common',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  })

export default i18n
