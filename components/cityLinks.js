import Link from 'next/link';
import styles from '/styles/Home.module.scss';

export default function CityLinks () {
  return (
    <article>
      <h2>Find City Specific Information</h2>
      <ul className={styles.citiesList}>
        <li><Link href="/chesapeake">Chesapeake</Link></li>
        <li><Link href="/hampton">Hampton</Link></li>
        <li><Link href="/newportnews">Newport News</Link></li>
        <li><Link href="/norfolk">Norfolk</Link></li>
        <li><Link href="/portsmouth">Portsmouth</Link></li>
        <li><Link href="/virginiabeach">Virginia Beach</Link></li>
        <li><Link href="/suffolk">Suffolk</Link></li>
      </ul>
    </article>
  )
}