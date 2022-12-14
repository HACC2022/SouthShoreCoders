import styles from "./Access.module.css";
import BackArrow from "./images/arrow.svg";
import Web from "./images/web.svg";
import Search from "./images/search.svg";
import InternetSymbol from "./images/internet.svg";

import Image from "next/image";
import catStretching from "./images/cat-stretching-feet.webp";

console.log("The Secret Code is BANANA");

function checkCode(e) {
  e.preventDefault();
  console.log("here!");
  const name = "BANANA";
  const code = document.querySelector("#code")?.value;
  if (!name) {
    alert("Try again.");
    return false;
  }
}

export default function Access() {
  return (
    <div className={styles.all}>
      <a class="backArrow" href="..">
        <BackArrow className="backArrow" />
      </a>
      <div className={styles.access}>
        {" "}
        <strong>How to Access the Internet</strong>
      </div>
      <p className={styles.opener}>
        To access the Internet, open any web browser, such as Google Chrome or
        Internet Explorer. Make sure you are connected to a Wifi network by
        pressing this button: <InternetSymbol className={styles.internet} />,
        usually in the top left or bottom right of the screen.{" "}
      </p>
      <div className={styles.cols}>
        <div className={styles.leftCol}>
          <Search className={styles.search} />
        </div>
        <div className={styles.middleCol}>
          <p>When you search for "cute cat pics"...</p>
        </div>
        <div className={styles.rightCol}>
          <Web className={styles.web} />
          <p>
            A complex network of servers and computers finds the best matches.
            You can learn more about this in the How the Internet Works section
            of this webpage.
          </p>
        </div>
        <div className={styles.leftCol}>
          <Image
            src={catStretching}
            width="400px"
            height="400px"
            alt="Cat stretching"
          />
        </div>
        <div className={styles.middleCol}>
          <p>And ta-da! Cute cat pics!</p>
        </div>
        <div className={styles.rightCol}></div>
      </div>
      {/** close cols */}

      <p>
        You can look up anything that is important or interesting to you, as
        long as it is appropriate for the time and place.
      </p>
      <p>
        For example:<br></br> Free Tutoring near me<br></br>Dog-friendly parks
        <br></br>Scholarships due in January<br></br>Math practice online
      </p>
      <p>
        The Internet can be an amazing resource for education and enrichment if
        used properly.
      </p>
      <p>Do you want to see what makes a webpage run?</p>
      <p>You can right click on your keyboard or mouse and press "Inspect." </p>
      <p>
        Wow! You can see all of the source code. Pretty cool. There will be a
        secret message hidden in the code of this webpage! Did you find it?
      </p>
      <form onSubmit={checkCode}>
        <label htmlFor="code">Secret Code: </label>
        <input type="text" name="code" id="code" />
        <button type="submit">Submit</button>
      </form>
      <p className={styles.correct}>You're  right!</p>
      <p className={styles.wrong}>Aww, that's not right. You should try again.</p>
      <p>
        If you are interested in learning more about how this works, a great
        resource to learn coding is{" "}
        <a href="https://www.codecademy.com/">Codecademy.</a>
      </p>
      <p>
        You've reached the end! Have fun using the Internet in useful ways and
        taking it to the next level.
      </p>
      {/* <Image src={diagram} width="480px" height="480px" /> */}
    </div>
  );
}
