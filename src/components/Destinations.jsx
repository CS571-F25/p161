import { Row, Col, Card } from "react-bootstrap";
import BigBen from "../Images/BigBen.JPG";
import EiffelTower from "../Images/eiffel_tower.JPG";

export default function Destinations() {
  return (
    <div className="container mt-4">
      <h1>Destinations</h1>
      <Row>
        {destinations.map((dest) => (
          <Col key={dest.id} md={4} className="mb-3">
            <Card>
              <Card.Img variant="top" src={dest.images[0]} />
              <Card.Body>
                <Card.Title>{dest.name}</Card.Title>
                <Card.Text>{dest.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

// The data for the destinations
const destinations = [
  {
    id: 1,
    name: "London",
    description: "Test description for London.",
    images: [BigBen],
  },
  {
    id: 2,
    name: "Paris",
    description: "Test description for Paris.",
    images: [EiffelTower],
  },
];
