'use server'

import { convertToPlainObject } from '../utils'
import { LATEST_PRODUCTS_LIMIT } from '@/lib/constants'
import { prisma } from '@/db/prisma'

// Get latest products
export async function getLatestProducts() {
  const products = await prisma.product.findMany({
    take: LATEST_PRODUCTS_LIMIT,
    orderBy: { createdAt: 'desc' },
  })

  return convertToPlainObject(products)
}
