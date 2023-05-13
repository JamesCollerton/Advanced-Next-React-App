import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { HelloWorldData } from '@/pages/api/hello-world'

// Here is our page functional component 
// responsible for taking the retrieved 
// data and displaying it in the browser
const Home = (helloWorldData: HelloWorldData) => {
  return (
    <>
      <Head>
        <title>API Routing</title>
      </Head>
      <main className={styles.main}>
        {/* Here we unpack our props and display
            them on the page */}
        <h1>{helloWorldData.text}</h1>
      </main>
    </>
  )
}

// This will be run every time we load the
// page.
export async function getServerSideProps() {

  // Here we retrieve the results from our 
  // newly defined API.
  const res = await fetch(`http://localhost:3000/api/hello-world`);
  const helloWorldData = await res.json();

  // Finally returning them to the component
  // to display them
  return { 
    props: helloWorldData
  };

}

export default Home