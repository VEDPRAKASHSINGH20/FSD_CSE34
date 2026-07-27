import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function MainPage() {

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [subject, setSubject] = useState("");
  const [currentTime, setCurrentTime] = useState(new Date());


  useEffect(() => {

    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);


    return () => clearInterval(timer);

  }, []);



  const handleStartQuiz = () => {

    if (!username || !password || !subject) {

      alert("Please fill all the fields.");
      return;

    }


    navigate("/quiz", {

      state: {

        username: username,
        subject: subject

      }

    });

  };



  return (

    <div
      style={{
        width: "400px",
        margin: "50px auto",
        padding: "25px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0,0,0,0.2)",
      }}
    >

      <h1 style={{ textAlign: "center" }}>
        Quiz Portal
      </h1>


      <p>
        <strong>Date:</strong>{" "}
        {currentTime.toLocaleDateString()}
      </p>


      <p>
        <strong>Time:</strong>{" "}
        {currentTime.toLocaleTimeString()}
      </p>



      <input
        type="text"
        placeholder="Enter Username"
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        style={{
          width:"100%",
          padding:"10px",
          marginBottom:"15px"
        }}
      />



      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        style={{
          width:"100%",
          padding:"10px",
          marginBottom:"15px"
        }}
      />



      <select
        value={subject}
        onChange={(e)=>setSubject(e.target.value)}
        style={{
          width:"100%",
          padding:"10px",
          marginBottom:"20px"
        }}
      >

        <option value="">
          Select Subject
        </option>

        <option value="FSD">
          FSD
        </option>

        


      </select>



      <button
        onClick={handleStartQuiz}
        style={{
          width:"100%",
          padding:"12px",
          backgroundColor:"#007bff",
          color:"white",
          border:"none",
          borderRadius:"5px",
          cursor:"pointer"
        }}
      >

        Start Quiz

      </button>


    </div>

  );

}


export default MainPage;