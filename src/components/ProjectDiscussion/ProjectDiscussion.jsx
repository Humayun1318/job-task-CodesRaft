import {
  ArrowRightIcon,
  StarIcon
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const ProjectDiscussion = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:py-24 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto text-center bg-[#ae82ff86] py-12">
        {/* Heading Section */}
        <div className="mb-12" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Let's discuss your project
          </h2>
          <p className="text-lg text-gray-800 max-w-2xl mx-auto">
            Every great collaboration starts with a conversation. Share your
            vision with us and we'll craft a tailored solution that drives your
            business forward.
          </p>
        </div>

        {/* Divider */}
        <div className="relative mb-12" data-aos="fade-up" data-aos-delay="100">
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-gradient-to-br from-blue-50 to-white px-4 text-blue-400">
              ✧
            </span>
          </div>
        </div>

        {/* started button section */}
        <div data-aos="fade-up" data-aos-delay="200">
          <div className="mb-6">
            <p className="text-gray-600 mb-4">
              Ready to transform your ideas into reality?
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Get started
              <ArrowRightIcon
                className="ml-3 -mr-1 h-5 w-5"
                aria-hidden="true"
              />
            </Link>
          </div>
          <p className="text-sm text-gray-500">
            Schedule a free 30-minute consultation with our experts
          </p>
        </div>

        {/* ending portion */}
        <div
          className="mt-12 flex flex-wrap justify-center gap-6"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="flex items-center">
            <div className="flex -space-x-2 mr-3">
              {[1, 2, 3].map((item) => (
                <img
                  key={item}
                  className="w-8 h-8 rounded-full border-2 border-white"
                  src={`https://randomuser.me/api/portraits/${item % 2 === 0 ? 'women' : 'men'}/${item}.jpg`}
                  alt="Client"
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">
              Trusted by 200+ clients
            </span>
          </div>
          <div className="flex items-center">
            <div className="flex mr-3">
              {[1, 2, 3, 4, 5].map((star) => (
                <StarIcon key={star} className="w-4 h-4 text-amber-400 fill-yellow-400" />
              ))}
            </div>
            <span className="text-sm text-gray-600">5.0 Rating</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDiscussion;
