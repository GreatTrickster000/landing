import styles from "./Form.module.scss";
import { useState } from "react";
import Button from "../Button/Button.jsx";
import cn from "classnames";
import Input from "../Input/Input.jsx";

export default function Form({}) {
  const [message, setMessage] = useState("");
  const maxLength = 500;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    setErrors(newErrors);
    if (!name.trim()) newErrors.name = "Name is required";
    if (!email.trim()) newErrors.email = "Email is required";
    if (!message.trim()) newErrors.message = "This field is required";
    if (Object.keys(newErrors).length) return;
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className={styles["contact-form"]}>
        <div className={styles.nameEmail}>
          <div className={styles.name}>
            <Input
              id="name"
              type="text"
              name="name"
              label="Name"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              error={errors.name}
            />
          </div>

          <div className={styles.email}>
            <Input
              id="email"
              type="email"
              label="Email"
              name="email"
              placeholder="example@example.com"
              value={email}
              error={errors.email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className={styles.inputArea}>
          <label htmlFor="message" className={styles.label}>
            Message
          </label>
          <textarea
            className={cn(styles.area, {
              [styles.error]: errors.message,
            })}
            id="message"
            name="message"
            placeholder="Write your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          {errors.message && (
            <p className={styles.errorMessage}>{errors.message}</p>
          )}
          <div
            className={cn(styles.counter, {
              [styles.errorCounter]: message.length > maxLength,
            })}
          >
            {`${message.length}/${maxLength}`}
          </div>
        </div>
      </div>
      <div className={styles.button}>
        <Button type="submit" variant="primary" size="lg" text="Submit" />
      </div>
    </form>
  );
}
