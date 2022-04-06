import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <main className={styles.container}>
        <section>
          
        </section>
      </main>
    </>
  )
}
