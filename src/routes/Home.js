import React from "react";
import "../App.css";
import "../Home.css";
import BottomNav from "../component/bottomNav";
import { useNavigate } from "react-router-dom";
function Home(props) {
  const navigate = useNavigate();
  return (
    <div className="contentWrap">
      <div className="homeDiv Top">
        <p
          className="homeTopFont"
          onClick={() => {
            navigate("/home");
          }}
        >
          대카풀
        </p>
        <img
          src={process.env.PUBLIC_URL + "/images/alram.png"}
          style={{ height: "30px", width: "30px" }}
        ></img>
      </div>

      <div className="homeDiv">
        <img
          src={process.env.PUBLIC_URL + "/images/123.jpg"}
          style={{
            height: "10%",
            width: "100%",
            height: "200px",
            borderRadius: "15px",
          }}
        />
      </div>

      <div className="homeDiv select">
        <div
          className="selectImg"
          onClick={() => {
            navigate("/passenger");
          }}
        >
          <img
            src={process.env.PUBLIC_URL + "/images/passenger.png"}
            style={{ height: "180px", width: "170px" }}
          ></img>
          <p>탑승자</p>
        </div>
        <div
          className="selectImg"
          onClick={() => {
            navigate("/driver");
          }}
        >
          <img
            src={process.env.PUBLIC_URL + "/images/driver.png"}
            style={{ height: "180px", width: "170px" }}
          ></img>
          <p>운전자</p>
        </div>
      </div>

      <div
        className="homeDiv"
        style={{ backgroundColor: "lightgrey", flex: "1" }}
      >
        <p>최신 게시글</p>
        <div className="homeList">
          <img
            src={process.env.PUBLIC_URL + "/images/profile.png"}
            style={{ width: "50px", height: "50px" }}
          ></img>
          <span>홍길동</span>
          <b style={{ display: "block" }}>3.4 노원역 카풀</b>
          <p>날짜:3.4</p>
          <p>출발지</p>
          <p>도착지</p>
          <p>보증금</p>
        </div>
      </div>
      <BottomNav></BottomNav>
    </div>
  );
}

export default Home;
