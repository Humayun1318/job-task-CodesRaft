import {
  StarIcon,
  ChatBubbleLeftRightIcon,
  UserGroupIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import { testimonials } from "../../data/testimonials/testimonials";
const Testimonials = () => {
  const StarRender = (rating) => {
    return Array(5)
      .fill(0)
      .map((_, idx) => (
        <StarIcon
          key={idx}
          className={`h-5 w-5 ${
            idx < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
          }`}
        ></StarIcon>
      ));
  };
  return (
    <section className="pb-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto ">
        {/* heading part */}
        <h5 className="text-center opacity-50 text-blue-300 py-8">
          Testimonials
        </h5>
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center bg-blue-100 text-blue-600 rounded-full p-3 mb-4">
            <ChatBubbleLeftRightIcon className="w-6 h-6" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from businesses we've helped
            transform
          </p>
        </div>

        {/* Testimonial card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`${testimonial.color} rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 
              group border border-transparent hover:border-gray-200 flex flex-col justify-between`}
              data-aos="fade-up"
              data-aos-delay={testimonial.delay}
            >
              <div className="flex mb-4">{StarRender(testimonial.rating)}</div>

              <p className="text-gray-700 mb-6 relative pl-6">
                <span className="absolute left-0 top-0 text-blue-300">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.017 21V12.983C14.017 10.172 16.189 7.983 19.017 7.983H21V3.983H17.017C12.572 3.983 9.017 7.538 9.017 11.983V21H14.017ZM3.017 21H8.017V11.983C8.017 7.538 4.462 3.983 0.017 3.983V7.983C2.845 7.983 5.017 10.155 5.017 12.983V21H3.017Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                {testimonial.text}
              </p>

              <div className="flex items-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-800 font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                </div>
              </div>

              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="text-sm text-blue-600 hover:text-blue-800 font-medium flex items-center cursor-pointer">
                  View case study
                  <ArrowRightIcon className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ending portion */}
        <div className="mt-16 text-center" data-aos="flip-down">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-2 sm:p-6 bg-white rounded-xl shadow-sm">
            <div className="flex items-center">
              <div className="flex items-center justify-center w-8 md:w-12  h-8 md:h-12 rounded-full bg-blue-100 text-blue-600">
                <UserGroupIcon className="w-6 h-6" />
              </div>
              <div className="ml-4 text-left">
                <p className="font-bold text-gray-900">200+</p>
                <p className="text-sm text-gray-600">Satisfied Clients</p>
              </div>
            </div>

            <div className="h-px w-full sm:h-10 sm:w-px bg-gray-200"></div>

            <div className="flex items-center">
              <div className=" sm:text-2xl md:text-4xl font-bold text-blue-600">
                4.9/5
              </div>
              <div className="ml-4 text-left">
                <div className="flex mb-1">{StarRender(5)}</div>
                <p className="text-sm text-gray-600">Average Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
