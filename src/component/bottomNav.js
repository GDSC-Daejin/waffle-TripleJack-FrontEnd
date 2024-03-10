import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function BottomNav() {
  const navigate = useNavigate();
  return (
    <div className="bottom-nav">
      <div>
        <ul>
          <li
            onClick={() => {
              navigate("/home");
            }}
          >
            <img
              src="/images/home.png"
              alt="home"
              style={{ width: "35px", height: "35px" }}
            />
            <p style={{ margin: "0", fontSize: "15px" }}>홈</p>
          </li>
          <li>
            <img
              src="/images/msg.png"
              alt="home"
              style={{ width: "35px", height: "35px" }}
            />
            <p style={{ margin: "0", fontSize: "15px" }}>메신저</p>
          </li>
          <li
            onClick={() => {
              navigate("/passenger");
            }}
          >
            <img
              src="/images/boarder.png"
              alt="home"
              style={{ width: "35px", height: "35px" }}
            />
            <p style={{ margin: "0", fontSize: "15px" }}>탑승자</p>
          </li>
          <li
            onClick={() => {
              navigate("/driver");
            }}
          >
            <img
              src="/images/car.png"
              alt="home"
              style={{ width: "35px", height: "35px" }}
            />
            <p style={{ margin: "0", fontSize: "15px" }}>운전자</p>
          </li>
          <li>
            <img
              src="/images/mypage.png"
              alt="home"
              style={{ width: "35px", height: "35px" }}
            />
            <p style={{ margin: "0", fontSize: "15px" }}>마이페이지</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default BottomNav;
