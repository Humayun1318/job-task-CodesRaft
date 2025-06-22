import arrowGif from "./../../assets/arrow.gif";
const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12 ">
      <div className="w-11/12 mx-auto">
        <h2 className="text-3xl font-bold mb-8">Agency</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Menu Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Menu</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-600 transition">
                  Our Works
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition">
                  Projects
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition">
                  Tutorials
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Connect Column 1 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-600 transition">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition">
                  YouTube
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition">
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* Connect Column 2 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:hello.tophats@gmail.com"
                  className="hover:text-blue-600 transition"
                >
                  Agency@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Stay in touch</h3>
            <div className="space-y-4">
              <p className="text-gray-600">Email address</p>
              <div className="flex space-x-4">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow"
                />
                <img
                  src={arrowGif}
                  alt="Email Send"
                  className="rounded-full mix-blend-multiply  -ml-16  cursor-pointer"
                  style={{ backgroundColor: "transparent" }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-500">
          <p>© {new Date().getFullYear()} Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
