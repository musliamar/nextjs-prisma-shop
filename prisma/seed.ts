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
          manufacturer: 'HP 1',
          name: 'Desktop 1',
          attributes: '{"cpu": "i3-10100F", "gpu": "GTX 1650", "motherboard": "Gigabyte", "ssd": "256 gb", "ram": "8 gb", "GPU memory": "4 gb", "OS": "Windows 10"}',
          description: 'This is <b>Desktop 1</b> description.',
          images: 'desktop1-1.jpg, desktop1-2.jpg',
          price: 900,
          slug: 'keyboard-1',
          published: true
        },
        {
          manufacturer: 'HP 2',
          name: 'Desktop 2',
          attributes: '{"cpu": "i3-10100F", "gpu": "GTX 1650", "motherboard": "Gigabyte", "ssd": "512 gb", "ram": "16 gb", "GPU memory": "4 gb", "OS": "Windows 10"}',
          description: 'This is <b>Desktop 2</b> description.',
          images: 'desktop2-1.jpg, desktop2-2.jpg',
          price: 1200,
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
          attributes: '{"cpu": "i5-8350u", "gpu": "Integrated", "motherboard": "Gigabyte", "ssd": "256 gb", "ram": "8 gb", "Display": "13.3 inch", "OS": "Windows 10"}',
          description: 'This is <b>Laptop 1</b> description.',
          images: 'laptop1-1.jpg, laptop1-2.jpg',
          price: 1100,
          slug: 'laptop-1',
          published: true
        },
        {
          manufacturer: 'DELL 2',
          name: 'Laptop 2',
          attributes: '{"cpu": "i5-8350u", "gpu": "Integrated", "motherboard": "Gigabyte", "ssd": "512 gb", "ram": "8 gb", "Display": "16 inch", "OS": "Windows 10"}',
          description: 'This is <b>Laptop 2</b> description.',
          images: 'laptop2-1.jpg, laptop2-2.jpg',
          price: 1300,
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
          manufacturer: 'Apple',
          name: 'iPhone',
          attributes: '{"color": ["blue", "purple", "midnight", "starlight"], "storage": ["128 gb", "256 gb", "512 gb"]}',
          description: 'This is <b>iPhone</b> description.',
          images: 'phone1-1.jpg, phone1-2.jpg, phone1-3.jpg, phone1-4.png',
          price: 9999,
          slug: 'phone-1',
          published: true
        },
        {
          manufacturer: 'Samsung',
          name: 'Galaxy',
          attributes: '{"color": ["black", "white", "burgundy", "green"], "storage": ["128 gb", "256 gb", "512 gb"]}',
          description: 'This is <b>Galaxy</b> description.',
          images: 'phone2-1.jpg, phone2-2.jpg, phone2-3.jpg, phone2-4.jpg',
          price: 1500,
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