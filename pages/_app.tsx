import { AppProps } from 'next/app'
import '../styles/index.css'
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  
  // przekierowanie z `/my-page` na `/[slug]`
  if (router.pathname === '/my-page') {
    router.replace('/[slug]', '/my-page')
  }
  
  return <Component {...pageProps} />
}

export default MyApp
