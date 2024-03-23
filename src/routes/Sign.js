import { useState, useEffect } from "react";

function Sign() {
  const [userName, setUserName] = useState(""); //이름
  const [studId, setStudId] = useState(""); //아이디
  const [passWord, setPassWord] = useState(""); //비밀번호
  const [callNum, setCallNum] = useState(""); //전화번호

  const [numberState, setnumberState] = useState(false); //전화번호 체크값
  const [idState, setidState] = useState(false); //학번 체크
  const [pwState, setpwState] = useState(false); //비밀번호 체크
  const [isPwcheck, setisPwcheck] = useState(false); //비밀번호 확인 체크
  const [signUpCheck, setSignUpCheck] = useState(true); //모든값 체크 됐을때 변수

  useEffect(() => {
    if (numberState && idState && pwState && isPwcheck) {
      setSignUpCheck(false);
    } else {
      setSignUpCheck(true);
    }
  }, [numberState, idState, pwState, isPwcheck]); //모든 인풋칸에 맞는 값일 때 가입버튼 활성 변수

  return (
    <div className="contentWrap">
      <div className="signDiv">
        <p>이름</p>
        {userName.trim() === "" && <p>이름을 입력하세요</p>}
        <input
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        ></input>
      </div>
      <div className="signDiv">
        <p>전화번호</p>
        {numberState === false && <p>전화번호 형식이 아닙니다</p>}

        <input
          placeholder="010-0000-0000"
          onChange={(e) => {
            const numberRegex = /^010-([0-9]{4})-([0-9]{4})$/;
            const currentNumber = e.target.value;
            if (numberRegex.test(currentNumber)) {
              setnumberState(true);
              setCallNum(currentNumber);
            } else {
              setnumberState(false);
            }
          }}
        ></input>
      </div>
      <div className="signDiv">
        <p>아이디(학번)</p>
        <p>@daejin.ac.kr 형식</p>
        {idState === false && <p>올바른 이메일 형식이 아닙니다</p>}
        <input
          placeholder="20191334@daejin.ac.kr"
          onChange={(e) => {
            const idRegex = /^[0-9]{8}@daejin\.ac\.kr$/;
            const currentidRegex = e.target.value;
            if (idRegex.test(currentidRegex)) {
              setidState(true);
              setStudId(e.target.value);
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
          // type="password"
          onChange={(e) => {
            const pwRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;

            const currentpwRegex = e.target.value;
            if (pwRegex.test(currentpwRegex)) {
              setpwState(true);
              setPassWord(e.target.value);
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
            if (passWord === e.target.value) {
              setisPwcheck(true);
            } else {
              setisPwcheck(false);
            }
          }}
        ></input>
      </div>

      <br></br>
      <button
        disabled={signUpCheck}
        onClick={() => {
          const userInfo = {
            userName: { value: userName, type: typeof userName },
            studId: { value: studId, type: typeof userId },
            passWord: { value: passWord, type: typeof passWord },
            callNum: { value: callNum, type: typeof callNum },
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
