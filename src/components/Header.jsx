import { useContext } from "react";
import { GlobalContext } from "./GlobalContext";
import styles from "./Header.module.css";
import ToggleSwitch from "./ToggleSwitch";
function Header() {
  const { selectedOption, data, sun } = useContext(GlobalContext);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <img
          src={data[selectedOption].icon}
          className={styles.img}
          style={{ border: sun ? "" : "1px solid" }}
        ></img>
        <p className={styles.p} style={{ color: sun ? "" : "black" }}>
          {data[selectedOption].title}{" "}
        </p>
      </div>
      <div>
        <ToggleSwitch />
      </div>
    </div>
  );
}

export default Header;
