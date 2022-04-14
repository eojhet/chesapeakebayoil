import Head from "next/head";
import Link from "next/link";
import ContactUs from "../components/contactUs"
import styles from '../styles/Home.module.scss';

export default function VirginiaBeach () {

  return (
    <>
      <Head>
        <title>Heating Oil Spills, Leaks, Removal, and Abatement in Virginia Beach</title>
        <meta property='og:title' content='Virginia Beach Heating Oil Spills, Leaks, Removal, and Abatement.' />
        <meta property='og:url' content='https://www.chesapeakebayoil.com/virginiabeach' />
        <meta property='og:type' content='article' />
        <meta propety='og:description' content='How to address unused or potentially leaking heating oil tanks in Virginia Beach, Virginia.' />
      </Head>
      <main className={styles.container}>
        <section>
          <Link href='/' passHref><span className={styles.backButton}>&larr; Back To Home</span></Link>
          <h1>Heating Oil Tank Information for Virginia Beach Virginia</h1>
          <article>
            <h2>Permitting in the City of Virginia Beach</h2>
            <p>{"This page is still in progress. We will have more city specific information for you in the very near future. In the meantime, please reach out to us via our "}<a href='#contactUs'>Contact Us</a>{" form."}</p>

            <p>{"If you have a heating oil tank that is currently not-in-use, or you suspect that your tank may be leaking fuel, we can help you find a contractor who can provide options for tank abatement at a low cost. Feel free to leave your information in the "}<a href='#contactUs'>Contact Us</a>{" form with any questions or concerns regarding your oil tank and we will be able to assist you within one business day or less."}</p>
          </article>
        </section>
        <ContactUs />
      </main>
    </>
  )
}