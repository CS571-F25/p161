import Form from "react-bootstrap/Form";

export default function SearchBar({ search, setSearch }) {
  // Creating a search bar component
  return (
    <Form.Control
      type="text"
      aria-label="Search bar for destinations"
      placeholder="Search destinations..."
      className="mb-3"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}
