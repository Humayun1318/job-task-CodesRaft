import { ArrowRightIcon, BookOpenIcon } from "@heroicons/react/24/outline";

import { resources } from "../../data/tutorials/tutorials";
import { useState } from "react";

const Tutorials = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const filters = ["All", "Design Course", "Design Tips", "Dev Source"];
  const tutorials = resources;
  const filteredTutorials =
    activeFilter === "All"
      ? tutorials
      : tutorials.filter((tutorial) => tutorial.category === activeFilter);
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === filter
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Tutorials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTutorials.map((tutorial, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <div className="h-48 bg-gradient-to-r from-blue-50 to-purple-50 flex items-center justify-center">
                <BookOpenIcon className="w-12 h-12 text-blue-600 opacity-30" />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800 mb-3">
                  {tutorial.category}
                </span>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {tutorial.title}
                </h3>
                <p className="text-gray-600 mb-4">{tutorial.subtitle}</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>{tutorial.duration}</span>
                  <span>{tutorial.level}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* How to Make Site of the Day Section */}
        <div className="mt-16 bg-gray-50 rounded-xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              How to Make Site of the Day
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Discover the secrets behind creating award-winning websites that
              get featured on design galleries
            </p>
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Watch Masterclass
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tutorials;
