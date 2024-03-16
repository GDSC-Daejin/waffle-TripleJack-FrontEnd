import { Form, Button, Navbar, Container } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import data from "../data.js";

import "swiper/css";
import "swiper/css/navigation"; //캐러셀 라이브러리

import "../App.css";

import Content from "../component/content/content.js";
import BottomNav from "../component/bottomNav.js";
import { useSelector, useDispatch } from "react-redux";
import { changeState } from "../store.js";
import { useEffect } from "react";

function Passenger(props) {
  let dispatch = useDispatch();
  let a = useSelector((state) => {
    return state;
  });

  return (
    <div className="contentWrap">
      <Navbar className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">대카풀</Navbar.Brand>

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

      <div className="dayWrap">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <ul className="daylist">
              <li>asd</li>
              <li>asd</li>
              <li>asd</li>
            </ul>
          </SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
        </Swiper>
      </div>

      <div className="selectWrap">
        <DropdownButton id="dropdown-basic-button" title="등하교">
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

      {/* 더보기 버튼 */}
      <div>
        <button>더보기</button>
      </div>

      <BottomNav></BottomNav>
    </div>
  );
}

export default Passenger;
