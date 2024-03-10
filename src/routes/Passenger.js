import { Form, Button, Navbar, Container } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation"; //캐러셀 라이브러리

import { useState, useEffect } from "react";
import "../App.css";

import Content from "../component/content.js";
import BottomNav from "../component/bottomNav.js";

function Passenger(props) {
  const [date, setdate] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:8080/list") // GET 요청
      .then((response) => {
        setdate(response.data); // 응답 데이터를 상태에 저장
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, []);

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

export default Passenger;
