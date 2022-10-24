import styles from "./internet.module.css";
import BackArrow from "./images/arrow.svg";

export default function Internet() {
  return (
    <>
      <a href="..">
        <BackArrow className="backArrow" />
      </a>
      <h1 className={pages.title}>How the Internet Works</h1>
    </>
  );
}
