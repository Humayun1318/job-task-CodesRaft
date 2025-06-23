import {
  ArrowRightIcon,
  BuildingOfficeIcon,
} from "@heroicons/react/24/outline";
import { teamMembers, values } from "../../data/teamMembers/teamMembers";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="bg-white">
      {/* Our Story */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in a small studio in Brooklyn, we started with just
                  three people and a shared vision to make the web more
                  beautiful and functional.
                </p>
                <p>
                  Today, we've grown into an award-winning agency with 50+ team
                  members across four countries, but we've kept our
                  collaborative spirit and commitment to quality.
                </p>
                <p>
                  We've had the privilege of working with startups, Fortune 500
                  companies, and everything in between.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-xl overflow-hidden h-80 lg:h-96 flex items-center justify-center">
              <BuildingOfficeIcon className="w-24 h-24 text-gray-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The brilliant minds behind every project
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow p-8 text-center"
              >
                <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-gray-100 mb-6">
                  {member.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-blue-600 mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-xl bg-gray-50 hover:bg-white hover:shadow-sm transition-all"
              >
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full bg-white shadow-sm">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ending get in touch */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-400">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to create something amazing?
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-blue-600 bg-white hover:bg-gray-100 transition-colors shadow-lg"
          >
            Get in touch
            <ArrowRightIcon className="ml-3 -mr-1 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
