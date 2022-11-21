import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import Body from '../../components/body'
import Layout from '../../components/layout'
import prisma from '../../lib/prisma'
import Head from 'next/head'
import { APP_NAME } from '../../lib/constants'
import type ProductType from '../../interfaces/product'
import type CategoryType from '../../interfaces/category'
import { makeSerializable } from '../../lib/util'

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
  return (
    <Layout categories={categories}>
      <Container>
        {router.isFallback ? (
          <Body details={'Loading ...'} />
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>
                  {product.name} - {APP_NAME}
                </title>
                <meta property="og:image" content={'tba'} />
              </Head>
              <Body details={product} />
            </article>
          </>
        )}
      </Container>
    </Layout>
  )
}

type Params = {
  params: {
    product: string
    category: string
  }
}

export async function getStaticProps({ params }: Params) {
  const categories = await prisma.category.findMany();
  const product = await prisma.product.findUnique({
    where: { slug: params.product },
  })

  const category = await prisma.category.findUnique({
    where: {id: product.categoryId}
  });
  
  return {
    props: {product: makeSerializable(product), categories: categories, category: category}
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
