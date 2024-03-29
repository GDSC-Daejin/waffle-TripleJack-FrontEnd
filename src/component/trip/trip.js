import { useEffect, useState } from "react";
import styles from "../trip/trip.module.css";
import data from "../../data.js";

function Trip(props) {
  const [dep, setDep] = useState(null); // 출발지
  const [des, setDes] = useState(null); // 출발지
  const [carNum, setCarNum] = useState(null); //차번호
  const [goTime, setGoTime] = useState({
    hours: null,
    minutes: null,
  });
  const [recruit, setRecruit] = useState(null);
  const [schoolState, setSchoolState] = useState(null);
  const [tripCheck, setTripCheck] = useState(true);

  // 선택되지 않았거나 "--" 옵션을 선택한 경우가 아닌 경우들을 확인하는 로직
  useEffect(() => {
    const isGoTimeValid = goTime.hours && goTime.minutes;
    const isSchoolStateValid = schoolState !== null && schoolState !== "";
    const isRecruitValid = recruit !== null && recruit !== "";
    const isCarNumValid = carNum !== null && carNum.trim() !== "";
    const isDepValid = dep !== null && dep.trim() !== "";
    const isDesValid = des !== null && des.trim() !== "";

    const isValid =
      isGoTimeValid &&
      isSchoolStateValid &&
      isRecruitValid &&
      isCarNumValid &&
      isDepValid &&
      isDesValid;

    setTripCheck(!isValid); // 모든 조건이 유효할 때만 작성버튼 활성화
  }, [dep, des, carNum, goTime, recruit, schoolState]); // 의존성 배열에 모든 관련 상태 포함

  return (
    <div className={styles["black-bg"]}>
      <div className={styles["tripBox"]}>
        <div>
          <span>등하교 구분</span>
          <select
            onChange={(e) => {
              setSchoolState(e.target.value);
              console.log(schoolState);
            }}
          >
            <option value="">--</option>
            <option value="0">등교</option>
            <option value="1">하교</option>
          </select>
        </div>

        <div>
          <span>날짜</span>
          <select>
            <option value="">--</option>
            <option>2월5일</option>
            <option>2월6일</option>
            <option>2월7일</option>
            <option>2월8일</option>
          </select>
        </div>

        <div>
          <span>시간</span>
          <select
            onChange={(e) => {
              setGoTime((prevGoTime) => ({
                ...prevGoTime, // 기존의 상태를 복사
                hours: e.target.value, // hours만 업데이트
              }));
            }}
          >
            {schoolState !== "1" ? (
              <>
                <option value="">--</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
              </>
            ) : (
              <>
                <option value="">--</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
              </>
            )}
          </select>

          <select
            onChange={(e) => {
              setGoTime((prevGoTime) => ({
                ...prevGoTime, // 기존의 상태를 복사
                minutes: e.target.value, // hours만 업데이트
              }));
              console.log(goTime);
            }}
          >
            {goTime.hours === "9" || goTime.hours === "20" ? (
              <>
                <option value="">--</option>
                <option value="00">00</option>
              </>
            ) : (
              <>
                <option value="">--</option>
                <option value="00">00</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="40">40</option>
                <option value="50">50</option>
              </>
            )}
          </select>
        </div>

        {schoolState === "0" ? (
          <>
            <span>출발지</span>
            <input
              onChange={(e) => {
                setDes(e.target.value);
              }}
            ></input>
            <span>도착지</span>
            <input
              onChange={(e) => {
                setDep(e.target.value);
              }}
            ></input>
            <span>차번호</span>
            <input
              onChange={(e) => {
                setCarNum(e.target.value);
              }}
            ></input>
          </>
        ) : (
          <>
            <span>출발지</span>
            <input></input>
            <span>도착지</span>
            <input onChange={(e) => {}}></input>
            <span>차번호</span>
            <input
              onChange={(e) => {
                setCarNum(e.target.value);
              }}
            ></input>
          </>
        )}

        <span>모집인원</span>
        <select
          onChange={(e) => {
            setRecruit(e.target.value);
            console.log(recruit);
          }}
        >
          <option value="">--</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

        <button
          onClick={() => {
            if (tripCheck === false) {
              props.setTrip(false); // 창닫기

              const tripSet = {
                //유저의 토큰정보도 같이 보내야함
                carNum: { value: carNum, type: typeof carNum },
                goTime: { value: goTime, type: typeof goTime },
                recruit: { value: recruit, type: typeof recruit },
                schoolState: { value: schoolState, type: typeof schoolState },
              }; //DB에 전달할 객체

              data.push(tripSet); //api 주소로 보내는 axios 로 수정
              console.log(tripSet);
              console.log(data);
            } else {
              alert("빈칸이 없는지 확인하세요");
            }
          }}
        >
          작성
        </button>

        <button
          onClick={() => {
            props.setTrip(false);
          }}
        >
          닫기
        </button>
      </div>
    </div>
  );
}

export default Trip;
