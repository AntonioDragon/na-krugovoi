import i18next from 'i18next'
import {initReactI18next} from 'react-i18next'
import {TRANSLATIONS_ENG} from './eng/translation'
import {TRANSLATIONS_UA} from './ua/translation'

i18next.use(initReactI18next).init({
  returnObjects: true,
  fallbackLng: 'ua',
  resources: {
    eng: {
      translation: TRANSLATIONS_ENG
    },
    ua: {
      translation: TRANSLATIONS_UA
    }
  }
})
