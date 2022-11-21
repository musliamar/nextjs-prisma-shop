import Container from '../../components/container'
import Category from '../../components/category'
import Layout from '../../components/layout'
import Head from 'next/head'
import { APP_NAME } from '../../lib/constants'
import type ProductType from '../../interfaces/product'
import type CategoryType from '../../interfaces/category'
import prisma from '../../lib/prisma'
import { makeSerializable } from '../../lib/util'

type Props = {
  products: ProductType[]
  category: CategoryType
  categories: CategoryType[]
}

export default function Index({ products, category, categories }: Props) {
  
  return (
    <>
      <Layout categories={categories}>
        <Head>
          <title>{category.name} - {APP_NAME}</title>
        </Head>
        <Container>
          <Category products={products} category={category} />
        </Container>
      </Layout>
    </>
  )
}

type Params = {
    params: {
      category: string
    }
  }
  
  export async function getStaticProps({ params }: Params) {

    const category = await prisma.category.findUnique({
        where: {slug: params.category}
    });

    const categories = await prisma.category.findMany();

    const products = await prisma.product.findMany({
      where: { categoryId: category.id },
    })
    
    return {
      props: {products: makeSerializable(products), category: makeSerializable(category), categories: categories}
    }
  }
  
  export async function getStaticPaths() {
  
    const categories = await prisma.category.findMany()
  
    return {
      paths: categories.map((category: any) => {
        return {
          params: {
            category: category.slug,
          },
        }
      }),
      fallback: false,
    }
  }
  
