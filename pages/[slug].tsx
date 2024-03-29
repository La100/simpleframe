import { getAllPagesWithSlugs, getPageBySlug } from '../lib/api';
import Head from 'next/head';
import Container from '../components/container'
import Header from '../components/header'
import Layout from '../components/layout'
import { Children } from 'react';
import React from 'react';
import Image from 'next/image';


function Page(page, post) {

  return (

    <Layout preview={Children}>
      <Head>
        <script async src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script async src='https://simpleframe.pl/wp-content/plugins/modula-best-grid-gallery/assets/js/front/fancybox.js?ver=2.7.3' id='modula-fancybox-js'></script>

        <link rel='stylesheet' id='modula-video-css-css' href='https://simpleframe.pl/wp-content/plugins/modula-video/assets/css/modula-video-css.css?ver=6.1.1' type='text/css' media='all' />
        <link rel='stylesheet' id='modula-css' href='https://simpleframe.pl/wp-content/plugins/modula-best-grid-gallery/assets/css/front.css?ver=2.7.3' type='text/css' media='all' />
        <link rel='stylesheet' id='modula-pro-effects-css' href='https://simpleframe.pl/wp-content/plugins/modula/assets/css/effects.min.css' type='text/css' media='all' />
        <script async src='https://simpleframe.pl/wp-content/plugins/modula-video/assets/js/fancybox-modula-video.js?ver=6.1.1' id='modula-fancybox-video-js'></script>
        <script async src='https://simpleframe.pl/wp-content/plugins/modula-best-grid-gallery/assets/js/front/fancybox.js?ver=2.7.3' id='modula-fancybox-js'></script>
        <script async src='https://simpleframe.pl/wp-content/plugins/modula-best-grid-gallery/assets/js/modula-wf.js?ver=2.7.3' id='modula-wf-js'></script>
        <script async src='https://simpleframe.pl/wp-content/plugins/modula/assets/js/modula-pro.js?ver=2.6.1' id='modula-pro-js'></script>
        <meta
          property="og:image"
          content={post.featuredImage?.node.sourceUrl}
        />
      </Head>
      <Container>


        <div className='flex flex-col p-10 space-y-8 contentpages '  >
          <div className='mb-5 text-4xl font-bold '>{page.content}</div>
          <div className='mb-5 text-7xl font-bold'>{page.title}</div>
          <div

            className='text-2 text-grey-darker '
            dangerouslySetInnerHTML={{ __html: page.podstrony?.pierwszaCzescTekstu }}
          ></div>


          <div

            className='text-base text-grey-darker  '
            dangerouslySetInnerHTML={{ __html: page.podstrony?.shortcodeGrid }}
          ></div>

          <div
            className='text-base text-grey-darker'
            dangerouslySetInnerHTML={{ __html: page.podstrony?.drugaCzescTekstu }}
          ></div>
          <div
            className='text-base text-grey-darker '
            dangerouslySetInnerHTML={{ __html: page.podstrony?.shortcodeGridDrugi }}
          ></div>

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