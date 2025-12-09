import { Container } from "react-bootstrap";

export default function Footer() {
  // Creating a footer that can be used on other pages
  return (
    <footer
      style={{
        backgroundColor: "#f8f9fa",
        padding: "1.5rem 0",
        marginTop: "3rem",
        borderTop: "1px solid #ddd",
      }}
    >
      <Container className="text-center">
        <p style={{ margin: 0 }}>CS571 Project made by Mitchell Young.</p>
      </Container>
    </footer>
  );
}
