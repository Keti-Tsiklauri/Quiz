import styles from "./nextQuestionButton.module.css";

function SubmitAnswerButton({ onClick }) {
  return (
    <div>
      <p className={styles.button} onClick={onClick}>
        Submit Answer{" "}
      </p>
    </div>
  );
}

export default SubmitAnswerButton;
