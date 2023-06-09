import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import titleProvider from './title-provider'

const Home = () => {

  const title = titleProvider()

  return (
    <>
      <Head>
        <title>Jest Testing Page!</title>
      </Head>
      <main className={styles.main}>
        <h1>{title}</h1>
      </main>
    </>
  )
}

export default Home