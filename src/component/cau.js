import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from "react";
import Slider from "react-slick";
import "../App.css";
import ListGroup from "react-bootstrap/ListGroup";

function SimpleSlider(props) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div>
        <ListGroup horizontal>
          <ListGroup.Item
            onClick={() => {
              props.setdate(25);
            }}
          >
            2.5 월
          </ListGroup.Item>
          <ListGroup.Item
            onClick={() => {
              props.setdate(26);
            }}
          >
            2.6 화
          </ListGroup.Item>
          <ListGroup.Item>2.7 수</ListGroup.Item>
          <ListGroup.Item>2.8 목</ListGroup.Item>
          <ListGroup.Item>2.9 금</ListGroup.Item>
        </ListGroup>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
  );
}

export default SimpleSlider;
