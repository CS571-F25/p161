import { Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { destinationData } from "./destinationData";
import useFavorites from "./useFavorites";

export default function Destinations() {
  const { favorites, toggleFavorite, isFavorite } = useFavorites();

  return (
    <div className="container mt-4">
      <h1>Destinations</h1>
      <Row>
        {/** Mapping all the destination data to the screen */}
        {destinationData.map((dest) => (
          <Col key={dest.id} md={4} className="mb-3">
            <Card className="h-100">
              {/** Linking the card to the specific page for the destination */}
              <Link to={`/destination/${dest.id}`}>
                <Card.Img variant="top" src={dest.images[0]} />
              </Link>

              <Card.Body>
                <Card.Title>
                  <Link
                    to={`/destination/${dest.id}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    {dest.name}
                  </Link>
                </Card.Title>

                <Card.Text>{dest.description}</Card.Text>

                {/** Creating the button that favorites the destination */}
                <Button
                  onClick={() => toggleFavorite(dest.id)}
                  style={{
                    marginTop: "0.5rem",
                    padding: "0.5rem 1rem",
                    cursor: "pointer",
                    fontSize: "1rem",
                  }}
                >
                  {isFavorite(dest.id) ? "★ Favorited" : "☆ Add to Favorites"}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
