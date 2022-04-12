import Head from 'next/head';
import { useState } from 'react';
import ContactUs from '../components/contactUs';
import Footer from '../components/footer';
import Modal from '../components/modal';
import Navbar from '../components/navbar';
import styles from '../styles/Home.module.scss';

export default function Home() {
  const [pic1, setPic1] = useState(false);
  const [pic2, setPic2] = useState(false);

  const closeOnEscapeKeyDown = () => {
    setPic1(false);
    setPic2(false);
  }

  return (
    <>
      <Head>
        <title>Heating oil tank information for spills, leaks, removal, and abatement.</title>
      </Head>
      <Navbar />    

      <main className={styles.container} tabIndex="0" onKeyDown={closeOnEscapeKeyDown}>
        <section>
          <article>
            <h2>Aboveground and Underground Storage Tanks</h2>
            <img
              id='pic1'
              className={styles.link}
              src='/static/tank_ast_ust.jpg'
              alt='Above and below ground heating oil tanks'
              onClick={() => setPic1(true)}
            />

            <Modal onClose={() => setPic1(false)} show={pic1} title="Aboveground and Underground Storage Tanks">
              <img
                src='/static/tank_ast_ust.jpg'
                alt='Above and below ground heating oil tanks'
              />
            </Modal>

            <p>{"Aboveground storage tanks are most often installed following the failure of an underground storage tank. Your heating oil tank may just be the tip of the iceburg."}</p>
          </article>
          <article>
            <h2>Home Heating Oil Tanks</h2>
            <p>{"According to the Virginia Department of Environmental Quality (VDEQ), there are over 17,500 active petroleum underground storage tanks state wide. Home heating oil tanks are not regulated by the VDEQ but heating oil leaks are regulated. If you suspect a leak in your heating oil system, here are some steps you can take:"}</p>
            <ul>
              <li>{"Report sudden changes in oil levels to your oil supplier."}</li>
              <li>{"Use sight and smell. If you can smell petroleum vapors in your house or yard, or you have spotted a new patch of dead grass near your oil tank, "}<a href="https://www.deq.virginia.gov/get-involved/about-deq/contact-us">{"contact the VDEQ immediately."}</a></li>
              <li>{"Contact a local environmental company and ask for a soil boring to determine if oil has leaked into surrounding subsurface soils."}</li>
            </ul>
          </article>
          <article>
            <h2>Dead Grass and Staining Near Tank.</h2>
            <img
              id='pic2'
              className={styles.link}
              src='/static/tank_dead_grass.jpg'
              alt='Photo of dead grass around fill port and vent pipe.'
              onClick={() => setPic2(true)}
            />

            <Modal onClose={() => setPic2(false)} show={pic2} title="Dead Grass and Staining Near Tank.">
              <img
                src='/static/tank_dead_grass.jpg'
                alt='Photo of dead grass around fill port and vent pipe.'
              />
            </Modal>

            <p>{"Pictured above is a photo taken after the overflow of an underground heating oil tank. In the bottom left of the photo you can see the fill port of the tank. In the top left is the vent line to the left of the water spigot. This vent line has rotted, allowing water to move into the tank during a heavy rain. Since oil floats on water, the oil surfaced and has contaminated the yard and crawspace. The homeowner complained of strong petroleum odors in the house."}</p>
          </article>
          <article>
            <h2>Unused Heating Oil Tanks</h2>
            <p>{"Over the years, homes have been improved with newer heating systems using natural gas or electricity. Quite often, underground storage tanks are improperly abandoned, leaving the steel tank to rot in the ground without removing its contents. The fuel will eventually leak into the ground and potentially contaminate nearby water bodies and drinking wells."}</p>
            <p>{"These imporperly abandoned tanks are out of sight and out of mind until it is time to sell the property. Home inspectors will typically look for signs of heating oil tanks prior to a property transaction, even if the home isn't currently heated with oil. If one is found, the buyer may insist that the tank be properly abandoned or they may at least request a soil sample to ensure that the soil has not been contaminated."}</p>
            <p>{"If you have a heating oil tank that is currently not-in-use, we can help you find a contractor who can give you options for tank abatement at a low cost. Feel free to leave your information in the Contact Us form with any questions or concerns regarding your oil tank and we will be able to assist you within one business day or less."}</p>

          </article>
        </section>
        <ContactUs />
      </main>
      <Footer />
    </>
  )
}
