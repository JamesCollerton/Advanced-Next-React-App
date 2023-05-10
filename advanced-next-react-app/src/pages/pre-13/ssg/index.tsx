import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Static Site Generation</title>
        <meta name="description" content="Static site generation example" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>This page has been statically generated at build time!</h1>
      </main>
    </>
  )
}

export async function getServerSideProps() {
  
  console.log("Server side rendering function")

  return { props: { title: "Server side rendering is great!" } };
  
}
