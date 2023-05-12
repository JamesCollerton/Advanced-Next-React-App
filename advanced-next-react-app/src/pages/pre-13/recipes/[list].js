import { useRouter } from 'next/router';
import styles from '@/styles/Home.module.css'
 
// Here we define how to dynamically render pages
export default function Page() {
  
    // In this case we retrieve the router and
    // then use it to display the path for the
    // dynamic routing.
    const router = useRouter();

    // Here we could do some work to retrieve
    // data or dynamically render a page depending
    // on the path.

    // We return a simple header including the
    // path.
    return (
        <main className={styles.main}>
            <h1>
                The path is: {router.query.list}
            </h1>
        </main>
    );
}