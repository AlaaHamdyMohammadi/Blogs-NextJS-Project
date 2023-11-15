import { useState } from "react";
import classes from "./ContactForm.module.css";

function ContactForm() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");

  const reqBody = JSON.stringify({
    email: enteredEmail,
    name: enteredName,
    message: enteredMessage,
  });
  function handleSubmit(e) {
    e.preventDefault();
    fetch(`/api/contact`, {
      method: "POST",
      body: reqBody,
      headers: {
        'Content-Type': 'application/json'
      },
    }).then();
  }
  return (
    <section className={classes.contact}>
      <h1>How can I help you ?</h1>
      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              required
              value={enteredEmail}
              onChange={(e) => setEnteredEmail(e.target.value)}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              required
              value={enteredName}
              onChange={(e) => setEnteredName(e.target.value)}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              required
              rows="5"
              value={enteredMessage}
              onChange={(e) => setEnteredMessage(e.target.value)}
            ></textarea>
          </div>
          <div className={classes.actions}>
            <button>Send Message</button>
          </div>
        </div>
      </form>
    </section>
  );
}

export default ContactForm;
