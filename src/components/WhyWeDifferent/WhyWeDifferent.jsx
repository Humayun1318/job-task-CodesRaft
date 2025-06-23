import { features } from "./../../data/features/features";
import teamImage from "./../../assets/teamImg.jpg";

const WhyWeDifferent = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#FFFBFB] mb-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
            data-aos="fade-up"
          >
            Why We Are Different
          </h2>
          <p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="50"
          >
            We go beyond standard solutions to deliver exceptional value to
            every client.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left side  */}
          <div className="lg:w-1/2">
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl ${feature.color} transition-all hover:shadow-lg flex items-start gap-4`}
                  data-aos="fade-up"
                  data-aos-delay={feature.aosDelay}
                >
                  <div className="flex-shrink-0 mt-1">{feature.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side */}
          <div className="lg:w-1/2" data-aos="fade-down" data-aos-delay="200">
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <img
                src={teamImage}
                alt="Our team working together"
                className="w-full h-auto object-cover"
              />
              
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-sm font-medium">
                  Trusted by 200+ clients worldwide
                </p>
                <h3 className="text-2xl font-bold mt-1">
                  Your Success Is Our Priority
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWeDifferent;
