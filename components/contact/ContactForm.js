import { useEffect, useState } from "react";
import classes from "./ContactForm.module.css";
import Notification from "../ui/notification";

function ContactForm() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");
  const [requestStatus, setRequestStatus] = useState(); // pending or success or error
  const [requestError, setRequestError] = useState();

  useEffect(() => {
    if (requestStatus === "success" || requestStatus === "error") {
      const result = setTimeout(() => {
        setRequestStatus(null);
        setRequestError(null);
      }, 3000);
      return () => clearTimeout(result);
    }
  }, [setRequestStatus]);

  async function handleSubmit(e) {
    e.preventDefault();
    setRequestStatus("pending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          name: enteredName,
          message: enteredMessage,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || "Something went wrong!");
      }

      setRequestStatus("success");
      setEnteredEmail('');
      setEnteredName('');
      setEnteredMessage('');
    } catch (error) {
      setRequestError(error.message);
      setRequestStatus("error");
    }
  }

  let notification;
  if (requestStatus === "pending") {
    notification = {
      status: "pending",
      title: "Sending message...",
      message: "Your message is on its way",
    };
  }

  if (requestStatus === "success") {
    notification = {
      status: "success",
      title: "Success!",
      message: "Message sent successfully",
    };
  }

  if (requestStatus === "error") {
    notification = {
      status: "success",
      title: "Success!",
      message: requestError,
    };
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
              className={classes.text}
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
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </section>
  );
}

export default ContactForm;
