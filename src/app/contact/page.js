import React from "react";
import ContactCard from "../component/ContactCard";
import styles from "./contact.module.css";
import ContactForm from "../component/ContactForm";

const contact = () => {
  return (
    <div className={styles.container}>
      <ContactCard />

      <section className={styles.contact_section}>
        <h2>
          We'd love to hear <span>From You</span>
        </h2>
        <ContactForm />
      </section>
    </div>
  );
};

export default contact;
