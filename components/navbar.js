import styles from '/styles/Navbar.module.scss';
import { useRouter } from 'next/router';
import Link from 'next/link';

const links = [
  ['/chesapeake', 'Chesapeake'],
  ['/hampton', 'Hampton'],
  ['/newportnews', 'Newport News'],
  ['/norfolk', 'Norfolk'],
  ['/portsmouth', 'Portsmouth'],
  ['/suffolk', 'Suffolk'],
  ['/virginiabeach', 'Virginia Beach'],
]

export default function Navbar () {
  const router = useRouter();

  const LinkList = () => {
    const linkItems = links.map((link, index) => 
      <LinkItem key={index} link={link} />
    );

    return (
      <ul className={styles.citiesList}>
        {linkItems}
      </ul>
    )
  }

  const LinkItem = ({link}) => {
    const style = router.pathname === link[0] ? styles.curLink : styles.link;
    return (
      <Link href={link[0]} passHref><li className={style}>{link[1]}</li></Link>
    )
  }

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <div className={styles.banner}>
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
        </div>
        <div className={styles.linkContainer}>
          <LinkList />      
        </div> 
      </nav>
    </div>
  )
}
