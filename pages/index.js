import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import CityLinks from '../components/cityLinks';
import ContactUs from '../components/contactUs';
import Modal from '../components/modal';
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
        <title>Heating Oil Spills, Leaks, Removal, and Abatement in Hampton Roads.</title>
        <meta property='og:title' content='Hampton Roads Heating Oil Spills, Leaks, Removal, and Abatement.' />
        <meta property='og:url' content='https://www.chesapeakebayoil.com' />
        <meta property='og:type' content='website' />
        <meta propety='og:description' content='How to address unused or potentially leaking heating oil tanks in Hampton Roads Virginia.' />
      </Head>

      <main className={styles.container} tabIndex="0" onKeyDown={closeOnEscapeKeyDown}>
        <section>
          <h1>What To Do About an Unused or Leaking Heating Oil Tank</h1>
          <article>
            <h2>Aboveground and Underground Storage Tanks</h2>

            <Image
              id='pic1'
              className={styles.link}
              src='/static/tank_ast_ust_opt.jpg'
              alt='Above and below ground heating oil tanks'
              width={1200}
              height={800}
              onClick={() => setPic1(true)}
            />

            {/* <img
              id='pic1'
              className={styles.link}
              src='/static/tank_ast_ust_opt.jpg'
              alt='Above and below ground heating oil tanks'
              onClick={() => setPic1(true)}
            /> */}

            <Modal onClose={() => setPic1(false)} show={pic1} title="Aboveground and Underground Storage Tanks">
              <Image
                src='/static/tank_ast_ust_opt.jpg'
                alt='Above and below ground heating oil tanks'
                width={1200}
                height={800}
              />
            </Modal>

            <p>{"Aboveground storage tanks are most often installed following the failure of an underground storage tank. Your heating oil tank may just be the tip of the iceburg."}</p>
          </article>
          <article>
            <h2>Home Heating Oil Tanks</h2>
            <p>{"According to the Virginia Department of Environmental Quality (VDEQ), there are over 17,500 active petroleum underground storage tanks state wide. Home heating oil tanks are not regulated by the VDEQ but heating oil leaks are regulated. If you suspect a leak in your heating oil system, here are some steps you can take:"}</p>
            <ul>
              <li>{"Report sudden changes in oil levels to your oil supplier."}</li>
              <li>{"Use sight and smell. If you can smell petroleum vapors in your house or yard, or you have spotted a new patch of dead grass near your oil tank, "}
              <a target={'_blank'} rel='noreferrer' href="https://www.deq.virginia.gov/get-involved/about-deq/contact-us">{"contact the VDEQ immediately."}</a></li>
              <li>{"Contact a local environmental company and ask for a soil boring to determine if oil has leaked into surrounding subsurface soils."}</li>
            </ul>
          </article>
          <article>
            <h2>Dead Grass and Staining Near Tank.</h2>
            
            <Image
              id='pic2'
              className={styles.link}
              src='/static/tank_dead_grass_opt.jpg'
              alt='Photo of dead grass around fill port and vent pipe.'
              width={1200}
              height={800}
              onClick={() => setPic2(true)}
            />

            {/* <img
              id='pic2'
              className={styles.link}
              src='/static/tank_dead_grass_opt.jpg'
              alt='Photo of dead grass around fill port and vent pipe.'
              onClick={() => setPic2(true)}
            /> */}

            <Modal onClose={() => setPic2(false)} show={pic2} title="Dead Grass and Staining Near Tank.">
              <Image
                src='/static/tank_dead_grass_opt.jpg'
                alt='Photo of dead grass around fill port and vent pipe.'
                width={1200}
                height={800}
              />
            </Modal>

            <p>{"Pictured above is a photo taken after the overflow of an underground heating oil tank. In the bottom left of the photo you can see the fill port of the tank. In the top left is the vent line to the left of the water spigot. This vent line has rotted, allowing water to move into the tank during a heavy rain. Since oil floats on water, the oil surfaced and has contaminated the yard and crawspace. The homeowner complained of strong petroleum odors in the house."}</p>
          </article>
          <article>
            <h2>Unused Heating Oil Tanks</h2>
            <p>{"Over the years, homes have been improved with newer heating systems using natural gas or electricity. Quite often, underground storage tanks are improperly abandoned, leaving the steel tank to rot in the ground without removing its contents. The fuel will eventually leak into the ground and potentially contaminate nearby water bodies and drinking wells."}</p>
            <p>{"These imporperly abandoned tanks are out of sight and out of mind until it is time to sell the property. Home inspectors will typically look for signs of heating oil tanks prior to a property transaction, even if the home isn't currently heated with oil. If one is found, the buyer may insist that the tank be properly abandoned or they may at least request a soil sample to ensure that the soil has not been contaminated."}</p>
            <p>{"According to the 2018 Virginia Statewide Fire Prevention Code "}
            <a target={'_blank'} rel='noreferrer' href="https://codes.iccsafe.org/content/VFC2018P2/chapter-1-administration#VFC2018P2_Ch01_Sec103">{"Section 103.1 General"}</a>
            {", the state of Virginia adopts and incorporates by reference the International Fire Code 2018 edition (IFC 2018). In that document, IFC 2018 "}
            <a target={'_blank'} rel='noreferrer' href="https://codes.iccsafe.org/content/IFC2018P6/chapter-57-flammable-and-combustible-liquids">{"Section 5704.2.13"}</a>
            {" lays out a number of rules concerning abandonment and status of tanks."}</p>

            <p>{"Below is an excerpt from IFC 2018 "}<strong>{"Section 5704.13.1 Underground Tanks:"}</strong></p>
            <dl>
              <dt><strong>{"5704.13.1.2 Out of service for 90 days."}</strong></dt>
              <dd>
              <ol>
                <li>{"Flammable or cumbustible liquids shall be removed from tank."}</li>
                <li>{"All piping, including fill line, gauge opening, vapor return and pump connection, shall be capped or plugged and secured from tampering"}</li>
                <li>{"Vent lines shall remain open and be maintained in accordance with Sections 5704.2.7.3 and 5704.2.7.4."}</li>
              </ol>
              </dd>
              <dt><strong>{"5704.2.13.3 Out of Service for One Year."}</strong></dt>
              <dd>{"Underground tanks that have been out of service for a period of one year shall be removed from the ground inaccordance with Section 5704.2.14 or abandoned in place in accordance with Section 5704.2.13.1.4"}</dd>
            </dl>

            <p>{"Below is an excerpt from IFC 2018 "}<strong>{"Section 5704.13.2 Above-ground Tanks:"}</strong></p>
            <dl>
              <dt><strong>{"5704.2.13.2.2 Out of service for 90 days."}</strong></dt>
              <dd>{"Above-ground tanks not used for a period of 90 days shall be safeguarded in accordance with Section 5704.2.13.1.2 or removed in accordance with Section 5704.2.14."}</dd>
              <dd><strong>{"Exceptions:"}</strong></dd>
              <dd>
                <ol>
                  <li>{"Tanks and containers connected to oil burners that are not in use during the warm season of the year or are used as a backup heating system to gas."}</li>
                  <li>{"In-place, active fire ptoection (foam) system lines."}</li>
                </ol>
              </dd>
              <dt><strong>{"5704.2.13.2.3 Out of service for one year."}</strong></dt>
              <dd>{"Above-ground tanks that have been out of service for a period of one year shall be removed in accordance with Section 5704.2.14."}</dd>
              <dd><strong>{"Exception: "}</strong>{"Tanks with operating facilities."}</dd>
            </dl>
            <p>{"Please feel free to explore these documents for yourself. Knowledge is power."}</p>
          </article>
          <article>
            <h2>Need More Information or Advice?</h2>
            <p>{"If you have a heating oil tank that is currently not-in-use or you believe your tank may be leaking, we can help you find a contractor who can provide options for tank abatement at a low cost. Feel free to leave your information in the "}<a href='#contactUs'>Contact Us</a>{" form with any questions or concerns regarding your oil tank and we will be able to assist you within one business day or less."}</p>
          </article>
          <CityLinks />
        </section>
        <ContactUs />
      </main>
    </>
  )
}
