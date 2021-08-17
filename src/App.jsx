import "./App.css";
import { useState } from "react";

function App() {
  const [input, transformInput] = useState("");
  const buttonHandler = (event) => {
    if (event.target.value === "=") {
      transformInput(eval(input));
    } else if (/[0-9]/.test(input)) {
      transformInput(input + event.target.value.toString());
    } else {
      transformInput(event.target.value);
    }
  };
  const clearInput = (event) => {
    transformInput("");
  };
  return (
    <div className="card">
      <div className="display">
        <input type="text" value={input} />
      </div>
      <div className="row">
        <button onClick={buttonHandler} value="1">
          1
        </button>
        <button onClick={buttonHandler} value="2">
          2
        </button>
        <button onClick={buttonHandler} value="3">
          3
        </button>
        <button onClick={buttonHandler} value="+">
          +
        </button>
      </div>
      <div className="row">
        <button onClick={buttonHandler} value="4">
          4
        </button>
        <button onClick={buttonHandler} value="5">
          5
        </button>
        <button onClick={buttonHandler} value="6">
          6
        </button>
        <button onClick={buttonHandler} value="-">
          -
        </button>
      </div>
      <div className="row">
        <button onClick={buttonHandler} value="7">
          7
        </button>
        <button onClick={buttonHandler} value="8">
          8
        </button>
        <button onClick={buttonHandler} value="9">
          9
        </button>
        <button onClick={buttonHandler} value="*">
          *
        </button>
      </div>
      <div className="row">
        <button onClick={clearInput}>C</button>
        <button onClick={buttonHandler} value="0">
          0
        </button>
        <button onClick={buttonHandler} value="=">
          =
        </button>
        <button onClick={buttonHandler} value="/">
          /
        </button>
      </div>
    </div>
  );
}

export default App;
