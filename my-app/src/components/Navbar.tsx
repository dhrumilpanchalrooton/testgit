import Link from 'next/link';
import styles from './Navbar.module.css';  // Remember to import your CSS module

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <Link className={styles.logo} href="/">MyApp</Link>
      <div className={styles.links}>
        <Link className={styles.link} href="/">Home</Link>
        <Link className={styles.link} href="/page1">Page 1</Link>
        <Link className={styles.link} href="/page2">Page 2</Link>
        {/* // ... add other links */}
      </div>
    </nav>
  );
};

export default Navbar;
