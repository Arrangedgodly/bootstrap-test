import Container from "react-bootstrap/Container";
import Accordion from "react-bootstrap/Accordion";
import '../blocks/home.css';

function Home() {
  return (
    <Container fluid className="home">
      <Accordion className="home__text">
        <Accordion.Item eventKey="0" className="text-center">
          <Accordion.Header>About Me</Accordion.Header>
          <Accordion.Body>
          I am a retail cannabis manager aspiring for a new career path in web development or software engineering. In my free time, I work on teaching myself to code, produce/mix/master music, graphic design, and video edit. I aim to be a jack of all trades, unveiling the mystery from concepts I find interesting, and teaching myself with the graces of the internet.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1" className="text-center">
          <Accordion.Header>Professional Skills</Accordion.Header>
          <Accordion.Body>
            <ul className="home__links">
              <li>Ableton</li>
              <li>Adobe Suite</li>
              <li>Affinity Suite</li>
              <li>Bootstrap</li>
              <li>CSS</li>
              <li>Figma</li>
              <li>Git/GitHub</li>
              <li>HTML</li>
              <li>JavaScript</li>
              <li>Markdown</li>
              <li>Node</li>
              <li>React</li>
              <li>SaSS</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}

export default Home;
