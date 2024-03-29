import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import Login from "./routes/Login.js";
import Passenger from "./routes/Passenger.js";
import Driver from "./routes/Driver.js";
import Sign from "./routes/Sign/Sign.js";
import Home from "./routes/Home.js";
import { CookiesProvider } from "react-cookie";
import Mypage from "./routes/Mypage.js";

function App() {
  return (
    <CookiesProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/passenger" element={<Passenger />} />
          <Route path="/driver" element={<Driver />} />
          <Route path="/sign" element={<Sign />} />
          <Route path="/mypage" element={<Mypage />} />
        </Routes>
      </div>
    </CookiesProvider>
  );
}

export default App;
