import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import CityLinks from "../components/cityLinks";
import ContactUs from "../components/contactUs"
import styles from '../styles/Home.module.scss';

export default function Norfolk () {

  return (
    <>
     <Head>
        <title>Heating Oil Spills, Leaks, Removal, and Abatement in Norfolk</title>
        <meta property='og:title' content='Norfolk Heating Oil Spills, Leaks, Removal, and Abatement.' />
        <meta property='og:url' content='https://www.chesapeakebayoil.com/norfolk' />
        <meta property='og:type' content='article' />
        <meta propety='og:description' content='How to address unused or potentially leaking heating oil tanks in Norfolk, Virginia.' />
      </Head>
      <main className={styles.container}>
        <section>
          <Link href='/' passHref><span className={styles.backButton}>&larr; Back To Home</span></Link>
          <h1>Heating Oil Tank Information for Norfolk, Virginia</h1>
          <article>
            <h2>Permitting in the City of Norfolk</h2>
            <p>{"The City of Norfolk does not currently require a permit for "}<em>residential</em>{" underground storage tank (UST) or aboveground storage tank (AST) abatement/removal (whether removing a tank or filling it in place with sand or concrete). However, the "}
            <a target={'_blank'} rel='noreferrer' href="https://www.norfolk.gov/619/Fire-Inspections-Permits">Norfolk Fire Marshal</a>
            {" does require permitting and inspection for UST abatements."}</p>

            <Image
              src='/static/city_norfolk.jpg'
              alt='Downtown Norfolk, Virginia Skyline'
              width={1280}
              height={816}
            />

            {/* <img
              id='norfolk'
              src='/static/city_norfolk.jpg'
              alt='Downtown Norfolk, Virginia Skyline'
            /> */}
            <small>Downtown Norfolk, Virginia Skyline.</small>

            <p>{"The Norfolk Fire Marshal does not have guidelines dictating how a tank should be abated beyond those within the Internation Fire Code 2018 regulations. It is up to the homeowner and their consultant to decide as to whether a tank should be removed from the ground or filled in place with sand or concrete slurry. It is best to not remove tanks situated within 3 feet of the foundation of an on-site structure, so as to prevent the foundation and exterior walls from forming cracks. It is safest to fill tanks closer than 3 feet with a concrete slurry."}</p>

            <p>{"According to the Norfolk, Virginia Code of Ordinances "}
            <a target={'_blank'} rel='noreferrer' href="https://library.municode.com/va/norfolk/codes/code_of_ordinances?nodeId=COCI_CH17.1FISC">Section 17.1-44 (32):</a></p>
            <blockquote>
              {"Underground storage tanks: All abandoned storage tanks or underground storage tanks not in use for more than ninety (90) days shall be filled or removed pursuant to the protocols established by the fire official. "}
            </blockquote>

            <p>{"Feel free to peruse those sources provided for more information concerning UST and AST abatements in Norfolk."}</p>

            <p>{"If you have a heating oil tank that is currently not-in-use, or you suspect that your tank may be leaking fuel, we can help you find a contractor who can provide options for tank abatement at a low cost. Feel free to leave your information in the "}<a href='#contactUs'>Contact Us</a>{" form with any questions or concerns regarding your oil tank and we will be able to assist you within one business day or less."}</p>
          </article>
          <CityLinks />
        </section>
        <ContactUs />
      </main>
    </>
  )
}