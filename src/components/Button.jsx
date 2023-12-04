import React from "react";

function Button({ text }) {
  return (
    <button className='outline-none rounded-lg px-6 py-4 bg-sky-500 hover:bg-sky-600 text-white text-sm uppercase font-semibold'>
      {text}
    </button>
  );
}

export default Button;
