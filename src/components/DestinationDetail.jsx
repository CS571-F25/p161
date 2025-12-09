import { Link, useParams } from "react-router-dom";
import { Container, Row, Col, Image, Card, Button } from "react-bootstrap";
import { destinationData } from "./destinationData";
import useFavorites from "./useFavorites";
import Footer from "./Footer.jsx";

export default function DestinationDetail() {
  const { id } = useParams();
  const destination = destinationData.find((d) => d.id === Number(id));
  const { isFavorite, toggleFavorite } = useFavorites();

  if (!destination) {
    return <h2>Destination not found</h2>;
  }

  return (
    // Creating the layout for the destination detail page
    <Container className="mt-4">
      <Row className="mb-4 align-items-center">
        {/** Giving the destination name and a button to favorite the destination from inside the page */}
        <Col>
          <h1>{destination.name}</h1>
          <p style={{ fontSize: "1.2rem" }}>{destination.description}</p>

          <Button
            onClick={() => toggleFavorite(destination.id)}
            style={{
              padding: "0.5rem 1rem",
              cursor: "pointer",
              fontSize: "1rem",
            }}
          >
            {isFavorite(destination.id)
              ? "★ Remove from Favorites"
              : "☆ Add to Favorites"}
          </Button>
        </Col>
      </Row>

      {/** Mapping all the photos from the destination */}
      <h3>Photos</h3>
      <Row className="mb-4">
        {destination.images.map((img, index) => (
          <Col key={index} md={4} className="mb-3">
            <Image src={img} fluid rounded />
          </Col>
        ))}
      </Row>

      {/** Mapping the highlights of the destinations */}
      <h3>Highlights</h3>
      <Row className="mb-4">
        {destination.highlights.map((item, i) => (
          <Col key={i} md={6}>
            <Card className="mb-2 p-3">{item}</Card>
          </Col>
        ))}
      </Row>

      {/** Mapping the fun facts  */}
      <h3>Fun Facts</h3>
      <ul>
        {destination.funFacts.map((fact, i) => (
          <li key={i}>{fact}</li>
        ))}
      </ul>

      {/** Button that sends the user back to the destinations page */}
      <div className="text-center mt-4">
        <Link to="/destinations">
          <Button
            style={{
              padding: "0.6rem 1.2rem",
              fontSize: "1rem",
              cursor: "pointer",
              marginBottom: "2rem", // TESTING
            }}
          >
            ← Back to Destinations
          </Button>
        </Link>
      </div>

      <Footer />
    </Container>
  );
}
