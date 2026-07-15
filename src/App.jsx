import { useState, useRef } from "react";
import "./App.css";

function App() {

  const [time, setTime] = useState(0);

  const timer = useRef(null);

  const startTimer = () => {

    if (timer.current !== null) return;

    timer.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

  };

  const stopTimer = () => {

    clearInterval(timer.current);
    timer.current = null;

  };

  const resetTimer = () => {

    clearInterval(timer.current);
    timer.current = null;
    setTime(0);

  };

  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;

  return (

    <div className="container">

      <h1>Stopwatch</h1>

      <div className="display">

        {String(hours).padStart(2, "0")} :
        {String(minutes).padStart(2, "0")} :
        {String(seconds).padStart(2, "0")}

      </div>

      <div className="buttons">

        <button onClick={startTimer}>
          Start
        </button>

        <button onClick={stopTimer}>
          Stop
        </button>

        <button onClick={resetTimer}>
          Reset
        </button>

      </div>

    </div>

  );

}

export default App;