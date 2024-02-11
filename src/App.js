import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Container,Form,Navbar} from 'react-bootstrap';

function App() {
  return (
    <div className='container'>


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

    <div>
      
    </div>





    </div>
    
  );
}

export default App;
