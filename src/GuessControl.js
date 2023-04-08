import Button from "./Button";
import { useState } from "react";

function GuessControl(props) {
  const [currentGuess, setCurrentGuess] = useState("");

  function handleInputChange(e) {
    setCurrentGuess(e.target.value);
  }
function onSubmitGuess() {
    props.onGuess(Number(currentGuess));
    setCurrentGuess("");
  }
  return (
    <div>
      <input type="number" value={currentGuess} onChange={handleInputChange} />
      <Button onClick={onSubmitGuess}>Submit Guess</Button>
    </div>
  );
}

export default GuessControl;

