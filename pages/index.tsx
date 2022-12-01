import { useEffect } from 'react'
import { useStore } from '../store/context'
import { areArraysEqual } from '../lib/util'
import Container from '../components/container'
import Homepage from '../components/homepage'
import Layout from '../components/layout'
import Head from 'next/head'
import { APP_NAME, SET_CATEGORIES } from '../lib/constants'
import type ProductType from '../interfaces/product'
import type CategoryType from '../interfaces/category'
import prisma from '../lib/prisma'
import { makeSerializable } from '../lib/util'
import { useDispatch } from '../store/context'

type Props = {
  products: ProductType[],
  categories: CategoryType[]
}

export default function Index({ products, categories }: Props) {

  const {categories: oldCategories} = useStore();
  const dispatch = useDispatch()

  useEffect(() => {
    if(oldCategories.length === 0 || !areArraysEqual(oldCategories, categories)) dispatch({
      type: SET_CATEGORIES,
      payload: categories
    })
  }, [])

  return (
    <>
      <Layout>
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
    props: {products: makeSerializable(products), categories: categories},
    revalidate: 80
  }
}
