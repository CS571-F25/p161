import useFavorites from "./useFavorites";
import { destinationData } from "./destinationData";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Favorites() {
  const { favorites } = useFavorites();

  const favoriteDestinations = destinationData.filter((dest) =>
    favorites.includes(dest.id)
  );

  return (
    <div className="container mt-4">
      <h1>Your Favorite Destinations</h1>

      {favoriteDestinations.length === 0 && (
        <p>You haven't added any favorites yet.</p>
      )}

      <div className="row">
        {favoriteDestinations.map((dest) => (
          <div key={dest.id} className="col-md-4 mb-3">
            <Card as={Link} to={`/destinations/${dest.id}`} className="h-100">
              <Card.Img variant="top" src={dest.images[0]} />
              <Card.Body>
                <Card.Title>{dest.name}</Card.Title>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
