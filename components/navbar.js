import styles from '/styles/Navbar.module.scss';

export default function Navbar () {

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <img 
          src="/static/ChesapeakeBayOilOpt.svg" 
          width={200}
          className={styles.svg}
          alt="Chesapeake Bay Oil logo"
        />
        <div className={styles.headline}>
          <h1>ChesapeakeBayOil.com</h1>
          <h2><i>Let us help you solve your heating oil tank issues.</i></h2>
        </div>
      </nav>
    </div>
  )
}