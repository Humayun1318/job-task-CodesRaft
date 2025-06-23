import { services } from "./../data/services/service";
import WhatWeDo from "../components/WhatWeDo/WhatWeDo";
import { Helmet } from "react-helmet";

const Works = () => {
  return (
    <div>
      <Helmet>
        <title>Our Works | My Agency</title>
      </Helmet>
      <WhatWeDo services={services} />
    </div>
  );
};

export default Works;
