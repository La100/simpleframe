import Head from 'next/head'
import { GetStaticProps } from 'next'
import Container from '../components/container'
import Header from '../components/header'
import Layout from '../components/layout'
import { getAllPostsForHome } from '../lib/api'

export default function Index({ allPosts: { edges }, preview }) {
  const heroPost = edges[0]?.node
  const morePosts = edges.slice(1)

  return (
    <Layout preview={preview}>
      <Head>
        <title>Simple Frame</title>
      </Head>
      <Container>
        <Header />
      
      </Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = await getAllPostsForHome(preview)

  return {
    props: { allPosts, preview },
    revalidate: 10,
  }
}
