import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

const userData: Prisma.UserCreateInput[] = [
  {
    name: 'Amar',
    email: 'amar@amarmusli.ch',
  }
]

const categoryData: Prisma.CategoryCreateInput[] = [
  {
    name: 'Computers',
    slug: 'computers',
    products: {
      create: [
        {
          manufacturer: 'MS 1',
          name: 'Keyboard 1',
          attributes: '{"key1": "value1", "key2": "value2"}',
          images: 'keyboard1.jpg, keyboard2.jpg',
          prices: '{"usd": "100"}, {"eur": "90"}',
          slug: 'keyboard-1',
          published: true
        },
        {
          manufacturer: 'MS 2',
          name: 'Keyboard 2',
          attributes: '{"key1": "value1", "key2": "value2"}',
          images: 'keyboard2.jpg',
          prices: '{"usd": "90"}, {"eur": "80"}',
          slug: 'keyboard-2',
          published: true
        }
      ]
    }
  },
  {
    name: 'Laptops',
    slug: 'laptops',
    products: {
      create: [
        {
          manufacturer: 'DELL 1',
          name: 'Laptop 1',
          attributes: '{"key1": "value1", "key2": "value2"}',
          images: 'keyboard1.jpg, keyboard2.jpg',
          prices: '{"usd": "100"}, {"eur": "90"}',
          slug: 'laptop-1',
          published: true
        },
        {
          manufacturer: 'DELL 2',
          name: 'Laptop 2',
          attributes: '{"key1": "value1", "key2": "value2"}',
          images: 'keyboard2.jpg',
          prices: '{"usd": "90"}, {"eur": "80"}',
          slug: 'laptop-2',
          published: true
        }
      ]
    }
  },
  {
    name: 'Phones',
    slug: 'phones',
    products: {
      create: [
        {
          manufacturer: 'Samsung 1',
          name: 'Phone 1',
          attributes: '{"key1": "value1", "key2": "value2"}',
          images: 'keyboard1.jpg, keyboard2.jpg',
          prices: '{"usd": "100"}, {"eur": "90"}',
          slug: 'phone-1',
          published: true
        },
        {
          manufacturer: 'Samsung 2',
          name: 'Phone 2',
          attributes: '{"key1": "value1", "key2": "value2"}',
          images: 'keyboard2.jpg',
          prices: '{"usd": "90"}, {"eur": "80"}',
          slug: 'phone-2',
          published: true
        }
      ]
    }
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
  for (const c of categoryData) {
    const category = await prisma.category.create({
      data: c,
    })
    console.log(`Created category ${category.name}`)
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