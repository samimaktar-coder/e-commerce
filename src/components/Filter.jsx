import React, { useEffect, useState } from "react";
import { fetchData } from "../utils/fetchData";
import { useDispatch } from "react-redux";
import { addData } from "../store/productsSlice";
import "../utils/slider.css";

function Filter({ pageCount }) {
  const [categories, setCategories] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [productsInfo, setProductsInfo] = useState({
    productName: "",
    category: "all",
    company: "all",
    sorting: "az",
    price: 1000,
    shipping: false,
  });

  const dispatch = useDispatch();

  useEffect(() => {
    fetchData(`products?page=${pageCount}`).then((data) => {
      setCategories(data.meta.categories);
      setCompanies(data.meta.companies);
      dispatch(addData(data));
    });
  }, [pageCount]);

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    setProductsInfo((prevData) => {
      return {
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  const handleSubmit = () => {
    console.log(productsInfo);
  };

  return (
    <div className='bg-slate-200 p-8 rounded-lg grid grid-cols-4 gap-x-3 gap-y-12'>
      <div className='flex flex-col gap-y-1'>
        <label htmlFor='search' className='text-sm'>
          Search Product
        </label>
        <input
          type='search'
          id='search'
          className='outline-none border border-gray-400 h-8 rounded-lg px-3'
          name='productName'
          value={productsInfo.name}
          onChange={handleChange}
        />
      </div>
      <div className='flex flex-col gap-y-1'>
        <label htmlFor='category' className='text-sm'>
          Select Category
        </label>
        <select
          id='category'
          className='outline-none border border-gray-400 h-8 rounded-lg px-3'
          name='category'
          value={productsInfo.category}
          onChange={handleChange}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className='flex flex-col gap-y-1'>
        <label htmlFor='category' className='text-sm'>
          Select Company
        </label>
        <select
          id='category'
          className='outline-none border border-gray-400 h-8 rounded-lg px-3'
          name='company'
          value={productsInfo.company}
          onChange={handleChange}
        >
          {companies.map((company) => (
            <option key={company} value={company}>
              {company}
            </option>
          ))}
        </select>
      </div>
      <div className='flex flex-col gap-y-1'>
        <label htmlFor='category' className='text-sm'>
          Sort By
        </label>
        <select
          id='category'
          className='outline-none border border-gray-400 h-8 rounded-lg px-3'
          name='sorting'
          value={productsInfo.sorting}
          onChange={handleChange}
        >
          <option value='az'>a-z</option>
          <option value='za'>z-a</option>
          <option value='htol'>high to low price</option>
          <option value='ltoh'>low to high price</option>
        </select>
      </div>
      <div className='flex flex-col gap-y-1'>
        <label htmlFor='category' className='text-sm flex justify-between'>
          Select Price
          <span className='text-base'>${productsInfo.price}</span>
        </label>

        <input
          type='range'
          step={10}
          min={0}
          max={1000}
          name='price'
          value={productsInfo.price}
          onChange={handleChange}
        />
      </div>
      <div className='flex flex-col gap-y-1'>
        <label htmlFor='category' className='text-sm text-center'>
          Free shiping
        </label>
        <input
          type='checkbox'
          name='shipping'
          checked={productsInfo.shipping}
          onChange={handleChange}
        />
      </div>

      <div className='flex items-center justify-center '>
        <button
          className='bg-blue-600 hover:bg-blue-700 active:scale-95 transition-all text-white h-8 rounded-lg w-full'
          onClick={handleSubmit}
        >
          SEARCH
        </button>
      </div>

      <div className='flex items-center justify-center '>
        <button className='bg-pink-600 hover:bg-pink-700 active:scale-95 transition-all text-white h-8 rounded-lg w-full'>
          RESET
        </button>
      </div>
    </div>
  );
}

export default Filter;
