import Alert from './alert'
import Footer from './footer'
import Meta from './meta'
import Header from './header'

export default function Layout({ preview, children }) {
  return (
    <>
    <Header/>
      <Meta />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
