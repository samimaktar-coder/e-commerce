import React, { useEffect, useState } from "react";
import { Filter, Pagination, ProductGrid, ProductList } from "../components";
import { IoGrid } from "react-icons/io5";
import { LuMenu } from "react-icons/lu";
import { useSelector } from "react-redux";

function Products() {
  const [pattern, setPattern] = useState("grid");
  const [productsList, setProductList] = useState([]);
  const [pageCount, setPageCount] = useState(1);

  const changePattern = (e) => {
    if (e.target.classList.contains("grid-pattern")) {
      setPattern("grid");
    } else {
      setPattern("list");
    }
  };

  const productsData = useSelector((state) => state.productsData.data);

  useEffect(() => {
    setProductList(productsData?.data);
  }, [productsData]);

  console.log(productsList);

  const changePageCount = (page) => {
    if (page > 3) {
      setPageCount(3);
    } else if (page < 1) {
      setPageCount(1);
    } else {
      setPageCount(page);
    }
  };

  return (
    <div className='px-32 py-10'>
      <Filter pageCount={pageCount} />

      {productsData.data ? (
        <div>
          <div className='flex items-center justify-between py-8 border-b border-b-gray-200'>
            <p className='text-lg font-semibold'>
              {productsData?.meta?.pagination?.total} products
            </p>
            <div className='flex gap-x-2'>
              <div
                className={`w-8 h-8 flex items-center justify-center rounded-full cursor-pointer grid-pattern ${
                  pattern === "grid"
                    ? "bg-blue-500 text-gray-200"
                    : "hover:bg-gray-200"
                }`}
                onClick={changePattern}
              >
                <IoGrid className='text-xl pointer-events-none' />
              </div>
              <div
                className={`w-8 h-8 flex items-center justify-center rounded-full cursor-pointer list-pattern ${
                  pattern === "list"
                    ? "bg-blue-500 text-gray-200"
                    : "hover:bg-gray-200"
                }`}
                onClick={changePattern}
              >
                <LuMenu className='text-2xl pointer-events-none' />
              </div>
            </div>
          </div>
          {pattern === "grid"
            ? productsList && <ProductGrid productsList={productsList} />
            : productsList && <ProductList productsList={productsList} />}

          <Pagination pageCount={pageCount} changePageCount={changePageCount} />
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

export default Products;
