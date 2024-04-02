import { useEffect, useState } from "react";
import styles from "../trip/trip.module.css";
import data from "../../data.js";
import { useSelector } from "react-redux";
import "../../App.css";
import { insertService } from "../../apis/insertService.js";

function Trip(props) {
  const weekEnd = useSelector((state) => {
    return state.weekEnd;
  });

  const handleInsert = async (e) => {
    // tripSet 정의를 insertService 호출 전으로 이동
    const tripSet = {
      carNum: { value: carNum, type: typeof carNum },
      goTime: { value: goTime, type: typeof goTime },
      recruit: { value: recruit, type: typeof recruit },
      des: { value: des, type: typeof des },
      dep: { value: dep, type: typeof dep },
      schoolState: { value: schoolState, type: typeof schoolState },
      selectDate: { value: selectDate, type: typeof selectDate }, // YY-MM-DD
    };

    try {
      // tripSet을 사용하여 서비스 호출
      console.log(tripSet);
      const response = await insertService(tripSet);
      // 성공적인 응답 처리
      console.log("응답 성공:", response);
    } catch (error) {
      // 에러 처리
      console.error("삽입 실패:", error); // 메시지 수정
    }
  };

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
  const [selectDate, setSelectDate] = useState(null);

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
        <div className={styles["dropBoxWrap"]}>
          <select
            className={styles["dropBox"]}
            onChange={(e) => {
              setSchoolState(e.target.value);
            }}
          >
            <option value="">등교/하교</option>
            <option value="0">등교</option>
            <option value="1">하교</option>
          </select>

          <select
            className={styles["dropBox"]}
            onChange={(e) => {
              setRecruit(e.target.value);
            }}
          >
            <option value="">모집인원</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>

        <div className={styles["dropBoxWrap"]}>
          <select
            className={styles["dropBox"]}
            onChange={(e) => {
              setSelectDate(e.target.value);
            }}
          >
            <option>날짜</option>
            {weekEnd.map((a, i) => (
              <option value={a} key={i}>
                {a}
              </option>
            ))}
          </select>

          <div>
            <select
              className={styles["dropBox"]}
              onChange={(e) => {
                setGoTime((prevGoTime) => ({
                  ...prevGoTime, // 기존의 상태를 복사
                  hours: e.target.value, // hours만 업데이트
                }));
              }}
            >
              {schoolState !== "1" ? (
                <>
                  <option value="">시</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                </>
              ) : (
                <>
                  <option value="">시</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                </>
              )}
            </select>
            <select
              className={styles["dropBox"]}
              style={{ marginLeft: "10px" }}
              onChange={(e) => {
                setGoTime((prevGoTime) => ({
                  ...prevGoTime, // 기존의 상태를 복사
                  minutes: e.target.value, // hours만 업데이트
                }));
              }}
            >
              {goTime.hours === "9" || goTime.hours === "20" ? (
                <>
                  <option value="">분</option>
                  <option value="00">00</option>
                </>
              ) : (
                <>
                  <option value="">분</option>
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
        </div>

        <div className={styles["inputBoxWrap"]}>
          <input
            placeholder="출발지 입력"
            onChange={(e) => {
              setDep(e.target.value);
            }}
          ></input>

          <input
            placeholder="도착지 입력"
            onChange={(e) => {
              setDes(e.target.value);
            }}
          ></input>

          <input
            placeholder="차번호 입력"
            onChange={(e) => {
              setCarNum(e.target.value);
            }}
          ></input>
        </div>

        <div className={styles["btnWrap"]}>
          <button
            className="tripBtn"
            onClick={() => {
              handleInsert();
              if (tripCheck === false) {
                props.setTrip(false); // 창닫기
              } else {
                alert("빈칸이 없는지 확인하세요");
              }
            }}
          >
            작성
          </button>

          <button
            className="tripBtn"
            onClick={() => {
              props.setTrip(false);
            }}
          >
            취소
          </button>
        </div>
      </div>
    </div>
  );
}

export default Trip;
