import { Helmet } from "react-helmet";
import Contact from "../components/Contact/Contact";

const ContactPage = () => {
  return (
    <div>
      <Helmet>
        <title>Contact | My Agency</title>
      </Helmet>
      <Contact></Contact>
    </div>
  );
};

export default ContactPage;
