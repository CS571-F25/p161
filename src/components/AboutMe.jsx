import { Container, Row, Col, Image, Card } from "react-bootstrap";
import ProfilePic from "../Images/ProfilePic.JPG";
import Footer from "./Footer.jsx";
import ContactForm from "./ContactForm";

export default function AboutMe(props) {
  return (
    <Container className="mt-4">
      {/* Including the image */}
      <Row className="mb-4">
        <Col md={4} className="text-center">
          <Image
            src={ProfilePic}
            alt="Picture of Mitchell Young"
            roundedCircle
            fluid
            style={{ maxWidth: "200px" }}
          />
        </Col>

        {/* About Me section that has a header as well as some other text */}
        <Col md={8}>
          <h1>About Me</h1>
          <p>
            Hello! I'm Mitchell. I'm a senior at UW–Madison majoring in Computer
            Science and Information Sciences. I built this site to highlight
            some of my favorite travel experiences and the destinations I’ve
            explored.
          </p>
        </Col>
      </Row>

      {/* Interests Section */}
      <Row className="mb-5">
        <Col>
          <h2>My Interests</h2>
          <ul>
            <li>Web Development & App Building</li>
            <li>Traveling</li>
            <li>Movies</li>
            <li>Sports</li>
          </ul>
        </Col>
      </Row>
      <ContactForm />

      <Footer />
    </Container>
  );
}
