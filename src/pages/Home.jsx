import { services } from "./../data/services/service";
import WhatWeDo from "../components/WhatWeDo/WhatWeDo";

import { useState } from "react";
import WhyWeDifferent from "../components/WhyWeDifferent/WhyWeDifferent";

const Home = () => {
  const [servicesCard] = useState(services.slice(0, 4));

  return (
    <div className="">
      {/* works section home */}
      <section>
        <WhatWeDo services={servicesCard} />
        <WhyWeDifferent/>
      </section>
    </div>
  );
};

export default Home;
