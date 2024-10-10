import { createContext, useEffect, useState } from "react";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [selectedOption, setSelectedOption] = useState(undefined);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [length1, setLength1] = useState(0);
  const alphabetArray = ["A", "B", "C", "D"];
  const [sun, setSun] = useState(false);
  const [back, setBack] = useState(false);

  const length =
    selectedOption !== undefined && data[selectedOption]
      ? data[selectedOption].questions.length
      : 0;

  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setData(data.quizzes))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const resetQuiz = () => {
    setSelectedOption(undefined);
    setQuestionNumber(0);
    setCorrectAnswer(0);
    setLength1(0);
  };

  return (
    <GlobalContext.Provider
      value={{
        data,
        selectedOption,
        setSelectedOption,
        questionNumber,
        setQuestionNumber,
        alphabetArray,
        correctAnswer,
        setCorrectAnswer,
        length,
        back,
        setBack,
        length1,
        setLength1,
        resetQuiz,
        sun,
        setSun,
        toggle,
        setToggle,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
