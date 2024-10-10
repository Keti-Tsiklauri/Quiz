import { useContext } from "react";
import StarterMenu from "./components/StarterMenu";
import { GlobalContext } from "./components/GlobalContext";

import CompletePage from "./components/CompletePage";
import Html from "./components/Html";

function App() {
  const { selectedOption, questionNumber, length } = useContext(GlobalContext);

  // Correct the length calculation to avoid off-by-one error
  const isLastQuestion = questionNumber >= length - 1;

  return (
    <>
      {selectedOption === undefined ? (
        <StarterMenu />
      ) : isLastQuestion ? (
        <CompletePage />
      ) : (
        <Html />
      )}
    </>
  );
}

export default App;
