import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Header({ children }) {
  return (
    <Container fluid>
      <Row>
        <Col className='text-center fs-1'>Grady Wasil's Coding Portfolio</Col>
      </Row>
      <Row>
        <Col className='text-center fs-5'>Rebuilt with React Bootstrap</Col>
      </Row>
      {children}
    </Container>
  );
}

export default Header;