import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import google from "../google.png";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();
  const [userId, setUserId] = useState();
  const [userPw, setUserPw] = useState();

  return (
    <div className="contentWrap">
      <div className="logo">대카풀</div>

      <div className="InputWrap">
        <input
          className="idpw"
          type="text"
          placeholder="아이디 입력"
          onChange={(e) => {
            setUserId(e.target.value);
            console.log(userId);
          }}
        ></input>
        <input
          className="idpw"
          type="password"
          placeholder="비밀번호 입력"
          onChange={(e) => {
            setUserPw(e.target.value);
            console.log(userPw);
          }}
        ></input>
      </div>

      <div className="loginBtnWrap">
        <button
          className="loginBtn"
          onClick={() => {
            navigate("/main");
            console.log(userId, userPw);
            axios
              .post("주소", (userId, userPw))
              .then((결과) => {
                console.log(결과);
                navigate("/main");
              })
              .catch((error) => {
                console.error("로그인 요청 에러:", error);
              });
          }}
        >
          로그인
        </button>
      </div>

      <div className="findIdPw">
        <span
          className="findId"
          style={{ marginRight: "30px" }}
          onClick={() => {
            alert("");
          }}
        >
          아이디찾기
        </span>
        <span>|</span>
        <span className="findPw" style={{ marginLeft: "30px" }}>
          비밀번호 찾기
        </span>
      </div>

      <div className="google">
        <img src={google} className="googleLogo" />
      </div>

      <div className="email">
        <button className="emailBtn">이메일로 가입하기</button>
      </div>
    </div>
  );
}

export default Login;
