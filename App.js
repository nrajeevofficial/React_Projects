import "./App.css";
import { useState } from "react";

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [message, setMessage] = useState("");
  const [bmi, setBmi] = useState("");

  // logic
  let calculateBMI = (e) => {
    e.preventDefault();
    if (weight === 0 || height === 0) {
      alert("Please enter valid weight and height");
    } else {
      let heightInMeters = height / 100;
      let bmi = weight / (heightInMeters * heightInMeters);
      setBmi(bmi.toFixed(1));
      if (bmi < 18.5) {
        setMessage("You are under weight");
      } else if (bmi >= 18.5 && bmi < 24.9) {
        setMessage("You weight is in control, keep it up buddy!! ");
      } else {
        setMessage("You are over weight");
      }
    }
  };

  let reload = () => {
    window.location.reload();
  };
  return (
    <div className="App">
      <div className="container">
        <h2>BMI CALCULATOR</h2>
        <form onSubmit={calculateBMI}>
          <div>
            <label>Weight (kg)</label>
            <input
              type="text"
              placeholder="Enter your weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div>
            <label>Height (cm)</label>
            <input
              type="text"
              placeholder="Enter your height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn btn-outline" onClick={reload} type="submit">
              Reload
            </button>
          </div>
          <div className="center">
            <h3>Your BMI is :{bmi} </h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
