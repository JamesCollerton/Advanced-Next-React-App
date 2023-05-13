import Head from 'next/head'
import styles from '@/styles/CssModule.module.css'

const Home = () => {
  return (
    <>
      <Head>
        <title>Custom App</title>
      </Head>
      <main className={styles.green}>
        <h1>This should be green!</h1>        
      </main>
    </>
  )
}

export default Home