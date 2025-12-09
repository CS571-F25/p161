import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

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
      <h1>Welcome to Mitchell's Travels</h1>

      <p style={{ fontSize: "1.2rem", maxWidth: "600px", margin: "1rem auto" }}>
        Explore the places I've visited and save your favorite destinations!
      </p>

      <div style={{ marginTop: "3rem" }}>
        <Link to="/destinations">
          <Button style={{ margin: "1rem", width: "200px" }}>
            View Destinations
          </Button>
        </Link>

        <Link to="/favorites">
          <Button style={{ margin: "1rem", width: "200px" }}>Favorites</Button>
        </Link>
      </div>
    </div>
  );
}
