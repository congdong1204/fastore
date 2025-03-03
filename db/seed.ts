import { PrismaClient } from '@prisma/client'
import sampleProducts from './sample-data'

async function main() {
  const prisma = new PrismaClient()

  await prisma.product.deleteMany()

  await prisma.product.createMany({
    data: sampleProducts.products,
  })

  console.log('Database seeded successfully')
}

main()
