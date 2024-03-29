import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginService } from "../apis/loginService"; // otpService는 예시입니다.
import { useCookies } from "react-cookie";

function Login(props) {
  const navigate = useNavigate();
  const [studId, setStudId] = useState("");
  const [passWord, setPassWord] = useState("");
  const [cookies, setCookie] = useCookies(["accessToken", "refreshToken"]); // 쿠키 사용 선언

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await loginService(studId, passWord);
      console.log(response);

      // 로그인 성공 시 쿠키에 토큰 저장
      setCookie("accessToken", response.accessToken, {
        path: "/",
        maxAge: 3600,
      }); // 액세스 토큰, 1시간 유효
      setCookie("refreshToken", response.refreshToken, {
        path: "/",
        maxAge: 86400,
      }); // 리프레시 토큰, 1일 유효

      navigate("/home");
    } catch (error) {
      console.error("로그인 실패:", error);
    }
  };

  // 나머지 컴포넌트 및 JSX 반환...

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
          type="password"
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
            // navigate("/Driver");
          }}
        >
          가입하기
        </button>
      </div>
    </div>
  );
}

export default Login;
