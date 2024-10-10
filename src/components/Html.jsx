import { useContext, useRef, useState } from "react";
import styles from "./Html.module.css";
import { GlobalContext } from "./GlobalContext";
import NextQuestionButton from "./NextQuestionButton";
import SubmitAnswerButton from "./SubmitAnswerButton";
import Header from "./Header";
import Progress from "./Progress";

function Html() {
  const {
    questionNumber,
    data,
    alphabetArray,
    selectedOption,
    setCorrectAnswer,
    setQuestionNumber,
    sun,
  } = useContext(GlobalContext);

  const [submit, setSubmit] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const refs = useRef([]);
  const refP = useRef([]);
  const refI = useRef([]);
  const [icons, setIcons] = useState([]);

  // Ensure data and selectedOption are valid before accessing questions
  if (!data || selectedOption === null || !data[selectedOption]) {
    return <div>Loading...</div>;
  }

  const currentQuestion = data[selectedOption].questions[questionNumber];

  function handleClick(index) {
    setSelectedAnswer(index);
    refs.current.forEach((ref, idx) => {
      if (ref) {
        ref.style.borderColor =
          idx === index ? "rgb(167, 41, 245)" : "rgba(0, 0, 0, 0)";
      }
    });
  }

  function handleSubmit() {
    if (selectedAnswer === null) {
      alert("Please select an answer before submitting.");
      return;
    }

    setSubmit(true);
    CheckCorrectAnswer(
      currentQuestion.options[selectedAnswer],
      questionNumber,
      selectedAnswer
    );
  }

  function CheckCorrectAnswer(value, questionNumber, index) {
    const correctAnswer = currentQuestion.answer;
    const newIcons = [...icons];
    if (refs.current[index] && refP.current[index] && refI.current[index]) {
      if (value === correctAnswer) {
        setCorrectAnswer((prevCorrectAnswer) => prevCorrectAnswer + 1);
        refs.current[index].style.borderStyle = "solid";
        refs.current[index].style.borderColor = "rgb(38,215,130)";

        newIcons[index] = "✔";
        refI.current[index].style.color = "rgb(38,215,130)";
        refI.current[index].style.borderColor = "rgb(38,215,130)";
        refI.current[index].style.borderStyle = "solid";
        refI.current[index].style.borderRadius = "60%";
        setIcons(newIcons);
      } else {
        refs.current[index].style.borderStyle = "solid";
        refs.current[index].style.borderColor = "rgb(238,84,84)";

        newIcons[index] = "✖";
        refI.current[index].style.color = "rgb(238,84,84)";
        refI.current[index].style.borderColor = "rgb(238,84,84)";
        refI.current[index].style.borderStyle = "solid";
        refI.current[index].style.borderRadius = "60%";
        setIcons(newIcons);

        // Mark the correct answer
        const correctIndex = currentQuestion.options.findIndex(
          (option) => option === correctAnswer
        );
        if (correctIndex !== -1) {
          newIcons[correctIndex] = "✔";
          refI.current[correctIndex].style.color = "rgb(38,215,130)";
          refI.current[correctIndex].style.borderColor = "rgb(38,215,130)";
          refI.current[correctIndex].style.borderStyle = "solid";
          refI.current[correctIndex].style.borderRadius = "60%";
          setIcons(newIcons);
        }
      }
    }
  }

  function resetStyles() {
    refs.current.forEach((ref) => {
      if (ref) {
        ref.style.borderStyle = "solid";
        ref.style.borderColor = "rgba(0, 0, 0, 0)";
      }
    });

    refI.current.forEach((ref) => {
      ref.style.borderColor = "rgba(0, 0, 0, 0)";
      ref.style.color = "";
      ref.style.borderStyle = "";
      ref.style.borderRadius = "";
    });
    setIcons(Array(currentQuestion.options.length).fill(null));
    setSelectedAnswer(null);
  }

  function handleNextQuestion() {
    resetStyles();
    setQuestionNumber((prevNumber) => prevNumber + 1);
    setSubmit(false);
  }

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

        <div className={styles.container}>
          <div className={styles.box1}>
            <p
              className={styles.questionNumber}
              style={{ color: sun ? "" : "black" }}
            >
              Question {questionNumber + 1} of{" "}
              {data[selectedOption].questions.length}
            </p>
            <p
              className={styles.questionText}
              style={{ color: sun ? "" : "black" }}
            >
              {currentQuestion.question}
            </p>
            <div className={styles.progressContainer}>
              <Progress />
            </div>
          </div>
          <div className={styles.box2}>
            {currentQuestion.options.map((elem, index) => (
              <div
                ref={(el) => (refs.current[index] = el)}
                key={index}
                className={styles.p}
                onClick={() => handleClick(index)}
                style={{
                  borderColor:
                    selectedAnswer === index ? "rgb(167, 41, 245)" : "",
                  color: selectedAnswer === index ? "white" : "",
                  backgroundColor: sun ? "" : "rgb(255,255,255)",
                  border: "4px solid rgb(244,246,250)",
                }}
              >
                <p
                  style={{ color: sun ? "" : "black" }}
                  className={styles.alpha}
                  ref={(el) => (refP.current[index] = el)}
                >
                  {alphabetArray[index]}
                </p>

                <div
                  className={styles.elem}
                  style={{ color: sun ? "" : "black" }}
                >
                  {elem}
                </div>

                <div className={styles.icon}>
                  <p
                    ref={(el) => (refI.current[index] = el)}
                    className={styles.iconp}
                  >
                    {icons[index]}
                  </p>
                </div>
              </div>
            ))}
            <div className={styles.buttonContainer}>
              {submit ? (
                <NextQuestionButton onClick={handleNextQuestion} />
              ) : (
                <SubmitAnswerButton onClick={handleSubmit} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Html;
