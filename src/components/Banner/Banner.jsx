import arrowGif from "./../../assets/icons8-arrow-16.png";
import bannnerGif from "./../../assets/banner3.png";

const Banner = () => {
  return (
    <div className="w-11/12 mx-auto mt-12 pb-12">
      <section className="md:flex items-center justify-between space-y-4 md:space-y-0">
        <div
          className=" space-y-4 w-full md:w-1/2"
          data-aos="fade-left"
          data-aos-duration="3000"
        >
          <h1 className="text-2xl font-extrabold sm:text-6xl">
            We are a digital <br /> and creative <br /> agency
          </h1>
          <p className="text-sm">
            We provided all the services that you need to boost your business up{" "}
            <br />
            to the high lavel
          </p>
          <button className="bg-[#9A99FF] cursor-pointer hover:bg-[#9b99ff93] transition-all duration-900">
            <span className="flex items-center text-white p-2 gap-3">
              START A PROJECT
              <img
                src={arrowGif}
                alt="start project"
                className="rounded-full  bg-white"
              />
            </span>
          </button>
        </div>
        <div
          className="w-full md:w-1/2"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <img
            src={bannnerGif}
            alt=""
            className="w-full h-full object-cover mix-blend-multiply"
            style={{ backgroundColor: "transparent" }}
          />
        </div>
      </section>
    </div>
  );
};

export default Banner;
