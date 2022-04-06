import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/footer'
import Header from '../components/header'
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <main className={styles.container}>
        <section>
          <h3>Home Heating Oil Tanks</h3>
          <p>{"According to the Virginia Department of Environmental Quality (VDEQ), there are over 17,500 active petroleum underground storage tanks state wide. Home heating oil tanks are not regulated by the VDEQ but heating oil leaks are regulated. If you suspect a leak in your heating oil system, here are some steps you can take:"}</p>
          <ul>
            <li>Report sudden changes in oil levels to your oil supplier immediately</li>
            <li>Use sight and smell. If you can smell petroleum vapors in your house or yard <a href="https://www.deq.virginia.gov/get-involved/about-deq/contact-us">contact the VDEQ immediately.</a></li>
            <li>Contact a local environmental company and ask for a soil boring to determine oil has leaked into surrounding subsurface soils.</li>
          </ul>
        </section>

        <section>
          <h3>Unused Heating Oil Tanks</h3>
          <p>{"Over the years, homes have been improved with newer heating oil systems using natural gas or electricity. More often than not, underground storage tanks are improperly abandoned, leaving the steel tanks to rot in the ground without emptying its contents. The fuel will eventually leak into the ground and potentially contaminate nearby water bodies and drinking wells."}</p>
          <p>{"These imporperly abandoned tanks are out of sight and out of mind until it is time to sell the property. Home inspectors will typically look for signs of old heating oil tanks prior to a property transaction. If one is found, the buyer may insist that the tank be properly abandoned or at least request a soil sample to ensure that the soil has not been contaminated."}</p>

        </section>
      </main>
      <Footer />
    </>
  )
}
