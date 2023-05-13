import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Image from 'next/image';

const Home = () => {
  return (
    <>
      <Head>
        <title>Static files</title>
      </Head>
      <main className={styles.main}>
        <Image src="/next.svg" alt="Next Logo" width="64" height="64" />;
      </main>
    </>
  )
}

export default Home

