import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import el from './locales/el.json'

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('lang') || 'el',
  fallbackLocale: 'en',
  messages: { en, el }
})

export default i18n
