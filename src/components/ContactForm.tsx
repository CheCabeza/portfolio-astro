import "@/styles/contact-form.css";
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
    <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
      <div className="form__group field">
        <input
          type="email"
          name="from_email"
          id="from_email"
          className="form__field"
          placeholder="Email"
          style={{ fontSize: "20px" }}
          required
        />
        <label htmlFor="from_email" className="form__label">
          Email
        </label>
      </div>
      <div className="form__group field">
        <textarea
          name="message"
          id="message"
          className="form__field"
          placeholder="Message"
          required
        />
        <label htmlFor="message" className="form__label">
          Message
        </label>
      </div>
      <div className="flex max-w-[600px] justify-center pt-6">
        <button
          type="submit"
          value="Send"
          className="w-48 align-middle font-bold text-center transition-all py-3 px-6 border border-gray-900 text-gray-900 hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] rounded-full"
        >
          Send
        </button>
      </div>
    </form>
  );
}
