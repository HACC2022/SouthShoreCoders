import styles from "./Access.module.css";
import Image from 'next/image';
import BackArrow from './images/arrow.svg';
import Web from './images/web.svg';
import Search from './images/search.svg';

export default function Access() {
  return (
    <>
      <a href="..">
        <BackArrow className={styles.backArrow}/>
      </a>
      <div className={styles.access}> <strong>How to Access the Internet</strong>
      </div>
      <Search className={styles.search}/>
      <Web className={styles.web}/>
    </>
  )
}
