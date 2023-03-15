import Head from 'next/head'
import { GetStaticProps } from 'next'
import Container from '../components/container'
import Header from '../components/header'
import Layout from '../components/layout'
import { getAllPostsForHome } from '../lib/api'
import { motion } from "framer-motion"


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

          
        
        </div>

      </div>
      <div className="bg-white mt-[150px]">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8 mt-10">
        <div className="relative isolate overflow-hidden bg-black px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            className="absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:translate-y-0 lg:-translate-x-1/2"
            aria-hidden="true"
          >
            <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="1" />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#19b5fe" />
                <stop offset={1} stopColor="#19b5fe" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left mt-8">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mt-10">
              Boost your productivity.
              <br />
              Start using our app today.
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                href="#"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get started
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-white">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="relative h-80 lg:mt-8">
        
            <img
              className="absolute top-0 left-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10 mt-16 "
              src="/stream.jpg"
              alt="App screenshot"
              width={1824}
              height={1080}
            />
           
    
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
