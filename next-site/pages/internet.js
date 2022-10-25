import styles from "./internet.module.css";
import BackArrow from "./images/arrow.svg";
import Diagram from './images/diagram.jpg';

export default function Internet() {
  return (
    <>
      <a href="..">
        <BackArrow className="backArrow" />
      </a>
      <h1 className={styles.title}>How the Internet Works</h1>
      <p className={styles.intro}>Let’s say you’re trying to send an email from your computer to your friend’s computer. Click on each number to see how the information travels from your computer to reach your friends computer through the internet.</p>

    </>
  )
}
