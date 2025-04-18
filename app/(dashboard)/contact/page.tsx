import ContactDetails from "@/components/ContactDetails";
import ContactForm from "@/components/ContactForm";
import ContactImg from "@/assets/horizontal-shot-pretty-young-woman-with-hair-buns-applies-blue-eyeliner-dressed-green-costume-boots-focused-into-distance-daytime-considers-something-people-fashion-style-concept.jpg";
import Landing from "@/components/Landing";

const ContactPage = () => {
  return (
    <>
      <Landing pic={ContactImg} alt="contact" text="Contact Us" />
      <ContactDetails />
      <ContactForm />
    </>
  );
};

export default ContactPage;
