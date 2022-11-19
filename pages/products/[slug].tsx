import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import Body from '../../components/body'
import Header from '../../components/header'
import Layout from '../../components/layout'
import prisma from '../../lib/prisma'
import Head from 'next/head'
import { APP_NAME } from '../../lib/constants'
import type ProductType from '../../interfaces/product'
import { makeSerializable } from '../../lib/util'

type Props = {
  product: ProductType
}

export default function Post({ product }: Props) {
  const router = useRouter()
  if (!router.isFallback && !product?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout>
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
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {

  const product = await prisma.product.findUnique({
    where: { slug: params.slug },
  })
  
  return {
    props: {product: makeSerializable(product)}
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
          slug: product.slug,
        },
      }
    }),
    fallback: false,
  }
}
