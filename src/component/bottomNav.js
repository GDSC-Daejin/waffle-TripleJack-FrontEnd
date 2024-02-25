import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function BottomNav() {
  const navigate = useNavigate();
  return (
    <div className="bottom-nav" style={{ width: "100%" }}>
      <ul>
        <li
          onClick={() => {
            navigate("/");
          }}
        >
          홈
        </li>
        <li>메신져</li>
        <li
          onClick={() => {
            navigate("/main");
          }}
        >
          탑승자
        </li>
        <li
          onClick={() => {
            navigate("/driver");
          }}
        >
          운전자
        </li>
        <li>마이페이지</li>
      </ul>
    </div>
  );
}

export default BottomNav;
