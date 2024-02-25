import { Form, Button, Navbar, Container, ButtonGroup } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Trip from "../component/trip.js";

import { useState } from "react";
import "../App.css";
import SwipeToSlide from "../component/cau.js";
import Content from "../component/content.js";
import BottomNav from "../component/bottomNav.js";

function Main(props) {
  var [date, setdate] = useState();
  var [trip, setTrip] = useState(false);
  return (
    <div className="contentWrap">
      <Navbar className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">Daejin Univ</Navbar.Brand>

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="지역명으로 검색"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Container>
      </Navbar>
      <div className="selectWrap">
        <DropdownButton id="dropdown-basic-button" title="탑승자">
          <Dropdown.Item href="#/action-1">탑승자</Dropdown.Item>
          <Dropdown.Item href="#/action-2">운전자</Dropdown.Item>
        </DropdownButton>
      </div>
      <div className="dayWrap">
        <SwipeToSlide setdate={setdate} />
      </div>

      <div>
        <button
          onClick={() => {
            setTrip(true);
          }}
        >
          여정 만들기
        </button>
      </div>
      <div>
        <div>나의 여정</div>
      </div>

      {trip == true ? <Trip setTrip={setTrip} /> : null}

      <BottomNav></BottomNav>
    </div>
  );
}

export default Main;
