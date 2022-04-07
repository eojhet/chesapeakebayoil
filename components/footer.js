import styles from '/styles/Footer.module.scss';

export default function Footer () {

  return (
    <footer className={styles.container}>
      <div className={styles.innerContainer}>
        <p>&copy;eojhet 2022</p>
      </div>
    </footer>
  )
}