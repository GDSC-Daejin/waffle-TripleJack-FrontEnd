import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Login from "./routes/Login1.js";
import Main from "./routes/Main.js";
import Driver from "./routes/Driver.js";
import "./slick.css";
import "./slick-theme.css";

import SimpleSlider from "./com/cau.js";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/driver" element={<Driver />} />
      </Routes>
    </div>
  );
}

export default App;
