import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import google from "../google.png";
import { useState } from "react";

function Login(props) {
  const navigate = useNavigate();
  const [userId, setUserId] = useState();
  const [userPw, setUserPw] = useState();

  return (
    <div className="contentWrap">
      <div className="logo">
        <p className="logo">대카풀</p>
      </div>

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
            navigate("/home");
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
        <ul>
          <li style={{ marginRight: "30px" }}>아이디 찾기</li>
          <span>|</span>
          <li style={{ marginLeft: "30px" }}>비밀번호 찾기</li>
        </ul>
      </div>

      <div className="email">
        <button
          className="emailBtn"
          onClick={() => {
            navigate("/sign");
          }}
        >
          가입하기
        </button>
      </div>
    </div>
  );
}

export default Login;
