import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Login from "./routes/Login.js";
import Main from "./routes/Main.js";
import Driver from "./routes/Driver.js";
import Sign from "./routes/Sign.js";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/driver" element={<Driver />} />
        <Route path="/sign" element={<Sign />} />
      </Routes>
    </div>
  );
}

export default App;
