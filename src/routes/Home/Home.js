import React from "react";
import "../../App.css";
import styles from "../Home/Home.module.css";
import "../Home/Home.module.css";
import BottomNav from "../../component/bottomNav";
import { useNavigate } from "react-router-dom";
function Home(props) {
  const navigate = useNavigate();
  return (
    <div className="contentWrap">
      <div className={`${styles.homeDiv} ${styles.Top}`}>
        <p
          className="homeTopFont"
          onClick={() => {
            navigate("/home");
          }}
        >
          대카풀
        </p>
        <img
          src={process.env.PUBLIC_URL + "./images/alram.png"}
          style={{ height: "30px", width: "30px" }}
        ></img>
      </div>

      <div className={styles.homeDiv}>
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

      <div className={`${styles.homeDiv} ${styles.select}`}>
        <div
          className={styles.selectImg}
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
          className={styles.selectImg}
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
        className={styles.homeDiv}
        style={{ backgroundColor: "lightgrey", flex: "1" }}
      >
        <div className={styles.homeList}>
          <div>최신 게시글</div>
          <div>
            <p>오늘날짜로 할거임</p>
            <p>출발지</p>
            <p>도착지</p>
            <p>모집인원</p>
          </div>
        </div>
      </div>
      <BottomNav></BottomNav>
    </div>
  );
}

export default Home;
