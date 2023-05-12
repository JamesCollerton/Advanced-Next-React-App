import Head from 'next/head'
import styles from '@/styles/Home.module.css'

// This is the functional component acting as our
// web page. Notice how it expects props, which are
// in turn fed to it by the 'getStaticProps' 
// function
const Home = () => {
  return (
    <>
      {/* The head component is used for metadata
          surrounding the page */}
      <Head>
        <title>Client side routing, page two</title>
      </Head>
      <main className={styles.main}>
        {/* Here we unpack our props and display
            them on the page */}
        <h1>Page two!</h1>
      </main>
    </>
  )
}

export default Home

