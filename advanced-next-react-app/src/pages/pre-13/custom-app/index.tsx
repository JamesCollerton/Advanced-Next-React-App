import Head from 'next/head'
import styles from '@/styles/Home.module.css'

// Here we declare an interface for the props
// we intend to pass to the functional component.
// Note how we have added another field corresponding
// to the extra data we expect from the custom
// app.
interface Title {
  title: string,
  extraInfo: string
}

// Here we render a page using the data from
// our props and the data added by the Custom 
// App
const Home = (title: Title) => {
  return (
    <>
      <Head>
        <title>Custom App</title>
      </Head>
      <main className={styles.main}>
        <h1>{title.title}</h1>        
        <p>{title.extraInfo}</p>
      </main>
    </>
  )
}

// Basic function ran on the server after every
// request.
export async function getServerSideProps() {

  // Here we return some static props. It is these
  // props that are logged in the custom app each time
  // we load a page.
  return { 
    props: { 
      title: "Title of Custom App page",
    } 
  };

}

export default Home