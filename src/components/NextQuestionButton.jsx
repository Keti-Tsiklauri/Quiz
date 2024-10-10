import styles from "./nextQuestionButton.module.css";

function NextQuestionButton({ onClick }) {
  return (
    <div>
      <p className={styles.button} onClick={onClick}>
        Next Question
      </p>
    </div>
  );
}

export default NextQuestionButton;
