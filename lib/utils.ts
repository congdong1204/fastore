import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Convert prisma object to regular JS object
export const convertToPlainObject = <T>(obj: T): T =>
  JSON.parse(JSON.stringify(obj))

// Format number with decimal places
export const formatNumberWithDecimals = (num: number): string => {
  const [integer, decimal] = num.toString().split('.')

  return decimal ? `${integer}.${decimal.padEnd(2, '0')}` : `${integer}.00`
}
