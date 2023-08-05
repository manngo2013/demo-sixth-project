import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import styles from "./contactForm.module.scss";

function ContactForm(props) {
  return (
    <div>
      <h2 className={styles.title}>Contact Us</h2>
      <Form className={styles.form}>
        <Row>
          <Form.Group as={Col} sm={{ span: 6 }} controlId="contact-name">
            <Form.Control type="text" placeholder="Your name" />
          </Form.Group>
          <Form.Group as={Col} sm={{ span: 6 }} controlId="contact-phone">
            <Form.Control type="number" placeholder="Your phone" />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} sm={{ span: 6 }} controlId="contact-email">
            <Form.Control type="email" placeholder="Your email" />
          </Form.Group>
          <Form.Group as={Col} sm={{ span: 6 }} controlId="contact-subject">
            <Form.Control type="text" placeholder="Your subject" />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group controlId="contact-message">
            <Form.Control as="textarea" rows={3} placeholder="Your message" />
          </Form.Group>
        </Row>
        <div className="text-center">
          <Button type="button" size="md" variant="outline-secondary">
            Send
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default ContactForm;
