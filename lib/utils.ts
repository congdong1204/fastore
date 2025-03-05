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

// Format error
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const formatError = (error: any): string => {
  if (error.name === 'ZodError') {
    const fieldErrors = Object.keys(error.errors).map(
      (key) => error.errors[key].message
    )
    return fieldErrors.join(', ')
  } else if (
    error.name === 'PrismaClientKnownRequestError' &&
    error.code === 'P2002'
  ) {
    const field = error.meta?.target ? error.meta?.target[0] : 'Field'
    return `${field.charAt(0).toUpperCase() + field.slice(1)} already exists`
  } else {
    return typeof error.message === 'string'
      ? error.message
      : JSON.stringify(error.message)
  }
}
