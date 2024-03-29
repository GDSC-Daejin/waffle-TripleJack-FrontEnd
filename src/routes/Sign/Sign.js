import { useState, useEffect } from "react";
import styles from "../Sign/Sign.module.css";
import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();
  useEffect(() => {
    if (numberState && idState && pwState && isPwcheck) {
      setSignUpCheck(false);
    } else {
      setSignUpCheck(true);
    }
  }, [numberState, idState, pwState, isPwcheck]); //모든 인풋칸에 맞는 값일 때 가입버튼 활성 변수

  return (
    <div className="contentWrap">
      <div className={styles.signDiv}>
        <b style={{ fontSize: "25px" }}>회원가입</b>
        <p>회원가입을 위해 정보를 입력해주세요.</p>
      </div>

      <div className={styles.signDiv}>
        <span className={styles.wordStyle}>아이디(학번)</span>
        {idState === false && (
          <span className={styles.warningModal}>학번 형태가 아닙니다!</span>
        )}
        <div>
          <input
            className={styles.signInput}
            style={{ width: "50%", display: "inline-block" }}
            placeholder="00000000"
            onChange={(e) => {
              const idRegex = /^[0-9]{8}$/;
              const currentidRegex = e.target.value;
              if (idRegex.test(currentidRegex)) {
                setidState(true);
                setStudId(e.target.value);
              } else {
                setidState(false);
              }
            }}
          ></input>
          <button className={styles.signBtn} style={{ marginLeft: "10px" }}>
            중복확인
          </button>
        </div>
      </div>

      <div className={styles.signDiv}>
        <span className={styles.wordStyle}>비밀번호</span>

        {pwState === false && (
          <span className={styles.warningModal}>올바른 조건이 아닙니다.</span>
        )}
        <input
          className={styles.signInput}
          // type="password"
          placeholder="대소문자,특수문자 포함 8자리 이상"
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
      </div>

      <div className={styles.signDiv}>
        {" "}
        <span className={styles.wordStyle}>비밀번호 확인</span>
        {isPwcheck === false && (
          <span className={styles.warningModal}>비번이 일치하지 않습니다.</span>
        )}
        <input
          className={styles.signInput}
          type="password"
          placeholder="비밀번호 재입력"
          onChange={(e) => {
            if (passWord === e.target.value) {
              setisPwcheck(true);
            } else {
              setisPwcheck(false);
            }
          }}
        ></input>
      </div>

      <div className={styles.signDiv}>
        <span className={styles.wordStyle}>이름</span>
        {userName.trim() === "" && (
          <span className={styles.warningModal}>올바른 형식이 아닙니다.</span>
        )}
        <input
          className={styles.signInput}
          placeholder="이름을 입력하세요"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        ></input>
      </div>
      <div className={styles.signDiv}>
        <span className={styles.wordStyle}>전화번호</span>
        {numberState === false && (
          <span className={styles.warningModal}>전화번호 형식이 아닙니다</span>
        )}

        <input
          placeholder="010-0000-0000"
          className={styles.signInput}
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

      <button
        className={styles.signBtn}
        disabled={signUpCheck}
        onClick={() => {
          const userInfo = {
            userName: { value: userName, type: typeof userName }, //뭔가 잘못된 거 같음
            studId: { value: studId, type: typeof studId },
            passWord: { value: passWord, type: typeof passWord },
            callNum: { value: callNum, type: typeof callNum },
          };
          navigate("/       ");

          console.log(userInfo);
        }}
      >
        가입하기
      </button>
    </div>
  );
}

export default Sign;
