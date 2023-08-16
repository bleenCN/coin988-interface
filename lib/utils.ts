import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * 新页面暂时替换 i18n 翻译
 */
export function getT<T>(json: T) {
  return (key: keyof T) => {
    return json[key]
  }
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
