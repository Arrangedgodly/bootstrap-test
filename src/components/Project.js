import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import '../blocks/project.css';

function Project(props) {
  return (
    <Card className='text-center project'>
      <Card.Header as='h3'>{props.name}</Card.Header>
      <Card.Body>
        <Card.Text>{props.text}</Card.Text>
        <ListGroup horizontal>
          {props.feat.map(item => (
            <ListGroup.Item className="text-primary text-opacity-75 col-4" key={item}>
              <Badge bg='success' pill>
              {item}
              </Badge>
            </ListGroup.Item>
          ))}
        </ListGroup>
        <Container className="project-footer">
          <Row>
            <Col>
              <Card.Link href={props.github} target="_blank">
                Github
              </Card.Link>
            </Col>
            <Col>
              <Button variant="primary" href={props.link} target="_blank">
                {props.button}
              </Button>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
}

export default Project;
