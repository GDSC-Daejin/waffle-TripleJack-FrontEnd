import { useState, useEffect } from "react";

function Sign() {
  const [userName, setuserName] = useState("");
  const [userNumber, setuserNumber] = useState("");
  var [numberState, setnumberState] = useState(false); //체크값
  const [userId, setuserId] = useState("");
  const [idState, setidState] = useState(false); //체크
  const [userPw, setuserPw] = useState("");
  const [pwState, setpwState] = useState(false); //체크

  const [isPwcheck, setisPwcheck] = useState(false); //체크
  const [userCode, setuserCode] = useState("");
  const code = 1234;
  const [signUpstate, setsignUpstate] = useState(false);

  const [allCheck, setallCheck] = useState(true);

  useEffect(() => {
    if (numberState && idState && pwState && isPwcheck && signUpstate) {
      setallCheck(false);
    } else {
      setallCheck(true);
    }
  }, [numberState, idState, pwState, isPwcheck, signUpstate]);

  return (
    <div className="contentWrap">
      <div className="signDiv">
        <p>이름</p>
        <div></div>
        <input className="userName"></input>
      </div>
      <div className="signDiv">
        <p>전화번호</p>
        {numberState === false && <p>전화번호 형식이 아닙니다</p>}

        <input
          className="userNumber"
          placeholder="010-0000-0000"
          onChange={(e) => {
            const numberRegex = /^010-([0-9]{4})-([0-9]{4})$/;
            const currentNumber = e.target.value;
            if (numberRegex.test(currentNumber)) {
              setnumberState(true);
              setuserNumber(currentNumber);
            } else {
              setnumberState(false);
            }
          }}
        ></input>
      </div>
      <div className="signDiv">
        <p>아이디</p>
        {idState === false && <p>올바른 이메일 형식이 아닙니다</p>}
        <p>@daejin.ac.kr 형식</p>
        <input
          className="userId"
          placeholder="20191334@daejin.ac.kr"
          onChange={(e) => {
            const idRegex = /^[0-9]{8}@daejin\.ac\.kr$/;
            const currentidRegex = e.target.value;
            if (idRegex.test(currentidRegex)) {
              setidState(true);
              setuserId(e.target.value);
            } else {
              setidState(false);
            }
          }}
        ></input>
      </div>
      <div className="signDiv">
        <p>비밀번호</p>
        <p>대소문자,특수문자 포함 8자리 이상</p>
        {pwState === false && <p>올바른 조건이 아닙니다.</p>}
        <input
          className="userPw"
          // type="password"
          onChange={(e) => {
            const pwRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;

            const currentpwRegex = e.target.value;
            if (pwRegex.test(currentpwRegex)) {
              setpwState(true);
              setuserPw(e.target.value);
            } else {
              setpwState(false);
            }
          }}
        ></input>
        <p>비밀번호 확인</p>

        {isPwcheck === false && <p>비번이 일치하지 않습니다</p>}
        <input
          className="userpwCheck"
          type="password"
          onChange={(e) => {
            if (userPw === e.target.value) {
              setisPwcheck(true);
            } else {
              setisPwcheck(false);
            }
          }}
        ></input>
      </div>
      <div className="signDiv">
        <p>인증코드</p>
        <input
          className="userCode"
          type="number"
          onChange={(e) => {
            setuserCode(e.target.value);
            console.log(userCode);
          }}
        ></input>
      </div>
      <button>인증번호 보내기</button>
      <br></br>
      <button
        onClick={(e) => {
          if (parseInt(userCode) === code) {
            setsignUpstate(true);
          }
        }}
      >
        확인
      </button>
      <br></br>
      <button
        // disabled={allCheck}
        onClick={() => {
          const userInfo = {
            userName: { value: userName, type: typeof userName },
            userNumber: { value: userNumber, type: typeof userNumber },
            userId: { value: userId, type: typeof userId },
            userPw: { value: userPw, type: typeof userPw },
            userCode: { value: userCode, type: typeof userCode },
          };

          console.log(userInfo);
        }}
      >
        가입하기
      </button>
    </div>
  );
}

export default Sign;
