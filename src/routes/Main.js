import { Form, Button, Navbar, Container, ButtonGroup } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useState } from "react";
import "../App.css";
import SwipeToSlide from "../com/cau.js";
import Content from "../com/content.js";
import BottomNav from "../com/bottomNav.js";

function Main(props) {
  var [date, setdate] = useState();
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

      <div className="selectWrap">
        <DropdownButton id="dropdown-basic-button" title="지역" style={{}}>
          <Dropdown.Item href="#/action-1">서울</Dropdown.Item>
          <Dropdown.Item href="#/action-1">경기</Dropdown.Item>
          <Dropdown.Item href="#/action-2">인천</Dropdown.Item>
        </DropdownButton>
      </div>

      <div className="externalRide">
        <Content setdate={setdate} date={date} />
      </div>

      {/* 더보기 버튼 */}
      <div>
        <button>더보기</button>
      </div>

      <BottomNav></BottomNav>
    </div>
  );
}

export default Main;