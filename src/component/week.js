import "../App.css";

function Week({ weekEnd, setNowDay }) {
  return (
    <div className="dayWrap">
      <ul className="daylist">
        {weekEnd.map((a, i) => (
          <li
            key={i}
            onClick={() => {
              setNowDay(a);
            }}
          >
            {a}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Week;
