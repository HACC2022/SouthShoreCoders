import styles from "./internet.module.css";
import BackArrow from "./images/arrow.svg";
import Image from "next/image"
import diagram from './images/diagram.png';

export default function Internet() {
  return (
    <>
      <a href="..">
        <BackArrow className="backArrow" />
      </a>
      <h1 className={styles.title}>How the Internet Works</h1>
      <p className={styles.intro}>Let’s say you’re trying to send an email from your computer to your friend’s computer. Click on each number to see how the information travels from your computer to reach your friends computer through the internet.</p>
      <Image className={styles.diagram} src={diagram} width="650px" height="450px"/>
            <p className={styles.boxOne}>Your computer will start sending the email by converting it into binary code. This is computer language which can be compared to morse code but made up of 1s and 0s.</p>
      <div> 
        <p className={styles.boxTwo}>Then, your computer sends this code through radio waves to your wifi router.</p> 
      </div>
      <div> 
        <p className={styles.boxThree}>Your wifi router takes the code and sends it to the Local Area Network or LAN. A LAN is the closest store of your wifi provider. For example, a Hawaiʻi Telecom or Verizon store.</p> 
      </div>
      <div> 
        <p className={styles.boxFour}>From there, the LAN sends your message to the Regional ISP Backbone. The Regional ISP is a big hub of routers that connects Local Area Networks to each other. So for example, if you live in Honolulu your message could be sent to a LAN in your neighborhood which is then sent to a Regional ISP which connects all of Hawaiʻ’s LANs to LANs on the mainland.</p> 
      </div>
      <div> 
        <p className={styles.boxFive}>The Regional ISP then sends the message to a National Service Provider or NSP. The NSP is an even larger hub which connects all of the Regional ISPs together and sends your message to the NSP Backbone. You can think of it as the gateway to the NSP Backbone.</p> 
      </div>
      <div>
        <p className={styles.boxSix}>Your message travels back down the networks again. It moves through your recipients closets NSP, then, their closets Regional ISP, then LAN.</p> 
      </div>
      <div> 
        <p className={styles.boxSeven}>Your message travels back down the networks again. It moves through your recipients closets NSP, then, their closets Regional ISP, then LAN.</p>
      </div>
      <div>
      <p className={styles.boxEight}>Once it finally reaches your recipient’s local LAN, it travels to their personal wifi router and into their computer. Their computer then receives the email and converts the binary code into words that your recipient can read!</p>
      </div>
    </>
  )
}

