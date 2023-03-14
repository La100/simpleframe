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
      <div className="z-99">
      <Header/>
      </div>
       
        <div className="relative">
        <div className="bg-hero-section bg-no-repeat h-screen bg-center bg-cover ">
          <video autoPlay loop muted className="absolute inset-0 object-cover h-screen xl:h-auto grayscale">
            <source
              src="/video3.mp4"
              type="video/mp4"
            />
          </video>
         
          <div className="absolute inset-0">
          
            <div className="w-100px sm:text-5xl text-4xl font-thin sm:my-56 my-32 mx-16 text-center text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores cum nobis reprehenderit sequi explicabo at.
            </div>
            </div>
       
        
        </div>

      </div>
     
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
