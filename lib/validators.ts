import { formatNumberWithDecimals } from '@/lib/utils'
import { z } from 'zod'

export const currency = z
  .string()
  .refine(
    (val) => /^\d+(\.\d{2})?$/.test(formatNumberWithDecimals(Number(val))),
    { message: 'Price must have exactly 2 decimal places' }
  )

// Schema for inserting product
export const insertProductSchema = z.object({
  name: z.string().min(3, { message: 'Name must be at least 3 characters' }),
  slug: z.string().min(3, { message: 'Slug must be at least 3 characters' }),
  category: z
    .string()
    .min(3, { message: 'Category must be at least 3 characters' }),
  brand: z.string().min(3, { message: 'Brand must be at least 3 characters' }),
  description: z
    .string()
    .min(3, { message: 'Description must be at least 3 characters' }),
  stock: z.coerce.number(),
  images: z
    .array(z.string())
    .min(1, { message: 'Product must have at least 1 image' }),
  isFeatured: z.boolean(),
  banner: z.string().nullable(),
  price: currency,
})

// Schema for signing users in
export const signInFormSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z
    .string()
    .min(5, { message: 'Password must be at least 5 characters' }),
})

// Schema for signing up a user
export const signUpFormSchema = z
  .object({
    name: z.string().min(3, { message: 'Name must be at least 3 characters' }),
    email: z.string().email({ message: 'Invalid email address' }),
    password: z
      .string()
      .min(5, { message: 'Password must be at least 5 characters' }),
    confirmPassword: z
      .string()
      .min(5, { message: 'Confirm password must be at least 5 characters' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  })
