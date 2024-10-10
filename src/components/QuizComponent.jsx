import { useEffect, useState } from "react";

const QuizComponent = () => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setQuizzes(data.quizzes))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1>Quizzes</h1>
      {quizzes.map((quiz, quizIndex) => (
        <div key={quizIndex}>
          <h2>{quiz.title}</h2>
          <img src={quiz.icon} alt={`${quiz.title} icon`} />
          {quiz.questions.map((question, questionIndex) => (
            <div key={questionIndex}>
              <h3>{question.question}</h3>
              <ul>
                {question.options.map((option, optionIndex) => (
                  <li key={optionIndex}>{option}</li>
                ))}
              </ul>
              <p>Answer: {question.answer}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default QuizComponent;
