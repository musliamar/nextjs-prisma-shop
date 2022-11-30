import { useEffect } from 'react'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import SingleProduct from '../../components/single-product/index'
import Layout from '../../components/layout'
import prisma from '../../lib/prisma'
import Head from 'next/head'
import { APP_NAME } from '../../lib/constants'
import type ProductType from '../../interfaces/product'
import type CategoryType from '../../interfaces/category'
import { makeSerializable, areArraysEqual } from '../../lib/util'
import { useDispatch, useStore } from '../../store/context'

type Props = {
  product: ProductType
  category: CategoryType
  categories: CategoryType[]
}

export default function Product({ product, categories }: Props) {

  const router = useRouter()
  const {categories: oldCategories} = useStore();
  const dispatch = useDispatch()

  if (!router.isFallback && !product?.slug) {
    return <ErrorPage statusCode={404} />
  }

  useEffect(() => {
    if(oldCategories.length === 0 || !areArraysEqual(oldCategories, categories)) dispatch({
      type: 'SET_CATEGORIES',
      payload: categories
    })
  }, [])

  const {name: productName} = product;

  return (
    <Layout>
      <Head>
        <title>
          {productName + ' - ' + APP_NAME}
        </title>
        <meta property="og:image" content={'tba'} />
      </Head>
      <Container>
        <article className="mb-32">
          <SingleProduct details={product} />
        </article>
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ params }: Params) {

  const categories = await prisma.category.findMany();
  const product = await prisma.product.findUnique({
    where: { slug: params.product },
  })

  const category = await prisma.category.findUnique({
    where: {id: product?.categoryId}
  });
  
  return {
    props: {product: makeSerializable(product), categories: categories, category: category},
    revalidate: 60
  }
}

type Params = {
  params: {
    product: string
    category: string
  }
}

export async function getStaticPaths() {

  const products = await prisma.product.findMany({
    where: { published: true },
  })

  return {
    paths: products.map((product: any) => {
      return {
        params: {
          category: product.categorySlug,
          product: product.slug
        },
      }
    }),
    fallback: 'blocking',
  }
}
