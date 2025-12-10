import useFavorites from "./useFavorites";
import { destinationData } from "./destinationData";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "./Footer.jsx";

export default function Favorites() {
  const { favorites, toggleFavorite, isFavorite } = useFavorites();

  // Filtering the destination data to only include favorited destinations
  const favoriteDestinations = destinationData.filter((dest) =>
    favorites.includes(dest.id)
  );

  return (
    // Displaying the favorited destinations similar to Destinations.jsx
    <div className="container mt-4">
      <h1>Your Favorite Destinations</h1>

      {favoriteDestinations.length === 0 && (
        <p>You haven't added any favorites yet.</p>
      )}

      <div className="row">
        {favoriteDestinations.map((dest) => (
          <Col key={dest.id} md={4} className="mb-3">
            <Card className="h-100">
              {/** Linking the card to the specific page for the destination */}
              <Link to={`/destination/${dest.id}`}>
                <Card.Img
                  variant="top"
                  src={dest.images[0].src}
                  alt={dest.images[0].alt}
                />
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
      </div>

      <Footer />
    </div>
  );
}
