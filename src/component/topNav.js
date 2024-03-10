import { Form, Button, Navbar, Container } from "react-bootstrap";

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
</Navbar>;

export default topNav;
