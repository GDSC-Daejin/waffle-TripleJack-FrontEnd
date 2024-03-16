import { useState } from "react";
import styles from "../trip/trip.module.css";
import data from "../../data.js";

function Trip(props) {
  const [dep, setDep] = useState(null); // 출발지
  const [des, setDes] = useState(null); // 도착지
  const [carNum, setCarNum] = useState(null); //차번호
  const [pay, setPay] = useState(null); //보증금
  const [time, setTime] = useState(null);
  const [people, setPeople] = useState(null);
  const [schoolState, setSchoolState] = useState(null);

  return (
    <div className={styles["black-bg"]}>
      <div className={styles["tripBox"]}>
        <select
          onChange={(e) => {
            setSchoolState(e.target.value);
          }}
        >
          <option>등하교 구분</option>
          <option value="0">등교</option>
          <option value="1">하교</option>
        </select>

        <div>
          <select>
            <option>날짜</option>
            <option>2월5일</option>
            <option>2월6일</option>
            <option>2월7일</option>
            <option>2월8일</option>
          </select>

          <select
            onChange={(e) => {
              setTime(e.target.value);
            }}
          >
            <option>시간</option>
            <option>9:00</option>
            <option>9:10</option>
            <option>9:20</option>
            <option>9:30</option>
          </select>
        </div>
        <span>출발지</span>
        <input
          onChange={(e) => {
            setDep(e.target.value);
          }}
        ></input>
        <span>도착지</span>
        <input
          onChange={(e) => {
            setDes(e.target.value);
          }}
        ></input>
        <span>차번호</span>
        <input
          onChange={(e) => {
            setCarNum(e.target.value);
          }}
        ></input>
        <span>보증금</span>
        <input
          onChange={(e) => {
            setPay(e.target.value);
          }}
        ></input>
        <span>모집인원</span>
        <input
          onChange={(e) => {
            setPeople(e.target.value);
          }}
        ></input>

        <button
          onClick={() => {
            props.setTrip(false); // 창닫기
            const tripSet = {
              dep: { value: dep, type: typeof dep },
              des: { value: des, type: typeof des },
              carNum: { value: carNum, type: typeof carNum },
              pay: { value: pay, type: typeof pay },
              time: { value: time, type: typeof time },
              people: { value: people, type: typeof people },
              schoolState: { value: schoolState, type: typeof schoolState },

              // const [dep, setDep] = useState(null); // 출발지
              // const [des, setDes] = useState(null); // 도착지
              // const [carNum, setCarNum] = useState(null); //차번호
              // const [pay, setPay] = useState(null); //보증금
            }; //DB에 전달할 객체

            console.log(tripSet);
            data.push(tripSet);
            console.log(data);
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
