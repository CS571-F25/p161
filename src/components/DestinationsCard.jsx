import { Card, Button } from "react-bootstrap";

export default function DestinationCard({ destination, onFavorite }) {
  return (
    <Card style={{ width: "18rem", margin: "1rem" }}>
      <Card.Img variant="top" src={destination.image} />
      <Card.Body>
        <Card.Title>{destination.name}</Card.Title>
        <Card.Text>{destination.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}
