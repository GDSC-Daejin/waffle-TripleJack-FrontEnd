import styles from "../content/content.module.css";
import data from "../../data.js";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Content(props) {
  const [activeModalIndex, setActiveModalIndex] = useState(null);
  // filteredData를 상태로 관리하기 위해 useState를 추가합니다.
  const [filteredData, setFilteredData] = useState([]);

  // useSelector를 사용하여 리덕스 스토어의 상태를 가져옵니다.
  let a = useSelector((state) => {
    return state;
  });

  console.log(a.nowState);

  useEffect(() => {
    // data를 필터링하고 결과를 filteredData 상태에 설정합니다.
    let newFilteredData = data.filter(
      (item) => parseInt(item.schoolState.value) === a.nowState
    );
    setFilteredData(newFilteredData);

    console.log(newFilteredData);
  }, [a.nowState]); // 의존성 배열에 a.nowState를 추가함으로써, 이 값이 변경될 때마다 useEffect가 실행됩니다.

  return (
    <div>
      {filteredData.map(function (a, i) {
        const toggleModal = (e) => {
          // 클릭된 항목의 모달 상태를 토글합니다.
          setActiveModalIndex(activeModalIndex === i ? null : i);
        };

        return (
          <div>
            <div className={styles["contentBox"]} key={i} onClick={toggleModal}>
              <div>{a.goTime.value.hours}</div>

              {/* <div>{a.des.value}</div> */}
              <div>{a.recruit.value}</div>
            </div>

            {activeModalIndex === i && (
              <div className={styles["contentModal"]}>
                <div>{a.goTime.value.hours}</div>
                {/* <div>{a.des.value}</div> */}
                <div>{a.recruit.value}</div>
                <button>신청</button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Content;
