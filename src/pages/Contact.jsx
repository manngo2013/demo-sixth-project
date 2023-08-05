import React from "react";
import ContactForm from "../components/contact/ContactForm";
import styles from "./contact.module.scss";

function Contact(props) {
  return (
    <div className={styles.pageWrapper}>
      <ContactForm />
    </div>
  );
}

export default Contact;
