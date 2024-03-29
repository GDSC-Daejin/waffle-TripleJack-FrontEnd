import { Form, Button, Navbar, Container } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "../App.css";
import axios from "axios";

import data from "../data.js";
import Week from "../component/week.js";

import Content from "../component/content/content.js";
import BottomNav from "../component/bottomNav.js";
import { useSelector, useDispatch } from "react-redux";
import { changeState, setWeekEnd } from "../store.js";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TopNav from "../component/topNav.js";

function Passenger(props) {
  let dispatch = useDispatch();
  let a = useSelector((state) => {
    return state;
  });
  const [nowDay, setNowDay] = useState(null);
  useEffect(() => {
    const today = new Date();
    const tempFormattedDate = [];

    for (var i = 0; i < 7; i++) {
      const nextDay = new Date(today);
      nextDay.setDate(today.getDate() + i);
      tempFormattedDate.push(`${nextDay.getMonth() + 1}. ${nextDay.getDate()}`);
    }

    // 계산된 날짜 배열을 setWeekEnd 액션의 payload로 전달하여 상태 업데이트
    dispatch(setWeekEnd(tempFormattedDate));
  }, [dispatch]);

  return (
    <div className="contentWrap">
      <TopNav />
      <Week weekEnd={a.weekEnd} setNowDay={setNowDay} /> {/* 날짜 */}
      <div className="selectWrap">
        <DropdownButton
          className="dropdown-basic-button customDrop"
          title="등하교"
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
