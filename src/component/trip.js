import "../App.css";

function Trip(props) {
  return (
    <div className="black-bg">
      <div
        style={{
          background: "white",
          height: "350px",
          width: "300px",
          padding: "20px",
        }}
      >
        <select>
          <option>등교</option>
          <option>하교</option>
        </select>

        <select>
          <option>서울</option>
          <option>경기</option>
          <option>인천</option>
        </select>

        <div>
          <select>
            <option>2월5일</option>
            <option>2월6일</option>
            <option>2월7일</option>
            <option>2월8일</option>
          </select>

          <select>
            <option>9:00</option>
            <option>9:10</option>
            <option>9:20</option>
            <option>9:30</option>
          </select>
        </div>
        <span>출발지</span>
        <input style={{ display: "block" }}></input>
        <span>도착지</span>
        <input style={{ display: "block" }}></input>
        <span>차번호</span>
        <input style={{ display: "block" }}></input>
        <span>보증금</span>
        <input style={{ display: "block" }}></input>

        <button>작성</button>
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
