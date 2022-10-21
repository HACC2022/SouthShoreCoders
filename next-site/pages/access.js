import styles from "./Access.module.css";
import Image from 'next/image';
import arrow from './Arrow.png';

<Image 
  src={arrow}
  width="50px"
  height="50px"
/>

export default function Access() {
  return (
    <div className={styles.access}> <strong>How to Access the Internet</strong>
    </div>
  )
}
