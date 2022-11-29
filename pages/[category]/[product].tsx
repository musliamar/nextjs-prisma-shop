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
import { makeSerializable } from '../../lib/util'
import { useCount, useDispatchCount } from '../../context/cartContext'
import type { MouseEvent } from 'react'

type Props = {
  product: ProductType
  category: CategoryType
  categories: CategoryType[]
}

export default function Product({ product, categories }: Props) {
  const router = useRouter()
  if (!router.isFallback && !product?.slug) {
    return <ErrorPage statusCode={404} />
  }

  const {name: productName} = product;
  const count = useCount()
  const dispatch = useDispatchCount()

  const handleIncrease = (event: MouseEvent<HTMLButtonElement>) =>
    dispatch({
      type: 'INCREASE',
    })
  const handleDecrease = (event: MouseEvent<HTMLButtonElement>) =>
    dispatch({
      type: 'DECREASE',
    })

  const Button = () => {
    return (
      <>
    <p>Counter: {count}</p>
    <button onClick={handleIncrease}>Increase</button>
    </>
    )
  }

  return (
    <Layout categories={categories}>
      <Head>
        <title>
          {productName + ' - ' + APP_NAME}
        </title>
        <meta property="og:image" content={'tba'} />
      </Head>
      <Container>
        {router.isFallback ? (
          <SingleProduct details={'Loading ...'} />
        ) : (
          <>
            <article className="mb-32">
              <SingleProduct button={<Button />} count={count} details={product} />
            </article>
          </>
        )}
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
    props: {product: makeSerializable(product), categories: categories, category: category}
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
    fallback: false,
  }
}
