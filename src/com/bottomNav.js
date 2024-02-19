import React from "react";
import "../App.css";

function BottomNav() {
  return (
    <div className="bottom-nav" style={{ width: "100%" }}>
      <ul>
        <li
          onClick={() => {
            alert("asd");
          }}
        >
          홈
        </li>
        <li>메신져</li>
        <li>탑승자</li>
        <li>운전자</li>
        <li>마이페이지</li>
      </ul>
    </div>
  );
}

export default BottomNav;
