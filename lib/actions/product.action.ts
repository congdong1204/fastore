'use server'

import { PrismaClient } from '@prisma/client'
import { convertToPlainObject } from '../utils'
import { LATEST_PRODUCTS_LIMIT } from '@/lib/constants'

const prisma = new PrismaClient()

// Get latest products
export async function getLatestProducts() {
  const products = await prisma.product.findMany({
    take: LATEST_PRODUCTS_LIMIT,
    orderBy: { createdAt: 'desc' },
  })

  return convertToPlainObject(products)
}
