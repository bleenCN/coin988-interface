export const i18n = {
  defaultLocale: 'zh-CN',
  locales: ['zh-CN', 'en'],
} as const

export type Locale = (typeof i18n)['locales'][number]

export const localeLabelMap: Record<Locale, Record<'label' | 'short', string>> = {
  'zh-CN': {
    label: '简体中文',
    short: 'CN',
  },
  en: {
    label: 'English',
    short: 'EN',
  },
}
