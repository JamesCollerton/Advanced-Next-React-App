import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

interface Title {
  title: string
}
const Home = (title: Title) => {
  return (
    <>
      <Head>
        <title>Server-Side Rendering</title>
        <meta name="description" content="Server-side rendering example" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>{title.title}</h1>
      </main>
    </>
  )
}

export default Home

export async function getServerSideProps() {
  
  console.log("Server side rendering function")

  return { props: { title: "Server side rendering is great!" } };
  
}

