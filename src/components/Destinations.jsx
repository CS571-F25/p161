import { useState } from "react";
import { Row, Col, Card, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { destinationData } from "./destinationData";
import useFavorites from "./useFavorites";
import Footer from "./Footer";
import SearchBar from "./SearchBar";

export default function Destinations() {
  const { favorites, toggleFavorite, isFavorite } = useFavorites();
  const [search, setSearch] = useState("");

  // Filter destinations for the search
  const filteredDestinations = destinationData.filter((dest) =>
    dest.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <h1>Destinations</h1>

      <SearchBar search={search} setSearch={setSearch} />

      <Row>
        {/** Mapping the filtered destinations */}
        {filteredDestinations.map((dest) => (
          <Col key={dest.id} md={4} className="mb-3">
            <Card className="h-100">
              <Link to={`/destination/${dest.id}`}>
                <Card.Img variant="top" src={dest.images[0]} alt={dest.name} />
              </Link>

              <Card.Body>
                <Card.Title>
                  {/** Linking to the speficic destination page */}
                  <Link
                    to={`/destination/${dest.id}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    {dest.name}
                  </Link>
                </Card.Title>

                <Card.Text>{dest.description}</Card.Text>

                {/** Button for adding destination to favorites */}
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

      {/** If nothing matches search */}
      {filteredDestinations.length === 0 && (
        <p className="mt-3">No destinations match your search.</p>
      )}

      <Footer />
    </div>
  );
}
