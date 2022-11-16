import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import Body from '../../components/body'
import Header from '../../components/header'
import Layout from '../../components/layout'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import Head from 'next/head'
import { APP_NAME } from '../../lib/constants'
import markdownToHtml from '../../lib/markdownToHtml'
import type PostType from '../../interfaces/post'

type Props = {
  post: PostType
  morePosts: PostType[]
  preview?: boolean
}

export default function Post({ post, morePosts, preview }: Props) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <Body>Loading…</Body>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>
                  {post.title} - {APP_NAME}
                </title>
                <meta property="og:image" content={post.ogImage.url} />
              </Head>
              <Body content={post.content} />
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
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
