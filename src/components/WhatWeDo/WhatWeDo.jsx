/* eslint-disable indent */
import { Link, useLocation } from "react-router-dom";

const WhatWeDo = ({ services }) => {
  const bgColors = ["bg-blue-50", "bg-green-50", "bg-purple-50", "bg-amber-50"];
  const location = useLocation();

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header with See All button */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              What We Do
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl">
              Comprehensive services to transform your digital presence and
              drive business growth.
            </p>
          </div>
          {location.pathname === "/" ? (
            <Link
              to="/works"
              className="flex items-center text-blue-600 hover:text-blue-800 transition-colors font-medium"
            >
              See All →
            </Link>
          ) : (
            ""
          )}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className={`
                group p-6 rounded-xl hover:bg-gray-50 transition-all border border-transparent hover:border-gray-200
                flex flex-col justify-between
                ${
                  location.pathname === "/"
                    ? `${bgColors[index]} text-center`
                    : ""
                }`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img
                src={service.icon}
                alt=""
                className="mix-blend-multiply"
                style={{ backgroundColor: "transparent" }}
              />
              <h3 className="sm:text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              {location.pathname === "/works" ? (
                <>
                  <p className="text-gray-600">{service.description}</p>
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <a href="#" className="text-blue-600 text-sm font-medium">
                      Learn more →
                    </a>
                  </div>
                </>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
