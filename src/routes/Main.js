import { Form, Button, Navbar, Container } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

import { useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";

import "../App.css";

function Main() {
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState("1");

  const radios = [
    { name: "등교", value: "1" },
    { name: "하교", value: "2" },
  ];

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

      <br></br>

      <ButtonGroup>
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant={idx % 2 ? "outline-success" : "outline-danger"}
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
    </div>
  );
}

export default Main;
