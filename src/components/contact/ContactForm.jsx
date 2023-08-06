import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import styles from "./contactForm.module.scss";
import { useForm } from "react-hook-form";

function ContactForm(props) {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <h2 className={styles.title}>Contact Us</h2>
      <Form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Form.Group as={Col} sm={{ span: 6 }} controlId="contact-name">
            <Form.Control
              {...register("name")}
              type="text"
              placeholder="Your name"
            />
          </Form.Group>
          <Form.Group as={Col} sm={{ span: 6 }} controlId="contact-phone">
            <Form.Control
              {...register("phone")}
              type="number"
              placeholder="Your phone"
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} sm={{ span: 6 }} controlId="contact-email">
            <Form.Control
              {...register("email")}
              type="email"
              placeholder="Your email"
            />
          </Form.Group>
          <Form.Group as={Col} sm={{ span: 6 }} controlId="contact-subject">
            <Form.Control
              {...register("subject")}
              type="text"
              placeholder="Your subject"
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group controlId="contact-message">
            <Form.Control
              {...register("message")}
              as="textarea"
              rows={3}
              placeholder="Your message"
            />
          </Form.Group>
        </Row>
        <div className="text-center">
          <Button type="submit" size="md" variant="outline-secondary">
            Send
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default ContactForm;
