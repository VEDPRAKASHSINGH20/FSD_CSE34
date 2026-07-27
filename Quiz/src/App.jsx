import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "./Components/MainPage";

import Result from "./Components/Result";
import Start from "./Components/Start";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<MainPage />} />

        <Route path="/quiz" element={<Start />} />

        <Route path="/result" element={<Result />} />

      </Routes>

    </BrowserRouter>

  );

}

export default App;