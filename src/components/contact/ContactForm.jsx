import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import styles from "./contactForm.module.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

function ContactForm(props) {
  const phoneRegex =
    /^[\\+]?[(]?[0-9]{3}[)]?[-\s\\.]?[0-9]{3}[-\s\\.]?[0-9]{4,6}$/im;

  const schema = yup.object({
    name: yup.string().required(),
    phone: yup
      .string()
      .typeError("phone must a specify a number")
      .matches(phoneRegex, "You must specify a valid phone number")
      .required(),
    email: yup.string().email().required(),
    subject: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data) => {
    const apiUrl = "http://localhost:4000/contacts";
    try {
      const res = await axios.post(apiUrl, data);
      if (res?.status === 201) {
        reset();
      } else {
        console.log("Error");
      }
    } catch (error) {
      console.log("Error: ", error.message);
    }
  };

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
            <p className={styles.invalidFeedback}>{errors?.name?.message}</p>
          </Form.Group>
          <Form.Group as={Col} sm={{ span: 6 }} controlId="contact-phone">
            <Form.Control
              {...register("phone")}
              type="number"
              placeholder="Your phone"
            />
            <p className={styles.invalidFeedback}>{errors?.phone?.message}</p>
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} sm={{ span: 6 }} controlId="contact-email">
            <Form.Control
              {...register("email")}
              type="email"
              placeholder="Your email"
            />
            <p className={styles.invalidFeedback}>{errors?.email?.message}</p>
          </Form.Group>
          <Form.Group as={Col} sm={{ span: 6 }} controlId="contact-subject">
            <Form.Control
              {...register("subject")}
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
