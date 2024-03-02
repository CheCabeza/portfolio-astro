import emailjs from "@emailjs/browser";
import { useRef, type FormEvent } from "react";

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = async (e: FormEvent) => {
    e.preventDefault();

    if (form.current == null) return;

    emailjs
      .sendForm(
        import.meta.env.PUBLIC_EMAILJS_SERVICE_ID,
        import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.PUBLIC_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label htmlFor="from_email">Email</label>
      <input type="email" name="from_email" id="from_email" />
      <label htmlFor="message">Message</label>
      <textarea name="message" id="message" />
      <button type="submit" value="Send">
        Enviar
      </button>
    </form>
  );
}
