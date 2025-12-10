import { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";

export default function ContactForm() {
  // Creating the data for the form and a submitted state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  // Function for handling submission
  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="container mt-5 mb-5">
      <h2>Contact Me</h2>

      {/** If submitted, display this alert */}
      {submitted && (
        <Alert variant="success">
          Thank you! Your message has been submitted.
        </Alert>
      )}

      <Form onSubmit={handleSubmit}>
        {/* Name section */}
        <Form.Group className="mb-3" controlId="contactName">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </Form.Group>

        {/* Email section*/}
        <Form.Group className="mb-3" controlId="contactEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </Form.Group>

        {/* Message section*/}
        <Form.Group className="mb-3" controlId="contactMessage">
          <Form.Label>Your Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Write your message here"
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Send Message
        </Button>
      </Form>
    </div>
  );
}
