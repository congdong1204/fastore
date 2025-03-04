import { PrismaClient } from '@prisma/client'
import sampleProducts from './sample-data'

async function main() {
  const prisma = new PrismaClient()

  await prisma.product.deleteMany()
  await prisma.account.deleteMany()
  await prisma.session.deleteMany()
  await prisma.user.deleteMany()
  await prisma.verificationToken.deleteMany()

  await prisma.product.createMany({
    data: sampleProducts.products,
  })

  await prisma.user.createMany({
    data: sampleProducts.users,
  })

  console.log('Database seeded successfully')
}

main()
