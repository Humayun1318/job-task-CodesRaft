import { Helmet } from "react-helmet";
import AboutUs from "../components/AboutUs/AboutUs";

const About = () => {
  return (
    <div>
      <Helmet>
        <title>About Us | My Agency</title>
      </Helmet>
      <AboutUs />
    </div>
  );
};

export default About;
