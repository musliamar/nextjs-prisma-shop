import { useEffect } from 'react'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import SingleProduct from '../../components/single-product/single-product'
import Layout from '../../components/layout'
import prisma from '../../lib/prisma'
import Head from 'next/head'
import { ADD_TO_CART, APP_NAME, SET_CATEGORIES } from '../../lib/constants'
import type ProductType from '../../interfaces/product'
import type CategoryType from '../../interfaces/category'
import { makeSerializable, areArraysEqual } from '../../lib/util'
import { useDispatch, useStore } from '../../store/context'

type Props = {
  product: ProductType
  categories: CategoryType[]
}

export default function Product({ product, categories }: Props) {

  const router = useRouter()
  const {categories: oldCategories, itemsInCart} = useStore();
  const dispatch = useDispatch()

  if (!router.isFallback && !product?.slug) {
    return <ErrorPage statusCode={404} />
  }

  useEffect(() => {
    if(oldCategories.length === 0 || !areArraysEqual(oldCategories, categories)) dispatch({
      type: SET_CATEGORIES,
      payload: categories
    })
  }, [])

  const addToCart = () => {
    dispatch({
      type: ADD_TO_CART,
      payload: product
    })
  }

  const AddToCartButton = () =>  <>
    <p>{itemsInCart.length}</p>
    <button onClick={addToCart}>Add to cart</button>
    </>

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
        <SingleProduct addToCartButton={<AddToCartButton />} details={product} />
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ params }: Params) {

  const categories = await prisma.category.findMany();
  const product = await prisma.product.findUnique({
    where: { slug: params.product },
  })
  
  return {
    props: {product: makeSerializable(product), categories: categories},
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
