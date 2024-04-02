import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Trip from "../component/trip/trip.js";
import BottomNav from "../component/bottomNav.js";
import Week from "../component/week.js";
import TopNav from "../component/topNav.js";
import Banner from "../component/banner/banner.js";
import { setWeekEnd } from "../store.js";

function Main(props) {
  let navigate = useNavigate();
  const [nowDay, setNowDay] = useState(null);
  const [trip, setTrip] = useState(false);
  let dispatch = useDispatch();
  let weekEnd = useSelector((state) => {
    return state.weekEnd;
  });

  useEffect(() => {
    const today = new Date();
    const tempFormattedDate = [];

    for (var i = 0; i < 7; i++) {
      const nextDay = new Date(today);
      nextDay.setDate(today.getDate() + i);
      tempFormattedDate.push(`${nextDay.getMonth() + 1}. ${nextDay.getDate()}`);
    }

    dispatch(setWeekEnd(tempFormattedDate));
  }, [dispatch]);

  return (
    <div className="contentWrap">
      <TopNav />
      <Week weekEnd={weekEnd} setNowDay={setNowDay} />
      <Banner></Banner>
      <div></div>
      <div>
        <button className="tripBtn" onClick={() => setTrip(true)}>
          여정 만들기
        </button>
      </div>
      {trip ? <Trip setTrip={setTrip} /> : null}
      <BottomNav />
    </div>
  );
}

export default Main;
