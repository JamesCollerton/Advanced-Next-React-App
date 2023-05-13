import '@/styles/globals.css'
import type { AppProps } from 'next/app'

// This is in our _app.tsx file and
// defines our custom app
export default function App({ Component, pageProps }: AppProps) {

  // Here we log the incoming pageProps. These
  // are the same properties we return from our 
  // getServerSideProps or getStaticProps in our
  // page
  console.log(pageProps)

  // Here we demonstrate how we can add extra
  // information in order to feed it onto the
  // page to be rendered
  pageProps.extraInfo = "Adding extra data!"

  // Now we add some functionality that appears
  // on every page. We will get the page itself
  // as well as the components defined in the
  // individual files
  return (
    <>
      {/* <h1>Title on every page!</h1> */}
      <Component {...pageProps} />
    </>
  )
}
