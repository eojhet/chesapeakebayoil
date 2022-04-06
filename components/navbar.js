import styles from '/styles/Navbar.module.scss';

export default function Navbar () {

  return (
    <nav className={styles.nav}>
      <img 
        src="/static/ChesapeakeBayOilOpt.svg" 
        width={200}
        className={styles.svg}
        alt="Chesapeake Bay Oil logo"
      />
      <h2>Hampton Roads heating oil tank abatements.</h2>
    </nav>
  )
}