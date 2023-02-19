import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import CityLinks from "../components/cityLinks";
import ContactUs from "../components/contactUs"
import styles from '../styles/Home.module.scss';

export default function Portsmouth () {

  return (
    <>
      <Head>
        <title>Heating Oil Spills, Leaks, Removal, and Abatement in Portsmouth</title>
        <meta property='og:title' content='Portsmouth Heating Oil Spills, Leaks, Removal, and Abatement.' />
        <meta property='og:url' content='https://www.chesapeakebayoil.com/portsmouth' />
        <meta property='og:type' content='article' />
        <meta propety='og:description' content='How to address unused or potentially leaking heating oil tanks in Portsmouth, Virginia.' />
      </Head>
      <main className={styles.container}>
        <section>
          <Link href='/' passHref><span className={styles.backButton}>&larr; Back To Home</span></Link>
          <h1>Heating Oil Tank Information for Portsmouth, Virginia</h1>
          <article>
            <h2>Permitting in the City of Portsmouth</h2>
            <p>{"The City of Portsmouth requires that a mechanical permit application be submitted for the installation or removal of fuel storage tanks. More details can be found on the "} <a target={'_blank'} rel='noreferrer' href="https://www.portsmouthva.gov/312/Permits-Inspections">{"Portsmouth Permits & Inspections website."}</a></p>

            <Image
              src='/static/city_portsmouth_opt.jpg'
              alt='River Front Park, Portsmouth, VA.'
              width={1280}
              height={853}
            />

            {/* <img
              id='portsmouth'
              src='/static/city_portsmouth_opt.jpg'
              alt='River Front Park, Portsmouth, VA.'
            /> */}
            <small>River Front Park, Portsmouth, Virginia.</small>

            <p>{"Portsmouth requires an inspection for underground storage tank abatements, whether the tank is removed from the ground or filled-in-place with concrete or sand. Tanks within approximately 3 feet of the foundation for a structure should be filled-in-place rather than pulled from the ground so as to not risk the integrity of the on-site structure."}</p>

            <p>{"If you have a heating oil tank that is currently not-in-use, or you suspect that your tank may be leaking fuel, we can help you find a contractor who can provide options for tank abatement at a low cost. Feel free to leave your information in the "}<a href='#contactUs'>Contact Us</a>{" form with any questions or concerns regarding your oil tank and we will be able to assist you within one business day or less."}</p>
          </article>
          <CityLinks />
        </section>
        <ContactUs />
      </main>
    </>
  )
}