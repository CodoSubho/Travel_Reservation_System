import "./ContactFormStyles.css";

function ContactForm() {
  return (
    <div className="from-container">
      <h1>send a message to us!</h1>
      <form>
        <input placeholder="Name" />
        <input placeholder="E-mail" />
        <input placeholder="Subject" />
        <textarea placeholder="Message" rows="4"></textarea>
        <button>Send Message</button>
      </form>
    </div>
  );
}
export default ContactForm;
