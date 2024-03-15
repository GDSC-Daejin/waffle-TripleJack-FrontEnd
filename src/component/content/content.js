import styles from "../content/content.module.css";
import data from "../../data.js";
import { useState } from "react";

function Content(props) {
  // 활성화된 모달의 인덱스를 저장합니다. 초기값은 null로 설정하여 아무것도 활성화되지 않음을 의미합니다.
  const [activeModalIndex, setActiveModalIndex] = useState(null);

  return (
    <div>
      {data.map(function (a, i) {
        // 각 항목을 클릭했을 때의 핸들러입니다.
        const toggleModal = () => {
          // 현재 클릭된 항목의 모달이 이미 활성화 상태인지 확인하고, 그에 따라 상태를 업데이트합니다.
          // 이미 활성화되어 있다면 null을 설정하여 모든 모달을 비활성화, 그렇지 않으면 해당 항목의 인덱스를 설정합니다.
          setActiveModalIndex(activeModalIndex === i ? null : i);
        };

        return (
          <div key={i} onClick={toggleModal}>
            <div className={styles["contentBox"]}>
              <div>{a.time.value}</div>
              <div>{a.des.value}</div>
              <div>{a.dep.value}</div>
            </div>

            {/* 현재 항목의 모달이 활성화 상태인지 확인하고, 맞다면 모달 컨텐츠를 렌더링합니다. */}
            {activeModalIndex === i && (
              <div>
                <div style={{ border: "solid 1px" }}>asd</div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Content;
