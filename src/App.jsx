import { useState } from "react";

// -------------------------------------------------------------------------------
// what you learn

// 1. state change used
// 2. e= event
// 3. e.preventDefault()= if not submit to server
// 4. if else condition
// 5. input from user= value, e.target.value
// 6. reload page= window location reload
// 7. event on click & onchange
// ---------------------------------------------------------------------------------

function App() {
  const [weight, setWeight] = useState(0);

  const [Height, setHeight] = useState(0);

  const [bmi, setBmi] = useState("");

  const [result, setResult] = useState("");

  let bmiCAL = (e) => {
    e.preventDefault();

    if (weight === 0 || Height === 0) {
      alert("Please Enter Valid Weight & Height");
    } else {
      let bmi = weight / (Height * Height);
      setBmi(bmi.toFixed(1));

      // For result

      if (bmi >= 25) {
        setResult("You are overweight");
      } else if (bmi > 18 && bmi < 25) {
        setResult("Good News you are Normal BMI");
      } else {
        setResult("You are Underweight");
      }
    }
  };

  // For reset button or reload

  let reload = () => {
    window.location.reload();
  };

  return (
    <>
      <div
        className="card shadow p-3 mb-5 bg-white rounded"
        style={{ width: "25rem", Height: "30rem" }}
      >
        <div className="card-body ">
          <h4 className="card-title text-center mb-3">BMI Calculator</h4>

          {/* form */}

          <form className="d-grid gap-3" onSubmit={bmiCAL}>
            <div className="form-group ">
              <label htmlFor="exampleInputEmail1">Weight (kg)</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter Your Weight"
                value={weight}
                onChange={(e) => {
                  setWeight(e.target.value);
                }}
              />
              {/* <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small> */}
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Height (meter)</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Enter Your Height"
                value={Height}
                onChange={(e) => {
                  setHeight(e.target.value);
                }}
              />
            </div>

            <div className="form-group">
              <button
                type="submit"
                className="btn btn-primary d-block mb-2 w-100"
              >
                Submit
              </button>
              <button
                type="submit"
                className="btn btn-secondary w-100"
                onClick={reload}
              >
                Reload
              </button>
            </div>
            <div className="text-center">
              <h5>Your BMI is : {bmi} </h5>
              <p>{result}</p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
