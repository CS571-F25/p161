import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    // Creating the nav bar for the site
    <Navbar bg="light" expand="lg">
      <Container fluid>
        {" "}
        {/* Home page routing to both Mitchell's Travels as well as Home */}
        <Navbar.Brand as={Link} to="/">
          Mitchell's Travels
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>

            {/* Link to Destinations page */}
            <Nav.Link as={Link} to="/destinations">
              Destinations
            </Nav.Link>

            {/* Link to Favorites page */}
            <Nav.Link as={Link} to="/favorites">
              Favorites
            </Nav.Link>

            {/* Link to About Me page */}
            <Nav.Link as={Link} to="/about">
              About Me
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
