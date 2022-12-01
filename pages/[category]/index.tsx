import { useEffect } from 'react'
import { useStore } from '../../store/context'
import { areArraysEqual } from '../../lib/util'
import Container from '../../components/container'
import Category from '../../components/single-category'
import Layout from '../../components/layout'
import Head from 'next/head'
import { APP_NAME, SET_CATEGORIES } from '../../lib/constants'
import type ProductType from '../../interfaces/product'
import type CategoryType from '../../interfaces/category'
import prisma from '../../lib/prisma'
import { makeSerializable } from '../../lib/util'
import { useDispatch } from '../../store/context'

type Props = {
  products: ProductType[]
  category: CategoryType
  categories: CategoryType[]
}

export default function Index({ products, category, categories }: Props) {

  const {categories: oldCategories} = useStore();
  const dispatch = useDispatch()

  useEffect(() => {
    if(oldCategories.length === 0 || !areArraysEqual(oldCategories, categories)) dispatch({
      type: SET_CATEGORIES,
      payload: categories
    })
  }, [])

  const {id, name, slug} = category;
  
  return (
    <>
      <Layout>
        <Head>
          <title>{name + ' - ' + APP_NAME}</title>
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

    const categories = await prisma.category.findMany();
    const category = categories.find(c => c.slug === params.category)

    const products = await prisma.product.findMany({
      where: { categoryId: category?.id },
    })
    
    return {
      props: {products: makeSerializable(products), category: category, categories: categories},
      revalidate: 70
    }
  }
  
  export async function getStaticPaths() {
  
    const categories = await prisma.category.findMany()
  
    return {
      paths: categories.map((category: CategoryType) => {
        return {
          params: {
            category: category.slug,
          },
        }
      }),
      fallback: 'blocking',
    }
  }
  
