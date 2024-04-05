import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "../App.css";

import Week from "../component/week.js";

import Content from "../component/content/content.js";
import BottomNav from "../component/bottomNav.js";
import { useSelector, useDispatch } from "react-redux";
import { changeState, setWeekEnd } from "../store.js";
import { useEffect } from "react";

import TopNav from "../component/topNav.js";

function Passenger(props) {
  const dispatch = useDispatch();
  const { nowState, weekEnd } = useSelector((state) => ({
    nowState: state.nowState,
    weekEnd: state.weekEnd,
  }));

  useEffect(() => {
    const today = new Date();
    const tempFormattedDate = [];

    for (var i = 0; i < 7; i++) {
      const nextDay = new Date(today);
      nextDay.setDate(today.getDate() + i);
      tempFormattedDate.push(
        `${nextDay.getFullYear().toString().slice(-2)}-${(
          nextDay.getMonth() + 1
        )
          .toString()
          .padStart(2, "0")}-${nextDay.getDate().toString().padStart(2, "0")}`
      );
    }

    dispatch(setWeekEnd(tempFormattedDate));
  }, [dispatch]);

  return (
    <div className="contentWrap">
      <TopNav />
      <Week weekEnd={weekEnd} /> {/* 날짜 */}
      <div className="selectWrap">
        <DropdownButton
          className="dropdown-basic-button customDrop"
          title={nowState === 0 ? "등교" : "하교"}
        >
          <Dropdown.Item
            onClick={() => {
              dispatch(changeState(0));
            }}
          >
            등교
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              dispatch(changeState(1));
            }}
          >
            하교
          </Dropdown.Item>
        </DropdownButton>
      </div>
      <div className="externalRide">
        <Content />
      </div>
      <div>
        <button className="tripBtn">더보기</button>
      </div>
      <BottomNav />
    </div>
  );
}

export default Passenger;
