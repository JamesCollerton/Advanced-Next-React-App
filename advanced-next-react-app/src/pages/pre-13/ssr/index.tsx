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
// in turn fed to it by the 'getServerSideProps' 
// function
const Home = (title: Title) => {
  return (
    <>
      {/* The head component is used for metadata
          surrounding the page */}
      <Head>
        <title>Server-Side Rendering</title>
        <meta name="description" content="Server-side rendering example" />
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

// The getServerSideProps function is ran every time
// we load the page. It can be responsible for fetching
// data or doing any per-request functionality.
export async function getServerSideProps() {

  // We will see this printed on every page load.
  console.log("Server side rendering called!")

  // Here we pass on a static title and a random
  // number. We will get a different number on every
  // page load.
  return { 
    props: { 
      title: "Server side rendering is great!",
      randomNumber: Math.random() 
    } 
  };

}

export default Home

