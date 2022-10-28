import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Project from '../components/Project';
import { projects } from '../utils/constants';

function Projects() {
  return (
    <Container>
      <Row>
      {
        projects.map(project => (
          <Col xs={4} key={project.name}>
            <Project 
              name={project.name}
              text={project.text}
              link={project.link}
              github={project.github}
              button={project.button}
              feat={project.feat}
              key={project.name}
            />
          </Col>
        ))
      }
      </Row>
    </Container>
  );
}

export default Projects;