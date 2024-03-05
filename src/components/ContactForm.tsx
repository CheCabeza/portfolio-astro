import emailjs from "@emailjs/browser";
import { useRef, type FormEvent } from "react";
import { toast } from "sonner";

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
      .then((response) => {
        if (response.status === 200) {
          toast.success("Message sent successfully.");
        }
      })
      .catch(() =>
        toast.error("Message couldn't been sent. Please try again.")
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div>
        <label htmlFor="from_email" className="hidden">
          Email
        </label>
        <input
          type="email"
          name="from_email"
          id="from_email"
          className="outline-black"
          placeholder="Email"
          required
        />
      </div>
      <div>
        <label htmlFor="message" className="hidden">
          Message
        </label>
        <textarea name="message" id="message" placeholder="Message" required />
      </div>
      <button type="submit" value="Send">
        Send
      </button>
    </form>
  );
}
