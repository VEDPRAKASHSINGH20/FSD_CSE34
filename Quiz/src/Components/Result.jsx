import { useLocation, useNavigate } from "react-router-dom";

function Result() {

  const navigate = useNavigate();
  const location = useLocation();

  const { username, subject, score, total } = location.state;

  const percentage = (score / total) * 100;

  let grade = "";

  if (percentage >= 90)
    grade = "A+";
  else if (percentage >= 80)
    grade = "A";
  else if (percentage >= 70)
    grade = "B";
  else if (percentage >= 60)
    grade = "C";
  else if (percentage >= 40)
    grade = "D";
  else
    grade = "F";

  return (

    <div style={{
      width: "500px",
      margin: "50px auto",
      textAlign: "center",
      border: "1px solid gray",
      padding: "20px",
      borderRadius: "10px"
    }}>

      <h1>Quiz Result</h1>

      <hr />

      <h2>Name : {username}</h2>

      <h2>Subject : {subject}</h2>

      <h2>Score : {score}/{total}</h2>

      <h2>Percentage : {percentage.toFixed(2)}%</h2>

      <h2>Grade : {grade}</h2>

      <button onClick={() => navigate("/")}>
        Back To Home
      </button>

    </div>

  );

}

export default Result;