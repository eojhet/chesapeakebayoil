import styles from '/styles/Navbar.module.scss';
import { useRouter } from 'next/router';

export default function Navbar () {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <img 
          src="/static/ChesapeakeBayOilOpt.svg" 
          width={200}
          className={styles.svg}
          alt="Chesapeake Bay Oil logo"
          onClick={() => router.push('/')}
        />
        <div className={styles.headline}>
          <h2>Chesapeake Bay Oil</h2>
          <h3><i>Let us help you solve your heating oil tank issues.</i></h3>
        </div>
      </nav>
    </div>
  )
}