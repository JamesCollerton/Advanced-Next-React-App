import Head from 'next/head'
import styles from '@/styles/Home.module.css'

// Here we declare an interface for the props
// we intend to pass to the functional component
interface Title {
  title: string,
  randomNumber: number
}

// This is the functional component acting as our
// web page. Notice how it expects props, which are
// in turn fed to it by the 'getStaticProps' 
// function
const Home = (title: Title) => {
  return (
    <>
      {/* The head component is used for metadata
          surrounding the page */}
      <Head>
        <title>Static Site Generation</title>
        <meta name="description" content="Static site generation example" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {/* Here we unpack our props and display
            them on the page */}
        <h1>{title.title}</h1>
        <p>{title.randomNumber}</p>
      </main>
    </>
  )
}

// The getStaticProps function is ran once at build
// time
export async function getStaticProps() {

  // We will see this printed only once
  console.log("Static site generation called!")

  // Here we pass on a static title and a random
  // number. We should get the same number on every
  // page load
  return { 
    props: { 
      title: "Static site generation is great!",
      randomNumber: Math.random() 
    } 
  };

}

export default Home

