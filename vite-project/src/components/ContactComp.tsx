// src/components/ContactComp.tsx
import { useState } from "react";
import styles from "./ContactComp.module.scss";
import { FaPhone } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";

type TFormData = {
  name: string;
  email: string;
  message: string;
};

const ContactComp = () => {
  const [formData, setFormData] = useState<TFormData>({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState<string>("");

  const checkForm = () => {
    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill out all fields");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError("Please enter a valid email");
      return false;
    }
    return true;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!checkForm()) {
      setTimeout(() => setError(""), 2100); // allow shake to replay
      return;
    }
    // TODO: send form data (EmailJS/fetch/etc.)
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className={styles.contact}>
      {/* LEFT: form */}
      <form onSubmit={handleSubmit}>
        <h2>Contact Us</h2>
        <p>
          Feel Free to contact us any time. We will get back to you as soon as
          we can!
        </p>

        <div className={styles["contact-container"]}>
          <input
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            type="text"
            placeholder="Name"
          />

          <input
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            type="email"
            placeholder="Email"
          />

          <textarea
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            placeholder="Message"
            id="message-body"
          />

          <button
            type="submit"
            className={error ? styles.shakeHorizontal : undefined}
          >
            Send
          </button>

          {error && <span className={styles.error}>{error}</span>}
        </div>
      </form>

      {/* RIGHT: contact info card */}
      <article className={styles["contact-info"]}>
        <h2>Contact Info</h2>

        <ul>
          <li>
            <FaPhone /> +91 8009 054294
          </li>
          <li>
            <MdAlternateEmail /> info@medieval.com
          </li>
        </ul>

        <p>
          1000+ Travel partners and 65+ Service city across India, USA, Canada &
          UAE
        </p>
      </article>
    </section>
  );
};

export default ContactComp;
