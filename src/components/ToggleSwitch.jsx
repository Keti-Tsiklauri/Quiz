import styles from "./toggleSwitch.module.css";
import { GlobalContext } from "./GlobalContext";
import { useContext } from "react";

const ToggleSwitch = () => {
  const { setToggle, toggle, setSun, sun } = useContext(GlobalContext);

  function togglefunction() {
    setToggle(!toggle);
    setSun(!sun);
  }

  return (
    <div className={styles.container}>
      <img
        className={`${styles.icon} ${!toggle ? styles.visible : styles.hidden}`}
        src="images/icon-sun-dark.svg"
        alt="Sun Icon"
      />
      <label className={styles.switch}>
        <input type="checkbox" checked={toggle} onChange={togglefunction} />
        <span className={`${styles.slider} ${styles.round}`}></span>
      </label>
      <img
        className={`${styles.icon} ${toggle ? styles.visible : styles.hidden}`}
        src="images/icon-moon-dark.svg"
        alt="Moon Icon"
      />
    </div>
  );
};

export default ToggleSwitch;
