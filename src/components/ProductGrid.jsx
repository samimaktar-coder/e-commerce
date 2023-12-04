import React from "react";

function ProductGrid({ productsList }) {
  return (
    <div className='grid grid-cols-3 gap-x-6 gap-y-8 my-12'>
      {productsList.map((product) => (
        <div
          key={product.id}
          className='shadow-md hover:shadow-lg hover:scale-[1.01]  transition-all rounded-lg p-3 cursor-pointer border border-gray-200'
        >
          <div className='h-56 rounded-xl overflow-hidden flex items-center justify-center'>
            <img
              src={product.attributes.image}
              alt={`${product.attributes.title}-image`}
              className='w-full min-h-full'
            />
          </div>
          <h1 className='text-xl capitalize font-semibold mt-8 mb-2 text-center'>
            {product.attributes.title}
          </h1>
          <h3 className='text-lg capitalize mb-4 text-center'>
            ${product.attributes.price / 100}
          </h3>
        </div>
      ))}
    </div>
  );
}

export default ProductGrid;
