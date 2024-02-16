import { useState } from "react";
import data from "../data.js";

function Content(props) {
  let [user] = useState(data);
  let today = [];
  today = user.filter((user) => user.day === props.date);
  console.log(user);
  return (
    <>
      {today.map((item, i) => {
        return (
          <div className="rideWrap" key={i}>
            <span className="time">{item.time}</span>
            <span className="locate">{item.location}</span>
            <span className="person">{item.people}</span>
          </div>
        );
      })}
    </>
  );
}

export default Content;
