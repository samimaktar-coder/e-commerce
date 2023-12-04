import React from "react";
import { Link, NavLink } from "react-router-dom";
import { IoMoon } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";

function Header() {
  const navItems = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Products", path: "/products" },
    { title: "Cart", path: "/cart" },
  ];

  const active = {
    backgroundColor: "#021431",
    color: "#fff",
  };

  return (
    <div className='px-32 py-3 bg-slate-200 flex items-center justify-between'>
      <Link
        to='/'
        className='h-12 w-12 bg-sky-500 text-white flex items-center justify-center rounded-md'
      >
        <h1 className='text-3xl font-bold'>T</h1>
      </Link>

      <div className='flex items-center justify-between gap-x-1'>
        {navItems.map((item) => (
          <div key={item.title}>
            <NavLink
              to={item.path}
              className='px-3 py-2 rounded-md hover:bg-gray-300 text-sm'
              style={({ isActive }) => (isActive ? active : null)}
            >
              {item.title}
            </NavLink>
          </div>
        ))}
      </div>

      <div className='flex items-center gap-x-4'>
        <span className=' cursor-pointer hover:opacity-60'>
          <IoMoon className='text-xl' />
        </span>
        <span className='relative cursor-pointer hover:opacity-60'>
          <BsCart3 className='text-2xl' />
          <span className='absolute left-4 -top-2 font-semibold text-xs px-1 bg-sky-500 text-white rounded-md'>
            2
          </span>
        </span>
      </div>
    </div>
  );
}

export default Header;
