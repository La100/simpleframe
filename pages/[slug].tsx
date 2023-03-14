import { getAllPagesWithSlugs, getPageBySlug } from '../lib/api';
import Head from 'next/head';
import Container from '../components/container'
import Header from '../components/header'
import Layout from '../components/layout'
import { Children } from 'react';
import React from 'react';

function Page(page) {
    return (

        <Layout preview={Children}>
      <Head>
        <title>{`Test`}</title>
      </Head>
      <Container>
        <Header />
        <div className='flex flex-col p-10 space-y-8' >
        <div className='mb-5 text-4xl font-bold mt-12'>{page.title}</div>
        <div
          className='text-base text-grey-darker'
          dangerouslySetInnerHTML={{ __html: page.podstrony.pierwszaCzescTekstu }}
        ></div>
        <div>{page.podstrony.shortcodeGrid}</div>
        <div
          className='text-base text-grey-darker'
          dangerouslySetInnerHTML={{ __html: page.podstrony.pierwszaCzescTekstu }}
        ></div>
          <div>{page.podstrony.shortcodeGridDrugi}</div>
     </div>
     
      </Container>
    </Layout>
     
    );
  }

export async function getStaticPaths() {
    const pagesWithSlugs = await getAllPagesWithSlugs();
    return {
      paths: pagesWithSlugs.edges.map(({ node }) => `/${node.slug}`) || [],
      fallback: true,
    };
  }
  export async function getStaticProps({ params }) {
    const page = await getPageBySlug(params.slug);
    return { props: page };
  }
export default Page;