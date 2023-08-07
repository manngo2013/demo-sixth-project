import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import styles from "./contactForm.module.scss";
import { useForm } from "react-hook-form";

function ContactForm(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <h2 className={styles.title}>Contact Us</h2>
      <Form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Form.Group as={Col} sm={{ span: 6 }} controlId="contact-name">
            <Form.Control
              {...register("name", { required: "This is required" })}
              type="text"
              placeholder="Your name"
            />
            <p className={styles.invalidFeedback}>{errors?.name?.message}</p>
          </Form.Group>
          <Form.Group as={Col} sm={{ span: 6 }} controlId="contact-phone">
            <Form.Control
              {...register("phone", { required: "This is required" })}
              type="number"
              placeholder="Your phone"
            />
            <p className={styles.invalidFeedback}>{errors?.phone?.message}</p>
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} sm={{ span: 6 }} controlId="contact-email">
            <Form.Control
              {...register("email", { required: "This is required" })}
              type="email"
              placeholder="Your email"
            />
            <p className={styles.invalidFeedback}>{errors?.email?.message}</p>
          </Form.Group>
          <Form.Group as={Col} sm={{ span: 6 }} controlId="contact-subject">
            <Form.Control
              {...register("subject", { required: "This is required" })}
              type="text"
              placeholder="Your subject"
            />
            <p className={styles.invalidFeedback}>{errors?.subject?.message}</p>
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
