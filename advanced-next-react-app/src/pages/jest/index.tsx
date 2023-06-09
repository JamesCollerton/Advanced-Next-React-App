import Head from 'next/head'
import styles from '@/styles/Home.module.css'

const Home = () => {
  return (
    <>
      <Head>
        <title>Jest Testing Page!</title>
      </Head>
      <main className={styles.main}>
        <h1>Here's our testing page!</h1>
      </main>
    </>
  )
}

export default Home