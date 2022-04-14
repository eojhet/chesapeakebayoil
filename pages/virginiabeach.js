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
          <h1>Heating Oil Tank Information for Virginia Beach, Virginia</h1>
          <article>
            <h2>Permitting in the City of Virginia Beach</h2>
            <p>{'The City of Virginia Beach "issues building permits for the installation, repair, upgrade, and closure of underground and aboveground storage tanks", according to their website '}
            <a target={'_blank'} rel='noreferrer' href="https://www.vbgov.com/government/departments/planning/permits-inspections/pages/underground-aboveground-storage-tanks.aspx">{"Underground & Aboveground Storage Tanks - Permits & Inspections FAQs"}</a>
            {". However, local contractors and city inspectors have pointed out that permitting for an aboveground storage tank removal is not actually required."} </p>

            <img
              id='virginiaBeach'
              src='/static/city_virginiaBeach.jpg'
              alt='Statue of Neptune in Virginia Beach.'
            />
            <small>King Neptune, Bronze, Virginia Beach, Virginia.</small>

            <p>{"Virginia Beach inspections requires that tanks located within approximately 3.5 feet from the foundation to a structure be filled with a concrete slurry. These tanks cannot be pulled as it could be a risk to the structural integrity of the on-site structure, possibly resulting in cracks to the foundation or exterior walls. Those tanks not within the 3.5 foot zone can be pulled from the ground or, if the homeowner is unwilling to remove due to a tank being beneath a paved area or patio, can be filled with a concrete slurry."}</p>

            <p>{"If you have a heating oil tank that is currently not-in-use, or you suspect that your tank may be leaking fuel, we can help you find a contractor who can provide options for tank abatement at a low cost. Feel free to leave your information in the "}<a href='#contactUs'>Contact Us</a>{" form with any questions or concerns regarding your oil tank and we will be able to assist you within one business day or less."}</p>
          </article>
        </section>
        <ContactUs />
      </main>
    </>
  )
}