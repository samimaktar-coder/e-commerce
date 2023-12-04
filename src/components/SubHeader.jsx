import React from "react";
import { Link } from "react-router-dom";

function SubHeader() {
  return (
    <div className='w-full bg-dark-blue text-white flex justify-end gap-x-10 py-2 px-32'>
      <Link to='/login' className='text-sm hover:underline'>
        Log In
      </Link>
      <Link to='/signup' className='text-sm hover:underline'>
        Create Account
      </Link>
    </div>
  );
}

export default SubHeader;
