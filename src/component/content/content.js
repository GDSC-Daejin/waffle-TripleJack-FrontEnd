import styles from "../content/content.module.css";
import data from "../../post.js";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Content(props) {
  const [activeModalIndex, setActiveModalIndex] = useState(null);
  // filteredData를 상태로 관리하기 위해 useState를 추가합니다.
  const [filteredData, setFilteredData] = useState([]);

  const { nowState, today } = useSelector((state) => ({
    nowState: state.nowState,
    today: state.today,
  }));

  useEffect(() => {
    // data를 필터링하고 결과를 filteredData 상태에 설정합니다.
    let newFilteredData = data.filter(
      (item) =>
        parseInt(item.schoolState.value) === nowState &&
        item.selectDate.value === today
    );

    setFilteredData(newFilteredData);
  }, [nowState, today]); // 의존성 배열에 a.nowState를 추가함으로써, 이 값이 변경될 때마다 useEffect가 실행됩니다.

  return (
    <div>
      {filteredData.map(function (a, i) {
        const toggleModal = (e) => {
          // 클릭된 항목의 모달 상태를 토글합니다.
          setActiveModalIndex(activeModalIndex === i ? null : i);
        };

        return (
          <div key={i}>
            <div className={styles["contentBox"]} onClick={toggleModal}>
              {nowState === 0 ? (
                <>
                  <div>
                    시간: {a.goTime.value.hours}:{a.goTime.value.minutes}
                  </div>
                  <div>출발지: {a.dep.value}</div>
                  <div>도착지: {a.des.value}</div>
                  <div>모집인원: {a.recruit.value}</div>
                </>
              ) : (
                <>
                  <div>
                    시간: {a.goTime.value.hours}:{a.goTime.value.minutes}
                  </div>
                  <div>출발지: {a.dep.value}</div>
                  <div>도착지: {a.des.value}</div>
                  <div>모집인원:{a.recruit.value}</div>
                </>
              )}
            </div>

            {activeModalIndex === i && (
              <div className={styles["contentModal"]}>
                <div>
                  시간: {a.goTime.value.hours}:{a.goTime.value.minutes}
                </div>
                <div>출발지: {a.dep.value}</div>
                <div>도착지: {a.des.value}</div>
                <div>모집인원: {a.recruit.value}</div>
                <button
                  onClick={() => {
                    alert("신청이 완료되었습니다.");
                    setActiveModalIndex("0");
                  }}
                  className="tripBtn"
                >
                  신청
                </button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Content;
