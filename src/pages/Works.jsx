import { services } from "./../data/services/service";
import WhatWeDo from "../components/WhatWeDo/WhatWeDo";

const Works = () => {
  return (
    <div>
      <WhatWeDo services={services}/>
    </div>
  );
};

export default Works;
