import {
  ExclamationTriangleIcon,
  ArrowRightIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex 
    flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto text-center">
        {/* Error Icon */}
        <div className="flex items-center justify-center h-20 w-20 mx-auto rounded-full bg-red-100 mb-6">
          <ExclamationTriangleIcon className="h-10 w-10 text-red-600" />
        </div>

        {/* Error Message */}
        <h1 className="text-5xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Page Not Found
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/"
            className="inline-flex items-center px-6 py-3 border border-transparent
             text-base font-medium rounded-md shadow-sm text-white
              bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 
              focus:ring-offset-2 focus:ring-blue-500"
          >
            <HomeIcon className="-ml-1 mr-3 h-5 w-5" />
            Go to Homepage
          </a>
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-gray-300 text-base 
            font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Contact Support
            <ArrowRightIcon className="-mr-1 ml-3 h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
