import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Convert prisma object to regular JS object
export const convertToPlainObject = <T>(obj: T): T =>
  JSON.parse(JSON.stringify(obj))
