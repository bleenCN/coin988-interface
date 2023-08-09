import { Locale } from './i18n.config'

const dictionaries = {
  'zh-CN': () => import('./dictionaries/zh-CN.json').then((module) => module.default),
  en: () => import('./dictionaries/en.json').then((module) => module.default),
}

export const getDictionary = async (locale: Locale) => dictionaries[locale]()
