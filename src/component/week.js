function Week({ weekEnd, setNowDay }) {
  return (
    <div className="dayWrap">
      <ul className="daylist">
        {weekEnd.map((a, i) => {
          const parts = a.split("-"); // 'yy-mm-dd' 형식을 분리합니다.
          const year = parts[0]; // 첫 번째 부분이 연도입니다.
          const month = parts[1]; // 두 번째 부분이 월입니다.
          const date = parts[2]; // 세 번째 부분이 일입니다.
          return (
            <li
              key={i}
              onClick={() => {
                setNowDay(a); // 전체 날짜 문자열을 setNowDay 함수에 전달합니다.
              }}
            >
              {`${month}월 ${date}일`}
              {/* 월과 일을 "MM월 DD일" 형식으로 표시합니다. */}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Week;
