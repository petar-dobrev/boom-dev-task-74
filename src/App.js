import { useState, useMemo } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");

  const validateNumber = (number) => {
    const pattern = new RegExp(/^[0-9][A-Za-z0-9 -]*$/);
    return pattern.test(number);
  };

  const inputIsNumber = useMemo(() => validateNumber(text), [text]);

  return (
    <div className="App">
      <div className="control has-icons-right">
        <input
          className="input is-large"
          type="text"
          placeholder="Enter number..."
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <span className="icon is-small is-right">
          <i className={inputIsNumber ? "fas fa-check" : "fas fa-times"} />
        </span>
      </div>
    </div>
  );
}

export default App;
