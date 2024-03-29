import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginService } from "../apis/loginService"; // otpService는 예시입니다.

function Login(props) {
  const navigate = useNavigate();
  const [studId, setStudId] = useState("");
  const [passWord, setPassWord] = useState("");
  const [otp, setOtp] = useState(""); // OTP 입력 상태 관리
  const [loginResponse, setLoginResponse] = useState(null); // 로그인 응답 상태를 저장하기 위한 상태 추가

  const handleLogin = async (e) => {
    e.preventDefault(); // 폼 제출 시 페이지 리로드 방지
    try {
      const response = await loginService(studId, passWord);
      console.log(response);
      setLoginResponse(response); // 로그인 응답 상태 업데이트
      navigate("/home");
      // OTP 필요하면 여기서 처리
    } catch (error) {
      console.error("로그인 실패:", error);
    }
  };

  // const handleOtp = async (e) => {
  //   e.preventDefault(); // 폼 제출 시 페이지 리로드 방지
  //   try {
  //     // OTP 검증 서비스 호출 예시
  //     const otpResponse = await otpService(studId, otp);
  //     console.log(otpResponse);
  //     if (otpResponse.code === 200) {
  //       // OTP 검증 성공 시 메인 페이지로 이동
  //       navigate("/home");
  //       console.log("인증성공");
  //     } else {
  //       // OTP 검증 실패 처리
  //       console.error("OTP 검증 실패");
  //     }
  //   } catch (error) {
  //     console.error("OTP 처리 중 오류 발생:", error);
  //   }
  // };

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

      {/* {loginResponse && loginResponse.code === 200 && (
        <form onSubmit={handleOtp}>
          <input
            type="text"
            placeholder="OTP 입력"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button type="submit">OTP 확인</button>
        </form>
      )} */}

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
