import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Form, Navbar } from "react-bootstrap";
import google from "./google.png";
import React, { useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import axios from "axios";

function App() {
  const [userId, setUserId] = useState();
  const [userPw, setUserPw] = useState();

  const userIdPw = {
    userId,
    userPw,
    setUserId,
    setUserPw,
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login userIdPw={userIdPw} />} />
        <Route path="/main" element={<div>메인페이지임</div>} />
      </Routes>
    </div>
  );
}

function Login(props) {
  const navigate = useNavigate();
  return (
    <div className="contentWrap">
      {/* <Navbar className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">Daejin Univ</Navbar.Brand>

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="지역명으로 검색"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Container>
      </Navbar> */}

      <div className="logo">로고</div>

      <div className="InputWrap">
        <input
          className="idpw"
          type="text"
          placeholder="아이디 입력"
          onChange={(e) => {
            props.userIdPw.setUserId(e.target.value);
            console.log(props.userIdPw.userId);
          }}
        ></input>
        <input
          className="idpw"
          type="password"
          placeholder="비밀번호 입력"
          onChange={(e) => {
            props.userIdPw.setUserPw(e.target.value);
            console.log(props.userIdPw.userPw);
          }}
        ></input>
      </div>

      <div className="loginBtnWrap">
        <button
          className="loginBtn"
          onClick={() => {
            const { userId, userPw } = props.userIdPw;
            console.log({ userId, userPw });
            axios
              .post("주소", { userId, userPw })
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

export default App;
