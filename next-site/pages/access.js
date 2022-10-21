import styles from "./Access.module.css";
import Image from 'next/image';
import BackArrow from './arrow.svg';

export default function Access() {
  return (
    <>
    <BackArrow className={styles.backArrow}/>
    <div className={styles.access}> <strong>How to Access the Internet</strong>
    </div>
    </>
  )
}
