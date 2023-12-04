import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

function Pagination({ pageCount, changePageCount }) {
  return (
    <div className='flex items-center  border-t border-gray-200 bg-white px-4 py-3 sm:px-6'>
      <div className='sm:flex sm:flex-1 sm:items-center justify-center'>
        <div>
          <nav
            className='isolate inline-flex -space-x-px rounded-md shadow-sm'
            aria-label='Pagination'
          >
            <span
              className={`relative inline-flex items-center cursor-pointer rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-100`}
              onClick={() => changePageCount(pageCount - 1)}
            >
              <span className='sr-only'>Previous</span>
              <FaChevronLeft className='h-5 w-5' aria-hidden='true' />
            </span>
            <span
              aria-current='page'
              className={`relative hidden items-center cursor-pointer px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 md:inline-flex ${
                pageCount === 1
                  ? "bg-indigo-600 text-white"
                  : "hover:bg-gray-100"
              }`}
              onClick={() => changePageCount(1)}
            >
              1
            </span>
            <span
              className={`relative inline-flex items-center cursor-pointer px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 ${
                pageCount === 2
                  ? "bg-indigo-600 text-white"
                  : "hover:bg-gray-100"
              }`}
              onClick={() => changePageCount(2)}
            >
              2
            </span>
            <span
              className={`relative hidden items-center cursor-pointer px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 md:inline-flex ${
                pageCount === 3
                  ? "bg-indigo-600 text-white"
                  : "hover:bg-gray-100"
              }`}
              onClick={() => changePageCount(3)}
            >
              3
            </span>
            <span
              className={`relative inline-flex items-center cursor-pointer rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-100`}
              onClick={() => changePageCount(pageCount + 1)}
            >
              <span className='sr-only'>Next</span>
              <FaChevronRight className='h-5 w-5' aria-hidden='true' />
            </span>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Pagination;
