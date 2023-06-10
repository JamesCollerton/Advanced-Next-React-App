import Head from 'next/head'
import styles from '@/styles/Home.module.css'

const Home = () => {

    const handleClick = () => {
        alert("Button has been clicked!")
    }

    return (
        <>
            <Head>
                <title>Jest Testing Page!</title>
            </Head>
            <main className={styles.main}>
                <button id="button-test-id" onClick={handleClick}>
                    Press Me!
                </button>
            </main>
        </>
    )
}

export default Home