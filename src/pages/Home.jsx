import { services } from "./../data/services/service";
import WhatWeDo from "../components/WhatWeDo/WhatWeDo";

import { useState } from "react";
import WhyWeDifferent from "../components/WhyWeDifferent/WhyWeDifferent";
import Testimonials from "../components/Testimonials/Testimonials";
import ProjectDiscussion from "../components/ProjectDiscussion/ProjectDiscussion";

const Home = () => {
  const [servicesCard] = useState(services.slice(0, 4));

  return (
    <div className="">
      {/* works section home */}
      <section>
        <WhatWeDo services={servicesCard} />

        {/* section for number info */}
        <section className="max-w-7xl mx-auto mb-12 shadow-lg p-4">
          <div className="flex flex-col sm:flex-row justify-around space-y-4 px-4 sm:px-0 sm:space-y-0">
            <div className="shadow p-4 text-center">
              <h2 className="sm:text-lg md:text-2xl font-extrabold">500+</h2>
              <p>Projects Done</p>
            </div>
            <div className="shadow p-4 text-center">
              <h2 className="sm:text-lg md:text-2xl font-extrabold">15+</h2>
              <p>Team Member</p>
            </div>
            <div className="shadow p-4 text-center">
              <h2 className="sm:text-lg md:text-2xl font-extrabold">5+</h2>
              <p>Years In Business</p>
            </div>
          </div>
        </section>
        <WhyWeDifferent />

        <Testimonials />
        <ProjectDiscussion />
      </section>
    </div>
  );
};

export default Home;
