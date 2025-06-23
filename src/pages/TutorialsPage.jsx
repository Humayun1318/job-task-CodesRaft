
import Tutorials from "../components/Tutorials/Tutorials";
import { Helmet } from "react-helmet";

const TutorialsPage = () => {
  return (
    <div>
      <Helmet>
        <title>Tutorials | My Agency</title>
      </Helmet>
      <Tutorials />
    </div>
  );
};

export default TutorialsPage;
