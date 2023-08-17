import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * 新页面暂时替换 i18n 翻译
 */
export function getT<T extends { [k: string]: string }>(json: T) {
  const _json = json

  function t(key: keyof T): string
  function t(key: keyof T, obj: { [k: string]: string | number | bigint }): string
  function t(key: keyof T, obj?: { [k: string]: string | number | bigint }) {
    let res = _json[key] as string
    if (obj) {
      const _keys = Object.keys(obj)
      const regexArr = _keys.map((k) => ({
        regex: new RegExp(`{\\s*${k}\\s*}`, 'g'),
        replacer: String(obj[k]),
      }))
      for (const { regex, replacer } of regexArr) {
        res = res.replace(regex, replacer)
      }
    }
    return res
  }

  return t
}

/**
 * 当前时间是否在目标时间之前
 * @param time 目标时间
 * @returns
 */
export function isBeforeTime(time: Date) {
  const currentTime = new Date().getTime()
  const timeStamp = time.getTime()
  return currentTime < timeStamp
}
