import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "./Footer.jsx";
import { destinationData } from "./destinationData";
import banner2 from "../Images/banner2.jpg";

export default function Home() {
  return (
    <div
      style={{
        textAlign: "center",
        paddingTop: "4rem",
        paddingLeft: "1rem",
        paddingRight: "1rem",
      }}
    >
      {/* Hero Banner */}
      <div>
        <img
          src={banner2}
          alt="Travel banner showing a scenic destination"
          style={{
            width: "100%",
            height: "auto",
            maxHeight: "400px",
            objectFit: "cover",
            borderRadius: "8px",
            marginBottom: "2rem",
          }}
        />
      </div>
      <h1>Welcome to Mitchell's Travels</h1>

      <p style={{ fontSize: "1.2rem", maxWidth: "600px", margin: "1rem auto" }}>
        Explore the places I've visited and save your favorite destinations!
      </p>

      <br />

      <h2>Featured Destinations</h2>
      <Row>
        {destinationData.slice(0, 3).map((dest) => (
          <Col md={4} key={dest.id}>
            <Card>
              <Link to={`/destination/${dest.id}`}>
                <Card.Img src={dest.images[0].src} alt={dest.images[0].alt} />
              </Link>
              <Card.Body>
                <Card.Title>{dest.name}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <div style={{ marginTop: "3rem" }}>
        <Link to="/destinations">
          <Button style={{ margin: "1rem", width: "200px" }}>
            View All Destinations
          </Button>
        </Link>

        <Link to="/favorites">
          <Button style={{ margin: "1rem", width: "200px" }}>
            View Favorites
          </Button>
        </Link>
      </div>

      <Footer />
    </div>
  );
}
