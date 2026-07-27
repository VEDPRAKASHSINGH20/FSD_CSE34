import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import questions from "./questions";

function Start() {

  const navigate = useNavigate();
  const location = useLocation();

  const { username, subject } = location.state;

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);



  const moveToNextQuestion = () => {

    let updatedScore = score;


    // check answer
    if (selectedOption === questions[currentQuestion].answer) {
      updatedScore++;
      setScore(updatedScore);
    }



    // if last question
    if (currentQuestion === questions.length - 1) {

      navigate("/result", {
        state: {
          username,
          subject,
          score: updatedScore,
          total: questions.length
        }
      });

      return;
    }



    // next question
    setCurrentQuestion(currentQuestion + 1);

    setSelectedOption("");

    // reset timer
    setTimeLeft(15);

  };



  // Timer
  useEffect(() => {

    const timer = setTimeout(() => {

      if (timeLeft > 0) {

        setTimeLeft(timeLeft - 1);

      } 
      else {

        moveToNextQuestion();

      }

    }, 1000);



    return () => clearTimeout(timer);


  }, [timeLeft]);



  return (

    <div style={{
      width: "700px",
      margin: "40px auto",
      padding: "20px",
      border: "1px solid gray",
      borderRadius: "10px"
    }}>


      <h1>Online Quiz</h1>


      <h3>Name : {username}</h3>

      <h3>Subject : {subject}</h3>


      <h2 style={{color:"red"}}>
        Time Left : {timeLeft} sec
      </h2>


      <hr/>


      <h2>
        Question {currentQuestion + 1} of {questions.length}
      </h2>


      <h3>
        {questions[currentQuestion].question}
      </h3>



      {
        questions[currentQuestion].options.map((option)=>(
          
          <div key={option}>

            <label>

              <input
                type="radio"
                value={option}
                checked={selectedOption === option}
                onChange={(e)=>setSelectedOption(e.target.value)}
              />

              {" "}
              {option}

            </label>

          </div>

        ))
      }



      <br/>


      <button onClick={moveToNextQuestion}>

        {
          currentQuestion === questions.length-1
          ? "Submit Quiz"
          : "Next"
        }

      </button>


    </div>

  );

}


export default Start;