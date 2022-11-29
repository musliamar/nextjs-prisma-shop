import Container from '../components/container'
import Homepage from '../components/homepage'
import Layout from '../components/layout'
import Head from 'next/head'
import { APP_NAME } from '../lib/constants'
import type Product from '../interfaces/product'
import type Category from '../interfaces/category'
import prisma from '../lib/prisma'
import { makeSerializable } from '../lib/util'

type Props = {
  products: Product[],
  categories: Category[]
}

export default function Index({ products, categories }: Props) {

  return (
    <>
      <Layout categories={categories}>
        <Head>
          <title>Homepage - {APP_NAME}</title>
        </Head>
        <Container>
          <Homepage products={products} />
        </Container>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const categories = await prisma.category.findMany();
  const products = await prisma.product.findMany({
    where: { published: true },
  })
  
  return {
    props: {products: makeSerializable(products), categories: categories}
  }
}
