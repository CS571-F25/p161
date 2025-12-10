import { Container, Row, Col, Image, Card } from "react-bootstrap";
import ProfilePic from "../Images/ProfilePic.JPG";
import Footer from "./Footer.jsx";
import ContactForm from "./ContactForm";

export default function AboutMe() {
  return (
    <Container className="mt-4">
      {/* Header Section */}
      <Row className="align-items-center mb-4">
        <Col md={4} className="text-center mb-3 mb-md-0">
          <Image
            src={ProfilePic}
            alt="Picture of Mitchell Young"
            roundedCircle
            fluid
            style={{ maxWidth: "200px", border: "3px solid #000000" }}
          />
        </Col>

        {/** About me section */}
        <Col md={8}>
          <h1>About Me</h1>
          <p style={{ fontSize: "1.1rem" }}>
            Hello! I'm Mitchell, a senior at UW–Madison majoring in Computer
            Science and Information Sciences. I created this site to highlight
            my favorite travel experiences and destinations I've explored.
          </p>
          <p style={{ fontSize: "1.1rem" }}>
            Some of the things I’m passionate about include web development,
            solving challenging problems, and creating interactive applications
            that are both functional and user-friendly.
          </p>
        </Col>
      </Row>

      {/* Interests Section */}
      <Row className="mb-5">
        <Col>
          <Card className="p-3">
            <h2>My Interests</h2>
            <ul>
              <li>Web Development & App Building</li>
              <li>Traveling</li>
              <li>Watching Movies</li>
              <li>Sports</li>
              <li>Video Games</li>
            </ul>
          </Card>
        </Col>
      </Row>

      {/* Contact Form Section */}
      <Row className="mb-5">
        <Col>
          <Card className="p-3">
            <h2>Want to Reach Out?</h2>
            <ContactForm />
          </Card>
        </Col>
      </Row>

      <Footer />
    </Container>
  );
}
