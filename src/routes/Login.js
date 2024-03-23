import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginService } from "../apis/loginService";

function Login(props) {
  const navigate = useNavigate();
  const [studId, setStudId] = useState("");
  const [passWord, setPassWord] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault(); // 폼 제출 시 페이지 리로드 방지
    try {
      const result = await loginService(studId, passWord);

      // 로그인 성공 후 메인 페이지로 이동하는 로직
      navigate("/home"); // 예시: React Router를 사용하는 경우
    } catch (error) {
      if (error.response && error.response.status === 404) {
        alert("사용자를 찾을 수 없습니다");
      }
      console.log("로그인 요청 에러:", error);
    }
  };

  return (
    <div className="contentWrap">
      <div className="logo">대카풀</div>

      <form onSubmit={handleLogin} className="InputWrap">
        <input
          className="idpw"
          type="text"
          placeholder="아이디 입력"
          value={studId}
          onChange={(e) => setStudId(e.target.value)}
        />
        <input
          className="idpw"
          type="text"
          placeholder="비밀번호 입력"
          value={passWord}
          onChange={(e) => setPassWord(e.target.value)}
        />
        <div className="loginBtnWrap">
          <button type="submit" className="loginBtn">
            로그인
          </button>
        </div>
      </form>

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
