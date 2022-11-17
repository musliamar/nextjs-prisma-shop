import Container from '../components/container'
import Homepage from '../components/homepage'
import Layout from '../components/layout'
import Head from 'next/head'
import { APP_NAME } from '../lib/constants'
import Post from '../interfaces/post'
import prisma from '../lib/prisma'
import { makeSerializable } from '../lib/util'

type Props = {
  products: Post[]
}

export default function Index({ products }: Props) {
  
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
  const products = await prisma.post.findMany({
    where: { published: true },
  })
  
  return {
    props: {products: makeSerializable(products)}
  }
}
