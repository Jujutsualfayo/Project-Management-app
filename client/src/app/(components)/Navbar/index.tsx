import React from 'react';
import { Search } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between bg-white px-4 py-3 dark:bg-black">
      {/* Search Bar */}
      <div className="flex items-center gap-8">
        <div className="relative flex h-min w-[200px]">
          <Search className="absolute left-[8px] top-1/2 h-5 w-5 -translate-y-1/2 transform cursor-pointer text-gray-500 dark:text-white" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full rounded-md bg-gray-100 dark:bg-gray-800 pl-10 pr-3 py-2 text-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
