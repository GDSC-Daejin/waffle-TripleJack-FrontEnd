import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Login from "./routes/Login.js";
import Passenger from "./routes/Passenger.js";
import Driver from "./routes/Driver.js";
import Sign from "./routes/Sign.js";
import Home from "./routes/Home.js";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/passenger" element={<Passenger />} />
        <Route path="/driver" element={<Driver />} />
        <Route path="/sign" element={<Sign />} />
      </Routes>
    </div>
  );
}

export default App;
