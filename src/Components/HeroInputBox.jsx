import React from "react";
import { Link } from "react-router-dom";

const HeroInputBox = () => {
  return (
    <div>
      <form>
        <div className="relative w-2/3 mb-8">
          <input
            type="email"
            id="email"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-2xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter Email address"
            required
          />
          <Link
          to={'./Dashboard'}
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-[#18181B] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Join now
          </Link>
        </div>
      </form>
    </div>
  );
};

export default HeroInputBox;
