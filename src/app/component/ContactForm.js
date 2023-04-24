import React from "react";
import styles from "../contact/contact.module.css";
import Link from "next/link";

const ContactForm = () => {
  return (
    <form className={styles.contact_form}>
      <div className={styles.input_field}>
        <label htmlFor="username" className={styles.label}>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter your name"
          />
        </label>
      </div>
      <div className={styles.input_field}>
        <label htmlFor="email" className={styles.label}>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your Email"
          />
        </label>
      </div>
      <div className={styles.input_field}>
        <label htmlFor="number" className={styles.label}>
          <input
            type="number"
            name="number"
            id="number"
            placeholder="Enter your Mobile No."
          />
        </label>
      </div>

      <div>
        <Link href="/">
          <button type="submit">Send Massege</button>
        </Link>
      </div>
    </form>
  );
};

export default ContactForm;
