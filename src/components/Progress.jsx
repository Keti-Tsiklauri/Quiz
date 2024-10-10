import { useContext } from "react";
import { GlobalContext } from "./GlobalContext";
import styles from "./progress.module.css";

function Progress() {
  const { data, selectedOption, questionNumber, sun } =
    useContext(GlobalContext);

  // Determine the class based on the sun state
  const progressClass = sun ? styles.darkMode : styles.lightMode;

  return (
    <div>
      <progress
        className={`${styles.progress} ${progressClass}`}
        value={questionNumber}
        max={data[selectedOption]?.questions.length || 0}
      >
        {" "}
      </progress>
    </div>
  );
}

export default Progress;
