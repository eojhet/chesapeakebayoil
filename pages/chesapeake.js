import Head from "next/head";
import Link from "next/link";
import CityLinks from "../components/cityLinks";
import ContactUs from "../components/contactUs"
import styles from '../styles/Home.module.scss';

export default function Chesapeake () {

  return (
    <>
      <Head>
        <title>Heating Oil Spills, Leaks, Removal, and Abatement in Chesapeake</title>
        <meta property='og:title' content='Chesapeake Heating Oil Spills, Leaks, Removal, and Abatement.' />
        <meta property='og:url' content='https://www.chesapeakebayoil.com/chesapeake' />
        <meta property='og:type' content='article' />
        <meta propety='og:description' content='How to address unused or potentially leaking heating oil tanks in Chesapeake, Virginia.' />
      </Head>
      <main className={styles.container}>
        <section>
          <Link href='/' passHref><span className={styles.backButton}>&larr; Back To Home</span></Link>
          <h1>Heating Oil Tank Information for Chesapeake, Virginia</h1>
          <article>
            <h2>Permitting in the City of Chesapeake</h2>
            <p>{"The City of Chesapeake does not currently require a permit for "}<em>residential</em>{" heating oil tank abatements (whether removing a tank or filling it in place with sand or concrete). However, new tank installation or oil furnace installation may require permitting with the city. "}
            <a target={'_blank'} rel='noreferrer' href="https://www.cityofchesapeake.net/government/city-departments/departments/Department-of-Development-and-Permits/Building-Permits-and-Inspections/permits/Do-I-Need-a-Permit-.htm">{"See their 'Do I Need a Permit' page here."}</a></p>
            
            <img
              id='chesapeake'
              src='/static/city_chesapeake.jpg'
              alt='Great Dismal Swamp Canal'
            />
            <small>The Great Dismal Swamp Canal - US Army Corps of Engineers, photographer not specified.</small>

            <p>{"The City of Chesapeake also does not regulate whether a tank should be filled in place with sand or concrete slurry. Nor do they define from what distance to a structure (such as the foundation of a house) is safe when removing an underground storage tank. Your consulatant would have their own safe distance defined in this case, often being somewhere around 3 feet. If a tank is too close to the foundation of a home or other structure, removal could undermine said structure, resulting in cracks to the foundation or exterior walls. It is safest to fill tanks closer than 3 feet with a concrete slurry."}</p>
        
            <p>{"If you have a heating oil tank that is currently not-in-use, or you suspect that your tank may be leaking fuel, we can help you find a contractor who can provide options for tank abatement at a low cost. Feel free to leave your information in the "}<a href='#contactUs'>Contact Us</a>{" form with any questions or concerns regarding your oil tank and we will be able to assist you within one business day or less."}</p>
          </article>
          <CityLinks />
        </section>
        <ContactUs />
      </main>
    </>
  )
}