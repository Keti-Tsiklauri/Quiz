import { useContext } from "react";
import { GlobalContext } from "./GlobalContext";
import styles from "./StarterMenu.module.css";
import ToggleSwitch from "./ToggleSwitch";
function StarterMenu() {
  const { data, setSelectedOption, sun } = useContext(GlobalContext);

  return (
    <div
      className={styles.fullScreen}
      style={{
        backgroundImage: sun
          ? 'url("images/pattern-background-desktop-dark.svg")'
          : 'url("images/pattern-background-desktop-light.svg")',
        backgroundColor: sun ? "rgba(49, 62, 81, 1)" : "rgba(255, 255, 255, 1)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div>
        <div className={styles.toggle}>
          <ToggleSwitch />
        </div>
        <div className={styles.starterDiv}>
          <div className={styles.p}>
            <p style={{ color: sun ? "" : "black" }}>Welcome to the </p>
            <p style={{ color: sun ? "" : "black" }}>Frontend Quiz!</p>
            <p style={{ color: sun ? "" : "black" }}>
              Pick a subject to get started
            </p>
          </div>
          <div>
            {data.map((elem, index) => (
              <div
                style={{
                  backgroundColor: sun ? "" : "rgb(255,255,255)",
                  border: "4px solid rgb(244,246,250)",
                }}
                key={index}
                className={styles.imageDiv}
                onClick={() => setSelectedOption(index)}
              >
                <img src={elem.icon} />
                <p style={{ color: sun ? "" : "black" }}>{elem.title}</p>
                <br />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StarterMenu;
