import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

// This is an example of a component
// 
const Home = () => {
  return (
    <>
      {/* The head component is used for metadata
          surrounding the page */}
      <Head>
        <title>Client side routing, page one</title>
      </Head>
      <main className={styles.main}>
        <h1>Page one!</h1>
        {/* By putting the link component here we
            can pre-emptively load page two, then
            when we click the link the necessary
            files will be in the browser and ready 
            to go. */}
        <Link href="/pre-13/client-side-routing/page-two">
          Click for page two!
        </Link>
      </main>
    </>
  )
}

export default Home

