import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

const userData: Prisma.UserCreateInput[] = [
  {
    name: 'Amar',
    email: 'amar@amarmusli.ch',
  }
]

const productData: Prisma.ProductCreateInput[] = [
  {
    manufacturer: 'MS 1',
    name: 'Keyboard 1',
    attributes: '{"color": "blue"}',
    images: 'keyboard1.jpg, keyboard2.jpg',
    prices: '{"usd": "100"}, {"eur": "90"}',
    slug: 'keyboard-1',
    published: true
  },
  {
    manufacturer: 'MS 2',
    name: 'Keyboard 2',
    attributes: '{"color": "red"}',
    images: 'keyboard2.jpg',
    prices: '{"usd": "90"}, {"eur": "80"}',
    slug: 'keyboard-2',
    published: true
  }
]

async function main() {
  console.log(`Start seeding ...`)
  for (const u of userData) {
    const user = await prisma.user.create({
      data: u,
    })
    console.log(`Created user with id: ${user.id}`)
  }
  for (const p of productData) {
    const product = await prisma.product.create({
      data: p,
    })
    console.log(`Created product ${product.name}`)
  }
  console.log(`Seeding finished.`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })