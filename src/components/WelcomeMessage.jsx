import styles from "./WelcomeMessage.module.css";
import { IoMdHappy } from "react-icons/io";

const WelcomeMessage = () => {
  return (<div><p className={styles.welcome}>Enjoy Your Day</p>
  <div id="svgclass"><IoMdHappy /></div>
  </div>);
};

export default WelcomeMessage;
