import { useContext } from "react";
import { GlobalContext } from "./GlobalContext";
import styles from "./completePage.module.css";
import Header from "./Header";

function CompletePage() {
  const { data, selectedOption, correctAnswer, resetQuiz, sun } =
    useContext(GlobalContext);

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
        <Header />
        <div
          className={styles.box}
          style={{
            backgroundColor: sun ? "" : "rgb(171,193,225)",
            border: sun ? "" : " 1px solid black",
          }}
        >
          <p className={styles.quiz} style={{ color: sun ? "" : "black" }}>
            Quiz completed
          </p>
          <div className={styles.container}>
            <img
              src={data[selectedOption].icon}
              className={styles.icon}
              alt="Quiz Icon"
            />
            <p style={{ color: sun ? "" : "black" }}>
              {data[selectedOption].title}
            </p>
          </div>
          <p style={{ color: sun ? "" : "black" }}>You scored:</p>
          <p className={styles.correct} style={{ color: sun ? "" : "black" }}>
            {correctAnswer} out of {data[selectedOption].questions.length}
          </p>
        </div>
        <button
          className={styles.button}
          onClick={resetQuiz}
          style={{
            backgroundColor: sun ? "" : "rgb(171,193,225)",
            border: sun ? "" : " 1px solid black",
          }}
        >
          Go Back
        </button>
      </div>
    </div>
  );
}

export default CompletePage;
