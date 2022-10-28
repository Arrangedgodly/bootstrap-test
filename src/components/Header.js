import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Header() {
  return (
    <Container fluid>
      <Row>
        <Col className='text-center fs-1'>Grady Wasil's Coding Portfolio</Col>
      </Row>
    </Container>
  );
}

export default Header;